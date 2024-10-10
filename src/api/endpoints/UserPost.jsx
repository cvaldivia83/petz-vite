import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [avatar, setAvatar] = React.useState(null);

  function handleFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      setAvatar(event.target.files[0])
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3001/signup";

    const formData = new FormData();
    formData.append('user[email]', email);
    formData.append('user[password]', password);
    formData.append('user[username]', username);
    formData.append('user[avatar]', avatar);

    const options = {
      method: 'POST', 
      headers: {
      
      },
      body: formData
    }
    
    fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
      placeholder='E-mail' 
      value={email} 
      onChange={({ target })=> {setEmail(target.value)} } 
      />

      <input type="text"
      placeholder='Password' 
      value={password} 
      onChange={({ target })=> {setPassword(target.value)} } 
      />

      <input type="text"
      placeholder='Username' 
      value={username} 
      onChange={({ target })=> {setUsername(target.value)} } 
      />

      <input type="file"
      accept="image/*"
      onChange={handleFileChange}
      />

      <button>Sign Up</button>

    </form>
  )
}

export default UserPost;