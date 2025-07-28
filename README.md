# E-Commerce Web Application

This is the team repository for SU25_Team 2

## Project Description

This project is a full-stack eCommerce website that allows users to browse and purchase products online. It is built using the MERN stack (MongoDB, Express, React JS, and Node JS) for both frontend and backend. The application provides an interactive user interface where customers can view products, manage their shopping cart, and register/login to make purchases. The backend manages product data and user authentication, while the admin panel offers functionality for managing products in the store

## Team

### 495 Students

Ayub Ali - Co-Team Lead/Project Manager

John Schaefer - Co-Team Lead/Team Manager

### 394 Students

Antonia Kelly
Nicholas Doran

### 294 Students

Case Starcher
Spencer Teillon

## Tech Stack

Frontend: HTML, CSS, JavaScript, React JS, React Router (for navigation), MUI (Material UI for UI components)

Backend: Node JS, Express JS

Database: MongoDB, Mongoose (for database schema and models)

## Set Up and Installation

Details on how to set up the project follow.

Before You Begin
Make sure you have the following installed:

Node.js – JavaScript runtime environment

Git – Version control system

Code Editor with Git support (Recommended: **Visual Studio Code**)

## Project Setup

Follow these steps to get the project running on your computer.

### 1. Clone the Repository

Open a terminal (or Git Bash) and run:

`cd ~/your-folder`

Navigate to a folder where you want the project

Then clone the repository:

`git clone https://github.com/FranklinUniversityCompSciPracticum/SU25_Team2.git`

### 2. Navigate to the Project Folder

`cd SU25_Team2`

### 3. Install Dependencies for All Components

Install backend dependencies:
```
cd backend
npm install
```

Install frontend dependencies:
```
cd ../frontend
npm install
```

Install admin panel dependencies:
```
cd ../admin
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the backend directory with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 5. Start the Application

You need to run three components simultaneously. Open three separate terminal windows:

**Terminal 1 - Backend Server:**
```
cd backend
node index.js
```
Server will start on http://localhost:4000

**Terminal 2 - Admin Panel:**
```
cd admin
npm run dev
```
Admin panel will start on http://localhost:5173

**Terminal 3 - Frontend:**
```
cd frontend
npm start
```
Frontend will start on http://localhost:3000

## Common Issues & Fixes

1. "Command Not Found" Errors
   If `git` or `npm` is not recognized:
   Ensure Git and Node.js are properly installed.

   Restart your terminal after installing them.

   Run these commands to verify installation:

   `git -v` - should return a Git version, e.g., git version 2.42.0
   `node -v` - should return a Node version, e.g., v22.1.0

   If these commands return a version number, the tools are installed correctly.

2. "Port Already in Use"
   If you get a port conflict:
   Close any running instances or restart your computer.

   To check if a port (like 5173) is still in use:

   `netstat -ano | findstr :5173`

   If nothing is returned, the port is free and not in use.

3. "Module Not Found" Errors
   This means dependencies are missing or incorrectly installed.
   First, try:

  `npm install`

   If problems persist, reset your dependencies:

   `rm -rf node_modules package-lock.json`
   `npm install`

## Project Structure Overview

```
SU25_Team2/
├── README.md
├── backend/
│   ├── index.js                    # Main server file
│   ├── package.json               # Backend dependencies
│   ├── .env                       # Environment variables
│   └── upload/
│       └── images/                # Uploaded product images
├── frontend/
│   ├── package.json               # Frontend dependencies
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   └── src/
│       ├── App.js                 # Main frontend component
│       ├── index.js               # Frontend entry point
│       ├── Components/
│       │   ├── Assets/            # Static assets
│       │   ├── Navbar/            # Navigation component
│       │   ├── Footer/            # Footer component
│       │   ├── CartItems/         # Shopping cart display
│       │   ├── ProductDisplay/    # Individual product view
│       │   └── NewCollections/    # Featured products
│       ├── Context/
│       │   └── ShopContext.jsx    # Global state management
│       ├── Pages/
│       │   ├── Login.jsx          # User authentication
│       │   ├── Register.jsx       # User registration
│       │   ├── Cart.jsx           # Shopping cart page
│       │   ├── Product.jsx        # Product details page
│       │   └── Shop.jsx           # Main shopping page
│       └── CSS/                   # Styling files
└── admin/
    ├── package.json               # Admin panel dependencies
    ├── index.html
    └── src/
        ├── App.jsx                # Main admin component
        ├── main.jsx               # Admin entry point
        ├── Components/
        │   ├── AddProduct/        # Product management
        │   ├── ListProduct/       # Product listing
        │   ├── Navbar/            # Admin navigation
        │   └── Sidebar/           # Admin sidebar
        └── Pages/
            └── Admin/             # Admin dashboard
```