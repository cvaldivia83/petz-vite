import React from 'react';

const useFetch = () => {
  const [ data, setData ] = React.useState(null)
  const [ error, setError ] = React.useState(null)
  const [ loading, setLoading ] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let data;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options)
      data = await response.json()
      if (response.ok === false) throw new Error(data.message)
    } catch(err) {
      data = null;
      setError(err.message)
    } finally {
      setData(data)
      setLoading(false);
      return { response, data }
    }

  }, [])

  return {
    data,
    loading,
    error, 
    request
  }
}

export default useFetch;