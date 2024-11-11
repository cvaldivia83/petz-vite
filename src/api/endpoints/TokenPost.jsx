import React from 'react';
// Logged in. Response without bearer
const TokenPost = () => {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');


  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3001/login";

    const formData = new FormData();
    formData.append('user[email]', email);
    formData.append('user[password]', password);
 

    const options = {
      method: 'POST', 
      headers: {
      
      },
      body: formData
    }
    
    fetch(url, options)
    .then(response => {
      const token = response.headers.get('authorization');
      
      return response.json().then((data) => {
        return { data, token }
      })
    })
    .then(({ data, token }) => {
      // console.log(token);
      setToken(token);
      // console.log(data.status.message);
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

      <button>Log In</button>
      <p>{token}</p>
    </form>
  )
}

export default TokenPost;