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




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

