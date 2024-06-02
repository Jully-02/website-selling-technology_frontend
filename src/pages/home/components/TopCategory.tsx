import Product from '../../../layouts/product/Product';
import './TopCategory.css';
import CategoryBanner from '../../../images/public/CategoryBanner.jpg';
import Webcam from '../../../images/public/Webcam.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import SmartMonitor from '../../../images/public/SmartMonitor.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import Headphone from '../../../images/public/Headphone.jpg';
import Gopro from '../../../images/public/Gopro.jpg';

function TopCategory() {
    return (
        <div className="top-category">
            <div className="top-category__title">
                <h3 className='title'>Top Categories</h3>
            </div>
            <div className="top-category__content">
                <div className="top-category__banner">
                    <img src={CategoryBanner} alt="" />
                    <div className="top-category__info">
                        <h3 className="title">Wireless earbuds</h3>
                        <div className="direct">
                            <a href="/">Shop now</a>
                            <i className="fa-regular fa-angle-right"></i>
                        </div>
                        <p className="sub">Quantities are limited</p>
                    </div>
                </div>
                <div className="top-category__products">
                    <Product width={'215px'} height={'357px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={SmartMonitor} name={'Led 4K Smart TV Expo GSX Grey'} price={'$1,590'} category={'LAPTOPS'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
                </div>
                <div className="top-category__list">
                    <div className="category__heading">
                        <h3 className="title">Computer Components</h3>
                    </div>
                    <ul className="category__list">
                        <li className="category__item">
                            <a href="/">Cables</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Data Storage</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Keyboards</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Microphones</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Monitors</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Mice</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Printers</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Scanners</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Web Cameras</a>
                        </li>
                    </ul>
                    <div className="category__read-more">
                        <a href="/">View All</a>
                        <i className="fa-regular fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCategory;