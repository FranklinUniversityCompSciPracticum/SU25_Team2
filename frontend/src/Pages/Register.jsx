import { useState, useRef} from 'react'
import './CSS/Register.css'
import { Link } from 'react-router-dom';
import { FormGroup, FormControlLabel, Checkbox, Button, TextField, Box} from '@mui/material';
import ValidatedTextField from '../Components/ValidatedTextField/ValidatedTextField';

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
    '& .MuiInputLabel-root.Mui-focused ': {
        color: '#009688',
    },
    input: {
        color: '#333333',
    },
    "& .MuiInputLabel-root.Mui-error": {
        color: "#FF6F61",
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #FF6F61",
    },
    "& .MuiFormHelperText-root.Mui-error": {
        color: "#FF6F61",
    },
};

const Register = ( ) => {
    // https://muhimasri.com/blogs/mui-validation/ guide on form validation with MUI
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
    const [showTermsError, setShowTermsError] = useState(false);
    const [showPrivacyError, setShowPrivacyError] = useState(false);

    // using useRef over useState to prevent redundant rerenders of every ValidatedTextField whenever a single field is changed
    const fieldValid = useRef({ email: false, firstName: false, lastName: false, password: false });
    const passwordValue = useRef('');

    // these functions are passed to a ValidatedTextField to determine if an entry is valid
    const emailValidator = value => {
        if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value)) {
            return "Invalid email address";
        }
        return false;
    };

    const nameValidator = value => {
        if (!/^[a-zA-Z]+$/.test(value)) {
            return "Name must contain only letters";
        }
        return false;
    }

    const passwordReqValidator = value => {
        if (value.length < 8) {
            return "Password must be at least 8 characters long"
        }
        return false;
    }

    const passwordMatchValidator = (value) => {
        if (value !== passwordValue.current) {
            return "Passwords do not match";
        }
        return false;
    };

    return (
        <Box 
            className='registration-form'
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '40ch'} }}
        >
            <h1 className='register-title'>Sign up to stay connected!</h1>
            <div className='name-entry'>
                <ValidatedTextField
                    className='entry-field'
                    label="First Name"
                    sx={customTextFieldSx}
                    required
                    variant="outlined"
                    validator={nameValidator}
                    onChange={isValid => (fieldValid.current.firstName = isValid)}
                />
                <ValidatedTextField
                    className='entry-field'
                    label="Last Name"
                    sx={customTextFieldSx}
                    required
                    variant="outlined"
                    validator={nameValidator}
                    onChange={isValid => (fieldValid.current.lastName = isValid)}
                />
            </div>
            <ValidatedTextField
                className='entry-field'
                label="Email"
                sx={customTextFieldSx}
                required
                variant="outlined"
                validator={emailValidator}
                onChange={isValid => (fieldValid.current.email = isValid)}
            />
            <TextField
                className='entry-field'
                label="Username"
                variant="outlined"
                sx={customTextFieldSx}
                required
            />
            <ValidatedTextField
                className='entry-field'
                label="Password"
                sx={customTextFieldSx}
                type="password"
                required
                variant="outlined"
                validator={passwordReqValidator}
                onChange={(isValid, value) => {
                    fieldValid.current.password = isValid;
                    passwordValue.current = value;
                }}
            />
            <ValidatedTextField
                className='entry-field'
                label="Verify Password"
                sx={customTextFieldSx}
                type="password"
                required
                variant="outlined"
                validator={passwordMatchValidator}
            />
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
                    {showTermsError && (
                        <p className="error-message">
                            You must agree to the Terms of Use to register.
                        </p>
                    )}
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
                    {showPrivacyError && (
                        <p className="error-message">
                            You must agree to the Privacy Policy to register.
                        </p>
                    )}
            </FormGroup>
            <Button
                className='register-button'
                variant="contained"
                sx={{ backgroundColor: '#009688', '&:hover': { backgroundColor: '#00796B' } }}
                onClick={(e) => {
                    e.preventDefault();
                    setShowTermsError(!agreedToTerms);
                    setShowPrivacyError(!agreedToPrivacy);
                }}
            >
                Register
            </Button>
            <p className='login-redirect'>Already have an account? Login <Link className='link' to='/login'>here</Link> instead</p>
        </Box>
    )
}

export default Register;