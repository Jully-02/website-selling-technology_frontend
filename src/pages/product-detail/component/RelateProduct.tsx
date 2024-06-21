import React, { useEffect, useState } from 'react';
import ProductCart from '../../../layouts/product/ProductCart';
import './RelateProduct.css';
import { Product } from '../../../models/product';
import { getAllProducts } from '../../../api/product.api';

interface RelateProductProps {
    categoryIds: number [];
    brandIds: number[]
}

const RelateProduct: React.FC<RelateProductProps> = (props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (props.categoryIds.length > 0 && props.brandIds.length > 0) {
                    const productResponse = await getAllProducts(0, 6, '', props.categoryIds, props.brandIds);
                    setProducts(productResponse.products.slice(1));
                } else {
                    // Handle case where either categoryIds or brandIds is empty
                    setProducts([]); // or handle differently based on your requirements
                }
            } catch (err) {
                setError('Failed to fetch products')
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [props.categoryIds, props.brandIds]);

    return (
        <div className="relate-product">
            <h3 className="title">Related Products</h3>
            <div className="content">
                {
                    products.map(product => (
                        <ProductCart key={product.id} width={'262px'} height={'418px'} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default RelateProduct;