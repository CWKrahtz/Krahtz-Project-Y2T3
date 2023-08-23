import {Route, Routes } from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';

import BasicNav from './componants/navbar';

import Landing from './pages/landing';
import Products from './pages/products';
import Admin from './pages/admin';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BasicNav />
      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/admin' element={<Admin />} />

      </Routes>
    </div>
  );
}

export default App;
