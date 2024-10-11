export const API_URL='http://localhost:3001'


// original TOKEN_POST

export function LOG_IN(formdata) {
  return  {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {},
      body: formdata
    }
  }
}