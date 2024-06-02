import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './Checkout.css';

function Checkout () {
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
                                <input className="input__first-name" type="text" placeholder=""/>
                            </div>
                            <div className="last-name">
                                <span className="title">Last name *</span>
                                <input className="input__last-name" type="text" placeholder=""/>
                            </div>
                            <div className="company-name">
                                <span className="title">Company name (optional)</span>
                                <input className="input__company-name" type="text" placeholder=""/>
                            </div>
                            <div className="country-region">
                                <span className="title">Country / Region *</span>
                                <select name="" id="" className="select__country-region">
                                    <option value="VN" className="country-region__item">Vietnam</option>
                                    <option value="US" className="country-region__item">America</option>
                                </select>
                            </div>
                            <div className="street-address">
                                <span className="title">Street address *</span>
                                <input className="input__house-number" type="text" placeholder="House number and street name"/>
                                <input className="input__apartment" type="text" placeholder="Apartment, suite, unit, etc. (optional)"/>
                            </div>
                            <div className="post-code">
                                <span className="title">Postcode / ZIP (optional)</span>
                                <input className="input__post-code" type="text" placeholder=""/>
                            </div>
                            <div className="town-city">
                                <span className="title">Town / City *</span>
                                <input className="input__town-city" type="text" placeholder=""/>
                            </div>
                            <div className="phone">
                                <span className="title">Phone *</span>
                                <input className="input__phone" type="text" placeholder=""/>
                            </div>
                            <div className="email">
                                <span className="title">Email address *</span>
                                <input className="input__email" type="email" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="add-info">
                        <div className="heading">
                            <h3 className='title'>Additional information</h3>
                        </div>
                        <div className="content">
                            <div className="note">
                                <span className="title">Order notes (optional)</span>
                                <textarea className="add-note" placeholder="Notes about your order, e.g. special notes for delivery" rows={3} cols={50}></textarea>
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
                            <tr>
                                <td className='name-product'>
                                    <span className="name">Led 4K Smart TV Vantablack Expo</span>
                                    <span className="quantity">× 1</span>
                                </td>
                                <td className='price-product'>$1,290</td>
                            </tr>
                            <tr>
                                <td className='name-product'>
                                    <span className="name">Fixed-Wing Surveillance Drone</span>
                                    <span className="quantity">× 2</span>
                                </td>
                                <td className='price-product'>$2,900</td>
                            </tr>
                            <tr>
                                <td className='name-product'>
                                    <span className="name">Universal Grey Smartphone Case</span>
                                    <span className="quantity">× 1</span>
                                </td>
                                <td className='price-product'>$80</td>
                            </tr>
                            <tr className='subtotal'>
                                <td className='title'>Subtotal</td>
                                <td className='sub'>$4,270</td>
                            </tr>
                            <tr className='total'>
                                <td className='title'>Total</td>
                                <td className='sub'>$4,270</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="payment"> 
                        <ul className="payment-method"> 
                            <li className="payement-method__bacs">
                                <input id="payment-method_bacs" type="radio" className="input-radio" name="payment_method" value="bacs" />
                                <label htmlFor="payment-method_bacs">Direct bank transfer</label>
                                <div className="payment_box payment-method_bacs">
			                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                </div>
                            </li>
                            <li className="payement-method__cheque">
                                <input id="payment-method_cheque" type="radio" className="input-radio" name="payment_method" value="cheque"/>
                                <label htmlFor="payment-method_cheque">Check payments</label>
                                <div className="payment_box payment-method_cheque">
			                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
		                        </div>
                            </li>
                            <li className="payement-method__cod">
                                <input id="payment-method_cod" type="radio" className="input-radio" name="payment_method" value="cod" />
                                <label htmlFor="payment-method_cod">Cash on delivery</label>
                                <div className="payment_box payment_method_cod">
                                    <p>Pay with cash upon delivery.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="attention">
                            <span>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="/">privacy policy</a>.</span>
                        </div>
                    </div>
                    <button className="place-order">
                        <span>Place order</span>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout;