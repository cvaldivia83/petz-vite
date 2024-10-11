import React from  'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import UserPost from './api/endpoints/UserPost'
import Api from './api/Api';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Page404 from './Components/Page404';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )

}



export default App
