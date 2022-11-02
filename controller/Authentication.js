const userModel = require('../model/userSchema')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.postRegisterpage = async (req, res) => {
    const { username, fullname, emailornumber, password } = req.body;
    const olduser = await userModel.findOne({ emailornumber })
    const olduser2 = await userModel.findOne({ username })
    if (olduser || olduser2) {
        res
            .status(200)
            .json({ type: false, message: "User Already Exists" })
        return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        username, fullname, emailornumber, password: hashedPassword
    })
    const token = jwt.sign({ user }, "hsdlkjhakjfhd", { expiresIn: "24h" })
    req.header("Authorization", token);
    res
        .status(200)
        .json({ type: true, message: user,token:token })
}

exports.postLoginpage = async (req, res) => {
    const { emailornumberorusername, password } = req.body;
    if (emailornumberorusername.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        var user = await userModel.findOne({ emailornumber: emailornumberorusername })
    } else if (emailornumberorusername.match("^[0-9]{10}$")) {
        var user = await userModel.findOne({ emailornumber: emailornumberorusername })
    } else {
        var user = await userModel.findOne({ username: emailornumberorusername })
    }
    if (!user) {
        res
            .status(200)
            .json({ type: false, message: "User does not exist" })
        return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res
            .status(200)
            .json({ type: false, message: "Password is incorrect" })
        return;
    }
    const token = jwt.sign({ user }, "hsdlkjhakjfhd", { expiresIn: "24h" })
    // res.cookie("token", token, {
    //     httpOnly: true,
    // });
    req.header("Authorization", token);
    res
        .status(200)
        .json({ type: true, message: user ,token:token })
}

exports.getLogout = async (req, res) => {
    req.header("auth-token", "");
    res
    .status(200)
    .json({ message: true, message: "logged out successfully" });
}
