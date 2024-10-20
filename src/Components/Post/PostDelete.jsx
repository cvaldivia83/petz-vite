import React from 'react';
import styles from './PostDelete.module.css';
import { POST_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PostDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm('Are you sure you want to delete the post?')

    if (confirm) {
      const token = window.localStorage.getItem('token');
      const {url, options} = POST_DELETE(id, token)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
    { loading ? <button disabled className={styles.delete}>Delete</button> : <button onClick={handleClick} className={styles.delete}>Delete</button>}
    </>
  )
}

export default PostDelete;