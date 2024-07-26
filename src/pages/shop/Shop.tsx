import React, { useEffect, useState } from 'react';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Shop.css';
import ElementBanner from '../../layouts/element-banner/ElementBanner';

import BannerShopImg from '../../images/public/banner-shop.jpg';
import BannerProduct from '../../images/public/Banner-Shop-1.jpg';

import CategoryList from './components/CategoryList';
import BrandList from './components/BrandList';
import ProductList from './components/ProductList';
import BannerShop from './components/BannerShop';
import Pagination from '../../layouts/utils/Pagination';
import { Product } from '../../models/product';
import { getAllProducts } from '../../api/product.api';
import { Console } from 'console';
import { CartItemDTO } from '../../dtos/cart.item.dto';
import { addToCart, insertCartItem } from '../../api/cart.item.api';


const Shop: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [checkedCategories, setCheckedCategories] = useState<number[]>([]);
    const [checkedBrands, setCheckedBrands] = useState<number[]>([]);
    const [sortOption, setSortOption] = useState('default');

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [quantities, setQuantities] = useState<number[]>([]);

    const handleCheckedCategoriesChange = (newCheckedCategories: number[]) => {
        setCheckedCategories(newCheckedCategories)
    }

    const handleCheckedBrandsChange = (newCheckedBrands: number[]) => {
        setCheckedBrands(newCheckedBrands)
    }

    const handleSortChange = (selectedOption: string) => {
        setSortOption(selectedOption);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getAllProducts(currentPage - 1, 16, '', checkedCategories, checkedBrands, sortOption);
                setProducts(productData.products);
                setTotalPages(productData.totalPages);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage, checkedCategories, checkedBrands, sortOption]);

    const pagination = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <>
            <Header cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <div className="shop">
                <div className="filter">
                    <div className="category-list">
                        <div className="category__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Categories</h3>
                        </div>
                        <CategoryList 
                            checkedCategories={checkedCategories}
                            onCheckedCategoriesChange={handleCheckedCategoriesChange}
                        />
                        <div className="category__read-more">
                            <span className='read-more'>View More</span>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className="brand-list">
                        <div className="brand__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Brands</h3>
                        </div>
                        <BrandList 
                            checkedBrands={checkedBrands}
                            onCheckedBrandsChange={handleCheckedBrandsChange}
                        />
                    </div>

                    <div className="model-list">
                        <div className="model__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Model</h3>
                        </div>
                        <ul className="model__content">
                            <li className="model-item">
                                <input type="checkbox" />
                                <span className='title'>128GB</span>
                                <span className="quantity">(4)</span>
                            </li>
                            <li className="model-item">
                                <input type="checkbox" />
                                <span className='title'>256GB</span>
                                <span className="quantity">(3)</span>
                            </li>
                            <li className="model-item">
                                <input type="checkbox" />
                                <span className='title'>64GB</span>
                                <span className="quantity">(3)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="color-list">
                        <div className="color__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Color</h3>
                        </div>
                        <ul className="color__content">
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Black</span>
                                <span className="quantity">(8)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Blue</span>
                                <span className="quantity">(2)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Grey</span>
                                <span className="quantity">(7)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>Orange</span>
                                <span className="quantity">(5)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                            <li className="color-item">
                                <input type="checkbox" />
                                <span className='title'>White</span>
                                <span className="quantity">(3)</span>
                                <span className="color">
                                    <span className="color-inner"></span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="filter-price">
                        <div className="filter-price__heading">
                            <i className="fa-regular fa-angle-down"></i>
                            <h3 className="title">Filter by Price</h3>
                        </div>
                        <div className="filter-price__content">
                            <div className="filter-price__adjust">
                                <div className="slider">
                                    <div className="slider-bar"></div>
                                    <div className="slider-handle"></div>
                                    <div className="slider-handle"></div>
                                </div>
                            </div>
                            <div className="filter-price__scope">
                                <span className='title'>Price: $0 - $7500</span>
                            </div>
                            <button className="filter-price__button">
                                <span className="title">Filter</span>
                                <i className="fa-regular fa-angle-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="banner">
                        <img src={BannerShopImg} alt="" />
                        <div className="banner-info">
                            <h3 className='title'>Computers & Laptops</h3>
                            <div className="direct">
                                <a href="/">Shop now</a>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <BannerShop />
                    <ProductList products={products} totalProducts={totalPages} onSortChange={handleSortChange} cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                    <Pagination currentPage={currentPage} totalPages={totalPages} pagination={pagination}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop;