import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/CSS/Login.css';

export default function Login() {
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed");
    console.log(formData);
    let responseData;
    await fetch('https://backend-ytk5.onrender.com/login',{
      method: 'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data) 

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={changeHandler}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={changeHandler}
          required
        />

        <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    login();
                }}>Login</button>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

