import React from 'react';
import { UserContext } from '../../UserContext';
import PostCommentsForm from '../Post/PostCommentsForm';
import styles from './PostComments.module.css';

const PostComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>

      <ul className={styles.comments} ref={commentsSection}>
        {comments.map((comment) => <li key={comment.id}>
          <b>{comment.username}: </b>
          <span>{comment.description}</span>
        </li>)}
      </ul>

      { login && <PostCommentsForm id={props.id} setComments={setComments} />}
    </>
  )
}

export default PostComments;