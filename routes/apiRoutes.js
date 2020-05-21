const express = require('express');
const router = express.Router();
const db = require('../models');
const ctrl = require('../controllers');

// PROFILES

// get all user profiles at url/api/v1/profiles
// get all profiles by zipcode at url/api/v1/profiles?zipcode=00000
// get profile id by email address at url/api/v1/profiles?email=bob%40gmail.com
router.get('/profiles', ctrl.profilesCtrl.index);

// create new user profile at url/api/v1/profiles
router.post('/profiles', ctrl.profilesCtrl.create);

// get user profile at url/api/v1/profile/id
router.get('/profile/:id', ctrl.profilesCtrl.show);

// update user profile at url/api/v1/profile/id
router.put('/profile/:id', ctrl.profilesCtrl.update);

// delete user profile at url/api/v1/profile/id
router.delete('/profile/:id', ctrl.profilesCtrl.remove);

// TOYS

// get all toys from a profile at url/api/v1/profile/profile_id/toys
router.get('/profile/:profile_id/toys', ctrl.toysCtrl.index);

// get all toys at url/api/v1/toys
router.get('/toys', ctrl.toysCtrl.index2);

// create new toy listing at url/api/v1/profile/profile_id/toys
router.post('/profile/:profile_id/toys', ctrl.toysCtrl.create);

// get specific toy at url/api/v1/profile/profile_id/toy/toy_id
router.get('/profile/:profile_id/toy/:toy_id', ctrl.toysCtrl.show);

// get specific toy at url/api/v1/toy/toy_id
router.get('/toy/:toy_id', ctrl.toysCtrl.show2);

// update specific toy at url/api/v1/profile/profile_id/toy/toy_id
router.put('/profile/:profile_id/toy/:toy_id', ctrl.toysCtrl.update);

// delete specific toy at url/api/v1/profile/profile_id/toy/toy_id
router.delete('/profile/:profile_id/toy/:toy_id', ctrl.toysCtrl.remove);

// CART

// get all cart contents for a profile at url/api/v1/profile/profile_id/favs
router.get('/profile/:profile_id/favs', ctrl.favsCtrl.index);

// add an item to the cart for a profile at url/api/v1/profile/profile_id/favs
router.post('/profile/:profile_id/favs', ctrl.favsCtrl.add);

// delete an item from the cart for a profile at url/api/v1/profile/profile_id/favs
router.delete('/profile/:profile_id/favs', ctrl.favsCtrl.remove);

// ----------------- AUTH


router.post('/register', ctrl.authCtrl.register);


router.post('/login', ctrl.authCtrl.login);


router.delete('/logout', ctrl.authCtrl.logout);


router.get('/verify', ctrl.authCtrl.verify);


module.exports = router;