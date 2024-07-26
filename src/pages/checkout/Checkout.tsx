import React, { useEffect, useState } from 'react';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Checkout.css';
import { Product } from '../../models/product';
import { deleteCartItemByUserId, getCartFromLocalStorage, getCartItemByUserId } from '../../api/cart.item.api';
import { getProductsByIds } from '../../api/product.api';
import { PaymentMethod } from '../../models/payment.method';
import { getPaymentMethods } from '../../api/payment.method.api';
import { Address } from '../../models/address';
import { getDistrict, getProvinceAndCity, getWardAndCommune } from '../../api/address.api';
import { getUserDetail } from '../../api/user.api';
import { User } from '../../models/user';
import { OrderDTO } from '../../dtos/order.dto';
import { CartItemDTO } from '../../dtos/cart.item.dto';
import { formatCurrency, insertOrder } from '../../api/order.api';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { callbackHandler, createPayment } from '../../api/payment.api';
import Cookies from 'js-cookie';

const Checkout: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [cart, setCart] = useState<Map<number, number> | null>(null);
    const [error, setError] = useState("");
    const [quantities, setQuantities] = useState<number[]>([]);
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [provinces, setProvince] = useState<Address[]>([]);
    const [districs, setDistrics] = useState<Address[]>([]);
    const [wards, setWards] = useState<Address[]>([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState<string>('');
    const [selectedDistricId, setSelectedDistricId] = useState<string>('');
    const [selectedWardId, setSelectedWardId] = useState<string>('');
    const [detailAddress, setDetailAddress] = useState<string>('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [user, setUser] = useState<User | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [cartItems, setCartItems] = useState<CartItemDTO[]>([]);
    const navigate = useNavigate();


    const location = useLocation();
    const responseCode = new URLSearchParams(location.search).get('vnp_ResponseCode');
    
    useEffect(() => {
        if (responseCode === '00') {
            console.log("hello")
            handleCallback();
        }
        else {
            localStorage.removeItem("order")
        }
    }, [responseCode])

    const handleCallback = async () => {
        const userId = localStorage.getItem("user_id")
        const storedOrder = localStorage.getItem('order');
        if (storedOrder) {
            const order = JSON.parse(storedOrder) as OrderDTO;
            localStorage.removeItem('order');
            order.payment_status = true;
            const response = await insertOrder(order);
            console.log(response)
            if (response?.status! === 200) {
                await deleteCartItemByUserId(Number(userId));
                const orderId = response?.data.id;
                console.log("OK")
                navigate(`/order-received/${orderId}`)
            }
        }
    }


        useEffect(() => {
            const fetchCartItems = async () => {
                try {
                    const userId = localStorage.getItem('user_id');
                    const token = localStorage.getItem('token');
                    if (userId && token) {
                        const response = await getCartItemByUserId(Number(userId));
                        setCartItems(response?.data.data_list);
                        const productIds: number[] = [];
                        const quantities: number[] = [];
                        response?.data.data_list.map(
                            (item: any) => {
                                productIds.push(item.product_id)
                                quantities.push(item.quantity);
                            }
                        )
                        setQuantities(quantities)
                        const items = await getProductsByIds(productIds);
                        setProducts(items);
                        const newTotalPrice = items.reduce((sum, product, index) => {
                            return sum + (product.price || 0) * quantities[index];
                        }, 0);
                        setTotalPrice(newTotalPrice);
                    } else {
                        setCart(await getCartFromLocalStorage());
                        const productIds = Array.from(cart?.keys()!);
                        const quantities = Array.from(cart?.values()!);
                        setQuantities(quantities);
                        console.log(quantities)
                        const items = await getProductsByIds(productIds);
                        setProducts(items);
                        const newTotalPrice = items.reduce((sum, product, index) => {
                            return sum + (product.price || 0) * quantities[index];
                        }, 0);
                        setTotalPrice(newTotalPrice);
                    }
                } catch (err) {
                    setError('Failed to fetch cart items.')
                }
            }

            const fetchPaymentMethod = async () => {
                try {
                    const response = await getPaymentMethods();
                    setPaymentMethods(response.data)
                } catch (error) {

                }
            }

            const fetchProvinceAndCity = async () => {
                try {
                    const response = await getProvinceAndCity();
                    setProvince(response.data.data)
                } catch (error) {

                }
            }

            const fetchUser = async () => {
                try {
                    const response = await getUserDetail();
                    setUser(response.data);
                    setFirstName(response.data.first_name)
                    setLastName(response.data.last_name)
                    setEmail(response.data.email)
                    setPhone(response.data.phone_number)
                } catch (error) {

                }
            }

            fetchUser();
            fetchProvinceAndCity();
            fetchPaymentMethod();
            fetchCartItems();
        }, [])

        const handleDetailAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setDetailAddress(event.target.value);
            if (event.target.value !== '') {
                setErrorDetailAddress("")
            }
            else {
                setErrorDetailAddress("Billing Detail address is a required field.")
            }
        };

        const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(event.target.value);
            if (event.target.value !== '') {
                setErrorFirstName("")
            }
            else {
                setErrorFirstName("Billing First name is a required field.")
            }
        };

        const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(event.target.value);
            if (event.target.value !== '') {
                setErrorLastName("")
            }
            else {
                setErrorLastName("Billing Last name is a required field.")
            }
        };

        const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(event.target.value);
            if (event.target.value === '') {
                setErrorPhoneNumber("Billing Phone number is a required field.")
            }
            else {
                const phoneRegex = /^(0\d{9})$/;
                const isValidPhoneNumber = phoneRegex.test(event.target.value);
                if (!isValidPhoneNumber) {
                    setErrorPhoneNumber("Invalid phone number.")
                }
                else {
                    setErrorPhoneNumber("")
                }
            }
        };

        const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
            if (event.target.value === '') {
                setErrorEmail("Billing Email is a required field.")
            }
            else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValidEmail = emailRegex.test(email);
                if (!isValidEmail) {
                    setErrorEmail("Invalid email.")
                }
                else {
                    setErrorEmail("")
                }
            }
        };

        const handlePostCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPostCode(event.target.value);
        };

        const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setCompanyName(event.target.value);
        };

        const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNote(event.target.value);
        };

        const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedProvinceId(event.target.value);
            if (event.target.value !== '') {
                setErrorProvince("")
            }
            else {
                setErrorProvince("Billing Province/City is a required field.")
            }
        };

        const handleDistricChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedDistricId(event.target.value);
            if (event.target.value !== '') {
                setErrorDistric("")
            }
            else {
                setErrorDistric("Billing Distric is a required field.")
            }
        };

        const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedWardId(event.target.value);
            if (event.target.value !== '') {
                setErrorWard("")
            }
            else {
                setErrorWard("Billing Ward is a required field.")
            }
        }

        useEffect(() => {
            const fetchDistric = async () => {
                try {
                    const response = await getDistrict(selectedProvinceId);
                    setDistrics(response.data.data)
                } catch (error) {

                }
            }

            fetchDistric();
        }, [selectedProvinceId])

        useEffect(() => {
            const fetchWardAndCommune = async () => {
                try {
                    const response = await getWardAndCommune(selectedDistricId);
                    setWards(response.data.data)
                } catch (error) {

                }
            }
            fetchWardAndCommune();
        }, [selectedDistricId])

        const [errorFirstName, setErrorFirstName] = useState("");
        const [errorLastName, setErrorLastName] = useState("");
        const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
        const [errorEmail, setErrorEmail] = useState("");
        const [errorDetailAddress, setErrorDetailAddress] = useState("");
        const [errorProvince, setErrorProvince] = useState("");
        const [errorDistric, setErrorDistric] = useState("");
        const [errorWard, setErrorWard] = useState("");

        const handlePlaceOrder = async () => {
            const userId = localStorage.getItem("user_id");

            if (firstName === '' && user?.first_name === '') {
                setErrorFirstName("Billing First name is a required field.");
            } else {
                setErrorFirstName("");
            }

            if (lastName === '' && user?.last_name === '') {
                setErrorLastName("Billing Last name is a required field.");
            } else {
                setErrorLastName("")
            }

            if (phone === '' && user?.phone_number === '') {
                setErrorPhoneNumber("Billing Phone number is a required field.")
            } else {
                const phoneRegex = /^(0\d{9})$/;
                const isValidPhoneNumber = phoneRegex.test(phone);
                if (!isValidPhoneNumber) {
                    setErrorPhoneNumber("Invalid phone number.")
                }
                else {
                    setErrorPhoneNumber("")
                }
            }

            if (email === '' && user?.email === '') {
                setErrorEmail("Billing Email is a required field.");
            }
            else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValidEmail = emailRegex.test(email);
                if (!isValidEmail) {
                    setErrorEmail("Invalid email.")
                }
                else {
                    setErrorEmail("");
                }
            }

            if (detailAddress === '') {
                setErrorDetailAddress("Billing Detail address is a required field.")
            } else {
                setErrorDetailAddress("")
            }

            if (selectedProvinceId === '') {
                setErrorProvince("Billing Province/City is a required field.")
            } else {
                setErrorProvince("")
            }

            if (selectedDistricId === '') {
                setErrorDistric("Billing Distric is a required field.")
            } else {
                setErrorDistric("")
            }

            if (selectedWardId === '') {
                setErrorWard("Billing Ward is a required field.")
            } else {
                setErrorWard("");
            }

            if (errorFirstName === '' && errorLastName === '' && errorPhoneNumber === ''
                && errorEmail === '' && errorDetailAddress === '' && errorProvince === ''
                && errorDistric === '' && errorWard === ''
            ) {
                const province = provinces.find(province => province.id === selectedProvinceId);
                const distric = districs.find(distric => distric.id === selectedDistricId);
                const ward = wards.find(ward => ward.id === selectedWardId);

                const address = detailAddress.trim() + ', ' + ward?.name_en + ', ' + distric?.name_en + ', ' + province?.name_en;
                const order: OrderDTO = {
                    user_id: Number(userId),
                    first_name: firstName === '' ? user?.first_name! : firstName,
                    last_name: lastName === '' ? user?.last_name! : lastName,
                    email: email === '' ? user?.email! : email,
                    phone_number: phone === '' ? user?.phone_number! : phone,
                    address: address,
                    note: note,
                    sub_total: totalPrice,
                    total_money: totalPrice,
                    payment_status: false,
                    shipping_cost: 0,
                    payment_cost: 0,
                    shipping_address: address,
                    payment_method_id: Number(selectedPaymentMethod),
                    shipping_method_id: 3,
                    cart_items: cartItems
                }

                if (selectedPaymentMethod === '1') {
                    const response = await createPayment(Number(totalPrice + 15000), "NCB");
                    if (response?.data.url) {
                        const orderJSON = JSON.stringify(order);
                        localStorage.setItem('order', orderJSON);
                        window.location.href = response?.data.url;
                    }
                }
                else {
                    const response = await insertOrder(order);
                    if (response?.status === 200) {
                        await deleteCartItemByUserId(Number(userId));
                        const orderId = response.data.id;
                        navigate(`/order-received/${orderId}`)
                    }
                }
            }
        }

        const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedPaymentMethod(event.target.value);
        };
        return (
            <>
                <Header />
                <div className="checkout">
                    <div className="has-coupon">
                        <span>Have a coupon?</span>
                        <button className="add-coupon">
                            <span>Click here to enter your code</span>
                            <i className="fa-regular fa-angle-right"></i>
                        </button>
                    </div>
                    <div className="content">
                        <div className="billing-detail">
                            <div className="heading">
                                <h3 className='title'>Billing details</h3>
                            </div>
                            <div className="content">
                                <div className="first-name">
                                    <span className="title">First name *</span>
                                    <input className="input__first-name" type="text" placeholder="" onChange={handleFirstNameChange} value={firstName} />
                                </div>
                                {
                                    errorFirstName && (
                                        <span className='error'>{errorFirstName}</span>
                                    )
                                }
                                <div className="last-name">
                                    <span className="title">Last name *</span>
                                    <input className="input__last-name" type="text" placeholder="" onChange={handleLastNameChange} value={lastName} />
                                </div>
                                {
                                    errorLastName && (
                                        <span className="error">{errorLastName}</span>
                                    )
                                }
                                <div className="company-name">
                                    <span className="title">Company name (optional)</span>
                                    <input className="input__company-name" type="text" placeholder="" onChange={handleCompanyNameChange} />
                                </div>
                                <div className="province-city">
                                    <span className="title">Province / City *</span>
                                    <select
                                        name=""
                                        id=""
                                        className="select__province-city"
                                        value={selectedProvinceId}
                                        onChange={handleProvinceChange}
                                    >
                                        <option value="" className="province-city__item">Select Province/City</option>
                                        {
                                            provinces.map(province => (
                                                <option key={province.id} value={province.id} className="province-city__item">{province.name_en}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {
                                    errorProvince && (
                                        <span className="error">{errorProvince}</span>
                                    )
                                }
                                <div className="distric">
                                    <span className="title">Distric *</span>
                                    <select
                                        name=""
                                        id=""
                                        className="select__distric"
                                        value={selectedDistricId}
                                        onChange={handleDistricChange}
                                    >
                                        <option value="" className="province-city__item">Select Distric</option>
                                        {
                                            districs.map(distric => (
                                                <option key={distric.id} value={distric.id} className="distric__item">{distric.name_en}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {
                                    errorDistric && (
                                        <span className="error">{errorDistric}</span>
                                    )
                                }
                                <div className="ward-commune">
                                    <span className="title">Ward / Commune *</span>
                                    <select
                                        name=""
                                        id=""
                                        className="select__ward-commune"
                                        value={selectedWardId}
                                        onChange={handleWardChange}
                                    >
                                        <option value="" className="province-city__item default-option">Select Ward / Commune</option>
                                        {
                                            wards.map(ward => (
                                                <option key={ward.id} value={ward.id} className="ward-commune__item">{ward.name_en}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {
                                    errorWard && (
                                        <span className="error">{errorWard}</span>
                                    )
                                }
                                <div className="detail-address">
                                    <span className="title">Detail address *</span>
                                    <input className="input__house-number" type="text" placeholder="House number and street name" onChange={handleDetailAddressChange} />
                                    <input className="input__apartment" type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                                </div>
                                {
                                    errorDetailAddress && (
                                        <span className="error">{errorDetailAddress}</span>
                                    )
                                }
                                <div className="post-code">
                                    <span className="title">Postcode / ZIP (optional)</span>
                                    <input className="input__post-code" type="text" placeholder="" onChange={handlePostCodeChange} />
                                </div>
                                <div className="phone">
                                    <span className="title">Phone *</span>
                                    <input className="input__phone" type="text" placeholder="" onChange={handlePhoneChange} value={phone} />
                                </div>
                                {
                                    errorPhoneNumber && (
                                        <span className="error">{errorPhoneNumber}</span>
                                    )
                                }
                                <div className="email">
                                    <span className="title">Email address *</span>
                                    <input className="input__email" type="email" placeholder="" onChange={handleEmailChange} value={email} />
                                </div>
                                {
                                    errorEmail && (
                                        <span className="error">{errorEmail}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div className="add-info">
                            <div className="heading">
                                <h3 className='title'>Additional information</h3>
                            </div>
                            <div className="content">
                                <div className="note">
                                    <span className="title">Order notes (optional)</span>
                                    <textarea className="add-note" placeholder="Notes about your order, e.g. special notes for delivery" rows={3} cols={50} onChange={handleNoteChange}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order">
                        <h3 className="title">Your Orders</h3>
                        <table className="order-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products && products.map((product: Product, index) => (
                                        <tr key={product.id}>
                                            <td className='name-product'>
                                                <span className="name">{product.title}</span>
                                                <span className="quantity"> × {quantities[index]}</span>
                                            </td>
                                            <td className='price-product'>{formatCurrency(product.price! * quantities[index])}</td>
                                        </tr>
                                    ))
                                }
                                <tr className='subtotal'>
                                    <td className='title'>Subtotal</td>
                                    <td className='sub'>{formatCurrency(totalPrice)}</td>
                                </tr>
                                <tr className='total'>
                                    <td className='title'>Total</td>
                                    <td className='sub'>{formatCurrency(totalPrice + 15000)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="payment">
                            <ul className="payment-method">
                                {
                                    paymentMethods.map(paymentMethod => (
                                        <li className="payement-method__bacs" key={paymentMethod.id}>
                                            <input id="payment-method_input" type="radio" className="input-radio" name="payment_method" value={paymentMethod.id} onChange={handlePaymentMethodChange} />
                                            <label htmlFor="payment-method_item">{paymentMethod.name}</label>
                                            <div className="payment_box payment-method_item">
                                                <p>{paymentMethod.description}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="attention">
                                <span>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="/">privacy policy</a>.</span>
                            </div>
                        </div>
                        <button className="place-order" onClick={handlePlaceOrder}>
                            <span>Place order</span>
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    export default Checkout;