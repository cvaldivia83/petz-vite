import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PostPost from './endpoints/PostPost';
import GetPost from './endpoints/GetPost';

const Api = () => {
  return (<div>
    <h2>User Post (sign up)</h2>
    <UserPost />
    <h2>User Login TOKEN POST</h2>
    <TokenPost />
    <h2>Post create POST POST</h2>
    <PostPost />
    <h2>Get all posts from server</h2>
    <GetPost />
  </div>)
}

export default Api;