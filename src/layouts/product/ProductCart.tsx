import { Link } from 'react-router-dom';
import { Product } from '../../models/product';
import './ProductCart.css';
import React from 'react';
import { addToCart, getCartFromLocalStorage, getCartItemByUserId, insertCartItem } from '../../api/cart.item.api';
import { CartItemDTO } from '../../dtos/cart.item.dto';
import { addToWishlist, insertFavoriteProduct } from '../../api/wishlist.api';
import { FavoriteProductDTO } from '../../dtos/favorite.product.dto';
import { getProductById, getProductsByIds } from '../../api/product.api';
import { formatCurrency } from '../../api/order.api';

interface ProductProps {
    product?: Product;
    width?: string;
    height?: string;
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>
}

const ProductCart: React.FC<ProductProps> = ({ width, height, product, cartItems, setCartItems, quantities, setQuantities, totalPrice, setTotalPrice}) => {
    const handleAddToCart = async () => {
        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");
        if (userId && token) {
            const cartItemDTO: CartItemDTO = {
                user_id: Number(userId),
                product_id: Number(product?.id),
                quantity: 1
            };
            try {
                const response = await insertCartItem(cartItemDTO);
                console.log(response)
                const responseProduct: Product = await getProductById(Number(product?.id));
                setCartItems && setCartItems((prevCartItems) => {
                    const newCartItems = [...prevCartItems, responseProduct];
                    console.log(newCartItems); // Log newCartItems để kiểm tra giá trị mới
                    return newCartItems;
                });
                setQuantities && setQuantities((prevQuantities) => [...prevQuantities, 1]);
                setTotalPrice && setTotalPrice((prevTotalPrice) => prevTotalPrice + responseProduct.price!);
                console.log(cartItems)
            } catch (err) {
                console.log('Failed to add product to cart:', err);
            }
        }
        else {
            try {
                await addToCart(product?.id!, 1);
                setQuantities!([...quantities!, 1]);
                const responseProduct: Product = await getProductById(Number(product?.id));
                setCartItems!([...cartItems!, responseProduct]);
                setTotalPrice!(totalPrice! + responseProduct.price!);
            } catch (error) {
                console.error('Failed to add product to cart:', error);
            }
        }
    }

    const handleAddToWishlist = async () => {
        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");
        if (userId && token) {
            const favoriteProductDTO: FavoriteProductDTO = {
                user_id: Number(userId),
                product_id: Number(product?.id),
            };
            try {
                const response = await insertFavoriteProduct(favoriteProductDTO);
                console.log(response)
            } catch (err) {
                console.log('Failed to add product to cart:', err);
            }
        }
        else {
            try {
                await addToWishlist(product?.id!);
            } catch (error) {
                console.error('Failed to add product to cart:', error);
            }
        }
    }

    return (
        <div className='product'
            style={{
                width: `calc(${width} - 40px)`,
                height: `calc(${height} - 19px - 16px)`
            }}
        >
            <div className="product-container">
                <div className="product-content-top">
                    <div className="product-category">
                        <a href="/">{product?.categories?.[0].name}</a>
                    </div>
                    <div className="product-compare-wish-list">
                        <i className="fa-regular fa-heart" onClick={handleAddToWishlist}></i>
                        <i className="fa-regular fa-code-compare"></i>
                    </div>
                </div>
                <Link className="product-content-middle" to={`/products/${product?.id}`}>
                    <img
                        src={product?.thumbnail}
                        alt="Mini USB Flash"
                        style={{
                            width: `calc(${width} - 40px)`,
                            height: `calc(${width} - 40px)`,
                        }}
                    />
                </Link>
                <div className="product-content-bottom">
                    <Link
                        to={`/products/${product?.id}`}
                        className='product-title'
                        style={{
                            width: `calc(${width} - 40px - 15px)`
                        }}
                    >
                        {product?.title}
                    </Link>
                    <span className="product-price">{formatCurrency(product?.price!)}</span>
                </div>
                <div
                    className="product-add-cart"
                    style={{
                        width: `${width}`,
                        cursor: 'pointer'
                    }}
                    onClick={handleAddToCart}
                >
                    <span className="product-text">Add to cart</span>
                    <span className="product-icon">
                        <i className="fa-regular fa-cart-plus"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCart;