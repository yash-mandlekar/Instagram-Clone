const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        res.status(200).json({
            type: false,
            message: "No token provided"
        });
        return;
    }
    try {
        const decoded = jwt.verify(token, "hsdlkjhakjfhd");
        req.user = decoded.user;
        next();
    }
    catch (err) {
        res.status(200).json({
            type: false,
            message: "Invalid token"
        });
    }
}

exports.isLoggedOut = (req, res, next) => {
    if (req.header("Authorization")) {
        res.status(200).json({
            type: false,
            message: "Token provided"
        });
        return;
    }
    next();
}

exports.isProfile = (req, res, next) => {
    const token = req.header("Authorization");
    if (token) {
        const decoded = jwt.verify(token, "hsdlkjhakjfhd");
        req.user = decoded.user;
    }
    next();
}