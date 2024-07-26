import React, { useEffect, useState } from 'react';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import RelateProduct from './component/RelateProduct';
import WooProduct from './component/WooProduct';
import WooTab from './component/WooTab';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import { Product } from '../../models/product';
import { getProductById } from '../../api/product.api';

const ProductDetail: React.FC  = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [brandIds, setBrandIds] = useState<number[]>([]);
    const [categoryIds, setCategoryIds] = useState<number[]>([]);

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [quantities, setQuantities] = useState<number[]>([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await getProductById(Number(id));
                setProduct(product)
            } catch (error ){
                setError ('Failed to fetch product.');
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id])

    useEffect(() => {
        if (product) {
            const categories = product.categories?.map(category => category.id) || [];
            setCategoryIds(categories);

            if (product.brand_id !== undefined && product.brand_id !== null) {
                setBrandIds([Number(product.brand_id)]);
            } else {
                setBrandIds([]);
            }
        }
    }, [product]);

    return (
        <>
            <Header cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <WooProduct product={product} cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <WooTab productId={Number(id)}/>
            <RelateProduct categoryIds={categoryIds} brandIds={brandIds} cartItems={cartItems} setCartItems={setCartItems} quantities={quantities} setQuantities={setQuantities} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            <Footer />
        </>
    )
}

export default ProductDetail;