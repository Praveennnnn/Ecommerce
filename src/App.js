import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Dress from './Dress';
import Jeans from './Jeans';
import Footwears from './Footwears';
import Cosmetics from './Cosmetics';
import Bags from './Bags';
import Tshirt from './Tshirt';

function App() {
  return (
    <>    
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Checkout' element={<Checkout/>}></Route>
          <Route path='Dress' element ={<Dress/>}></Route>
          <Route path='Tshirt' element ={<Tshirt/>}></Route>
          <Route path='Footwear' element ={<Footwears/>}></Route>
          <Route path='Cosmetics' element ={<Cosmetics/>}></Route>
          <Route path='Jeans' element ={<Jeans/>}></Route>
          <Route path='Bags' element ={<Bags/>}></Route>

          
        </Routes>
      <Footer/>
    </BrowserRouter>

     </>
  )
}

export default App