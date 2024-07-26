import { useState } from 'react';
import './Customers.css';
import Avatar from '../../../../images/public/profile-image.png';

const Customers: React.FC = () => {
    const [categoryFilter, setCategoryFilter] = useState(false);
    const [brandFilter, setBrandFilter] = useState(false);

    return (
        <div className="customers">
            <h3 className="title">Customers</h3>
            <div className="action-filter">
                <div className="summary">
                    <div className="summary-all">
                        <span className='text'>All</span>
                        <span className="sub">(6)</span>
                    </div>
                    <div className="summary-new">
                        <span className="text">New</span>
                        <span className="sub">(70348)</span>
                    </div>
                    <div className="summary-checkouts">
                        <span className="text">Abandoned checkouts</span>
                        <span className="sub">(17)</span>
                    </div>
                    <div className="summary-local">
                        <span className="text">Locals</span>
                        <span className="sub">(6810)</span>
                    </div>
                    <div className="summary-email">
                        <span className="text">Email subscribers</span>
                        <span className="sub">(8)</span>
                    </div>
                    <div className="summary-review">
                        <span className="text">Top reviews</span>
                        <span className="sub">(2)</span>
                    </div>
                </div>
                <div className="actions">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search customers' />
                    </div>
                    <div className="filter">
                        <div className="filter-country">
                            <span className="title" onClick={() => setCategoryFilter(!categoryFilter)}>Country</span>
                            <i className="fa-solid fa-angle-down"></i>
                            {
                                categoryFilter && (
                                    <div className="country-content">
                                        <ul>
                                            <li onClick={() => setCategoryFilter(false)}>Plants</li>
                                            <li onClick={() => setCategoryFilter(false)}>Furniture</li>
                                            <li onClick={() => setCategoryFilter(false)}>Fashion</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="filter-vip">
                            <span className="title" onClick={() => setBrandFilter(!brandFilter)}>VIP</span>
                            <i className="fa-solid fa-angle-down"></i>
                            {
                                brandFilter && (
                                    <div className="vip-content">
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
                        <span className="text">Add customer</span>
                    </div>
                </div>
            </div>

            <div className="table-customers">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <input className="form-check-input" type="checkbox" />
                            </th>
                            <th>
                                <div className="name">
                                    <h3 className="title">Customers</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="email">
                                    <h3 className="title">Email</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="orders">
                                    <h3 className="title">Orders</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="total-spent">
                                    <h3 className="title">Total spent</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="city">
                                    <h3 className="title">City</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="last-seen">
                                    <h3 className="title">Last seen</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="last-order">
                                    <h3 className="title">Last order</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
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
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-check-input" type="checkbox" />
                            </td>
                            <td>
                                <div className="b-cus">
                                    <div className="image">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <span className="name">Carry Anna</span>
                                </div>
                            </td>
                            <td>
                                <span className="b-email">annac34@gmail.com</span>
                            </td>
                            <td>
                                <span className="b-orders">
                                    89
                                </span>
                            </td>
                            <td>
                                <span className="b-total-spent">
                                    $23,987
                                </span>
                            </td>
                            <td>
                                <span className="b-city">
                                    Budapest
                                </span>
                            </td>
                            <td>
                                <span className="b-last-seen">
                                    34 min ago
                                </span>
                            </td>
                            <td>
                                <span className="b-last-order">
                                    Dec 12, 12:56 PM
                                </span>
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

export default Customers;