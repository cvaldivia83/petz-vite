import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LostPassword from './LostPassword';
import ResetPassword from './ResetPassword';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import Page404 from '../Page404';


const Login = () => {

  const { login } = React.useContext(UserContext)
  if (login === true) return <Navigate to='account' />

  return (  
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="sign_up" element={<SignUpForm />} />
          <Route path="lost_password" element={<LostPassword />} />
          <Route path="reset_password" element={<ResetPassword /> } />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login;