var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var http = require("http");
var indexRouter = require("./routes/index");

var app = express();


require("./model/config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


var server = http.createServer(app);

server.listen(process.env.port || 3080, function () {
  console.log("Server is running on port 3080");
});
