import React from 'react';
import styles from './Home.module.css';
import Feed from './Feed/Feed';
import Loading from './Helper/Loading';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Loading />
      {/* <Feed /> */}
    </section>
  )
}

export default Home;