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

const BestSeller: React.FC = () => {
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
                            <ProductCart width={'215px'} height={'357px'} product={product} />
                        ))
                    }
                    {/* <Product width={'215px'} height={'357px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Smartphone} name={'Smartphone Case Carbon Black Flex'} price={'$99'} category={'EQUIPMENT'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Headphone} name={'Over-Ear Studio Headphones FX-989 Multicolor'} price={'$790'} category={'PROCESSORS'}/> */}
                </div>
                <div className="best-seller__outstanding">
                    {
                        productMain.map(product => (
                            <ProductCart width={'465px'} height={'735px'} product={product}/>
                        ))
                    }
                    {/* <Product width={'465px'} height={'735px'} imgSrc={TableM} name={'Profeus Drawing Tablet M Series QW-55815 Pro'} price={'$2,109'} category={'EQUIPMENT'}/> */}
                </div>
                <div className="best-seller__products">
                   {
                        productsShowRight.map(product => (
                            <ProductCart width={'215px'} height={'357px'} product={product} />
                        ))
                    }`
                    {/* <Product width={'215px'} height={'357px'} imgSrc={SmartMonitor} name={'Led 4K Smart TV Expo GSX Grey'} price={'$1,590'} category={'LAPTOPS'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Gopro} name={'Camera CCW5 4K Waterproof Cover'} price={'$1,390'} category={'EARBUDS (IN-EAR)'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Webcam} name={'High Definition Webcam SX-557'} price={'$140'} category={'BLUETOOTH'}/>
                    <Product width={'215px'} height={'357px'} imgSrc={Samsung} name={'Tabet Protective Case Ultra Black'} price={'$2,109'} category={'EQUIPMENT'}/> */}
                </div>
            </div>
        </div>
    )
}

export default BestSeller;