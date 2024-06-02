import Product from '../../../layouts/product/Product';
import './RelateProduct.css';

import Smartphone from '../../../images/public/Smartphone.jpg';
import SmartMonitor from '../../../images/public/SmartMonitor.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import Headphone from '../../../images/public/Headphone.jpg';
import Gopro from '../../../images/public/Gopro.jpg';

function RelateProduct() {
    return (
        <div className="relate-product">
            <h3 className="title">Related Products</h3>
            <div className="content">
                <Product width={'262px'} height={'418px'} imgSrc={SmartMonitor} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'} />
                <Product width={'262px'} height={'418px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'} />
                <Product width={'262px'} height={'418px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'} />
                <Product width={'262px'} height={'418px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'} />
                <Product width={'262px'} height={'418px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'} />
            </div>
        </div>
    )
}

export default RelateProduct;