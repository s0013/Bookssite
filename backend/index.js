const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); 
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb+srv://shrusonawane7:shraddha%4007@cluster7.yt8dmmg.mongodb.net/test?retryWrites=true&w=majority';

app.use(cors()); // Add CORS middleware
app.use(express.json());

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Endpoint to handle signup form submission
app.post('/signup', async (req, res) => {
  try {
    const { fullname, mobile, email, username, password, confirmpassword } = req.body;

    // Validate password and confirmpassword
    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user instance without hashing the password
    const newUser = new User({
      fullname,
      mobile,
      email,
      username,
      password // Save the password as it is
    });

    // Save to database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // Respond with the saved user object
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).send('Server error');
  }
});

// Endpoint to handle login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Respond with user details (without password) or a token (for better security)
    res.status(200).json({ message: 'Login successful', user: { username: user.username } });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
