import { useState } from 'react';
import Footer from '../../layouts/footer/Footer';
import BestSeller from './components/BestSeller';
import CarouselMiddle from './components/CarouseMiddle';
import CarouselTop from './components/CarouseTop';
import CategoryList from './components/CategoryList';
import ClientList from './components/ClientList';
import ElementorPopulate from './components/ElementorPopulate';
import ElementorSection from './components/ElementorSection';
import ElementorTop from './components/ElemetorTop';
import FeatureProduct from './components/FeatureProduct';
import HeaderHome from './components/header-home/HeaderHome';
import TopCategory from './components/top-category/TopCategory';
import TopSellingProduct from './components/TopSellingProduct';
import './Home.css';
import { Product } from '../../models/product';

const Home: React.FC = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [quantities, setQuantities] = useState<number[]>([]);


    return (
        <>
            <HeaderHome cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <CarouselTop height={'550px'} />
            <FeatureProduct cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <ElementorSection />
            <BestSeller cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <ElementorPopulate />
            <TopSellingProduct cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <CarouselMiddle height={'450px'} />
            <TopCategory cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <ClientList />
            <ElementorTop />
            <CategoryList />
            <Footer />
        </>
    )
}

export default Home;