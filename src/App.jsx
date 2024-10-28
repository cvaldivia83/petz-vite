import React from  'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Page404 from './Components/Page404';
import { UserStorage } from './UserContext';
import User from './Components/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/account/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
              <Route path='users/:id' element={<UserProfile />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )

}



export default App
