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
import { getAllProducts, getProductById, getProductsByIds } from '../../../api/product.api';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCartItemByUserIdAndProductId, getCartFromLocalStorage, getCartItemByUserId, removeFromCart } from '../../../api/cart.item.api';


interface HeaderTopProps {
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderTop: React.FC<HeaderTopProps> = ({cartItems: propCartItems, setCartItems: propSetCartItems, quantities: propQuantities, setQuantities: propSetQuantities, totalPrice: propTotalPrice, setTotalPrice: propSetTotalPrice}) => {
    const [cartItems, setCartItems] = useState<Product[]>(propCartItems || []);
    const [quantities, setQuantities] = useState<number[]>(propQuantities || []);
    const [totalPrice, setTotalPrice] = useState<number>(propTotalPrice || 0);


    useEffect(() => {
        if (propCartItems) setCartItems(propCartItems);
        console.log("render")
    }, [propCartItems]);

    useEffect(() => {
        if (propQuantities) setQuantities(propQuantities);
    }, [propQuantities]);

    useEffect(() => {
        if (propTotalPrice !== undefined) setTotalPrice(propTotalPrice);
    }, [propTotalPrice]);

    useEffect(() => {
        if (propSetCartItems) {
            propSetCartItems(cartItems);
        }
    }, [cartItems]);

    useEffect(() => {
        if (propSetQuantities) {
            propSetQuantities(quantities);
        }
    }, [quantities]);

    useEffect(() => {
        if (propSetTotalPrice) {
            propSetTotalPrice(totalPrice);
        }
    }, [totalPrice]);
    
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

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
        const token = localStorage.getItem("token");
        if (token) {
            setUser(true);
        }

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
                } else {
                    setProducts([]);
                }
            } catch (err) {
                setError('Failed to fetch products.');
            }
        }

        const fetchCartItems = async () => {
            try {
                const userId = localStorage.getItem('user_id');
                const token = localStorage.getItem('token');
                if (userId && token) {
                    setCartItems([]);
                    const response = await getCartItemByUserId(Number(userId));
                    const productIds: number[] = [];
                    const quantities: number [] = [];
                    response?.data.data_list.map(
                        (item: any) => {
                            productIds.push(item.product_id);
                            quantities.push(item.quantity);
                        }
                    )
                    setQuantities(quantities)
                    const items = await getProductsByIds(productIds);
                    setCartItems(items);
                    const newTotalPrice = items.reduce((sum, product, index) => {
                        return sum + (product.price || 0) * quantities[index];
                    }, 0);
                    setTotalPrice(newTotalPrice);
                } else {
                    setCartItems([]);
                    const cart = await getCartFromLocalStorage();
                    const productIds = Array.from(cart?.keys()!);
                    const quantities = Array.from(cart?.values()!);
                    setQuantities(quantities);
                    const items = await getProductsByIds(productIds);
                    setCartItems(items);
                    const newTotalPrice = items.reduce((sum, product, index) => {
                        return sum + (product.price || 0) * quantities[index];
                    }, 0);
                    setTotalPrice(newTotalPrice);
                }
            } catch (err) {
                setError('Failed to fetch cart items.')
            }
        }

        fetchCartItems();
        fetchCategories();
        fetchProducts();
    }, [searchQuery, selectedCategory]);

    const handleClickUser = () => {
        if (!user) {
            navigate("/auth")
        }
    }

    const handleClickLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        navigate("/auth")
    }

    const handleRemoveFromCart = (productId: number) => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        if (userId && token) {
            const product = cartItems.find(cartItem => cartItem.id === productId);
            const response = deleteCartItemByUserIdAndProductId(Number(userId), productId);
            setCartItems(cartItems.filter(cartItem =>  cartItem.id !== productId));
            setTotalPrice(totalPrice - product?.price!)
            console.log(response);
        }
        else {
            const product = cartItems.find(cartItem => cartItem.id === productId);
            removeFromCart(productId);
            setCartItems(cartItems.filter(cartItem => cartItem.id !== productId));
            setTotalPrice(totalPrice - product?.price!)
        }
    };

    const getHighlightedText = (text: string | undefined, highlight: string) => {
        if (!highlight) return text;

        const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));
        return parts?.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase()
                ? <span key={index} style={{ color: '#2453D4' }}>{part}</span>
                : part
        );
    };

    const handleClickDetail = () => {
        navigate("/user-information");
    }

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
                        <i className="fa-regular fa-user" onClick={handleClickUser}></i>
                        {
                            user === true && (
                                <ul className="info-user">
                                    <li className="info-user_content" onClick={handleClickDetail}>
                                        <span>Your information</span>
                                    </li>
                                    <li className="logout" onClick={handleClickLogout}>
                                        <span>Logout</span>
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                    <li className="nav-item">
                        <Link to={"/wishlist"}>
                            <i className="fa-regular fa-heart"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/">
                            <div className='nav-item__icon'>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className='quantity'>{cartItems.length}</span>
                            </div>
                            <span>${totalPrice}</span>
                        </a>
                        {
                            cartItems.length !== 0 && (
                                <div className="cart">
                                    <ul className="mini-cart" style={{
                                        height: `${cartItems.length >= 3 ? `324px` : 'auto'}`
                                    }}>
                                        {
                                            cartItems.map(product => (

                                                <div className="mini-cart__item" key={product.id}>
                                                    <Link className="img" to={`/products/${product?.id}`}>
                                                        <img src={product.thumbnail} alt="" />
                                                    </Link>
                                                    <Link className="info" to={`/products/${product?.id}`}>
                                                        <h5 className='title'>{product.title}</h5>
                                                        <span className='price'>${product.price}</span>
                                                    </Link>
                                                    <i className="fa-solid fa-xmark" onClick={() => handleRemoveFromCart(product.id)}></i>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                    <div className="detail">
                                        <span className="title">Total:</span>
                                        <span className="total-price">${totalPrice}</span>
                                    </div>
                                    <div className="action">
                                        <Link to={"/cart"}>
                                            <span>View cart & checkout</span>
                                            <i className="fa-regular fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                        {
                            cartItems.length === 0 && (
                                <div className='cart-empty'>
                                    <span>No products in the cart.</span>
                                </div>
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop;