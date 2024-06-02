import './WooProduct.css';
import Airpod from '../../../images/public/Airpod.jpg';
import Airpod1 from '../../../images/public/Airpod-1.jpg';
import Airpod2 from '../../../images/public/Airpod-2.jpg';
import Airpod3 from '../../../images/public/Airpod-3.jpg';
import Airpod4 from '../../../images/public/Airpod-4.jpg';

function WooProduct() {
    return (
        <div className='woo-product'>
            <div className="woo-product__image">
                <img src={Airpod} alt="Airpod" className='img-main'/>
                <div className="woo-product__carousel">
                    <button className="control-prev" type="button">
                        <i className="fa-regular fa-chevron-left"></i>
                    </button>
                    <div className="carousel__inner">
                        <div className="carousel__item active">
                            <img src={Airpod} alt="Airpod" />
                        </div>
                        <div className="carousel__item">
                            <img src={Airpod1} alt="Airpod" />
                        </div>
                        <div className="carousel__item">
                            <img src={Airpod2} alt="Airpod" />
                        </div>
                        <div className="carousel__item">
                            <img src={Airpod3} alt="Airpod" />
                        </div>
                        <div className="carousel__item">
                            <img src={Airpod4} alt="Airpod" />
                        </div>
                    </div>
                    <button className="control-next" type="button">
                        <i className="fa-regular fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className="woo-product__info">
                <h1 className="title">SM-2357 Closed-Back Wireless Headphones</h1>
                <h3 className="price">$918 - $1,810</h3>
                <div className="rate">
                    <div className="rate-star">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <a href="/" className="rate-quantity">(10 customer reviews)</a>
                </div>
                <p className="description">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.</p>
                <div className="cart">
                    <div className="quantity">
                        <label className="quantity-text">1</label>
                        <div className="quantity-button">
                            <i className="fa-regular fa-chevron-up"></i>
                            <i className="fa-regular fa-chevron-down"></i>
                        </div>
                    </div>
                    <button className="add-to-cart">
                        <p className='title'>Add to cart</p>
                        {/* <i className="fa-solid fa-cart-plus"></i> */}
                        <i className="fa-regular fa-cart-plus"></i>
                    </button>
                </div>
                <div className="action">
                    <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                        <span>Add to wishlist</span>
                    </div>
                    <div className="compare">
                        <i className="fa-regular fa-code-compare"></i>
                        <span>Compare</span>
                    </div>
                </div>
                <div className="meta">
                    <span className="sku">SKU: <p>203</p></span>
                    <span className="category">Category: <a href='/'>Web cameras</a></span>
                    <span className="tag">Tag: <a href='/'>Equipment</a></span>
                </div>
                <div className="contact">
                    <div className="phone">
                        <i className="fa-regular fa-square-info"></i>
                        <span>Need help? <a href="/">Call Us +001 234 56 789</a></span>
                    </div>
                    <div className="time">
                        <span>Monday - Friday 09:00 - 21:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WooProduct;