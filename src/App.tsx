import React from 'react';
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

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <ProductDetail /> */}
      <Shop />
      {/* <TermCondition /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Wishlist /> */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
