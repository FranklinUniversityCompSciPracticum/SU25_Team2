import React, { useState} from 'react'
import './CSS/Register.css'
import { Link } from 'react-router-dom';
import { FormGroup, FormControlLabel, Checkbox, Button, TextField, Box} from '@mui/material';

// using this but would like to implement a custom theme in the future
// https://mui.com/material-ui/customization/theming/
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
    '& .Mui-focused .MuiInputLabel-root': {
        color: '#009688',
    },
    input: {
        color: '#333333',
    },
};

const Register = ( ) => {
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
    const [showError, setShowError] = useState(false);

    return (
        <Box 
            className='registration-form'
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '40ch'} }}
        >
            <h1 className='register-title'>Sign up to stay connected!</h1>
            <div className='name-entry'>
                <TextField
                    className='entry-field'
                    label="First Name"
                    variant="outlined"
                    sx={customTextFieldSx}/>
                <TextField
                    className='entry-field'
                    label="Last Name"
                    variant="outlined"
                    sx={customTextFieldSx}/>
            </div>
            <TextField
                className='entry-field'
                label="Email Address"
                variant="outlined"
                sx={customTextFieldSx}/>
            <TextField className='entry-field'
                label="Username"
                variant="outlined"
                sx={customTextFieldSx}/>
            <TextField className='entry-field'
                label="Password"
                variant="outlined"
                type="password"
                sx={customTextFieldSx}/>
            <TextField className='entry-field'
                label="Verify Password"
                variant="outlined"
                type="password"
                sx={customTextFieldSx}/>
            <FormGroup className='checkbox-group'>
                <FormControlLabel
                    required
                    control={
                        <Checkbox
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                        />} 
                        label={
                            <span>
                                I agree to the{' '}
                                    <Link className='link' to="/terms">
                                        Terms and Conditions
                                    </Link>
                                </span>
                            } 
                        />
                <FormControlLabel
                    required
                    control={
                        <Checkbox 
                            checked={agreedToPrivacy}
                            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                        />}
                    label={
                        <span>
                            I agree to the{' '}
                                <Link className='link' to="/privacy">
                                    Privacy Policy
                                </Link>
                            </span>
                        } 
                    />
            </FormGroup>
            <Button
                className='register-button'
                variant="contained"
                sx={{ backgroundColor: '#009688', '&:hover': { backgroundColor: '#00796B' } }}
                onClick={(e) => {
                    e.preventDefault();
                    if (!agreedToTerms || !agreedToPrivacy) {
                        setShowError(true);
                    } else {
                        setShowError(false);
                    }
                }}
            >
                Register
            </Button>
            {showError && (
                <p className="error-message">
                    You must agree to the Terms and Privacy Policy to register.
                </p>
            )}
            <p className='login-redirect'>Already have an account? Login <Link className='link' to='/login'>here</Link> instead</p>
        </Box>
    )
}

export default Register;