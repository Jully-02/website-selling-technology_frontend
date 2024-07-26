import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Cart.css';

import Headphone from '../../images/public/Headphone.jpg';
import Gopro from '../../images/public/Gopro.jpg';
import Smartphone from '../../images/public/Smartphone.jpg';
import SmartMonitor from '../../images/public/SmartMonitor.jpg';
import Samsung from '../../images/public/Samsung.jpg';
import React, { useEffect, useState } from 'react';
import { Product } from '../../models/product';
import { deleteCartItemByUserIdAndProductId, getCartFromLocalStorage, getCartItemByUserId, removeFromCart, updateCartItemById } from '../../api/cart.item.api';
import { getProductsByIds } from '../../api/product.api';
import { Link, useNavigate } from 'react-router-dom';
import { CartItemDTO } from '../../dtos/cart.item.dto';
import { CartItem } from '../../models/cart.item';


const Cart: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [error, setError] = useState<string>('');
    const [quantities, setQuantities] = useState<number[]>([]);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleUpClick = (index: number) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] += 1;
            return newQuantities;
        });
    };
    
    const handleDownClick = (index: number) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            if (newQuantities[index] > 1) {
                newQuantities[index] -= 1;
            }
            return newQuantities;
        });
    };

    useEffect(() => {
        const newTotalPrice = products.reduce((acc, product, index) => {
            return acc + product.price! * quantities[index];
        }, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems, quantities]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const userId = localStorage.getItem('user_id');
                const token = localStorage.getItem('token');
                if (userId && token) {
                    setProducts([]);
                    const response = await getCartItemByUserId(Number(userId));
                    const productIds: number[] = [];
                    const quantities: number [] = [];
                    const cartItems: CartItem [] = [];
                    response?.data.data_list.map(
                        (item: CartItem) => {
                            productIds.push(item.product_id);
                            quantities.push(item.quantity);
                            cartItems.push(item)
                        }
                    )
                    setCartItems(cartItems);
                    setQuantities(quantities);
                    const items = await getProductsByIds(productIds);
                    setProducts(items);
                    const newTotalPrice = items.reduce((sum, product, index) => {
                        return sum + (product.price || 0) * quantities[index];
                    }, 0);
                    
                    setTotalPrice(newTotalPrice);
                } else {
                    const cart = await getCartFromLocalStorage();
                    const productIds = Array.from(cart?.keys()!);
                    const quantities = Array.from(cart?.values()!);
                    setQuantities(quantities)
                    const items = await getProductsByIds(productIds);
                    setProducts(items);
                    const newTotalPrice = items.reduce((sum, product, index) => {
                        return sum + (product.price || 0) * quantities[index];
                    }, 0);
                    setTotalPrice(newTotalPrice);
                }
            } catch (err) {
                setError('Failed to fetch cart items.')
            }
        }

        fetchCartItems();
    }, [])

    const handleRemoveFromCart = (productId: number) => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        if (userId && token) {
            const productIndex = products.findIndex(product => product.id === productId);
            const product = products[productIndex]
            const response = deleteCartItemByUserIdAndProductId(Number(userId), productId);
            setProducts(products.filter(product => product.id !== productId));
            setCartItems(cartItems.filter(cartItem => cartItem.product_id !== productId))
            setTotalPrice(totalPrice - (product.price! * quantities[productIndex]))
            setQuantities((prevQuantities) => {
                const updatedQuantities = [...prevQuantities];
                updatedQuantities.splice(productIndex, 1);
                return updatedQuantities;
            });
            console.log(response);
        }
        else {
            const productIndex = products.findIndex(product => product.id === productId);
            const product = products[productIndex]
            removeFromCart(productId);
            setProducts(products.filter(product => product.id !== productId));
            setCartItems(cartItems.filter(cartItem => cartItem.product_id !== productId))
            setTotalPrice(totalPrice - (product.price! * quantities[productIndex]))
            setQuantities((prevQuantities) => {
                const updatedQuantities = [...prevQuantities];
                updatedQuantities.splice(productIndex, 1);
                return updatedQuantities;
            });
        }
    };

    const handleCheckout = () => {
        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");
        if (userId && token) {
            navigate('/checkout')
        }
        else {
            localStorage.setItem("redirectAfterLogin", window.location.pathname);
            navigate('/auth')
        }
    }

    const handleUpdateCart = () => {
        cartItems.map((cartItem, index) => {
            if (cartItem.quantity !== quantities[index]) {
                const cartItemDTO: CartItemDTO = {
                    user_id: cartItem.user_id,
                    product_id: cartItem.product_id,
                    quantity: quantities[index]
                }
                const response = updateCartItemById(cartItem.id, cartItemDTO);
            }
        })
    }

    return (
        <>
            <Header />
            <div className="cart-content">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((product,index) => (
                                <tr key={product.id}>
                                    <td className='product-image'>
                                        <Link to={`/products/${product?.id}`} className='link'>
                                            <img src={product.thumbnail} alt="" />
                                            <span className='name'>{product.title}</span>
                                        </Link>
                                    </td>
                                    <td className="product-price">
                                        ${product.price}
                                    </td>
                                    <td className="product-quantity">
                                        <div className="quantity">
                                            <label className="quantity-text">{quantities[index]}</label>
                                            <div className="quantity-button">
                                                <i className="fa-regular fa-chevron-up" onClick={() => handleUpClick(index)}></i>
                                                <i className="fa-regular fa-chevron-down" onClick={() => handleDownClick(index)}></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">
                                        ${product.price! * quantities[index]}
                                    </td>
                                    <td className="product-actions">
                                        <i className="fa-solid fa-xmark" onClick={() => handleRemoveFromCart(product.id)}></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="actions">
                    <div className="action__coupon">
                        <input className="input-coupon" type="text" placeholder="Coupond code" />
                        <button className="add-coupon">
                            <span>Apply coupon</span>
                            <i className="fa-regular fa-cart-plus"></i>
                        </button>
                    </div>
                    <div className="action__update-cart">
                        <button className="update-cart" onClick={handleUpdateCart}>
                            <span>update cart</span>
                            <i className="fa-regular fa-cart-plus"></i>
                        </button>
                    </div>
                </div>

                <div className="cart-total">
                    <h3 className='title'>Cart totals</h3>
                    <table className="cart-total__table">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>${totalPrice}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="checkout" onClick={handleCheckout}>
                        <span>Proceed to checkout</span>
                        <i className="fa-regular fa-cart-plus"></i>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart;