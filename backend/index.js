const express = require('express');
const mongoose = require('mongoose');
const TravelModel = require('./models/Travel');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb+srv://shrusonawane7:shraddha%4007@cluster7.yt8dmmg.mongodb.net/myDatabaseName?retryWrites=true&w=majority';

app.use(express.json());

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.post('/register', async (req, res) => {
    try {
      const {
        fullname,
        mobileno,
        email,
        username,
        password,
      } = req.body;
  
      // Check if user already exists
      const existingUser = await Travel.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already taken' });
      }
  
      // Create a new user
      const newUser = new Travel({
        fullname,
        mobileno,
        email,
        username,
        password,
      });
  
      // Save user to database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
