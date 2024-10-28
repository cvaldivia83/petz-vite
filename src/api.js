export const API_URL='http://localhost:3001'


// original TOKEN_POST

export function GET_USER(token) {
  return  {
    url: API_URL + '/api/v1/user',
    options: {
      method: 'GET',
      headers: {
        authorization: token
      }
    }
  }
}

// original GET_USER
export function USER_LOGIN(formdata) {
  return  {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {},
      body: formdata
    }
  }
}

// Validates if saved token is still valid
export function TOKEN_VALIDATE(token) {
  return {
    url: API_URL + '/api/v1/user/validate_token', 
    options: {
      method: 'GET',
      headers: {
        authorization: token
      } 
    }
  }
}

// original USER_POST
export function USER_SIGNUP(formData) {
  return {
    url: API_URL + '/signup',
    options: {
      method: 'POST',
      headers: {}, 
      body: formData
    }
  }
}

// Post create / Photo Post

export function POST_POST(formData, token) {
  return {
    url: API_URL + '/api/v1/posts',
    options: {
      method: 'POST',
      headers: {
        authorization: token
      },
      body: formData
    }
  }
}

// Post Index

export function POSTS_GET({number, user, token}) {

  let queryString;

  if (user === 0) {
    queryString = `/api/v1/posts/?posts_number=${number}`;
  } else {
    queryString = `/api/v1/posts/?user_id=${user}&posts_number=${number}`;
  }

  return {
    url: API_URL + queryString,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        authorization: token
      }
    }
  }
}

// Post show
export function POST_GET(id, token) {
  return {
    url: `${API_URL}/api/v1/posts/${id}`, 
    options: {
      method: 'GET',
      cache: 'no-store', 
      headers: {
        authorization: token
      }
    }
  }
}

// Comment post
export function COMMENT_POST(post_id, formData, token) {
  return {
    url: `${API_URL}/api/v1/posts/${post_id}/comments`,
    options: {
      method: 'POST',
      headers: {
        authorization: token
      },
      body: formData
    }
  }
}

export function POST_DELETE(post_id, token) {
  return {
    url: `${API_URL}/api/v1/posts/${post_id}`,
    options: {
      method: 'DELETE',
      headers: {
        authorization: token
      }
    }
  }
}

// User profile

export function USER_PROFILE(id) {
  return {
    url: `${API_URL}/api/v1/users/${id}`,
    options: {
      method: 'GET',
    }
  }
}

export function USER_STATS(token) {
  return {
    url: `${API_URL}/api/v1/stats`,
    options: {
      method: 'GET', 
      headers: {
        authorization: token
      }
    }
  }
}