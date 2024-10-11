import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/UseForm';

import { LOG_IN } from '../../api';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  React.useEffect(() => {
    const prevToken = window.localStorage.getItem('token');
    if (prevToken) {
      getUser({prevToken, id: window.localStorage.getItem('id'), username: window.localStorage.getItem('username'), email: window.localStorage.getItem('email')});
    }
  }, [])
 
  async function getUser(user) {
    const {token, id, email, username} = user;
    console.log(user);
    
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {

      const formData = new FormData();
      formData.append('user[email]', email.value);
      formData.append('user[password]', password.value);

      const {url, options} = LOG_IN(formData);

      const response = await fetch(url, options);
      const token = response.headers.get('authorization');
      window.localStorage.setItem('token', token)
      const loggedInUser = {token: token}
      const data = await response.json();
      
      loggedInUser.id = data.status.data.user.id
      window.localStorage.setItem('id', data.status.data.user.id)
      loggedInUser.email = data.status.data.user.email
      window.localStorage.setItem('email', data.status.data.user.email)
      loggedInUser.username = data.status.data.user.username
      getUser(loggedInUser)
      window.localStorage.setItem('username', data.status.data.user.username)
    }
   
  }

  return (
    <section>
      <h1>Log In</h1>

      <form action="" onSubmit={handleSubmit}>

        <Input label="E-mail" type="text" name='email' {...email} />
        <Input label="Password" type="password" name='password' {...password} />
        
        <Button>Log In</Button>
      </form>

      <Link to="/login/sign_up">Sign Up</Link>
    </section>
  )
}

export default LoginForm;