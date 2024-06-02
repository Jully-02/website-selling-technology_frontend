import './HeaderTop.css';
import Logo from '../../../images/public/Logo.png';

import SmartPhone from '../../../images/public/Smartphone.jpg';
import BluetoothSpeaker from '../../../images/public/BluetoothSpeaker.jpg';
import Webcam from '../../../images/public/Webcam.jpg';
import TableM from '../../../images/public/TableM.jpg';


function HeaderTop() {
    return (
        <div className='header-top'>
            <div className="header-menu">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="search-product-form">
                <div className="product-category-holder">
                    <select name="" id="" className="product-category">
                        <option value="">All Categories</option>
                        <option value="activated-carbon">Activated Carbon </option>
                        <option value="air-to-air">Air-To-Air </option>
                        <option value="audio">Audio </option>
                    </select>
                </div>
                <input type="text" className='product-search-input' placeholder='Search for Product...' />
                <button className="product-search-submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.382" height="18.34" viewBox="0 0 18.382 18.34">
                        <g id="searc-icon" transform="translate(-1250 -76)">
                            <path id="Search" d="M1658.563,1091.246l-2.828-2.828c-.025-.024-.058-.034-.084-.056a8.487,8.487,0,1,0-1.381,1.394.758.758,0,0,0,.051.076l2.828,2.83a1,1,0,0,0,1.414-1.416Zm-9.589-1.633a6.5,6.5,0,1,1,6.5-6.5A6.508,6.508,0,0,1,1648.974,1089.613Z" transform="translate(-390.474 -998.613)"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="nav-actions">
                <ul>
                    <li className="nav-item">
                        <a href="/"><i className="fa-solid fa-code-compare"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="/"><i className="fa-regular fa-user"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="/"><i className="fa-regular fa-heart"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="/">
                            <div className='nav-item__icon'>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className='quantity'>20</span>
                            </div>
                            <span>$0</span>
                        </a>
                        <div className="cart">
                            <ul className="mini-cart">
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={SmartPhone} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={TableM} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={Webcam} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={BluetoothSpeaker} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                            </ul>
                            <div className="detail">
                                <span className="title">Total:</span>
                                <span className="total-price">$3,162</span>
                            </div>
                            <div className="action">
                                <a href="/">
                                    <span>View cart & checkout</span>
                                    <i className="fa-regular fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop;