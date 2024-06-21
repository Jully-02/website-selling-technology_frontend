import React, { useEffect, useState } from 'react';
import { Product } from '../../../../../models/product';
import { getAllProducts } from '../../../../../api/product.api';
import ProductCart from '../../../../../layouts/product/ProductCart';

const TopCategoryProduct: React.FC = () => {
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
                    <ProductCart width={'215px'} height={'357px'} product={product}/>
                ))
            }
            {/* <Product width={'215px'} height={'357px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'}/>
            <Product width={'215px'} height={'357px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'}/>
            <Product width={'215px'} height={'357px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'}/>
            <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
            <Product width={'215px'} height={'357px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'}/>
            <Product width={'215px'} height={'357px'} imgSrc={SmartMonitor} name={'Led 4K Smart TV Expo GSX Grey'} price={'$1,590'} category={'LAPTOPS'}/>
            <Product width={'215px'} height={'357px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'}/>
            <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/> */}
        </div>
    )
}

export default TopCategoryProduct;