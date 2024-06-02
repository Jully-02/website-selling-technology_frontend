import Product from '../../product/Product';
import './HeaderBottom.css';
import Webcam from '../../../images/public/Webcam.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import Headphone from '../../../images/public/Headphone.jpg';
import Gopro from '../../../images/public/Gopro.jpg';


function HeaderBottom() {
    return (
        <div className="header-bottom">
            <div className='header-bottom-inner'>
                <nav className="header-nav">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Pages</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Shop</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Blog</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Landing</a>
                        </li>
                    </ul>
                </nav>
                <div className="header-discount">
                    <div className="header-discount__heading">
                        <h3 className="title">Weekly Discount</h3>
                        <i className="fa-regular fa-angle-right"></i>
                    </div>
                    <div className="header-discount__overlay"></div>
                    <div className="header-discount__content">
                        <div className="header-discount__products">
                            <Product width={'250px'} height={'430px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'} />
                            <Product width={'250px'} height={'430px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'} />
                            <Product width={'250px'} height={'430px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'} />
                            <Product width={'250px'} height={'430px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'} />
                            <Product width={'250px'} height={'430px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'} />
                        </div>
                        <div className="header-discount__read-more">
                            <h3 className="read-more">View All</h3>
                            <i className="fa-regular fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom-outer">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/">Shop</a></li>
                        <li className="breadcrumb-item"><a href="/">COMPUTER COMPONENTS</a></li>
                        <li className="breadcrumb-item"><a href="/">WEB CAMERAS</a></li>
                        <li className="breadcrumb-item" aria-current="page"><a href="/">PROFEUS LAPTOP MINI SERIES QW-558 PRO</a></li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default HeaderBottom;