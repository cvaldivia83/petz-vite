import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext.jsx';
import Dogs from '../Assets/dogs.svg?react';

const Header = () => {
  
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label='Petz - Home' className={styles.logo} >
          <Dogs />
        </Link>
        
       { data ? <Link to="/account" className={styles.login}>{ `@${data.username}` }</Link> : <Link to="/account" className={styles.login}>Log In/ Sign Up </Link> }
      
      </nav>
    </header>
  )
}

export default Header;