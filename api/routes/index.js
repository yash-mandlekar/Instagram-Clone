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
  getHomepage
} = require('../controller/UserController');

router.get('/', getHomepage);

router.get('/users', async (req, res) => {
  const users = await userModel.find({})
  res.status(200).json({
    users
  })
});
router.get('/delete', async (req, res) => {
  const users = await userModel.findOneAndDelete({ _id: "62b3dfb68f062826ea3265b4" })
  res.status(200).json({
    users
  })
});

router.post('/home', isLoggedIn, getMainpage);

router.get('/users/:username',isProfile, getProfilepage);

router.post('/signup', postRegisterpage);

router.post('/login', postLoginpage);

router.get('/logout', getLogout);

module.exports = router;