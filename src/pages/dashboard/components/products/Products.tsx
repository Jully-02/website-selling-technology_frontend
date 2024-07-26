import React, { useState } from 'react';
import './Products.css';
import HeadPhone from '../../../../images/public/Headphone.jpg';

const Products: React.FC = () => {
    const [categoryFilter, setCategoryFilter] = useState(false);
    const [brandFilter, setBrandFilter] = useState(false);

    return (
        <div className='products'>
            <h3 className="title">Products</h3>
            <div className="action-filter">
                <div className="summary">
                    <div className="summary-all">
                        <span className='text'>All</span>
                        <span className="sub">(68817)</span>
                    </div>
                    <div className="summary-publish">
                        <span className="text">Published</span>
                        <span className="sub">(70348)</span>
                    </div>
                    <div className="summary-draft">
                        <span className="text">Draft</span>
                        <span className="sub">(17)</span>
                    </div>
                    <div className="summary-discount">
                        <span className="text">On discount</span>
                        <span className="sub">(810)</span>
                    </div>
                </div>
                <div className="actions">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search products' />
                    </div>
                    <div className="filter">
                        <div className="filter-category">
                            <span className="title" onClick={() => setCategoryFilter(true)}>Category</span>
                            <i className="fa-solid fa-angle-down"></i>
                            {
                                categoryFilter && (
                                    <div className="category-content">
                                        <ul>
                                            <li onClick={() => setCategoryFilter(false)}>Plants</li>
                                            <li onClick={() => setCategoryFilter(false)}>Furniture</li>
                                            <li onClick={() => setCategoryFilter(false)}>Fashion</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="filter-brand">
                            <span className="title" onClick={() => setBrandFilter(true)}>Brand</span>
                            <i className="fa-solid fa-angle-down"></i>
                            {
                                brandFilter && (
                                    <div className="brand-content">
                                        <ul>
                                            <li onClick={() => setBrandFilter(false)}>Plants</li>
                                            <li onClick={() => setBrandFilter(false)}>Furniture</li>
                                            <li onClick={() => setBrandFilter(false)}>Fashion</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="more-filter">
                            <span className="title">More filters</span>
                        </div>
                    </div>

                    <div className="btn-export">
                        <i className="fa-solid fa-file-export"></i>
                        <span className="text">Export</span>
                    </div>
                    <div className="btn-add">
                        <i className="fa-solid fa-plus"></i>
                        <span className="text">Add product</span>
                    </div>
                </div>
            </div>
            <div className="table-products">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <input className="form-check-input" type="checkbox" />
                            </th>
                            <th>
                                <div className="name">
                                    <h3 className="title">Product name</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="price">
                                    <h3 className="title">Price</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="category">
                                    <h3 className="title">Category</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="tag">
                                    <h3 className="title">Tags</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="rate">
                                    <h3 className="title">Rating</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="brand">
                                    <h3 className="title">Brand</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="publish">
                                    <h3 className="title">Published on</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="action">
                                    <h3 className="title">Actions</h3>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="product-name__content">
                                    <div className="image">
                                        <img src={HeadPhone} alt="" />
                                    </div>
                                    <span className="name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Beautifull Nomarly</span>
                                </div>
                            </td>
                            <td>
                                $39
                            </td>
                            <td>
                                Plants
                            </td>
                            <td>
                                <div className="tag-content">
                                    <span className="tag-item">Health</span>
                                    <span className="tag-item">Exerice</span>
                                    <span className="tag-item">Disclipline</span>
                                    <span className="tag-item">Lifestyle</span>
                                    <span className="tag-item">Fitness</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-regular fa-star"></i>
                            </td>
                            <td>
                                Blue Olive Plant sellers. Inc
                            </td>
                            <td>
                                Nov 12, 10:45 PM
                            </td>
                            <td>
                                <div className="actions-content">
                                    <i className="fa-light fa-ellipsis"></i>
                                    <div className="actions" style={{ display: "none" }}>
                                        <ul>
                                            <li>
                                                View
                                            </li>
                                            <li>Export</li>
                                            <li></li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="product-name__content">
                                    <div className="image">
                                        <img src={HeadPhone} alt="" />
                                    </div>
                                    <span className="name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Beautifull Nomarly</span>
                                </div>
                            </td>
                            <td>
                                $39
                            </td>
                            <td>
                                Plants
                            </td>
                            <td>
                                <div className="tag-content">
                                    <span className="tag-item">Health</span>
                                    <span className="tag-item">Exerice</span>
                                    <span className="tag-item">Disclipline</span>
                                    <span className="tag-item">Lifestyle</span>
                                    <span className="tag-item">Fitness</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-regular fa-star"></i>
                            </td>
                            <td>
                                Blue Olive Plant sellers. Inc
                            </td>
                            <td>
                                Nov 12, 10:45 PM
                            </td>
                            <td>
                                <div className="actions-content">
                                    <i className="fa-light fa-ellipsis"></i>
                                    <div className="actions" style={{ display: "none" }}>
                                        <ul>
                                            <li>
                                                View
                                            </li>
                                            <li>Export</li>
                                            <li></li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="product-name__content">
                                    <div className="image">
                                        <img src={HeadPhone} alt="" />
                                    </div>
                                    <span className="name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Beautifull Nomarly</span>
                                </div>
                            </td>
                            <td>
                                $39
                            </td>
                            <td>
                                Plants
                            </td>
                            <td>
                                <div className="tag-content">
                                    <span className="tag-item">Health</span>
                                    <span className="tag-item">Exerice</span>
                                    <span className="tag-item">Disclipline</span>
                                    <span className="tag-item">Lifestyle</span>
                                    <span className="tag-item">Fitness</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-regular fa-star"></i>
                            </td>
                            <td>
                                Blue Olive Plant sellers. Inc
                            </td>
                            <td>
                                Nov 12, 10:45 PM
                            </td>
                            <td>
                                <div className="actions-content">
                                    <i className="fa-light fa-ellipsis"></i>
                                    <div className="actions" style={{ display: "none" }}>
                                        <ul>
                                            <li>
                                                View
                                            </li>
                                            <li>Export</li>
                                            <li></li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="product-name__content">
                                    <div className="image">
                                        <img src={HeadPhone} alt="" />
                                    </div>
                                    <span className="name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Beautifull Nomarly</span>
                                </div>
                            </td>
                            <td>
                                $39
                            </td>
                            <td>
                                Plants
                            </td>
                            <td>
                                <div className="tag-content">
                                    <span className="tag-item">Health</span>
                                    <span className="tag-item">Exerice</span>
                                    <span className="tag-item">Disclipline</span>
                                    <span className="tag-item">Lifestyle</span>
                                    <span className="tag-item">Fitness</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-regular fa-star"></i>
                            </td>
                            <td>
                                Blue Olive Plant sellers. Inc
                            </td>
                            <td>
                                Nov 12, 10:45 PM
                            </td>
                            <td>
                                <div className="actions-content">
                                    <i className="fa-light fa-ellipsis"></i>
                                    <div className="actions" style={{ display: "none" }}>
                                        <ul>
                                            <li>
                                                View
                                            </li>
                                            <li>Export</li>
                                            <li></li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="product-name__content">
                                    <div className="image">
                                        <img src={HeadPhone} alt="" />
                                    </div>
                                    <span className="name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Beautifull Nomarly</span>
                                </div>
                            </td>
                            <td>
                                $39
                            </td>
                            <td>
                                Plants
                            </td>
                            <td>
                                <div className="tag-content">
                                    <span className="tag-item">Health</span>
                                    <span className="tag-item">Exerice</span>
                                    <span className="tag-item">Disclipline</span>
                                    <span className="tag-item">Lifestyle</span>
                                    <span className="tag-item">Fitness</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-regular fa-star"></i>
                            </td>
                            <td>
                                Blue Olive Plant sellers. Inc
                            </td>
                            <td>
                                Nov 12, 10:45 PM
                            </td>
                            <td>
                                <div className="actions-content">
                                    <i className="fa-light fa-ellipsis"></i>
                                    <div className="actions" style={{ display: "none" }}>
                                        <ul>
                                            <li>
                                                View
                                            </li>
                                            <li>Export</li>
                                            <li></li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="product-name__content">
                                    <div className="image">
                                        <img src={HeadPhone} alt="" />
                                    </div>
                                    <span className="name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Beautifull Nomarly</span>
                                </div>
                            </td>
                            <td>
                                $39
                            </td>
                            <td>
                                Plants
                            </td>
                            <td>
                                <div className="tag-content">
                                    <span className="tag-item">Health</span>
                                    <span className="tag-item">Exerice</span>
                                    <span className="tag-item">Disclipline</span>
                                    <span className="tag-item">Lifestyle</span>
                                    <span className="tag-item">Fitness</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-regular fa-star"></i>
                            </td>
                            <td>
                                Blue Olive Plant sellers. Inc
                            </td>
                            <td>
                                Nov 12, 10:45 PM
                            </td>
                            <td>
                                <div className="actions-content">
                                    <i className="fa-light fa-ellipsis"></i>
                                    <div className="actions" style={{ display: "none" }}>
                                        <ul>
                                            <li>
                                                View
                                            </li>
                                            <li>Export</li>
                                            <li></li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="product-name__content">
                                    <div className="image">
                                        <img src={HeadPhone} alt="" />
                                    </div>
                                    <span className="name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Beautifull Nomarly</span>
                                </div>
                            </td>
                            <td>
                                $39
                            </td>
                            <td>
                                Plants
                            </td>
                            <td>
                                <div className="tag-content">
                                    <span className="tag-item">Health</span>
                                    <span className="tag-item">Exerice</span>
                                    <span className="tag-item">Disclipline</span>
                                    <span className="tag-item">Lifestyle</span>
                                    <span className="tag-item">Fitness</span>
                                </div>
                            </td>
                            <td>
                                <i className="fa-regular fa-star"></i>
                            </td>
                            <td>
                                Blue Olive Plant sellers. Inc
                            </td>
                            <td>
                                Nov 12, 10:45 PM
                            </td>
                            <td>
                                <div className="actions-content">
                                    <i className="fa-light fa-ellipsis"></i>
                                    <div className="actions" style={{ display: "none" }}>
                                        <ul>
                                            <li>
                                                View
                                            </li>
                                            <li>Export</li>
                                            <li></li>
                                            <li>Remove</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="pagination-table">
                    <div className="info-detail">
                        <span className='title'>1 to 10 items of 16</span>
                        <span className='sub'>View all</span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <div className="pagination-content">
                        <div className="pagination-item">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <div className="pagination-item active">
                            <span>1</span>
                        </div>
                        <div className="pagination-item">
                            <span>2</span>
                        </div>
                        <div className="pagination-item">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;