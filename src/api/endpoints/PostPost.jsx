import React from 'react';

const PostPost = () => {
  const [token, setToken] = React.useState('')
  const [description, setDescription] = React.useState('');
  const [photo, setPhoto] = React.useState(null);

  function handleFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0])
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3001/api/v1/posts";

    const formData = new FormData();
    formData.append('post[description]', description);
    formData.append('post[photo]', photo);

    const options = {
      method: 'POST', 
      headers: {
        authorization: token
      },
      body: formData
    }
    
    fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
      placeholder='description' 
      value={description} 
      onChange={({ target })=> {setDescription(target.value)} } 
      />

      <input type="text"
      placeholder='token' 
      value={token} 
      onChange={({ target })=> {setToken(target.value)} } 
      />

      <input type="file"
      accept="image/*"
      onChange={handleFileChange}
      />

      <button>Sign Up</button>

    </form>
  )
}

export default PostPost;