import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import RelateProduct from './component/RelateProduct';
import WooProduct from './component/WooProduct';
import WooTab from './component/WooTab';
import './ProductDetail.css';

function ProductDetail () {
    return (
        <>
            <Header />
            <WooProduct />
            <WooTab />
            <RelateProduct />
            <Footer />
        </>
    )
}

export default ProductDetail;