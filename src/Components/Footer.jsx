import React from 'react';
import styles from './Footer.module.css';
import DogsFooter  from '../Assets/dogs-footer.svg?react'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsFooter />
      <p>Dogs - All Rights Reserved </p>
    </footer>
  )
}

export default Footer;