var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");
var multerGoogleStorage = require("multer-google-storage");

// storage engine
var storage = multer.diskStorage({
    // destination: ` https://api.cloudinary.com/v1_1/tribalplay/userImage/`,

    destination: function(req, file, cb) {
      cb( null, "https://cdn.tribalplay.io/userImage/"  );
    },

    filename: function(req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  });
  
  //initialize upload for user
  var uploadUser = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function(req, file, cb) {
      checkFileType(file, cb);
    }
  }).single("userImage");
  
  //check file type
  function checkFileType(file, cb) {
    // allowed extension
    var filetypes = /jpeg|jpg|png|gif/;
    // check ext
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mime
    var mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images only!");
    }
  }
  
  module.exports = router;