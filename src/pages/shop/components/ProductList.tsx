import ProductCart from '../../../layouts/product/ProductCart';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../models/product';

interface ProductListProps {
    products: Product[];
    totalProducts: number;
    onSortChange: (selectOption: string) => void;
    cartItems?: Product[]
    setCartItems?: React.Dispatch<React.SetStateAction<Product[]>>;
    quantities?: number[]
    setQuantities?: React.Dispatch<React.SetStateAction<number[]>>;
    totalPrice?: number;
    setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

const ProductList: React.FC<ProductListProps> = (props) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onSortChange(event.target.value)
    }

    return (
        <div className="product-list">
            <h3 className="title">Electronics & Appliances</h3>
            <div className="product-list__filter">
                <span className='result'>Showing 1–16 of {props.totalProducts * 16} results</span>
                <div className="filter">
                    <select className="sorting-select" onChange={handleChange}>
                        <option value="default">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="latest">Sort by latest</option>
                        <option value="high">Sort by price hight to low</option>
                        <option value="low">Sort by price low to high</option>
                    </select>
                </div>
            </div>
            <div className="content">
                {
                    props.products.map((product) => (
                        <ProductCart key={product.id} width={'264px'} height={'406px'} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} quantities={props.quantities} setQuantities={props.setQuantities} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList;