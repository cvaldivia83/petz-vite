import React from 'react'
import styles from './PostContent.module.css';
import { Link } from 'react-router-dom';
import PostComments from './PostComments';

const PostContent = ({ data }) => {
  const { id, description, username, user_id, photo_url, comments } = data;
 
  
  return (
    <div className={styles.post}>
      <div className={styles.img}>
        <img src={photo_url} alt={description} />
      </div>
      <div className={styles.details}>

        <div>
          <p className={styles.author}>
            <Link to={`/profile/${user_id}`}>@{username}</Link>
          </p>
          <h1 className='title'>
            <Link to={photo_url}>@{username}</Link>
          </h1>

          <ul className={styles.attributes}>
            <li className={styles.username}>@{username}</li>
            <li className={styles.description}>{description}lorem ipsum majoris hello world</li>
          </ul>
        </div>
      </div>
      <PostComments id={id} comments={comments} />
    </div>
  )
}

export default PostContent;