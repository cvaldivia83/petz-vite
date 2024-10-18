import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPostPost from './UserPostPost';
import UserStats from './UserStats';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<UserPostPost />} />
        <Route path="stats" element={<UserStats />} />  
      </Routes>
    </section>
  )
}

export default User;