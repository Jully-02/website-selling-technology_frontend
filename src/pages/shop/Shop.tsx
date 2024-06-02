import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Shop.css';
import ElementBanner from '../../layouts/element-banner/ElementBanner';

import BannerShop from '../../images/public/banner-shop.jpg';
import BannerProduct from '../../images/public/Banner-Shop-1.jpg';
import Product from '../../layouts/product/Product';

import Smartphone from '../../images/public/Smartphone.jpg';
import SmartMonitor from '../../images/public/SmartMonitor.jpg';
import Samsung from '../../images/public/Samsung.jpg';
import Headphone from '../../images/public/Headphone.jpg';
import Gopro from '../../images/public/Gopro.jpg';

function Shop() {
    return (
        <>
            <Header />
            <div className="content">
                <div className="filter">
                    <div className="category-list">
                        <div className="category__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Categories</h3>
                        </div>
                        <ul className="category__content">
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>3D Printers</span>
                                <span className="quantity">(5)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Activated Carbon</span>
                                <span className="quantity">(1)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Adapters</span>
                                <span className="quantity">(2)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Air-To-Air</span>
                                <span className="quantity">(1)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Aluminium</span>
                                <span className="quantity">(4)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Amplifiers</span>
                                <span className="quantity">(1)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Analog Watches</span>
                                <span className="quantity">(5)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Appliances</span>
                                <span className="quantity">(5)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Appliances Materials</span>
                                <span className="quantity">(10)</span>
                            </li>
                            <li className="category-item">
                                <input type="checkbox" />
                                <span className='title'>Audio</span>
                                <span className="quantity">(4)</span>
                            </li>
                        </ul>
                        <div className="category__read-more">
                            <span className='read-more'>View More</span>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className="brand-list">
                        <div className="brand__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Brands</h3>
                        </div>
                        <ul className="brand__content">
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>BraunBraun</span>
                                <span className="quantity">(16)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Cosmos</span>
                                <span className="quantity">(7)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Ein</span>
                                <span className="quantity">(12)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Lorem</span>
                                <span className="quantity">(8)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Monos</span>
                                <span className="quantity">(6)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Profeus</span>
                                <span className="quantity">(9)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Xmos</span>
                                <span className="quantity">(10)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Yelo</span>
                                <span className="quantity">(10)</span>
                            </li>
                            <li className="brand-item">
                                <input type="checkbox" />
                                <span className='title'>Zeuss</span>
                                <span className="quantity">(7)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="model-list">
                        <div className="model__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Model</h3>
                        </div>
                        <ul className="model__content">
                            <li className="model-item">
                                <input type="checkbox" />
                                <span className='title'>128GB</span>
                                <span className="quantity">(4)</span>
                            </li>
                            <li className="model-item">
                                <input type="checkbox" />
                                <span className='title'>256GB</span>
                                <span className="quantity">(3)</span>
                            </li>
                            <li className="model-item">
                                <input type="checkbox" />
                                <span className='title'>64GB</span>
                                <span className="quantity">(3)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="color-list">
                        <div className="color__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Color</h3>
                        </div>
                        <ul className="color__content">
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Black</span>
                                <span className="quantity">(8)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Blue</span>
                                <span className="quantity">(2)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Grey</span>
                                <span className="quantity">(7)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Orange</span>
                                <span className="quantity">(5)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>White</span>
                                <span className="quantity">(3)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="filter-price">
                        <div className="filter-price__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Filter by Price</h3>
                        </div>
                        <div className="filter-price__content">
                            <div className="filter-price__adjust">
                                <div className="slider">
                                    <div className="slider-bar"></div>
                                    <div className="slider-handle"></div>
                                    <div className="slider-handle"></div>
                                </div>
                            </div>
                            <div className="filter-price__scope">
                                <span className='title'>Price: $0 - $7500</span>
                            </div>
                            <button className="filter-price__button">
                                <span className="title">Filter</span>
                                <i className="fa-regular fa-angle-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="banner">
                        <img src={BannerShop} alt="" />
                        <div className="banner-info">
                            <h3 className='title'>Computers & Laptops</h3>
                            <div className="direct">
                                <a href="/">Shop now</a>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="product__heading">
                        <div className="banner-product">
                            <ElementBanner width={'1116px'} height={'250px'} imgSrc={BannerProduct} />
                        </div>
                    </div>
                    <div className="product-list">
                        <h3 className="title">Electronics & Appliances</h3>
                        <div className="product-list__filter">
                            <span className='result'>Showing 1–16 of 355 results</span>
                            <div className="filter">
                                <select className="sorting-select">
                                    <option value="default">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="latest">Sort by latest</option>
                                    <option value="high">Sort by price hight to low</option>
                                    <option value="low">Sort by price low to high</option>
                                </select>
                            </div>
                        </div>
                        <div className="content">
                            <Product width={'264px'} height={'406px'} imgSrc={SmartMonitor} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'} />
                            <Product width={'264px'} height={'406px'} imgSrc={SmartMonitor} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'} />
                            <Product width={'264px'} height={'406px'} imgSrc={SmartMonitor} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'} />
                            <Product width={'264px'} height={'406px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop;