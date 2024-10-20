import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { POST_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PostContent from '../Post/PostContent';

const FeedModal = ({post, setModalPost}) => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    const {url, options} = POST_GET(post.id, token)
    request(url, options)
  }, [post, request])

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPost(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      FeedModal
      { error && <Error error={error} />}
      { loading && <Loading /> }
      { data && <PostContent data={data} /> }
    </div>
  )
}

export default FeedModal;