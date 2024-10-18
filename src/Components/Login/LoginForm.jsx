import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css'

import { UserContext } from '../../UserContext';

const LoginForm = () => {
  
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin, error, loading } = React.useContext(UserContext);
  

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('user[email]', email.value);
    formData.append('user[password]', password.value);

    if (email.validate() && password.validate()) {
      userLogin(formData);
    }
   
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Log In</h1>

      <form className={styles.form} onSubmit={handleSubmit}>

        <Input label="E-mail" type="text" name='email' {...email} />
        <Input label="Password" type="password" name='password' {...password} />
        { loading ? <Button disabled>Loading...</Button> : <Button>Log In</Button>}
        <Error error={error} />
        
      </form>
      <Link className={styles.lost} to="/login/lost_password">Lost Password?</Link>
      
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Don't have an account yet? Register on our website</p>
        <Link className={stylesBtn.button} to="/login/sign_up">Sign Up</Link>
      </div>
    </section>
  )
}

export default LoginForm;