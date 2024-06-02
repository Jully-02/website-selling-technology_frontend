import Product from '../../../layouts/product/Product';
import './TopSellingProduct.css';
import Headphone from '../../../images/public/Headphone.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import SmartMonitor from '../../../images/public/SmartMonitor.jpg';
import Samsung from '../../../images/public/Samsung.jpg';

function TopSellingProduct () {
    return (
        <div className="top-selling-product">
            <div className="top-selling__info">
                <h3 className="top-selling__title">Top Selling Products</h3>
                <div className="top-selling__filter">
                    <div className="filter-item active">
                        <a href="/">Show All</a>
                    </div>
                    <div className="filter-item">
                        <a href="/">Consoles</a>
                    </div>
                    <div className="filter-item">
                        <a href="/">Processors</a>
                    </div>
                </div>
                <div className="top-selling__control">
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="top-selling-content">
                <Product width={'333px'} height={'475px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'}/>
                <Product width={'333px'} height={'475px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'}/>
                <Product width={'333px'} height={'475px'} imgSrc={SmartMonitor} name={'Led 4K Smart TV Expo GSX Grey'} price={'$1,590'} category={'LAPTOPS'}/>
                <Product width={'333px'} height={'475px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
            </div>
        </div>
    )
}

export default TopSellingProduct;