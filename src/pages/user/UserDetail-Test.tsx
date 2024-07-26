import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './UserDetail-Test.css';
import ImageProfile from '../../images/public/profile-image.png'
import React, { useEffect, useState } from 'react';
import { User } from '../../models/user';
import { getUserDetail } from '../../api/user.api';

const UserDetailTest: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    // const [quote, setQuote] = useState("");


    const [formData, setFormData] = useState({
        firstName: user?.first_name || '',
        lastName: user?.last_name || '',
        email: user?.email || '',
        phoneNumber: user?.phone_number || '',
        address: 'fulbariFranciso,4200.'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Thực hiện logic lưu dữ liệu, ví dụ gửi dữ liệu lên server
    }

    const handlePhoneNumberChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const handleLastNameChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleFirstNameChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const handleAddressChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }
    useEffect(() => {
        const fetchUser = async () => {
            const response = await getUserDetail();
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setPhoneNumber(response.data.phone_number);
            setAddress(response.data.address);
            setUser(response.data);
        }

        fetchUser();
    }, [])
    return (
        <>
            <Header />
            <div className="user-content">
                <div className="info-summary">
                    <div className="info-avatar">
                        <div className="avatar">
                            <img src={ImageProfile} alt="" />
                        </div>
                        <div className="info">
                            {isEditing ? (
                                <div className="form-edit">
                                    <input
                                        className="last-name"
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                    />
                                    <span>,</span>
                                    <input
                                        className='first-name'
                                        type="text"
                                        name="firstName"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                    />
                                </div>
                            ) : (
                                <h1 className="name">{lastName + ", " + firstName}</h1>
                            )}
                            <p className="sub">Ui/Ux Desinger</p>
                        </div>
                    </div>
                    <div className="info-content">
                        <div className="phone">
                            <div className="icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            {
                                isEditing ? (
                                    <div className="form-edit">
                                        <input 
                                            type="text"
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                        />
                                    </div>
                                ) : (
                                    <span className="content">{phoneNumber}</span>
                                )
                            }
                        </div>
                        <div className="email">
                            <div className="icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <span className="content">{user?.email}</span>
                        </div>
                        <div className="address">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
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
                                <div className="content">
                                    <span className="text">{address}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="info-details">
                    <div className="info">
                        <h3 className="message">HELLO, </h3>
                        <h1 className="name">{lastName + ", " + firstName}</h1>
                        <p className="introduce">UX/UI Designer and Developer</p>
                        <div className="quote">
                            <p className="text">There are many variations of sum availabled
                                in alley of type and scrambled it some.</p>
                        </div>
                        <div className="button-update" onClick={isEditing ? handleSaveClick : handleUpdateClick}>
                            <div className="icon">
                                <i className="fa-solid fa-pen"></i>
                            </div>
                            <span className="text">{isEditing ? 'Save Info' : 'Update Info'}</span>
                        </div>
                        <div className="follow">
                            <div className="title">Follow Me: </div>
                            <div className="content">
                                <div className="facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className="pinterest">
                                    <i className="fa-brands fa-pinterest-p"></i>
                                </div>
                                <div className="twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div className="instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="order">
                            <div className="detail-order">
                                <p className="text">Order</p>
                            </div>
                            <div className="icon-order">
                                <i className="fa-solid fa-bags-shopping"></i>
                            </div>
                        </div>
                        <div className="cart">
                            <div className="detail-cart">
                                <p className="text">Cart</p>
                            </div>
                            <div className="icon-cart">
                                <i className="fa-regular fa-cart-plus"></i>
                            </div>
                        </div>
                        <div className="logout">
                            <div className="detail-logout">
                                <p className="text">Logout</p>
                            </div>
                            <div className="icon-logout">
                                <i className="fa-solid fa-left-from-bracket"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UserDetailTest;