import './CustomerDetail.css';
import Avatar from '../../../../images/public/profile-image.png';

const CustomerDetail: React.FC = () => {
    return (
        <div className="customer-detail">
            <div className="customer-heading">
                <h3 className="title">Customer details</h3>
                <div className="actions">
                    <div className="btn-delete">
                        <i className="fa-solid fa-trash-can"></i>
                        <span className="text">Delete customer</span>
                    </div>
                    <div className="btn-reset-password">
                        <i className="fa-solid fa-key"></i>
                        <span className="text">Reset password</span>
                    </div>
                </div>
            </div>
            <div className="customer-info">
                <div className="left">
                    <div className="top">
                        <div className="avatar">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="c-info">
                            <h3 className="name">Ansolo Lazinatov</h3>
                            <span className="state">Joined 3 months ago</span>

                            <div className="social">
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="follow">
                            <span className="title">Following</span>
                            <span className="sub">297</span>
                        </div>
                        <div className="project">
                            <span className="title">Projects</span>
                            <span className="sub">56</span>
                        </div>
                        <div className="completion">
                            <span className="title">Completion</span>
                            <span className="sub">97</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="heading">
                        <h3 className="title">Default Address</h3>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="address">
                        <span className="label">Address</span>
                        <span className="text">Shatinon Mekalan <br />
                            Vancouver, British Columbia <br />
                            Canada
                        </span>
                    </div>
                    <div className="email">
                        <span className="label">Email</span>
                        <span className="text">shatinon@jeemail.com</span>
                    </div>
                    <div className="phone">
                        <span className="label">Phone</span>
                        <span className="text">+1234567890</span>
                    </div>
                </div>
            </div>

            <div className="note-cus">
                <h3 className="title">Notes on Customer</h3>
                <textarea rows={4}></textarea>
                <div className="btn-add-note">
                    <span className="text">Add Note</span>
                </div>

                <div className="feedback-cus">
                    <div className="feedback-item-cus">
                        <span className="text">Gave us a nice feedback</span>
                        <span className="time">12 Nov, 2020</span>
                    </div>
                    <div className="feedback-item-cus">
                        <span className="text">Customer added product to cart and then forgot to checkout. Later knocked the customer support to ask about update on shipping. Later, settled on “One day Shipping” though “Free delivery” was preferred. Overall good behavior.</span>
                        <span className="time">23 Dec, 2019</span>
                    </div>
                    <div className="feedback-item-cus">
                        <span className="text">User of this support ticket won a 100% off coupon and received top-notch service from the technical support engineer. Along with providing a good review, user highly appreciated the team.</span>
                        <span className="time">2 Oct, 2020</span>
                    </div>
                    <div className="feedback-item-cus">
                        <span className="text">Customer returned and bought 2 related items, which is currently being shipped. Customer chose “One day Shipping”. Additional notes were added regarding customised wrapping. Customer submitted positive review.</span>
                        <span className="time">26 Apr, 2019</span>
                    </div>
                </div>
            </div>

            <div className="table-orders-cus">
                <h3 className="title">Orders <span className="total-order-cus">(15)</span></h3>
                <table className="table">
                    <thead>
                        <tr>
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
                                <div className="date">
                                    <h3 className="title">date</h3>
                                    <div className="filter">
                                        <i className="fa-duotone fa-solid fa-caret-up"></i>
                                        <i className="fa-duotone fa-solid fa-caret-down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status paid">
                                    PAID
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status fulfilled">
                                    ORDER FULFILLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status cancelled">
                                    CANCELLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status cancelled">
                                    ORDER CANCELLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status paid">
                                    PAID
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status cancelled">
                                    ORDER CANCELLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status failed">
                                    FAILED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status failed">
                                    DELIVERY DELAYED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status paid">
                                    PAID
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status failed">
                                    DELIVERY DELAYED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status paid">
                                    PAID
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status fulfilled">
                                    ORDER FULFILLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status cancelled">
                                    CANCELLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status cancelled">
                                    ORDER CANCELLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status paid">
                                    PAID
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status cancelled">
                                    ORDER CANCELLED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status failed">
                                    FAILED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status failed">
                                    DELIVERY DELAYED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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
                                <span className="b-order-number">
                                    #2453
                                </span>
                            </td>
                            <td>
                                <span className="b-total">
                                    $87
                                </span>
                            </td>
                            <td>
                                <span className="b-payment-status paid">
                                    PAID
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-fulfilment-status failed">
                                    DELIVERY DELAYED
                                    <i className="fa-solid fa-check"></i>
                                </span>
                            </td>
                            <td>
                                <span className="b-delivery">
                                    Cash on delivery
                                </span>
                            </td>
                            <td>
                                <span className="b-date">
                                    Dec 12, 12:56 PM
                                </span>
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

export default CustomerDetail;