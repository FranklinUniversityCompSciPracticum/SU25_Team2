import { useState } from 'react';
import { TextField } from '@mui/material';

const ValidatedTextField = ({ label, validator, onChange, sx, required, variant, type, name, value }) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const errorMessage = validator ? validator(newValue) : false;
    setError(errorMessage);
    onChange(newValue, name, errorMessage);
  };

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      sx={sx}
      required={required}
      variant={variant}
      type={type}
    />
  );
};

export default ValidatedTextField;
