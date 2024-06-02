import './ElementorPopulate.css';
import BannerPopulate from '../../../images/public/BannerPopulate.jpg';

function ElementorPopulate () {
    return (
        <div className='elementor-populated'>
            <div className="elementor__banner">
                <img src={BannerPopulate} alt="" />
            </div>
            <div className="elementor-populated__info">
                <h3 className='title'>Save Up To $50 With Our Coupons</h3>
            </div>
        </div>
    )
}

export default ElementorPopulate;