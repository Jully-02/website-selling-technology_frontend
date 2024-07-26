import ProductCart from '../../../layouts/product/ProductCart';
import './BestSeller.css';
import TableM from '../../../images/public/TableM.jpg';
import Webcam from '../../../images/public/Webcam.jpg';
import Smartphone from '../../../images/public/Smartphone.jpg';
import SmartMonitor from '../../../images/public/SmartMonitor.jpg';
import Samsung from '../../../images/public/Samsung.jpg';
import Headphone from '../../../images/public/Headphone.jpg';
import Gopro from '../../../images/public/Gopro.jpg';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../models/product';
import { getAllProducts } from '../../../api/product.api';
import Loading from '../../../layouts/loading/Loading';

interface BestSellerProps {
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const BestSeller: React.FC<BestSellerProps> = (props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getAllProducts(0, 9);
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

    const productsShowLeft = products.slice(0, 4);
    const productMain = products.slice(4,5);
    const productsShowRight = products.slice(5);

    return (
        <div className='best-seller'>
            <div className="best-seller__info">
                <h3 className='title'>Bestsellers</h3>
            </div>
            <div className="best-seller__content">
                <div className="best-seller__products">
                    {
                        productsShowLeft.map(product => (
                            <ProductCart width={'215px'} height={'357px'} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
                        ))
                    }
                </div>
                <div className="best-seller__outstanding">
                    {
                        productMain.map(product => (
                            <ProductCart width={'465px'} height={'735px'} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
                        ))
                    }
                </div>
                <div className="best-seller__products">
                   {
                        productsShowRight.map(product => (
                            <ProductCart width={'215px'} height={'357px'} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BestSeller;