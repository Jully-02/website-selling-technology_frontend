import Footer from '../../layouts/footer/Footer';
import HeaderHome from '../../layouts/header-home/HeaderHome';
import BestSeller from './components/BestSeller';
import CarouselSlide from './components/CarouselSlide';
import CategoryList from './components/CategoryList';
import ClientList from './components/ClientList';
import ElementorPopulate from './components/ElementorPopulate';
import ElementorSection from './components/ElementorSection';
import ElementorTop from './components/ElemetorTop';
import FeatureProduct from './components/FeatureProduct';
import TopCategory from './components/TopCategory';
import TopSellingProduct from './components/TopSellingProduct';
import './Home.css';

function Home() {
    return (
        <>
            <HeaderHome />
            <CarouselSlide height={'550px'} />
            <FeatureProduct />
            <ElementorSection />
            <BestSeller />
            <ElementorPopulate />
            <TopSellingProduct />
            <CarouselSlide height={'450px'} />
            <TopCategory />
            <ClientList />
            <ElementorTop />
            <CategoryList />
            <Footer />
        </>
    )
}

export default Home;