import React from 'react';
import styles from './FeedPostsItem.module.css';
import Image from '../Helper/Image';

const FeedPostsItem = ({ post, setModalPost }) => {
  
  function handleClick(event) {
    setModalPost(post);
  }

  return (
    <div className={styles.post} onClick={handleClick}>
      <Image src={post.photo_url} alt={post.description} />
      
      
      <span className={styles.preview}></span>   
    </div>
  )
}

export default FeedPostsItem;