import './FeatureProduct.css';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../models/product';
import { getAllProducts } from '../../../api/product.api';
import ProductCart from '../../../layouts/product/ProductCart';
import Loading from '../../../layouts/loading/Loading';

const FeatureProduct: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentStartIndex, setCurrentStartIndex] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

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

    const handleNext = () => {
        setCurrentStartIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const visibleProducts = products.slice(currentStartIndex, currentStartIndex + 6).concat(
        products.slice(0, Math.max(0, currentStartIndex + 6 - products.length))
    );

    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <div className="top-category__products">
                <h1>{error}</h1>
            </div>
        );
    }

    return (
        <div className="feature-product">
            <div className="feature__info">
                <h3 className='feature__title'>Featured Products</h3>
                <div className="feature__control">
                    <i className="fa-solid fa-chevron-left" onClick={handlePrev}></i>
                    <i className="fa-solid fa-chevron-right" onClick={handleNext}></i>
                </div>
            </div>
            <div className="list-products">
                {
                    visibleProducts.map((product) => (
                        <ProductCart key={product.id} width={'215px'} height={'357px'} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default FeatureProduct;
