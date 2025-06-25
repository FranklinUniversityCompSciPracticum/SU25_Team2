require('dotenv').config(); 

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());

// Database Connection with MongoDB, throws error if MONGO_URI is not defined
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in your environment variables. Please check your .env file.");
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Successfully Connected"))
  .catch((error) => 
    {
      console.error("MongoDB Connection Failed:", error);
      process.exit(1); 
    });


// API Creation


app.get("/", (req, res)=> {
	res.send("Express App is Running")
})

// API Creation

app.listen(port,(error)=> {
  if (!error) {
    console.log("Server Running on Port " + port)
  }
  else
  {
    console.log("Error: " + error)
  }
})

// Adding image storage using multer.
// The image upload will be renamed to include the field name and a timstamp.
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Initialize multer with the storage configuration
const upload = multer({
  storage: storage});

// Creating the Upload Endpoint for images.
// The images will be stored in the 'upload/images' directory and served from '/images'
app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// create Product Schema with mongoose for storing product details
const Product = mongoose.model("Product", new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
  description: { type: String, required: true },
}));


