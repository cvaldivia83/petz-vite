import React from 'react';

const validations = {
  email: {
    regex:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, 
    message: 'Please provide a valid e-mail'
  }, 
  password: {
    regex: /\d{6,10}/, 
    message: 'Password must have at least 6 digits.'
  }, 
  username: {
    regex: /\w{2,}/, 
    message: 'Username must have at least 2 characters.'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;

    if(value.length === 0) {
      setError('Fill a valid value');
      return false;
    } else if (!(validations[type] && validations[type].regex.test(value))) {
      setError(validations[type].message)
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleFileChange({target}) {
    if (error) validate(target.files[0])
    if (target.files && target.files[0]) {
      setValue(target.files[0])
    }
  }

  function onChange({target}) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue, 
    onChange,
    error, 
    handleFileChange,
    validate: () => validate(value), 
    onBlur: () => validate(value)
  }
}

export default useForm;