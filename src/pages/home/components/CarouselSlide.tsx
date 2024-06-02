import './CarouselSlide.css';
import BannerAirpod from '../../../images/public/BannerAirpod.jpg';
import BannerPhoneS from '../../../images/public/BannerPhoneS.jpg';
import BannerPhone from '../../../images/public/BannerPhone.jpg';
import ProductG from '../../../images/public/ProductG.jpg';
import ProductWatch from '../../../images/public/ProductWatch.jpg';
import React from 'react';

interface CarouselSlideProps {
    height?: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({height}) => {
    return (
        <div className="carousel-slide">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
                </div>
                <div className="carousel-inner">
                    <div 
                        className="carousel-item active"
                        style={{
                            height: `${height}`
                        }}
                    >
                        <img src={BannerAirpod} className="d-block w-100" alt="..." />
                    </div>
                    <div 
                        className="carousel-item"
                        style={{
                            height: `${height}`
                        }}
                    >
                        <img src={BannerPhoneS} className="d-block w-100" alt="..." />
                    </div>
                    <div 
                        className="carousel-item"
                        style={{
                            height: `${height}`
                        }}
                    >
                        <img src={BannerPhone} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <i className="fa-light fa-chevrons-left"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <i className="fa-light fa-chevrons-right"></i>
                </button>
            </div>
            <div className="carousel-info">
                <div className="carousel__heading">
                    <h3 className="title">The Best Offer In One Place!</h3>
                    <p className="sub">ASUS CX77 2QF-621XPL 13"</p>
                </div>

                <div className="carousel__price">
                    <p className="sub">STARTING AT</p>
                    <h1 className="text-price">$450</h1>
                </div>
            </div>
            <div className="carousel-products">
                <div className="product-item">
                    <img src={ProductWatch} alt="" />
                    <div className="product__info">
                        <h3 className="title">Sports Watches</h3>
                        <div className="sub">
                            <a href="/">Shop now</a>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={ProductG} alt="" />
                    <div className="product__info">
                        <h3 className="title">Gaming Consoles</h3>
                        <div className="sub">
                            <a href="/">Shop now</a>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselSlide;