import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './UserDetail.css';
import Avatar from '../../images/public/profile-image.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { User } from '../../models/user';
import { getUserDetail, updateUser } from '../../api/user.api';
import { Order } from '../../models/order';
import { formatCurrency, formatDateTable, getOrderByUserId } from '../../api/order.api';

const UserDetail: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [orders, setOrders] = useState<Order[]>([]);

    const handleUpdateClick = () => {
        setIsEditing(!isEditing);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }

    useEffect(() => {
        const update = async () => {
            if (firstName !== "" && lastName !== "" && email !== "" && phoneNumber !== "") {
                if (firstName !== user?.first_name || lastName !== user?.last_name || phoneNumber !== user?.phone_number || address !== user?.address) {
                    const userId = localStorage.getItem('user_id');
                    const userUpdate: User = {
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        phone_number: phoneNumber,
                        address: address
                    }
                    const response = await updateUser(userUpdate, Number(userId));
                    console.log(response)
                }
            }
        }

        if (!isEditing) {
            update();
        }
    }, [isEditing]);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await getUserDetail();
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setPhoneNumber(response.data.phone_number);
            setAddress(response.data.address);
            setEmail(response.data.email);
            setUser(response.data);
        }

        const fetchOrders = async () => {
            const userId = localStorage.getItem("user_id");
            const response: any = await getOrderByUserId(Number(userId));
            setOrders(response.data);
        }

        fetchOrders();
        fetchUser();
    }, [])

    return (
        <>
            <Header />
            <div className="user-detail">
                <div className="user-info">
                    <div className="left">
                        <div className="top">
                            <div className="avatar">
                                <img src={Avatar} alt="" />
                            </div>
                            <div className="c-info">
                                {isEditing ? (
                                    <div className="form-edit">
                                        <input
                                            className="last-name"
                                            type="text"
                                            name="lastName"
                                            value={lastName}
                                            onChange={handleLastNameChange}
                                        />
                                        <span style={{ marginRight: '5px' }}>,</span>
                                        <input
                                            className='first-name'
                                            type="text"
                                            name="firstName"
                                            value={firstName}
                                            onChange={handleFirstNameChange}
                                        />
                                    </div>
                                ) : (
                                    <h3 className="name">{lastName + ", " + firstName}</h3>
                                )}
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
                            <i className="fa-solid fa-pen" onClick={handleUpdateClick}></i>
                        </div>
                        <div className="address">
                            <span className="label">Address</span>
                            {isEditing ? (
                                <div className="form-edit">
                                    <input
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={handleAddressChange}
                                    />
                                </div>
                            ) : (
                                <span className="text">{address}</span>
                            )}
                        </div>
                        <div className="email">
                            <span className="label">Email</span>
                            <span className="text">{email}</span>
                        </div>
                        <div className="phone">
                            <span className="label">Phone</span>
                            {isEditing ? (
                                <div className="form-edit">
                                    <input
                                        type="text"
                                        name="address"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                    />
                                </div>
                            ) : (
                                <span className="text">{phoneNumber}</span>
                            )}
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
                            <span className="text">Customer added product to cart and then forgot to checkout. Later knocked the user support to ask about update on shipping. Later, settled on “One day Shipping” though “Free delivery” was preferred. Overall good behavior.</span>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => (
                                    <tr key={order.id}>
                                        <td>
                                            <Link className="b-order-number" to={`/order-detail/${order.id}`}>
                                                #{order.id}
                                            </Link>
                                        </td>
                                        <td>
                                            <span className="b-total">
                                                {formatCurrency(order.total_money)}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`b-payment-status ${order.payment_status === true ? 'paid' : 'unpaid'}`}>
                                                {order.payment_status === true ? 'PAID' : 'UNPAID'}
                                                <i className="fa-solid fa-check"></i>
                                            </span>
                                        </td>
                                        <td>
                                            <span className="b-fulfilment-status cancelled">
                                                READY TO PICKUP
                                                <i className="fa-solid fa-check"></i>
                                            </span>
                                        </td>
                                        <td>
                                            <span className="b-delivery">
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
            <Footer />
        </>
    )
}

export default UserDetail;