# E-Commerce Web Application

This is the team repository for SU25_Team 2

## Project Description

This project is a full-stack eCommerce website that allows users to browse and purchase products online. It is built using the MERN stack (MongoDB, Express, React JS, and Node JS) for both frontend and backend. The application provides an interactive user interface where customers can view products, manage their shopping cart, and register/login to make purchases. The backend manages product data and user authentication, while the admin panel offers functionality for managing products in the store

## Team

### 495 Students

Ayub Ali

John Schaefer

### 394 Students

394 Student(s) here

### 294 Students

294 Student(s) here

## Tech Stack

Frontend: HTML, CSS, JavaScript, React JS, React Router (for navigation), MUI (Material UI for UI components), Tailwind CSS (for styling)

Backend: Node JS, Express JS

Database: MongoDB, Mongoose (for database schema and models)

## Set Up and Installation

Details on how to set up the project follow.

✅ Before You Begin
Make sure you have the following installed:

Node.js – JavaScript runtime environment

Git – Version control system

Code Editor with Git support (Recommended: Visual Studio Code)

## Project Setup

Follow these steps to get the project running on your computer.

## 1️⃣ Clone the Repository

# Open a terminal (or Git Bash) and run:

`cd ~/your-folder`

# Navigate to a folder where you want the project

# Then clone the repository:

`git clone https://github.com/FranklinUniversityCompSciPracticum/SU25_Team2.git`

## 2️⃣ Navigate to the Project Folder

`cd SU25_Team2`

## 3️⃣ Install Dependencies

`npm install`

This installs all the necessary packages listed in package.json.

## 4️⃣ Start the Development Server

`npm start`

Your app will launch at:
http://localhost:3000

## 🔥 Common Issues & Fixes

1. "Command Not Found" Errors
   If git or npm is not recognized:
   Ensure Git and Node.js are properly installed.

   Restart your terminal after installing them.

   Run these commands to verify installation:

   git -v # should return a Git version, e.g., git version 2.42.0
   node -v # should return a Node version, e.g., v22.1.0

   If these commands return a version number, the tools are installed correctly.

2. "Port 5173 is Already in Use"
   If you’re using Vite and get a port conflict:
   Close any running Vite instances or restart your computer.

   To use a different port:

   npm run dev -- --port 3000

   To check if a port (like 5173) is still in use:

   netstat -ano | findstr :5173

   If nothing is returned, the port is free and not in use.

3. "Module Not Found" Errors
   This means dependencies are missing or incorrectly installed.
   First, try:

   npm install

   If problems persist, reset your dependencies:

   `rm -rf node_modules package-lock.json`
   `npm install`

## 🎯 Project Structure Overview

```plaintext
SU25_Hotel/
│-- public/               # Static assets
│-- src/
│   ├── Components/       # Reusable UI components
│   │   ├── Assets        # Static assets for the components
│   │   ├── Navbar        # Navbar component
│   │   ├── Footer        # Footer component
│   ├── Context/          # Global state or context management
│   ├── Pages/            # Different screens (Login, Register, Cart, Product, etc.)
│   ├── App.css
│   ├── App.jsx           # Main app component
│   └── index.css
│   └── index.js
│-- package.json          # Project dependencies
|-- README.md
|-- tailwind.config.js
```
