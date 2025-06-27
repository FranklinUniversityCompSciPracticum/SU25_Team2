import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Login</h1>
            <p>Input credentials</p>
            <Link to='/register' className="register-button"><button>Register</button></Link>
        </div>
    );
}