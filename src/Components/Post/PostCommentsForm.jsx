import React from 'react'
import Send from '../../Assets/enviar.svg?react'
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import styles from './PostCommentsForm.module.css';


const PostCommentsForm = ({id, setComments}) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');

    const formData = new FormData()
    formData.append('comment[description]', comment)

    const {url, options} = COMMENT_POST(id, formData, token)
    const { response, data } = await request(url, options)

    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, data])
    }
  }

  return (
    
    <form className={styles.form} onSubmit={handleSubmit}>

      <textarea
      className={styles.textarea}
      placeholder='Add a comment' 
      value={comment} 
      onChange={({target}) => setComment(target.value)}
      id="comment"
      name="comment"
       />

        <button className={styles.button}>
          <Send />
        </button>
      { error && <Error error={error} /> }
    </form>
  )
}

export default PostCommentsForm;