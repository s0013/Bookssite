const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb+srv://shrusonawane7:1234@cluster0.wvl2naz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Signup Endpoint
app.post('/signup', async (req, res) => {
  const { fullname, mobile, email, username, password, confirmpassword } = req.body;

  // Check if password and confirm password match
  if (password !== confirmpassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Determine role based on email domain
  const role = email.endsWith('numetry.com') ? 'admin' : 'user';

  try {
    const newUser = new User({ fullname, mobile, email, username, password,confirmpassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error: error.message });
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
