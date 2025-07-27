require('dotenv').config(); 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
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
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, 
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "A stylish and comfortable product perfect for any occasion. High quality materials and modern design.",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
})

// Creating Endpoint for Adding Products
app.post('/addproduct', async (req, res)=> {
    try {
        let products = await Product.find({});
        let id;
        if(products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        } else {
            id = 1;
        }
        
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
            description: req.body.description || "A stylish and comfortable product perfect for any occasion. High quality materials and modern design.",
        });
        
        console.log(product);
        await product.save();
        console.log("Saved");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to add product'
        });
    }
})

// Creating Endpoint for Removing Products

app.post('/removeproduct',async (req,res)=> {
	await Product.findOneAndDelete({id:req.body.id});
	console.log("Removed");
	res.json({
		success: true,
		name:req.body.name
	})
})

// Creating Endpoint for Getting All Products
app.get('/allproducts',async (req,res)=> {
	let products = await Product.find({});
	console.log("All Products Fetched");
	res.send(products);
})

// Schema creating for User Model 
const Users = mongoose.model("User", {
  name: {
    type: String,
  }, 
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

// Creating Endpoint for Registering the User 
app.post('/signup', async (req, res) => {
  try {
    // Check if the username already exists
    let checkUsername = await Users.findOne({ name: req.body.username });
    if (checkUsername) {
      return res.status(400).json({
        success: false,
        errors: "Existing user found with same username",
      });
    }

    // Check if the email already exists
    let checkEmail = await Users.findOne({ email: req.body.email });
    if (checkEmail) {
      return res.status(400).json({
        success: false,
        errors: "Existing user found with same email address",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Initialize an empty cart with 300 items
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    // Create a new user
    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      cartData: cart,
    });

    // Save the new user to the database
    await user.save();

    // Generate a JWT token
    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, errors: "Server Error" });
  }
});

// Creating Endpoint for User Login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await Users.findOne({ name: username });
    if (!user) {
      return res.status(400).json({
        success: false,
        errors: "Wrong Username",
      });
    }

    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res.status(400).json({
        success: false,
        errors: "Wrong Password",
      });
    }

    // Generate a JWT token
    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, errors: "Server Error" });
  }
});


// Creating Endpoints for NewCollection Data 
app.get('/newcollections',async (req,res)=> {
	let products = await Product.find({});
	let newcollection = products.slice(1).slice(-8);
	console.log("NewCollection Fetched");
	res.json(newcollection);
})


// Creating Endpoints for Popular Section Data
app.get('/popularinmen',async (req,res)=> {
	let products = await Product.find({category:"men"});
	let popular_in_men = products.slice(0,4);
	console.log("Popular In Men Fetched");
	res.json(popular_in_men);
})

// creating middleware to fetch user  
  const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
      return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
      const data = jwt.verify(token, 'secret_ecom');
      req.user = data.user;
      next();
    } catch (error) {
      return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

// creating endpoints for adding products in cartdata
app.post('/addtocart', fetchUser,async (req, res) => {

  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, {cartData: userData.cartData});
  res.send("Added to Cart");
});

// creating endpoint to remove items from cart
app.post('/removefromcart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, {cartData: userData.cartData});
  res.send("Removed from Cart");
});

// creating endpoint to get cart data
app.post('/getcart', fetchUser, async (req, res) => {
  console.log("GetCart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});



// creating endpoint for stripe checkout 
app.post('/checkout', async (req, res) => {
  try {
    const { items } = req.body;

    const line_items = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.image],
        },
        unit_amount: item.unit_amount,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      success_url: 'http://localhost:4000/complete',
      cancel_url: 'http://localhost:4000/cancel',
    });

    res.status(200).json({ url: session.url });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});

// creating endpoint for complete route 
app.get('/complete', (req, res) => {

    res.send('<h1>Payment Complete!</h1><p>Thank you for your purchase!</p>');

});