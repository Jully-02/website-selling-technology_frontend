import Product from '../../../layouts/product/Product';
import './BestSeller.css';
import TableM from '../../../images/public/TableM.jpg';
import Webcam from '../../../images/public/Webcam.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import SmartMonitor from '../../../images/public/SmartMonitor.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import Headphone from '../../../images/public/Headphone.jpg';
import Gopro from '../../../images/public/Gopro.jpg';

function BestSeller() {
    return (
        <div className='best-seller'>
            <div className="best-seller__info">
                <h3 className='title'>Bestsellers</h3>
            </div>
            <div className="best-seller__content">
                <div className="best-seller__products">
                    <Product width={'215px'} height={'357px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'}/>
                </div>
                <div className="best-seller__outstanding">
                    <Product width={'465px'} height={'735px'} imgSrc={TableM} name={'Profeus Drawing Tablet M Series QW-55815 Pro'} price={'$2,109'} category={'EQUIPMENT'}/>
                </div>
                <div className="best-seller__products">
                    <Product width={'215px'} height={'357px'} imgSrc={SmartMonitor} name={'Led 4K Smart TV Expo GSX Grey'} price={'$1,590'} category={'LAPTOPS'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
                </div>
            </div>
        </div>
    )
}

export default BestSeller;