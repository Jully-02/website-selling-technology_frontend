import { Link } from 'react-router-dom';
import { Product } from '../../models/product';
import './ProductCart.css';
import React from 'react';

interface ProductProps {
    product?: Product;
    width?: string;
    height?: string;
}

const ProductCart: React.FC<ProductProps> = ({width, height, product}) => {

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
                        <a href="/">{product?.categories?.[0].name}</a>
                    </div>
                    <div className="product-compare-wish-list">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-code-compare"></i>
                    </div>
                </div>
                <Link className="product-content-middle" to={`/products/${product?.id}`}>
                    <img 
                        src={product?.thumbnail} 
                        alt="Mini USB Flash" 
                        style={{
                            width: `calc(${width} - 40px)`,
                            height: `calc(${width} - 40px)`,
                        }} 
                    />
                </Link>
                <div className="product-content-bottom">
                    <Link 
                        to={`/products/${product?.id}`}
                        className='product-title'
                        style={{
                            width: `calc(${width} - 40px - 15px)`
                        }}
                    >
                        {product?.title}
                    </Link>
                    <span className="product-price">${product?.price}</span>
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

export default ProductCart;