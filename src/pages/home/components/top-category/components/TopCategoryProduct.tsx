import React, { useEffect, useState } from 'react';
import { Product } from '../../../../../models/product';
import { getAllProducts } from '../../../../../api/product.api';
import ProductCart from '../../../../../layouts/product/ProductCart';

interface TopCategoryProductProps {
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const TopCategoryProduct: React.FC<TopCategoryProductProps> = (props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getAllProducts(1, 8);
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
            <div className="top-category__products">
                <h1>Loading Data ...</h1>
            </div>
        );
    }

    return (
        <div className="top-category__products">
            {
                products.map(product => (
                    <ProductCart width={'215px'} height={'357px'} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
                ))
            }
        </div>
    )
}

export default TopCategoryProduct;