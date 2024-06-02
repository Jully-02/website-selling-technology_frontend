import ElementBanner from '../../../layouts/element-banner/ElementBanner';
import './ElementorTop.css';

import BannerTop1 from '../../../images/public/BannerTop1.png';
import BannerTop2 from '../../../images/public/BannerTop2.png';
import BannerTop3 from '../../../images/public/BannerTop3.png';

function ElementorTop () {
    return (
        <div className="elementor-top">
            <ElementBanner width={'452px'} height={'226px'} imgSrc={BannerTop1}/>
            <ElementBanner width={'452px'} height={'226px'} imgSrc={BannerTop2}/>
            <ElementBanner width={'452px'} height={'226px'} imgSrc={BannerTop3}/>
        </div>
    )
}

export default ElementorTop;