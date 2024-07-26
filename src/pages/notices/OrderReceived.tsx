import React, { useEffect, useState } from 'react';
import './OrderReceived.css';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import { useParams } from 'react-router-dom';
import { Order } from '../../models/order';
import { formatCurrency, formatDate, getDetailOrder } from '../../api/order.api';
import { PaymentMethod } from '../../models/payment.method';
import { getPaymentMethodById } from '../../api/payment.method.api';
import { ShippingMethod } from '../../models/shipping.method';
import { getShippingMethodById } from '../../api/shipping.api';
import { OrderDetail } from '../../models/order.detail';
import { getDetailOrderDetailByOrderId } from '../../api/order.detail';
import { Product } from '../../models/product';
import { getProductsByIds } from '../../api/product.api';

const OrderReceived: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [order, setOrder] = useState<Order | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
    const [shippingMethod, setShippingMethod] = useState<ShippingMethod | null>(null);
    const [orderDetails, setOrderDetails] = useState<OrderDetail[]> ([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await getDetailOrder(Number(id));
            setOrder(response?.data);
        }
    
        const fetchOrderDetailsByOrderId = async () => {
            const response = await getDetailOrderDetailByOrderId(Number(id));
            setOrderDetails(response?.data)
        }

        fetchOrder();
        fetchOrderDetailsByOrderId();
    }, [id]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productIds: number [] = [];
            orderDetails.map(orderDetail => productIds.push(orderDetail.product_id));
            const response = await getProductsByIds(productIds);
            setProducts(response);
        }

        fetchProducts();
    }, [orderDetails])
    
    useEffect(() => {
        const fetchPaymentMethod = async () => {
            if (order?.payment_method_id) {
                const response = await getPaymentMethodById(order?.payment_method_id);
                setPaymentMethod(response.data);
            }
        }
    
        const fetchShippingMethod = async () => {
            if (order?.shipping_method_id) {
                const response = await getShippingMethodById(order?.shipping_method_id);
                setShippingMethod(response.data);
            }
        }
    
        if (order) {
            fetchPaymentMethod();
            fetchShippingMethod();
        }
    }, [order]);

    return ( 
        <>
            <Header />
            <div className="order-received">
                <h1 className="message">Thank you. Your order has been received.</h1>
                <div className="order-received__summary">
                    <p className="summary__order-number">Order-number: <strong>{order?.id}</strong></p>
                    <p className="summary__date">Date: <strong>{formatDate(order?.order_date!)}</strong></p>
                    <p className="summary__total">Total: <strong>{formatCurrency(order?.total_money!)}</strong></p>
                    <p className="summary__payment-method">Payment method: <strong>{paymentMethod?.name}</strong></p>
                    <p className="summary__shipping-method">Shipping method: <strong>{shippingMethod?.name}</strong></p>
                    <p className="summary__payment-status">Payment status: <strong>{order?.payment_status === true ? `Paid` : `Unpaid`}</strong></p>
                </div>

                <h1 className="title">Order details</h1>
                <div className="order-received__detail">
                    <table className="products">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products && products.map((product, index) => (
                                    <tr key={product.id}>
                                        <td className="product-name">{product.title}<strong className="quantity"> x {orderDetails[index].number_of_product}</strong></td>
                                        <td className="price-product">{formatCurrency(product.price!)}</td>
                                    </tr>
                                ))
                            }
                            <tr className='subtotal'>
                                <td className='title'>Subtotal:</td>
                                <td className='sub'>{formatCurrency(order?.sub_total!)}</td>
                            </tr>
                            <tr className='payment-method'>
                                <td className='title'>Payment method:</td>
                                <td className='sub'>{formatCurrency(paymentMethod?.cost!)}</td>
                            </tr>
                            <tr className='shipping-method'>
                                <td className='title'>Shipping method:</td>
                                <td className='sub'>{formatCurrency(shippingMethod?.cost!)}</td>
                            </tr>
                            <tr className='total'>
                                <td className='title'>Total</td>
                                <td className='sub'>{formatCurrency(order?.total_money!)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OrderReceived;