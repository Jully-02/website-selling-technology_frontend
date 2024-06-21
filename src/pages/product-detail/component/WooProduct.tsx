import './WooProduct.css';
import Airpod from '../../../images/public/Airpod.jpg';
import Airpod1 from '../../../images/public/Airpod-1.jpg';
import Airpod2 from '../../../images/public/Airpod-2.jpg';
import Airpod3 from '../../../images/public/Airpod-3.jpg';
import Airpod4 from '../../../images/public/Airpod-4.jpg';
import React, { useState } from 'react';
import { Product } from '../../../models/product';
import { Link } from 'react-router-dom';

interface WooProductProps {
    product?: Product
}

const WooProduct: React.FC<WooProductProps> = ({product}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? (product?.product_images?.length || 1) - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === (product?.product_images?.length || 1) - 1 ? 0 : prevIndex + 1
        );
    };

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    const handleUpClick = () => {
        setQuantity(quantity + 1);
    }

    const handleDownClick = () => {
        setQuantity((preQuantity) => preQuantity === 1 ? 1 : preQuantity - 1
        )
    }

    return (
        <div className='woo-product'>
            <div className="woo-product__image">
                <img src={product?.product_images?.[currentImageIndex]?.image_url} alt="Airpod" className='img-main'/>
                <div className="woo-product__carousel">
                    <button className="control-prev" type="button" onClick={handlePrevClick}>
                        <i className="fa-regular fa-chevron-left"></i>
                    </button>
                    <div className="carousel__inner">
                        {
                            product?.product_images?.map((product_image, index) => (
                                <div
                                    key={product_image.id}
                                    className={`carousel__item ${currentImageIndex === index ? 'active' : ''}`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img src={product_image.image_url} alt={product_image.image_name} />
                                </div>
                            ))
                        }
                    </div>
                    <button className="control-next" type="button" onClick={handleNextClick}>
                        <i className="fa-regular fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className="woo-product__info">
                <h1 className="title">{product?.title}</h1>
                <h3 className="price">${product?.price}</h3>
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
                <p className="description">{product?.description}</p>
                <div className="cart">
                    <div className="quantity">
                        <label className="quantity-text">{quantity}</label>
                        <div className="quantity-button">
                            <i className="fa-regular fa-chevron-up" onClick={handleUpClick}></i>
                            <i className="fa-regular fa-chevron-down" onClick={handleDownClick}></i>
                        </div>
                    </div>
                    <button className="add-to-cart">
                        <p className='title'>Add to cart</p>
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
                    <span className="category">Category: 
                        {
                            product?.categories?.map(category => (
                                <Link to='/shop'>{category.name} </Link>
                            ))
                        }
                    </span>
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