import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import ImageInput from '../Forms/ImageInput';
import useForm from '../../Hooks/useForm';
import { USER_SIGNUP } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const SignUpForm = () => {
  const email = useForm('email');
  const password = useForm(false);
  const username = useForm('username');
  const avatar = useForm(false);

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault(); 
    

    const formData = new FormData();
    formData.append('user[email]', email.value);
    formData.append('user[password]', password.value);
    formData.append('user[username]', username.value);
    formData.append('user[avatar]', avatar.value);

    const {url, options} = USER_SIGNUP(formData);

    const loginData = new FormData();
    formData.append('user[email]', email.value);
    formData.append('user[password]', password.value);

    const { response }= await request(url, options)
    if (response.ok) userLogin(loginData)
    // const token = response.headers.get('authorization');
    // const data = await response.json()

  }

  return (
    <section className='animeLeft'>
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Input label='Username' type="text" name="username" {...username}  /> 
        <ImageInput label="Avatar" type="file" name="avatar" {...avatar} />
        {loading ? <Button disabled>Signining Up...</Button> : <Button>Sign Up</Button>}
        <Error error={error} />
      </form>
    </section>
  )
}

export default SignUpForm;