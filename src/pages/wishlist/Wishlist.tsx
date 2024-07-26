import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Wishlist.css';

import Headphone from '../../images/public/Headphone.jpg';
import Gopro from '../../images/public/Gopro.jpg';
import Smartphone from '../../images/public/Smartphone.jpg';
import SmartMonitor from '../../images/public/SmartMonitor.jpg';
import Samsung from '../../images/public/Samsung.jpg';
import { CartItemDTO } from '../../dtos/cart.item.dto';
import { addToCart, insertCartItem } from '../../api/cart.item.api';
import { useEffect, useState } from 'react';
import { Product } from '../../models/product';
import { deleteFavoriteProductByUserIdAndProductId, getFavoriteProductByUserId, getWishlistFromLocalStorage, removeFromWishlist } from '../../api/wishlist.api';
import { getProductById, getProductsByIds } from '../../api/product.api';

function Wishlist() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState("");

    const handleRemoveFromWishlist = (productId: number) => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        if (userId && token) {
            const response = deleteFavoriteProductByUserIdAndProductId(Number(userId), productId);
            setProducts(products.filter(product => product.id !== productId));
            return response;
        } else {
            removeFromWishlist(productId);
            setProducts(products.filter(product => product.id !== productId));
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const userId = localStorage.getItem('user_id');
                const token = localStorage.getItem('token');
                if (userId && token) {
                    const response = await getFavoriteProductByUserId(Number(userId));
                    const productIds: number [] = [];
                    response?.data.data_list.map(
                        (item: any) => productIds.push(item.product_id)
                    )
                    const products = await getProductsByIds(productIds);
                    setProducts(products);
                } else {
                    const wishlist = await getWishlistFromLocalStorage();
                    console.log(wishlist)
                    const response = await getProductsByIds(wishlist);
                    setProducts(response);
                }
            } catch (err) {
                setError('Failed to fetch cart items.')
            }
        }

        fetchProduct();
    }, [])

    const handleAddToCart = async (productId: number) => {
        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");
        if (userId && token) {
            const cartItemDTO: CartItemDTO = {
                user_id: Number(userId),
                product_id: productId,
                quantity: 1
            };
            try {
                const response = await insertCartItem(cartItemDTO);
                console.log(response)
            } catch (err) {
                console.log('Failed to add product to cart:', err);
            }
        }
        else {
            try {
                await addToCart(productId, 1);
            } catch (error) {
                console.error('Failed to add product to cart:', error);
            }
        }
    }


    return (
        <>
            <Header />
            <div className="wishlist-content">
                <table className="wishlist-table">
                    <thead>
                        <tr>
                            <th>My Wishlist</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <i className="fa-regular fa-share-nodes"></i>
                                <div className="social-item">
                                    <div className="facebook-icon">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="twitter-icon">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </div>
                                    <div className="linkedin-icon">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="pinterest-icon">
                                        <i className="fa-brands fa-pinterest-p"></i>
                                    </div>
                                    <div className="tumblr-icon">
                                        <i className="fa-brands fa-tumblr"></i>
                                    </div>
                                    <div className="email-icon">
                                        <i className="fa-regular fa-envelope"></i>
                                    </div>
                                    <div className="whatsapp-icon">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product: Product) => (
                                <tr key={product.id}>
                                    <td className='product-image'>
                                        <img src={product.thumbnail} alt="" />
                                        <span className='name'>{product.title}</span>
                                    </td>
                                    <td className="product-price">
                                        ${product.price}
                                    </td>
                                    <td className="product-stock">
                                        In stock
                                    </td>
                                    <td className='product-add-to-cart'>
                                        <button className="add-to-cart" onClick={() => handleAddToCart(product.id)}>
                                            <span>Add to cart</span>
                                            <i className="fa-regular fa-cart-plus"></i>
                                        </button>
                                    </td>
                                    <td className="product-actions">
                                        <i className="fa-solid fa-xmark" onClick={() => handleRemoveFromWishlist(product.id)}></i>
                                    </td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Wishlist;