import {Route, Routes, Navigate } from 'react-router-dom';

// import './App.css';

import Landing from './pages/landing';
import Signup from './componants/signup';
import Login from './componants/login';
import Products from './pages/products';
import Admin from './pages/admin';
import Cart from './pages/cart';
import Order from './pages/order';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './componants/ProductPage';
import OrderDetail from './componants/orderDetail';

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Routes>

        {user && <Route path='/' exact element={<Landing />} />}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/login" />} />
        <Route path='/products' element={<Products />}/>
        {user && <Route path='/cart' element={<Cart />}/>}
        {user && <Route path='/order' element={<Order />}/>}
        {user && <Route path='/admin' element={<Admin />} />}
        <Route path='/ProductPage' element={<ProductPage />} />
        <Route path='/OrderDetail' element={<OrderDetail />} />

      </Routes>
    </div>
  );
}

export default App;
