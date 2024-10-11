import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import LostPassword from './LostPassword';
import ResetPassword from './ResetPassword';


const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="sign_up" element={<SignUpForm />} />
        <Route path="lost_password" element={<LostPassword />} />
        <Route path="reset_password" element={<ResetPassword /> } />
      </Routes>
    </div>
  )
}

export default Login;