import React from 'react'
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import useFetch from '../../Hooks/useFetch';
import { USER_PROFILE } from '../../api';
import Head from '../Helper/Head';

const UserProfile = () => {
  const [user, setUser] = React.useState('');
  const {data, loading, error, request} = useFetch();
  const { id } = useParams()

  
  React.useEffect(() => {
   async function getUser() {
    const {url, options} = USER_PROFILE(id)
    await request(url, options);
   }
   getUser()
  }, [id])

  React.useEffect(() => {
    if (data) setUser(data);
  }, [data])

  

  return (
    <section className='container mainSection'>
      <Head title='' /> 
      <h1 className="title">{user.username}</h1>
      <Feed key={user.id} user={user.id} />
    </section>
  )
}

export default UserProfile;