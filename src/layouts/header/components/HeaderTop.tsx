import './HeaderTop.css';
import Logo from '../../../images/public/Logo.png';

import SmartPhone from '../../../images/public/Smartphone.jpg';
import BluetoothSpeaker from '../../../images/public/BluetoothSpeaker.jpg';
import Webcam from '../../../images/public/Webcam.jpg';
import TableM from '../../../images/public/TableM.jpg';
import React, { useEffect, useState } from 'react';
import { Category } from '../../../models/category';
import { Product } from '../../../models/product';
import { getAllCategories } from '../../../api/category.api';
import { getAllProducts } from '../../../api/product.api';
import { Link } from 'react-router-dom';


const HeaderTop: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
    const [products, setProducts] = useState<Product[]>([]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleCategorySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category: number[] = [];
        category.push(Number(event.target.value));
        setSelectedCategory(category);
    }

    const handleProductClick = (title: string | undefined) => {
        if (title) {
            setSearchQuery(title);
            setSearchQuery('')
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await getAllCategories(0, 29);
                setCategories(categories);
            } catch (err) {
                setError('Failed to fetch categories.')
            }
        }

        const fetchProducts = async () => {
            try {
                if (searchQuery !== '') {
                    const productResponse = await getAllProducts(0, 5, searchQuery, selectedCategory[0] === 0 ? [] : selectedCategory);
                    const data: Product[] = [];
                    productResponse.products.map(product => {
                        if (product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                            data.push(product)
                        }
                    })
                    setProducts(data);
                }
                if (searchQuery === '') {
                    setProducts([])
                }
            } catch (err) {
                setError('Failed to fetch products.');
            }
        }

        fetchCategories();
        fetchProducts();
    }, [searchQuery, selectedCategory])

    const getHighlightedText = (text: string | undefined, highlight: string) => {
        if (!highlight) return text;

        const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));
        return parts?.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase()
                ? <span key={index} style={{ color: '#2453D4' }}>{part}</span>
                : part
        );
    };

    return (
        <div className='header-top'>
            <div className="header-menu">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="search-product-form">
                <div className="product-category-holder">
                    <select className="product-category"
                        onChange={handleCategorySelect}
                    >
                        <option value={0}>All Categories</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <input
                    type="text"
                    className='product-search-input'
                    placeholder='Search for Product...'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button className="product-search-submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.382" height="18.34" viewBox="0 0 18.382 18.34">
                        <g id="searc-icon" transform="translate(-1250 -76)">
                            <path id="Search" d="M1658.563,1091.246l-2.828-2.828c-.025-.024-.058-.034-.084-.056a8.487,8.487,0,1,0-1.381,1.394.758.758,0,0,0,.051.076l2.828,2.83a1,1,0,0,0,1.414-1.416Zm-9.589-1.633a6.5,6.5,0,1,1,6.5-6.5A6.508,6.508,0,0,1,1648.974,1089.613Z" transform="translate(-390.474 -998.613)"></path>
                        </g>
                    </svg>
                </button>
                {products.length !== 0 && (
                        <div className="product-result">
                            {products.map((product) => (
                                <Link
                                    className="product-result__item"
                                    to={`/products/${product?.id}`}
                                    key={product.id}
                                    onClick={() => handleProductClick(product.title)}
                                >
                                    <img src={product.thumbnail} alt="" />
                                    <div className="info">
                                        <span className="category">{product?.categories?.[0]?.name || 'N/A'}</span>
                                        <h5 className="title">{getHighlightedText(product.title, searchQuery)}</h5>
                                        <h5 className="price">${product.price}</h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
            </div>
            <div className="nav-actions">
                <ul>
                    <li className="nav-item">
                        <a href="/"><i className="fa-solid fa-code-compare"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="/"><i className="fa-regular fa-user"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="/"><i className="fa-regular fa-heart"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="/">
                            <div className='nav-item__icon'>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className='quantity'>20</span>
                            </div>
                            <span>$0</span>
                        </a>
                        <div className="cart">
                            <ul className="mini-cart">
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={SmartPhone} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={TableM} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={Webcam} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                                <li className="mini-cart__item">
                                    <div className="img">
                                        <img src={BluetoothSpeaker} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className='title'>High Definition Webcam SX-557</h5>
                                        <span className='price'>$140</span>
                                    </div>
                                    <i className="fa-solid fa-xmark"></i>
                                </li>
                            </ul>
                            <div className="detail">
                                <span className="title">Total:</span>
                                <span className="total-price">$3,162</span>
                            </div>
                            <div className="action">
                                <a href="/">
                                    <span>View cart & checkout</span>
                                    <i className="fa-regular fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop;