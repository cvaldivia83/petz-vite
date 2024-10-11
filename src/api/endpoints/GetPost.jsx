import React from 'react';

const GetPost = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const url = 'http://localhost:3001/api/v1/posts'

    const options = {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ZWY5OGUyYi03NzFkLTQ4NjgtOGZlYi1jY2I0MmI0ODI3MjciLCJzdWIiOiIzIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzI4NTkwOTU3LCJleHAiOjE3Mjg1OTQ1NTd9.a90nC5s0XbmcXAnq6gFAokfTq5-r_Ic7AweuylmRhSQ'
      }
    }

    fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      setPosts(data);
    })
  }, [])


  return (
    <div>Hello World</div>
  )
}

export default GetPost;