import React from 'react'
import './CSS/Register.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Register = ( ) => {
    return (
        <Box 
            className='registration-form'
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
        >
            <div className='name-entry'>
                <TextField id="firstname" label="First Name" variant="outlined" />
                <TextField id="lastname" label="Last Name" variant="outlined" />
            </div>
            <TextField id="email" label="Email Address" variant="outlined" />
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" type="password" />
            <Button variant="register-button">Register</Button>
            <p className='login-redirect'>Already have an account? Login <Link to='/login'>here</Link> instead</p>
        </Box>
    )
}

export default Register;