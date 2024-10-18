import React from 'react';
import FeedPostsItem from './FeedPostsItem';
import { POSTS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

const FeedPhotos = () => {

  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {

    async function fetchPosts() {
      const token = window.localStorage.getItem('token');
      const {url, options} = POSTS_GET({user: 4, number: 2, token: token})
      const {response, data} = await request(url, options)
    
    }

    fetchPosts();
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <div>
        {data.map((post) => <FeedPostsItem key={post.id} post={post} />)}
      </div>
    )

  else return null;
}

export default FeedPhotos;