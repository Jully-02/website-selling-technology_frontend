import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Wishlist.css';

import Headphone from '../../images/public/Headphone.jpg';
import Gopro from '../../images/public/Gopro.jpg';
import Smartphone from '../../images/public/Smartphone.jpg';
import SmartMonitor from '../../images/public/SmartMonitor.jpg';
import Samsung from '../../images/public/Samsung.jpg';

function Wishlist() {
    return (
        <>
            <Header />
            <div className="wishlist">
                <table className="wishlist-table">
                    <thead>
                        <tr>
                            <th>My Wishlish</th>
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
                        <tr>
                            <td className='product-image'>
                                <img src={Gopro} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-stock">
                                In stock
                            </td>
                            <td className='product-add-to-cart'>
                                <button className="add-to-cart">
                                    <span>Add to cart</span>
                                    <i className="fa-regular fa-cart-plus"></i>
                                </button>
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='product-image'>
                                <img src={SmartMonitor} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-stock">
                                In stock
                            </td>
                            <td className='product-add-to-cart'>
                                <button className="add-to-cart">
                                    <span>Add to cart</span>
                                    <i className="fa-regular fa-cart-plus"></i>
                                </button>
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='product-image'>
                                <img src={Headphone} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-stock">
                                In stock
                            </td>
                            <td className='product-add-to-cart'>
                                <button className="add-to-cart">
                                    <span>Add to cart</span>
                                    <i className="fa-regular fa-cart-plus"></i>
                                </button>
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='product-image'>
                                <img src={Samsung} alt="" />
                                <span className='name'>Fixed-Wing Surveillance Drone</span>
                            </td>
                            <td className="product-price">
                                $1,450
                            </td>
                            <td className="product-stock">
                                In stock
                            </td>
                            <td className='product-add-to-cart'>
                                <button className="add-to-cart">
                                    <span>Add to cart</span>
                                    <i className="fa-regular fa-cart-plus"></i>
                                </button>
                            </td>
                            <td className="product-actions">
                                <i className="fa-solid fa-xmark"></i>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Wishlist;