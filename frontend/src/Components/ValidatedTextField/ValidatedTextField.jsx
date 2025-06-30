import { useState } from 'react';
import { TextField } from '@mui/material';

const ValidatedTextField = ({ label, validator, onChange, sx, required, variant, type }) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value;
        const errorMessage = validator ? validator(newValue) : false;
        setValue(newValue);
        setError(errorMessage);
        onChange?.(!errorMessage, newValue);
    };

    return (
        <TextField
            label={label}
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            sx = {sx}
            required = {required}
            variant = {variant}
            type = {type}
        />
    );
};

export default ValidatedTextField;