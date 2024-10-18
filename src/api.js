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
  return {
    url: API_URL + `/api/v1/posts/?user_id=${user}&posts_number=${number}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        authorization: token
      }
    }
  }
}