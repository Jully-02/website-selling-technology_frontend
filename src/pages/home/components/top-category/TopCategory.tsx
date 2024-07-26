import './TopCategory.css';

import React from 'react';

import CategoryBanner from '../../../../images/public/CategoryBanner.jpg';
import TopCategoryProduct from './components/TopCategoryProduct';
import { Product } from '../../../../models/product';

interface TopCategoryProps {
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const TopCategory: React.FC<TopCategoryProps> = (props) => {
    
    return (
        <div className="top-category-home">
            <div className="top-category__title">
                <h3 className='title'>Top Categories</h3>
            </div>
            <div className="top-category__content">
                <div className="top-category__banner">
                    <img src={CategoryBanner} alt="" />
                    <div className="top-category__info">
                        <h3 className="title">Wireless earbuds</h3>
                        <div className="direct">
                            <a href="/">Shop now</a>
                            <i className="fa-regular fa-angle-right"></i>
                        </div>
                        <p className="sub">Quantities are limited</p>
                    </div>
                </div>
                <TopCategoryProduct cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
                <div className="top-category__list">
                    <div className="category__heading">
                        <h3 className="title">Computer Components</h3>
                    </div>
                    <ul className="category__list">
                        <li className="category__item">
                            <a href="/">Cables</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Data Storage</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Keyboards</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Microphones</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Monitors</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Mice</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Printers</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Scanners</a>
                        </li>
                        <li className="category__item">
                            <a href="/">Web Cameras</a>
                        </li>
                    </ul>
                    <div className="category__read-more">
                        <a href="/">View All</a>
                        <i className="fa-regular fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCategory;