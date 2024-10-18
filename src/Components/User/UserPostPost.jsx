import React from 'react';
import styles from './UserPostPost.module.css';
import Input from '../Forms/Input';
import ImageInput from '../Forms/ImageInput';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { POST_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPostPost = () => {
  const caption = useForm();
  const photo = useForm();
  const {data, error, loading, request} = useFetch()
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('post[description]', caption.value)
    formData.append('post[photo]', photo.value)

    const token = window.localStorage.getItem('token')

    const {url, options} = POST_POST(formData, token);

    request(url, options)
  }

  return (
    <section className={`${styles.postPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Caption" type="text" name="caption" {...caption} />
        <ImageInput label="Photo" type='file' name="photo" {...photo} />
        { loading ? <Button disabled>Loading...</Button> : <Button>Post</Button> }
        <Error error={error} />
      </form>

      <div>
        {photo.value && 
          <div className={styles.preview} style={{backgroundImage: `url('${URL.createObjectURL(photo.value)}')`}}>

          </div>
        }
      </div>
    </section>
  )
}
// URL.createObjectURL(photo.value)
export default UserPostPost;