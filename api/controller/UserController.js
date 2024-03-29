const userModel = require("../model/userSchema");

exports.allUsers = async (req, res) => {
  const users = await userModel.find({});
  res.status(200).json({
    users,
  });
};
exports.deleteUser = async (req, res) => {
  const users = await userModel.findOneAndDelete({
    _id: req.params.id,
  });
  res.status(200).json({
    users,
  });
};

exports.getHomepage = (req, res) => {
  res.status(200).json({
    message: "Welcome to Homepage",
  });
};
exports.getMainpage = (req, res) => {
  res.status(200).json({
    user: req.user,
    type: true,
  });
};
exports.getProfilepage = async (req, res) => {
  const user = await userModel.findOne({ username: req.params.username });
  if (user) {
    if (req.user) {
      res.status(200).json({
        user: req.user,
        type: true,
        authenticated: true,
      });
    } else {
      res.status(200).json({
        user: user,
        type: true,
        authenticated: false,
      });
    }
  } else {
    res.status(404).json({
      message: "User not found",
      type: false,
    });
  }
};
