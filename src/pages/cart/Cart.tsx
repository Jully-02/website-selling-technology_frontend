import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Cart.css';

import Headphone from '../../images/public/Headphone.jpg';
import Gopro from '../../images/public/Gopro.jpg';
import Smartphone from '../../images/public/Smartphone.jpg';
import SmartMonitor from '../../images/public/SmartMonitor.jpg';
import Samsung from '../../images/public/Samsung.jpg';


function Cart() {
    return (
        <>
            <Header />
            <div className="cart">
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
                        <tr>
                            <td className='product-image'>
                                <img src={Gopro} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-quantity">
                                <div className="quantity">
                                    <label className="quantity-text">1</label>
                                    <div className="quantity-button">
                                        <i className="fa-regular fa-chevron-up"></i>
                                        <i className="fa-regular fa-chevron-down"></i>
                                    </div>
                                </div>
                            </td>
                            <td className="product-subtotal">
                                $1,450
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className='product-image'>
                                <img src={Smartphone} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-quantity">
                                <div className="quantity">
                                    <label className="quantity-text">1</label>
                                    <div className="quantity-button">
                                        <i className="fa-regular fa-chevron-up"></i>
                                        <i className="fa-regular fa-chevron-down"></i>
                                    </div>
                                </div>
                            </td>
                            <td className="product-subtotal">
                                $1,450
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className='product-image'>
                                <img src={SmartMonitor} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-quantity">
                                <div className="quantity">
                                    <label className="quantity-text">1</label>
                                    <div className="quantity-button">
                                        <i className="fa-regular fa-chevron-up"></i>
                                        <i className="fa-regular fa-chevron-down"></i>
                                    </div>
                                </div>
                            </td>
                            <td className="product-subtotal">
                                $1,450
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className='product-image'>
                                <img src={Samsung} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-quantity">
                                <div className="quantity">
                                    <label className="quantity-text">1</label>
                                    <div className="quantity-button">
                                        <i className="fa-regular fa-chevron-up"></i>
                                        <i className="fa-regular fa-chevron-down"></i>
                                    </div>
                                </div>
                            </td>
                            <td className="product-subtotal">
                                $1,450
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className='product-image'>
                                <img src={Headphone} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-quantity">
                                <div className="quantity">
                                    <label className="quantity-text">1</label>
                                    <div className="quantity-button">
                                        <i className="fa-regular fa-chevron-up"></i>
                                        <i className="fa-regular fa-chevron-down"></i>
                                    </div>
                                </div>
                            </td>
                            <td className="product-subtotal">
                                $1,450
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                        </tr>
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
                        <button className="update-cart">
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
                                <td>$4,270</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$4,270</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="checkout">
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