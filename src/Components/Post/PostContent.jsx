import React from 'react'
import styles from './PostContent.module.css';
import { Link } from 'react-router-dom';
import PostComments from './PostComments';
import PostDelete from './PostDelete';
import { UserContext } from '../../UserContext';
import Image from '../Helper/Image';

const PostContent = ({ data }) => {
  const { id, description, username, user_id, photo_url, comments } = data;

  const user = React.useContext(UserContext);
 
  
  return (
    <div className={styles.post}>
      <div className={styles.img}>
        <Image alt={description} src={photo_url} />
      </div>
      <div className={styles.details}>

        <div>
          <p className={styles.author}>
            {user.data && user.data.username === username ? <PostDelete id={id} /> : <Link to={`/profile/${user_id}`}>@{username}</Link>}
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