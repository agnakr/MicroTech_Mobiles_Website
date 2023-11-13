import Footer from './Footer';
import Products from './Products';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path='/contact' element={<Contactus />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;