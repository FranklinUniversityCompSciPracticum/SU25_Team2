import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const customTextFieldSx = {
  marginBottom: 2,
  "& .MuiInputBase-root": {
    backgroundColor: "#fff",
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle sending the message (e.g., API call)
    alert("Message sent!");
    setForm({ fullName: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            fullWidth
            required
            sx={customTextFieldSx}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            sx={customTextFieldSx}
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            minRows={4}
            sx={customTextFieldSx}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
}