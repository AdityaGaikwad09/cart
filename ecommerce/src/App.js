import React from 'react';
import  Nav from './Components/Nav';
import  Register from './Components/Register';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
/* import Product from './components/Product'; */
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Cart from './Components/Cart';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav/> 
      <Header/>
      
      <Routes>
      
      
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Home/>} exact >
        </Route>
        <Route path='/cart' element={<Cart />} exact>
        </Route>
        
        <Route path='/Shop' element={<h1>shop</h1>}/>
        <Route path='/products' element={<h1>products</h1>}/>
        <Route path='/update' element={<h1>update</h1>}/>
        <Route path='/logout' element={<h1>Logout components</h1>}/>
        <Route path='/Profile' element={<h1>Profile components</h1>}/>
        </Route>
        
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
