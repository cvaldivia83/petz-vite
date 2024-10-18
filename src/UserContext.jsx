import React from 'react';
import { USER_LOGIN, TOKEN_VALIDATE, GET_USER } from './api';
import { useNavigate } from 'react-router-dom';


// aula 811 

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async function() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false)
    window.localStorage.removeItem('token');
  }, [])

  async function getUser(token) {
    const {url, options} = GET_USER(token )

    const response = await fetch(url, options)

    const data = await response.json();
    setData(data);
    setLogin(true);
  }

  async function userLogin(formData) {
    try {
      setError(null);
      setLoading(true);
      const {url, options} = USER_LOGIN(formData);

      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Invalid email or password`)
      const token = response.headers.get('authorization');
      window.localStorage.setItem('token', token);

      const data = await response.json();
      await getUser(token);
      navigate('/account')
    } catch(err) {
      setError(err.message)
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {

    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Invalid token');
          await getUser(token)
        } catch(err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout])


  return  (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}

