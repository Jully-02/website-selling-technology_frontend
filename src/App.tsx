import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/Home';
import ProductDetail from './pages/product-detail/ProductDetail';
import Shop from './pages/shop/Shop';
import TermCondition from './pages/term-condition/TermCondition';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Wishlist from './pages/wishlist/Wishlist';
import Auth from './pages/auth/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActiveAccount from './pages/notices/ActiveAccount';
import SignUpState from './pages/notices/SignUpState';
import OrderReceived from './pages/notices/OrderReceived';
import UserDetailTest from './pages/user/UserDetail-Test';
import Dashboard from './pages/dashboard/Dashboard';
import CustomerDetail from './pages/dashboard/components/customerdetail/CustomerDetail';
import UserDetail from './pages/user/UserDetail';
import OrderDetailUser from './pages/order-detail/OrderDetailUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/products/:id' element={<ProductDetail />}/>
          <Route path='/term-condition' element={<TermCondition />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/active-account/:email/:activeCode' element={<ActiveAccount />} />
          <Route path='/sign-up-state' element={<SignUpState />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/wishlist' element={<Wishlist />}/>
          <Route path='/order-received/:id' element={<OrderReceived />}/>
          <Route path='/user-information' element={<UserDetail />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/order-detail/:id' element={<OrderDetailUser />}/>
        </Routes>
      </BrowserRouter>
      {/* <ProductDetail /> */}
      {/* <Shop /> */}
      {/* <TermCondition /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Wishlist /> */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
