import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './OrderDetailUser.css';
import HeadPhone from '../../images/public/Headphone.jpg';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { OrderDetail } from '../../models/order.detail';
import { getDetailOrderDetailByOrderId } from '../../api/order.detail';
import { Product } from '../../models/product';
import { getProductsByIds } from '../../api/product.api';
import { formatCurrency, formatDate, formatDateTable, formatTime, getDetailOrder } from '../../api/order.api';
import { Order } from '../../models/order';

const OrderDetailUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [order, setOrder] = useState<Order | null>(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            const response: any = await getDetailOrderDetailByOrderId(Number(id));
            setOrderDetails(response.data);
        }

        const fetchOrder = async () => {
            const response: any = await getDetailOrder(Number(id));
            console.log(response);
            setOrder(response.data);
        }

        fetchOrder();
        fetchOrderDetails();
    }, [id])

    useEffect(() => {
        const fetchProducts = async () => {
            const productIds: number[] = [];
            orderDetails.map(orderDetail => productIds.push(orderDetail.product_id));
            const response = await getProductsByIds(productIds);
            setProducts(response);
        }

        fetchProducts();
    }, [orderDetails]);


    const [moreAction, setMoreAction] = useState(false);
    return (
        <>
            <Header />
            <div className="order-detail-user">
                <h3 className="title">Order #{id}</h3>
                <div className="actions">
                    <span className="sub-title">Customer ID : <span className="id">{order?.user_id}</span></span>
                    <div className="actions-content">
                        <div className="action-print">
                            <i className="fa-solid fa-print"></i>
                            <span className="text">Print</span>
                        </div>
                        <div className="action-refund">
                            <i className="fa-solid fa-rotate-left"></i>
                            <span className="text">Refund</span>
                        </div>
                        <div className="more-action">
                            <span className="text" onClick={() => setMoreAction(!moreAction)}>More action</span>
                            <i className="fa-solid fa-angle-down"></i>
                            {
                                moreAction && (
                                    <div className="more-action__content">
                                        <ul>
                                            <li onClick={() => setMoreAction(false)}>Action</li>
                                            <li onClick={() => setMoreAction(false)}>Another action</li>
                                            <li onClick={() => setMoreAction(false)}>Something else</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="order-detail-content">
                    <div className="left">
                        <div className="table-order-detail">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="h-name">
                                                <h3 className="title">Products</h3>
                                                <div className="filter">
                                                    <i className="fa-duotone fa-solid fa-caret-up"></i>
                                                    <i className="fa-duotone fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="h-category">
                                                <h3 className="title">Category</h3>
                                                <div className="filter">
                                                    <i className="fa-duotone fa-solid fa-caret-up"></i>
                                                    <i className="fa-duotone fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="h-brand">
                                                <h3 className="title">Brand</h3>
                                                <div className="filter">
                                                    <i className="fa-duotone fa-solid fa-caret-up"></i>
                                                    <i className="fa-duotone fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="h-size">
                                                <h3 className="title">Size</h3>
                                                <div className="filter">
                                                    <i className="fa-duotone fa-solid fa-caret-up"></i>
                                                    <i className="fa-duotone fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="h-color">
                                                <h3 className="title">Color</h3>
                                                <div className="filter">
                                                    <i className="fa-duotone fa-solid fa-caret-up"></i>
                                                    <i className="fa-duotone fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="h-quantity">
                                                <h3 className="title">Quantity</h3>
                                                <div className="filter">
                                                    <i className="fa-duotone fa-solid fa-caret-up"></i>
                                                    <i className="fa-duotone fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="h-price">
                                                <h3 className="title">Price</h3>
                                                <div className="filter">
                                                    <i className="fa-duotone fa-solid fa-caret-up"></i>
                                                    <i className="fa-duotone fa-solid fa-caret-down"></i>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="h-total">
                                                <h3 className="title">Total</h3>
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
                                        products.map(product => (
                                            <tr key={product.id}>
                                                <td>
                                                    <div className="b-products">
                                                        <div className="image">
                                                            <img src={product.thumbnail} alt="" />
                                                        </div>
                                                        <Link className="name" to={`/products/${product.id}`}>{product.title}</Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="b-category">
                                                        {
                                                            product.category_names.join(', ')
                                                        }
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="b-brand">
                                                        {product.brand_name}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="b-size">

                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="b-color">

                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="b-quantity">
                                                        {
                                                            orderDetails
                                                                .filter(detail => detail.product_id === product.id)
                                                                .map(detail => detail.number_of_product)
                                                        }
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="b-price">
                                                        {
                                                            orderDetails
                                                                .filter(detail => detail.product_id === product.id)
                                                                .map(detail => formatCurrency(detail.price))
                                                        }
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="b-total">
                                                        {
                                                            orderDetails
                                                                .filter(detail => detail.product_id === product.id)
                                                                .map(detail => formatCurrency(detail.total_money))
                                                        }
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="item-subtotal">
                            <span className="label">Items subtotal :</span>
                            <span className="total">{formatCurrency(order?.sub_total!)}</span>
                        </div>
                        <div className="order-detail-info">
                            <div className="billing-detail">
                                <h3 className="title">Billing details</h3>
                                <div className="billing-content">
                                    <div className="bc-cus">
                                        <span className="title"><i className="fa-regular fa-user"></i> Customer</span>
                                        <span className="name">{order?.first_name + " " + order?.last_name}</span>
                                    </div>
                                    <div className="bc-email">
                                        <span className="title"><i className="fa-regular fa-envelope"></i> Email</span>
                                        <span className="email">{order?.email}</span>
                                    </div>
                                    <div className="bc-phone">
                                        <span className="title"><i className="fa-regular fa-phone"></i> Phone</span>
                                        <span className="phone">{order?.phone_number}</span>
                                    </div>
                                    <div className="bc-address">
                                        <span className="title"><i className="fa-regular fa-house"></i> Address</span>
                                        <span className="address">{order?.address}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shipping-detail">
                                <h3 className="title">Shipping details</h3>
                                <div className="shipping-content">
                                    <div className="sc-email">
                                        <span className="title"><i className="fa-regular fa-envelope"></i> Email</span>
                                        <span className="email">{order?.email}</span>
                                    </div>
                                    <div className="sc-phone">
                                        <span className="title"><i className="fa-regular fa-phone"></i> Phone</span>
                                        <span className="phone">{order?.phone_number}</span>
                                    </div>
                                    <div className="sc-date">
                                        <span className="title"><i className="fa-regular fa-calendar"></i> Shipping Date</span>
                                        <span className="date">{formatDateTable(order?.shipping_date!)}</span>
                                    </div>
                                    <div className="sc-address">
                                        <span className="title"><i className="fa-regular fa-location-dot"></i> Shipping Address</span>
                                        <span className="address">{order?.shipping_address}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="other-detail">
                                <h3 className="title">Other details</h3>
                                <div className="other-content">
                                    <div className="oc-gift">
                                        <span className="title"><i className="fa-regular fa-gifts"></i> Gift Order</span>
                                        <span className="gift">Yes</span>
                                    </div>
                                    <div className="oc-wraping">
                                        <span className="title"><i className="fa-regular fa-box-open"></i> Wraping</span>
                                        <span className="wraping">Magic wrapper</span>
                                    </div>
                                    <div className="oc-recipient">
                                        <span className="title"><i className="fa-sharp-duotone fa-solid fa-lines-leaning"></i> Recipient</span>
                                        <span className="recipient">Recipient</span>
                                    </div>
                                    <div className="oc-message">
                                        <span className="title"><i className="fa-sharp-duotone fa-solid fa-envelope-open-text"></i> Gift Message</span>
                                        <span className="message">Happy Birthday Shiniga
                                            Lots of Love Buga Buga!!
                                            Yours,
                                            Mekalan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="summary-info">
                            <h3 className="title">Summary</h3>
                            <div className="info-order">
                                <div className="item-subtotal">
                                    <span className="label">Items subtotal :</span>
                                    <span className="text">{formatCurrency(order?.sub_total!)}</span>
                                </div>
                                <div className="item-discount">
                                    <span className="label">Discount :</span>
                                    <span className="text" style={{ color: '#EC1F00' }}>$0</span>
                                </div>
                                <div className="item-tax">
                                    <span className="label">Tax :</span>
                                    <span className="text">$0</span>
                                </div>
                                <div className="item-sub">
                                    <span className="label">Subtotal :</span>
                                    <span className="text">{formatCurrency(order?.sub_total!)}</span>
                                </div>
                                <div className="item-shipping">
                                    <span className="label">Shipping cost :</span>
                                    <span className="text">{formatCurrency(order?.shipping_cost!)}</span>
                                </div>
                                <div className="break"></div>
                                <div className="item-total">
                                    <span className="label">Total :</span>
                                    <span className="text">{formatCurrency(order?.total_money!)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="order-status">
                            <h3 className="title">Order Status</h3>
                            <div className="payment-status-select">
                                <span className="title">Payment status</span>
                                <select name="payment" id="payment" value={order?.payment_status ? 'paid' : 'unpaid'} disabled>
                                    <option value="paid">Paid</option>
                                    <option value="unpaid">Unpaid</option>
                                </select>
                            </div>
                            <div className="fulfillment-status-select">
                                <span className="title">Fultillment status</span>
                                <select name="fulfillment" id="fulfillment" disabled>
                                    <option value="1">Order is processing</option>
                                    <option value="2">Picked Up</option>
                                    <option value="3">Ready to Ship</option>
                                    <option value="4">Shipped</option>
                                    <option value="5">Delivered</option>
                                </select>
                            </div>
                        </div>

                        <div className="track-order">
                            <h3 className="title">Track Order</h3>
                            <div className="track-order-content">
                                <div className="order-processing" style={{marginBottom: 1 <= order?.tracking_number! ? '0' : '20px'}}>
                                    <div className="timeline-order">
                                        <div className="time-order">
                                            <span className="date">{formatDateTable(order?.order_date!)}</span>
                                            <span className="time">10:30 AM</span>
                                        </div>
                                        <div className={`icon ${1 <= order?.tracking_number! ? 'success' : 1 - 1 === order?.tracking_number! ? 'process' : 'pending'}`}>
                                            {
                                                1 <= order?.tracking_number! ? (
                                                    <i className="fa-solid fa-check"></i>
                                                ) :
                                                    (
                                                        <i className="fa-regular fa-arrow-progress"></i>
                                                    )
                                            }
                                            <div className="line" style={{
                                                borderLeft:
                                                    1 < order?.tracking_number!
                                                        ? '1px solid #25b003'
                                                        : 1 === order?.tracking_number!
                                                            ? '1px solid #e5780b'
                                                                :'1px dashed #9fa6bc'
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <span className="title">Order is processing</span>
                                        <span className="sub">{1 <= order?.tracking_number! ? 'Your package is ready for the seller to prepare.' : 'Pending'}</span>
                                    </div>
                                </div>
                                <div className="order-picked-up" style={{marginBottom: 2 <= order?.tracking_number! ? '0' : '20px'}}>
                                    <div className="timeline-order">
                                        <div className="time-order">
                                            <span className="date">23 August, 2023</span>
                                            <span className="time">10:30 AM</span>
                                        </div>
                                        <div className={`icon ${2 <= order?.tracking_number! ? 'success' : 2 - 1 === order?.tracking_number! ? 'process' : 'pending'}`}>
                                            {
                                                2 <= order?.tracking_number! ? (
                                                    <i className="fa-solid fa-check"></i>
                                                ) :
                                                    (
                                                        <i className="fa-regular fa-arrow-progress"></i>
                                                    )
                                            }
                                            <div className="line" style={{
                                                borderLeft:
                                                    2 < order?.tracking_number!
                                                        ? '1px solid #25b003'
                                                        : 2 === order?.tracking_number!
                                                            ? '1px solid #e5780b'
                                                                :'1px dashed #9fa6bc'
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <span className="title">Picked Up</span>
                                        <span className="sub">{2 <= order?.tracking_number! ? 'Your package has been picked up from the seller.' : 'Pending'}</span>
                                    </div>
                                </div>
                                <div className="order-ready-ship" style={{marginBottom: 3 <= order?.tracking_number! ? '0' : '20px'}}>
                                    <div className="timeline-order">
                                        <div className="time-order">
                                            <span className="date">23 August, 2023</span>
                                            <span className="time">10:30 AM</span>
                                        </div>
                                        <div className={`icon ${3 <= order?.tracking_number! ? 'success' : 3 - 1 === order?.tracking_number! ? 'process' : 'pending'}`}>
                                            <i className="fa-solid fa-dolly"></i>
                                            <div className="line" style={{
                                                borderLeft:
                                                    3 < order?.tracking_number!
                                                        ? '1px solid #25b003'
                                                        : 3 === order?.tracking_number!
                                                            ? '1px solid #e5780b'
                                                            :'1px dashed #9fa6bc'
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <span className="title">Ready to Ship</span>
                                        <span className="sub">{3 <= order?.tracking_number! ? 'Your package is now ready to be shipped.' : 'Pending'}</span>
                                    </div>
                                </div>
                                <div className="order-shipped">
                                    <div className="timeline-order">
                                        <div className="time-order">
                                            <span className="date">23 August, 2023</span>
                                            <span className="time">10:30 AM</span>
                                        </div>
                                        <div className={`icon ${4 <= order?.tracking_number! ? 'success' : 4 - 1 === order?.tracking_number! ? 'process' : 'pending'}`}>
                                            <i className="fa-regular fa-truck-clock"></i>
                                            <div className="line" style={{
                                                borderLeft:
                                                    4 < order?.tracking_number!
                                                        ? '1px solid #25b003'
                                                        : 4 === order?.tracking_number!
                                                            ? '1px solid #e5780b'
                                                                :'1px dashed #9fa6bc'
                                            }}></div>
                                        </div>
                                    </div>
                                    <div className="timeline-content" style={{marginBottom: 4 <= order?.tracking_number! ? '0' : '20px'}}>
                                        <span className="title">Shipped</span>
                                        <span className="sub">Pending</span>
                                    </div>
                                </div>
                                <div className="order-delivery">
                                    <div className="timeline-order">
                                        <div className="time-order">
                                            <span className="date">23 August, 2023</span>
                                            <span className="time">10:30 AM</span>
                                        </div>
                                        <div className={`icon ${5 <= order?.tracking_number! ? 'success' : 5 - 1 === order?.tracking_number! ? 'process' : 'pending'}`}>
                                            <i className="fa-regular fa-truck-fast"></i>
                                        </div>
                                    </div>
                                    <div className="timeline-content">
                                        <span className="title">Delivered</span>
                                        <span className="sub">Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderDetailUser;