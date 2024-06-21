import './Carousel.css';
import ProductG from '../../images/public/ProductG.jpg';
import ProductWatch from '../../images/public/ProductWatch.jpg';
import React from 'react';
import { Banner } from '../../models/banner';
import ElementBanner from '../element-banner/ElementBanner';
import { Link } from 'react-router-dom';

interface CarouselProps {
    id: string;
    banners?: Banner[];
    width?: string;
    height?: string;
    borderRadius?: string;
    leftInfo?: string;
    fontSizeTitle?: string;
    lineHeighTitle?: string;
    lineHeighSub?: string;
    widthInfo?: string;
    carouselProducts?: string
}

const Carousel: React.FC<CarouselProps> = ({
    id,
    banners = [],
    width,
    height,
    borderRadius,
    leftInfo,
    fontSizeTitle,
    lineHeighTitle,
    lineHeighSub,
    widthInfo,
    carouselProducts
}) => {
    return (
        <div className="carousel-slide">
            <div id={id} className="carousel slide">
                <div className="carousel-indicators">
                    {banners.map((_, index) => (
                        <li
                            key={index}
                            data-bs-target={`#${id}`}
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></li>
                    ))}
                </div>
                <div className="carousel-inner">
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            style={{ height: `${height}` }}
                        >
                            <ElementBanner
                                width={'100%'}
                                height={height}
                                banner={banner}
                                leftInfo='13.7%'
                                borderRadius='none'
                                fontSizeTitle='46px'
                                lineHeighTitle='52px'
                                lineHeighSub='30px'
                                widthInfo='300px'
                            />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                    <i className="fa-light fa-chevrons-left"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                    <i className="fa-light fa-chevrons-right"></i>
                </button>
            </div>
            <div className="carousel-products" style={{ display: `${carouselProducts}`}}>
                <div className="product-item">
                    <img src={ProductWatch} alt="" />
                    <div className="product__info">
                        <h3 className="title">Sports Watches</h3>
                        <div className="sub">
                            {/* <a href="/">Shop now</a> */}
                            <Link to='/shop'>Shop now</Link>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={ProductG} alt="" />
                    <div className="product__info">
                        <h3 className="title">Gaming Consoles</h3>
                        <div className="sub">
                            {/* <a href="/">Shop now</a> */}
                            <Link to='/shop'>Shop now</Link>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
