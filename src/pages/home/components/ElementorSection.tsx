import './ElementorSection.css';
import BannerConsole from '../../../images/public/BannerGame.png';
import BannerSmartPhone from '../../../images/public/BannerSmartPhone.png';
import ElementBanner from '../../../layouts/element-banner/ElementBanner';

function ElementorSection() {
    return (
        <div className='elementor-section'>
            <ElementBanner width={'689px'} height={'250px'} imgSrc={BannerConsole}/>
            <ElementBanner width={'689px'} height={'250px'} imgSrc={BannerSmartPhone}/>
        </div>
    )
}

export default ElementorSection;