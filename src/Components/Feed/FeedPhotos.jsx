import React from 'react';
import FeedPostsItem from './FeedPostsItem';
import { POSTS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';
import { UserContext } from '../../UserContext';

const FeedPhotos = ({ total, user, setModalPost }) => {
  const [posts, setPosts] = React.useState([])

  const {data, loading, error, request} = useFetch();

  const { login } = React.useContext(UserContext);


  React.useEffect(() => {

    async function fetchPosts() {
      const token = window.localStorage.getItem('token');
      const {url, options} = POSTS_GET({user: login ? user : 0, number: total, token: token})
      await request(url, options)
      
      setPosts(data)
    }

    fetchPosts();
    console.log(user)
    console.log(posts)
  }, [request, user, total])


  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>

        {data.map((post) => <FeedPostsItem key={post.id} post={post} setModalPost={setModalPost} />)}

      </ul>
    )

  else return null;
}

export default FeedPhotos;