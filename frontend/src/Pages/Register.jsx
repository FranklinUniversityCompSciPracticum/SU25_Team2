// Register.jsx

import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Create an Account</h1>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <button type="submit" style={{ marginTop: '10px' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
