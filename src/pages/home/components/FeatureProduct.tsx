import Product from '../../../layouts/product/Product';
import './FeatureProduct.css';
import Webcam from '../../../images/public/Webcam.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import SmartMonitor from '../../../images/public/SmartMonitor.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import Headphone from '../../../images/public/Headphone.jpg';
import Gopro from '../../../images/public/Gopro.jpg';

function FeatureProduct() {
    return (
        <div className="feature-product">
            <div className="feature__info">
                <h3 className='feature__title'>Featured Products</h3>
                <div className="feature__control">
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="list-products">
                <Product width={'215px'} height={'357px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'}/>
                <Product width={'215px'} height={'357px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'}/>
                <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
                <Product width={'215px'} height={'357px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'}/>
                <Product width={'215px'} height={'357px'} imgSrc={SmartMonitor} name={'Led 4K Smart TV Expo GSX Grey'} price={'$1,590'} category={'LAPTOPS'}/>
                <Product width={'215px'} height={'357px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'}/>
            </div>
        </div>
    )
}

export default FeatureProduct;