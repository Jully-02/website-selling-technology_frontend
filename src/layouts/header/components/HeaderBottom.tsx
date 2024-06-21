import ProductCart from '../../product/ProductCart';
import './HeaderBottom.css';
import Webcam from '../../../images/public/Webcam.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import Headphone from '../../../images/public/Headphone.jpg';
import Gopro from '../../../images/public/Gopro.jpg';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../models/product';
import { getAllProducts } from '../../../api/product.api';
import { Link } from 'react-router-dom';


const HeaderBottom: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [activeItem, setActiveItem] = useState('Shop');

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
    };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getAllProducts(1, 5);
                setProducts(productData.products);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    
    return (
        <div className="header-bottom">
            <div className='header-bottom-inner'>
                <nav className="header-nav">
                    <ul className="menu">
                        <li className={`menu-item ${activeItem === 'Home' ? 'active' : ''}`}>
                            <Link to='/' onClick={() => handleItemClick('Home')}>Home</Link>
                        </li>
                        <li className={`menu-item ${activeItem === 'Pages' ? 'active' : ''}`}>
                            <a href="/" onClick={() => handleItemClick('Pages')}>Pages</a>
                        </li>
                        <li className={`menu-item ${activeItem === 'Shop' ? 'active' : ''}`}>
                            <Link to='/shop' onClick={() => handleItemClick('Shop')}>Shop</Link>
                        </li>
                        <li className={`menu-item ${activeItem === 'Blog' ? 'active' : ''}`}>
                            <a href="/" onClick={() => handleItemClick('Blog')}>Blog</a>
                        </li>
                        <li className={`menu-item ${activeItem === 'Landing' ? 'active' : ''}`}>
                            <a href="/" onClick={() => handleItemClick('Landing')}>Landing</a>
                        </li>
                    </ul>
                </nav>
                <div className="header-discount">
                    <div className="header-discount__heading">
                        <h3 className="title">Weekly Discount</h3>
                        <i className="fa-regular fa-angle-right"></i>
                    </div>
                    <div className="header-discount__overlay"></div>
                    <div className="header-discount__content">
                        <div className="header-discount__products">
                            {
                                products.map(product => (
                                    <ProductCart key={product.id} width={'250px'} height={'430px'} product={product}/>
                                ))
                            }
                        </div>
                        <div className="header-discount__read-more">
                            <h3 className="read-more">View All</h3>
                            <i className="fa-regular fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom-outer">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item"><Link to='/shop'>Shop</Link></li>
                        <li className="breadcrumb-item"><a href="/">COMPUTER COMPONENTS</a></li>
                        <li className="breadcrumb-item"><a href="/">WEB CAMERAS</a></li>
                        <li className="breadcrumb-item" aria-current="page"><a href="/">PROFEUS LAPTOP MINI SERIES QW-558 PRO</a></li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default HeaderBottom;