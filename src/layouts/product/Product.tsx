import './Product.css';
import React from 'react';

interface ProductProps {
    width?: string;
    height?: string;
    imgSrc?: string;
    name?: string;
    price?: string;
    category?: string;
}

const Product: React.FC<ProductProps> = ({width, height, imgSrc, name, price, category}) => {
    return (
        <div className='product'
            style={{
                width: `calc(${width} - 40px)`,
                height: `calc(${height} - 19px - 16px)`
            }}
        >
            <div className="product-container">
                <div className="product-content-top">
                    <div className="product-category">
                        <a href="/">{category}</a>
                    </div>
                    <div className="product-compare-wish-list">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-code-compare"></i>
                    </div>
                </div>
                <div className="product-content-middle">
                    <img 
                        src={imgSrc} 
                        alt="Mini USB Flash" 
                        style={{
                            width: `calc(${width} - 40px)`,
                            height: `calc(${width} - 40px)`,
                        }} 
                    />
                </div>
                <div className="product-content-bottom">
                    <a 
                        href="/" 
                        className='product-title'
                        style={{
                            width: `calc(${width} - 40px - 15px)`
                        }}
                    >
                        {name}
                    </a>
                    <span className="product-price">{price}</span>
                </div>
                <div 
                    className="product-add-cart"
                    style={{
                        width: `${width}`
                    }}
                >
                    <span className="product-text">Add to cart</span>
                    <span className="product-icon">
                        <i className="fa-regular fa-cart-plus"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product;