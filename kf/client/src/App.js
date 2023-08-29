import {Route, Routes, Navigate } from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';

import BasicNav from './componants/navbar';

import Landing from './pages/landing';
import Signup from './componants/signup';
import Login from './componants/login';
import Products from './pages/products';
import Admin from './pages/admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './componants/ProductPage';

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <BasicNav />
      <Routes>

        {user && <Route path='/' exact element={<Landing />} />}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/login" />} />

        <Route path='/products' element={<Products />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/ProductPage' element={<ProductPage />} />

      </Routes>
    </div>
  );
}

export default App;
