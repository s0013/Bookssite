const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  mobileno: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String },
  password: { type: String, required: true },
  logintime: { type: Date, default: Date.now },
  logouttime: { type: Date },
  role: { type: String, enum: ['user', 'admin'], default: 'user' } // Default role is 'user'
});

const TravelModel = mongoose.model('Travel', travelSchema);

module.exports = TravelModel;
