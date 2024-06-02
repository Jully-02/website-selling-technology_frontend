import './Footer.css';

import LogoFooter from '../../images/public/LogoFooter.png';
import Payment from '../../images/public/payment.png';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__subscribe">
                <h3 className="title">Sign up to Newsletter</h3>
                <div className="form-input">
                    <input type="text" placeholder="Your Email Address:" />
                    <div className="icon">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className="follow">
                    <h3 className="title">Follow us on:</h3>
                    <div className="follow__social">
                        <i className="fa-solid fa-cloud-music"></i>
                        <i className="fa-solid fa-circle-gf"></i>
                        <i className="fa-light fa-basketball"></i>
                        <i className="fa-regular fa-download"></i>
                        <i className="fa-solid fa-wheat-slash"></i>
                        <i className="fa-solid fa-filter-list"></i>
                        <i className="fa-solid fa-planet-ringed"></i>
                    </div>
                </div>
            </div>
            <div className="footer__top">
                <div className="footer__top-item">
                    <div className="footer__title">
                        <h3 className="title">Privacy Policy</h3>
                    </div>
                    <ul className="footer__menu">
                        <li className="menu-item">
                            <a href="/">Returns & Exchanges</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Payment Terms</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Delivery Terms</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Payment & Pricing</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Terms Of Use</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__top-item">
                    <div className="footer__title">
                        <h3 className="title">Get Involved</h3>
                    </div>
                    <ul className="footer__menu">
                        <li className="menu-item">
                            <a href="/">About Us</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Our Vision</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Orders & Shipping</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Office Supplies</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Contact Us</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Customer Service</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__top-item">
                    <div className="footer__title">
                        <h3 className="title">Quick Links</h3>
                    </div>
                    <ul className="footer__menu">
                        <li className="menu-item">
                            <a href="/">Smartphones</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Headphones</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Laptop & Tablet</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Monitors</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Printers</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Gadgets</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__top-item">
                    <div className="footer__title">
                        <h3 className="title">Customer Care</h3>
                    </div>
                    <ul className="footer__menu">
                        <li className="menu-item">
                            <a href="/">My Account</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Store Locator</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Customer Service</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Returns/Exchange</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Product Support</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__middle">
                <div className="footer__logo">
                    <img src={LogoFooter} alt="" />
                </div>
                <div className="footer__phone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24.5" viewBox="0 0 28 24.5"><path data-name="Call Center Icon" d="M472.21,857.374h-2.988v-.013a9.7,9.7,0,0,0-19.3,0l0,.013h-2.987a1.364,1.364,0,0,0-1.36,1.365v6.085a1.364,1.364,0,0,0,1.36,1.364h3.019l0,.013a7.942,7.942,0,0,0,1.02,2.878,5.7,5.7,0,0,0,2.083,2,10.25,10.25,0,0,0,4.709,1.033h.01l0,.01a1.363,1.363,0,0,0,1.3.982h2.153a1.36,1.36,0,0,0,1.355-1.36v-.453a1.359,1.359,0,0,0-1.355-1.36h-2.153a1.366,1.366,0,0,0-1.3.971l0,.011h-.011a9.07,9.07,0,0,1-4.13-.883c-1.465-.82-2.307-2.281-2.572-4.468V858.34a8.507,8.507,0,1,1,17.014,0v7.25a.6.6,0,0,0,.6.6h3.537a1.363,1.363,0,0,0,1.359-1.364v-6.085A1.363,1.363,0,0,0,472.21,857.374Zm-22.342,7.616h-2.939a.17.17,0,0,1-.165-.166v-6.085a.17.17,0,0,1,.165-.166h2.939Zm9.047,6.3a.166.166,0,0,1,.161-.162h2.153a.166.166,0,0,1,.16.162v.453a.166.166,0,0,1-.16.162h-2.153a.166.166,0,0,1-.161-.162Zm13.459-6.464a.17.17,0,0,1-.165.166h-2.94v-6.417h2.94a.17.17,0,0,1,.165.166Z" transform="translate(-445.569 -848.602)" fill="#fff"></path></svg>
                    <h3 className="phone">+0080 1234 56 789</h3>
                </div>
                <div className="footer__delivery">
                    <i className="fa-light fa-truck"></i>
                    <h3 className="title">Amounts over $100</h3>
                </div>
                <div className="footer__discount">
                    <i className="fa-light fa-tag"></i>
                    <h3 className="title">Save up to 20%</h3>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="title">© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
                <img src={Payment} alt="" />
            </div>
        </div>
    )
}

export default Footer;