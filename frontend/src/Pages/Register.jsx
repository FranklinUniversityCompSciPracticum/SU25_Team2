import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Register.css';
import { Button, Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ValidatedTextField from '../Components/ValidatedTextField/ValidatedTextField';

const customTextFieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FAF3E030',
    color: '#333333',
    '& fieldset': {
      borderColor: '#009688',
    },
    '&:hover fieldset': {
      borderColor: '#00796B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#009688',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#333333',
  },
  '& .MuiInputLabel-root.Mui-focused ': {
    color: '#009688',
  },
  input: {
    color: '#333333',
  },
};

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    verifyPassword: '',
  });

  const changeHandler = (value, name, error) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (value) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(value) ? false : 'Please enter a valid email address';
  };

  const validateUsername = (value) => {
    return value.length < 3 ? 'Username must be at least 3 characters' : false;
  };

  const validatePassword = (value) => {
    return value.length < 6 ? 'Password must be at least 6 characters' : false;
  };

  const validateVerifyPassword = (value) => {
    return value !== formData.password ? 'Passwords do not match' : false;
  };

  const register = async () => {
    console.log('Register Function Executed');
    console.log(formData);
    let responseData;
    await fetch('https://backend-ytk5.onrender.com/signup',{
      method: 'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data) 

    if(responseData.success){
      window.location.replace("/login");
    }
    else {
      alert(responseData.errors)
    }
  };

  return (
    <Box
      className="registration-form"
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
    >
      <h1 className="register-title">Sign up to stay connected!</h1>

      <div className="name-entry">
        <ValidatedTextField
          className="entry-field"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          sx={customTextFieldSx}
          variant="outlined"
        />
        <ValidatedTextField
          className="entry-field"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          sx={customTextFieldSx}
          variant="outlined"
        />
      </div>

      <ValidatedTextField
        className="entry-field"
        label="Email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        sx={customTextFieldSx}
        validator={validateEmail}
        variant="outlined"
      />

      <ValidatedTextField
        className="entry-field"
        label="Username"
        name="username"
        value={formData.username}
        onChange={changeHandler}
        sx={customTextFieldSx}
        validator={validateUsername}
        variant="outlined"
      />

      <ValidatedTextField
        className="entry-field"
        label="Password"
        name="password"
        value={formData.password}
        onChange={changeHandler}
        sx={customTextFieldSx}
        validator={validatePassword}
        type="password"
        variant="outlined"
      />

      <ValidatedTextField
        className="entry-field"
        label="Verify Password"
        name="verifyPassword"
        value={formData.verifyPassword}
        onChange={changeHandler}
        sx={customTextFieldSx}
        validator={validateVerifyPassword}
        type="password"
        variant="outlined"
      />

      <FormGroup className="checkbox-group">
        <FormControlLabel
          control={<Checkbox />}
          label={
            <span>
              I agree to the{' '}
              <Link className="link" to="/terms">
                Terms and Conditions
              </Link>
            </span>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <span>
              I agree to the{' '}
              <Link className="link" to="/privacy">
                Privacy Policy
              </Link>
            </span>
          }
        />
      </FormGroup>

      <Button
        className="register-button"
        variant="contained"
        sx={{ backgroundColor: '#009688', '&:hover': { backgroundColor: '#00796B' } }}
        onClick={(e) => {
          e.preventDefault();
          register();
        }}
      >
        Register
      </Button>

      <p className="login-redirect">
        Already have an account? Login{' '}
        <Link className="link" to="/login">
          here
        </Link>{' '}
        instead
      </p>
    </Box>
  );
};

export default Register;
