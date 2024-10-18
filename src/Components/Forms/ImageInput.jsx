import React from 'react';
import styles from './Input.module.css';

const ImageInput = ({ label, type, name, error, handleFileChange }) => {

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label} >{label}</label>

      <input className={styles.input} 
      type={type} 
      id={name} 
      name={name} 
      accept="image/*"
      onChange={handleFileChange} 
      />
      

      { error && <p className={styles.error}>{error}</p> }
    </div>
  )
}

export default ImageInput;