import React from 'react';
import './Category.css';

interface CategoryProps {
    imgSrc?: string
}

const Category: React.FC<CategoryProps> = ({imgSrc}) => {
    return (
        <div className="product-category">
            <div className="product-category__content">
                <div className="product-category__logo">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="product-category__title">
                    <h3 className="title">Headphones and <br /> Earbuds</h3>
                </div>
                <div className="product-category__bottom">
                    <ul className="product-category__list">
                        <li className="product-category__item">
                            <a href="/">Adapters</a>
                        </li>
                        <li className="product-category__item">
                            <a href="/">Hi-Fi Systems</a>
                        </li>
                        <li className="product-category__item">
                            <a href="/">Batteries</a>
                        </li>
                        <li className="product-category__item">
                            <a href="/">Chargers</a>
                        </li>
                        <li className="product-category__item">
                            <a href="/">Gramophones</a>
                        </li>
                        <li className="product-category__item">
                            <a href="/">Soundbar Speakers</a>
                        </li>
                    </ul>
                    <div className="product-category__read-more">
                        <div className="direct">
                            <a href="/">View All</a>
                            <i className="fa-regular fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;