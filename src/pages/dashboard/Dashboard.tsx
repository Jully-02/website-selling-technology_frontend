import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import DashboardMain from './components/dashboardmain/DashboardMain';
import Products from './components/products/Products';
import ProductUpload from './components/product-upload/ProductUpload';
import Orders from './components/orders/Orders';
import OrderDetailAdmin from './components/orderdetail/OrderDetailAdmin';
import Customers from './components/customers/Customers';
import CustomerDetail from './components/customerdetail/CustomerDetail';

const Dashboard: React.FC = () => {
    const [isSidebar, setIsSidebar] = useState(1);
    const [orderId, setOrderId] = useState(0);

    const handleSetOrderId = (orderId: number) => {
        setOrderId(orderId);
    }

    return (
        <div className='dashboard'>
            <Navbar />
            <div className="main d-flex">
                <div className="sidebar-wrapper">
                    <Sidebar setIsSidebar={setIsSidebar} />
                </div>

                <div className="content">
                    <div className="right-content w-100">
                        {isSidebar === 1 && <DashboardMain />}
                        {isSidebar === 21 && <Products />}
                        {isSidebar === 22 && <ProductUpload />}
                        {isSidebar === 3 && <Orders handleSetOrderId={handleSetOrderId} setIsSidebar={setIsSidebar}/>}
                        {isSidebar === 5 && <OrderDetailAdmin orderId={orderId}/>}
                        {isSidebar === 4 && <Customers />}
                        {isSidebar === 6 && <CustomerDetail />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;