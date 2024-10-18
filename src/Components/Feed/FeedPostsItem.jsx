import React from 'react';
import styles from './FeedPostsItem.module.css';

const FeedPostsItem = ({post}) => {
  console.log(post)
  return (
    <div className={styles.post}>
      <div className={styles.postPhoto} style={{backgroundImage: `url(${post.photo_url})` }}></div>
      <div className={styles.postCaption}>
        <h2 className={styles.postUsername}>{post.username}</h2>
        <p className={styles.postDescription}>{post.description}</p>
      </div>
    </div>
  )
}

export default FeedPostsItem;