import ProductCard from '../../../layouts/product/ProductCart';
import './TopSellingProduct.css';
import Headphone from '../../../images/public/Headphone.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import SmartMonitor from '../../../images/public/SmartMonitor.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../models/product';
import { getAllProducts } from '../../../api/product.api';
import Loading from '../../../layouts/loading/Loading';

interface TopSellingProductProps {
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const TopSellingProduct: React.FC<TopSellingProductProps> = (props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [currentStartIndex, setCurrentStartIndex] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getAllProducts(0);
                setProducts(productData.products);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    const handleNext = () => {
        setCurrentStartIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const visibleProducts = products.slice(currentStartIndex, currentStartIndex + 4).concat(
        products.slice(0, Math.max(0, currentStartIndex + 4 - products.length))
    );

    return (
        <div className="top-selling-product">
            <div className="top-selling__info">
                <h3 className="top-selling__title">Top Selling Products</h3>
                <div className="top-selling__filter">
                    <div className="filter-item active">
                        <a href="/">Show All</a>
                    </div>
                    <div className="filter-item">
                        <a href="/">Consoles</a>
                    </div>
                    <div className="filter-item">
                        <a href="/">Processors</a>
                    </div>
                </div>
                <div className="top-selling__control">
                    <i className="fa-solid fa-chevron-left" onClick={handlePrev}></i>
                    <i className="fa-solid fa-chevron-right" onClick={handleNext}></i>
                </div>
            </div>
            <div className="top-selling-content">
                {
                    visibleProducts.map(product => (
                        <ProductCard width={'333px'} height={'475px'} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TopSellingProduct;