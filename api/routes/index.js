var express = require('express');
var router = express.Router();
const userModel = require('../model/userSchema')
const {
  isLoggedIn,
  isLoggedOut,
  isProfile
} = require('../middleware/Auth');
const {
  postRegisterpage,
  postLoginpage,
  getLogout
} = require('../controller/Authentication');
const {
  getMainpage,
  getProfilepage,
  getHomepage,
  allUsers,
  deleteUser
} = require('../controller/UserController');

router.get('/', getHomepage);

router.get('/users',allUsers);

router.get('/delete/:id', deleteUser);

router.post('/home', isLoggedIn, getMainpage);

router.get('/users/:username',isProfile, getProfilepage);

router.post('/signup', postRegisterpage);

router.post('/signin', postLoginpage);

router.get('/signout', getLogout);

module.exports = router;