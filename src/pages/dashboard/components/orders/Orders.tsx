import { useEffect, useState } from 'react';
import './Orders.css';
import Avatar from '../../../../images/public/profile-image.png';
import { Order } from '../../../../models/order';
import { formatDateTable, getOrders } from '../../../../api/order.api';

interface OrdersProps {
    handleSetOrderId: (orderId: number) => void;
    setIsSidebar: (value: number) => void;
}

const Orders: React.FC<OrdersProps> = (props) => {
    const [categoryFilter, setCategoryFilter] = useState(false);
    const [brandFilter, setBrandFilter] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response: any = await getOrders();
            setOrders(response.data)
        }

        fetchOrders();
    }, []);

    const handleClickOrderNumber = (orderId: number) => {
        props.handleSetOrderId(orderId);
        props.setIsSidebar(5);
    }

    return (
        <div className='orders'>
            <h3 className="title">Orders</h3>
            <div className="action-filter">
                <div className="summary">
                    <div className="summary-all">
                        <span className='text'>All</span>
                        <span className="sub">(68817)</span>
                    </div>
                    <div className="summary-pending">
                        <span className="text">Pending payments</span>
                        <span className="sub">(6)</span>
                    </div>
                    <div className="summary-unfulfilled">
                        <span className="text">Unfulfilled</span>
                        <span className="sub">(17)</span>
                    </div>
                    <div className="summary-complete">
                        <span className="text">Complete</span>
                        <span className="sub">(6810)</span>
                    </div>
                    <div className="summary-refund">
                        <span className="text">Refunded</span>
                        <span className="sub">(8)</span>
                    </div>
                    <div className="summary-failed">
                        <span className="text">Failed</span>
                        <span className="sub">(2)</span>
                    </div>
                </div>
                <div className="actions">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search orders' />
                    </div>
                    <div className="filter">
                        <div className="filter-payment">
                            <span className="title" onClick={() => setCategoryFilter(true)}>Payment status</span>
                            <i className="fa-solid fa-angle-down"></i>
                            {
                                categoryFilter && (
                                    <div className="payment-content">
                                        <ul>
                                            <li onClick={() => setCategoryFilter(false)}>Plants</li>
                                            <li onClick={() => setCategoryFilter(false)}>Furniture</li>
                                            <li onClick={() => setCategoryFilter(false)}>Fashion</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="filter-fulfilment">
                            <span className="title" onClick={() => setBrandFilter(true)}>Fulfilment status</span>
                            <i className="fa-solid fa-angle-down"></i>
                            {
                                brandFilter && (
                                    <div className="fulfilment-content">
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
                        <span className="text">Add order</span>
                    </div>
                </div>
            </div>

            <div className="table-orders">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <input className="form-check-input" type="checkbox" />
                            </th>
                            <th>
                                <div className="order">
                                    <h3 className="title">Order</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="total">
                                    <h3 className="title">Total</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="customer">
                                    <h3 className="title">Customer</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="payment-status">
                                    <h3 className="title">Payment status</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="fulfilment-status">
                                    <h3 className="title">Fulfilment status</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="delivery">
                                    <h3 className="title">Dilivery type</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="payment">
                                    <h3 className="title">Payment type</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="date">
                                    <h3 className="title">date</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map(order => (
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" />
                                    </td>
                                    <td>
                                        <span className="b-order-number" onClick={() => handleClickOrderNumber(order.id)}>
                                            #{order.id}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="b-total">
                                            ${order.total_money}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="b-customer">
                                            <div className="image">
                                                <img src={Avatar} alt="" />
                                            </div>
                                            <span className="name">
                                                {order.first_name + " " + order.last_name}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`b-payment-status ${order.payment_status ? 'paid' : 'unpaid'}`}>
                                            {order.payment_status ? 'Paid' : 'Unpaid'}
                                            {
                                                order.payment_status ? (
                                                    <i className="fa-solid fa-check"></i>
                                                ): (
                                                    <i className="fa-regular fa-timer"></i>
                                                )
                                            }
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`b-fulfilment-status ${order.tracking_number === 1 ? 'process' : order.tracking_number !== 5 ? 'partial' : 'fulfilled'}`}>
                                            {
                                                order.tracking_number === 1 ? 'PROCESSING' : order.tracking_number !== 5 ? 'PARTIAL FULFILLED' : 'ORDER FULFILLED'
                                            }
                                            {
                                                order.tracking_number === 1 ? (
                                                    <i className="fa-regular fa-timer"></i>
                                                ) : order.tracking_number !== 5 ? (
                                                    <i className="fa-regular fa-info"></i>
                                                ) : (
                                                    <i className="fa-solid fa-check"></i>
                                                )
                                            }
                                        </span>
                                    </td>
                                    <td>
                                        <span className="b-delivery">
                                            {order.shipping_method_name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="b-payment">
                                            {order.payment_method_name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="b-date">
                                            {formatDateTable(order.order_date)}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
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

export default Orders;