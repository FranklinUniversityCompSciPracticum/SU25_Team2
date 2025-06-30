import React from 'react'
import './CSS/Register.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FormGroup, FormControlLabel, Checkbox} from '@mui/material';

const Register = ( ) => {
    return (
        <Box 
            className='registration-form'
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '40ch'} }}
        >
            <h1 className='register-title'>Sign up to stay connected!</h1>
            <div className='name-entry'>
                <TextField className='entry-field' label="First Name" variant="outlined" />
                <TextField className='entry-field' label="Last Name" variant="outlined" />
            </div>
            <TextField className='entry-field' label="Email Address" variant="outlined"/>
            <TextField className='entry-field' label="Username" variant="outlined" />
            <TextField className='entry-field' label="Password" variant="outlined" type="password" />
            <TextField className='entry-field' label="Verify Password" variant="outlined" type="password" />
            <FormGroup className='checkbox-group'>
                <FormControlLabel required control={<Checkbox />} label={
                    <span>
                        I agree to the{' '}
                            <Link className='link' to="/terms">
                                Terms and Conditions
                            </Link>
                        </span>
                     } />
                <FormControlLabel required control={<Checkbox />} label={
                    <span>
                        I agree to the{' '}
                            <Link className='link' to="/privacy">
                                Privacy Policy
                            </Link>
                        </span>
                     } />
            </FormGroup>
            <Button className='register-button' variant="contained">Register</Button>
            <p className='login-redirect'>Already have an account? Login <Link className='link' to='/login'>here</Link> instead</p>
        </Box>
    )
}

export default Register;