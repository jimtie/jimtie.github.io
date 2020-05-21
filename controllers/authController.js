const bcrypt = require('bcryptjs');
const db = require('../models');


// POST Register - User Create
const register = (req, res) => {
  // Verify req.body Is Not Empty

  // Query DB For Existing User By Email

  // If foundUser, Respond with 400

  // If No foundUser, Generate Salt and Hash User Password

  // Replace newUser Plain Text Password with Hased Password

  // Create newUser and Respond with 200

  // if (!req.body.email === '' || !req.body.password === '')

  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

    // Verify User Does Not Already Exist
    if (foundUser) {
      return res.status(400).json({status: 400, message: 'Account already registerd, please login'});
    }

    // Generate Salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

      // Hash User Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

        // Construct User Object with Hashed Password
        const userData = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        }

        // Create New user
        db.User.create(userData, (err, newUser) => {
          if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

          res.status(201).json({status: 201, message: 'Success'});
        });
      });
    });
  });
};


// POST Session Create
const login = (req, res) => {
  // Verify req.body Is Not Empty

  // Find User By Email
  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

    // Verify User Account Exists
    if (!foundUser) {
      return res.status(400).json({status: 400, message: 'Invalid credentials'});
    }

    // Hash Password From User Request and Compare Against Found User Password
    bcrypt.compare(req.body.email, foundUser.email, (err, isMatch) => {
      if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

      if (isMatch) {
        // Create a New Session (Key to the Kingdom)
        req.session.currentUser = {
          _id: foundUser._id,
          name: foundUser.Name,
          email: foundUser.email,
          phone: foundUser.phone,
          zipcode: foundUser.zipcode,
        };
    
        res.status(200).json({status: 200, user: req.session.currentUser});
      
      } else {
        // Passwords Do Not Match, Respond with User Error
        res.status(400).json({status: 400, error: 'Invalid credentials, please try again'});
      }
    });
  });
};


// DELETE Session Destroy
const logout = (req, res) => {
  if (!req.session.currentUser) {
    // Not Authorized
    return res.status(401).json({status: 401, error: 'Unauthorized, please login and try again'});
  }
  
  // Destroy Session and Respond with Success
  req.session.destroy((err) => {
    if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

    res.status(200).json({status: 200, message: 'Success'});
  });
};


// Verify Route for Development/Testing
const verify = (req, res) => {
  if (!req.session.currentUser) {
    // Not Authorized
    return res.status(401).json({status: 401, error: 'Unauthorized, please login and try again'});
  }

  return res.json({
    status: 200,
    message: 'Authorized',
    currentUser: req.session.currentUser,
  });
};


module.exports = {
  register,
  login,
  logout,
  verify,
};