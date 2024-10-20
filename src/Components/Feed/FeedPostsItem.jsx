import React from 'react';
import styles from './FeedPostsItem.module.css';

const FeedPostsItem = ({ post, setModalPost }) => {
  
  function handleClick(event) {
    setModalPost(post);
  }

  return (
    <div className={styles.post} onClick={handleClick}>
      <img className={styles.postPhoto} src={post.photo_url} alt={post.description} />
      
      <div className={styles.postCaption}>
        <h2 className={styles.postUsername}>{post.username}</h2>
        <p className={styles.postDescription}>{post.description}</p>
      </div>
      <span className={styles.preview}></span>   
    </div>
  )
}

export default FeedPostsItem;