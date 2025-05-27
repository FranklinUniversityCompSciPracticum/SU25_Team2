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

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://alia14:Tatum2021@cluster0.fu1rrod.mongodb.net/comp495")
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
