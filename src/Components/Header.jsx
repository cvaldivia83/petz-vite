import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label='Petz - Home' className={styles.logo} >
          <Dogs />
        </Link>
        <Link to="login" className={styles.login}>Log In/ Sign Up </Link>
      
      </nav>
    </header>
  )
}

export default Header;