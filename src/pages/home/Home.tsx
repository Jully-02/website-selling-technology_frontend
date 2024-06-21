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

function Home() {
    return (
        <>
            <HeaderHome />
            <CarouselTop height={'550px'} />
            <FeatureProduct />
            <ElementorSection />
            <BestSeller />
            <ElementorPopulate />
            <TopSellingProduct />
            <CarouselMiddle height={'450px'} />
            <TopCategory />
            <ClientList />
            <ElementorTop />
            <CategoryList />
            <Footer />
        </>
    )
}

export default Home;