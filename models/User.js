const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  zipcode: {
    type: String,
    required: true,
  },
}, {timestamps: true});

// User Model
const User = mongoose.model('User', UserSchema);

module.exports = User;