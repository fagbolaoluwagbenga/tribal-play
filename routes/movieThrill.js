var express = require("express");
var router = express.Router();
var AmazingKill = require("../models/movie-thrills/amazingKill");
var DeathScene = require("../models/movie-thrills/deathScene");
var AmazingStunt = require("../models/movie-thrills/amazingStunt");
var LoveScene = require("../models/movie-thrills/loveScene");
var ScariestMovies = require("../models/movie-thrills/scariestMovies");
var FunniestScene = require("../models/movie-thrills/funniestScene");
var BestScript = require("../models/movie-thrills/bestScript");

router.get("/movieThrill", function(req, res) {
  res.render("dashboard-movie-thrill");
});

router.get("/amazingKill", function(req, res) {
  AmazingKill.find({}, function(err, amazingKills) {
    if (err) {
      //res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-amazing-kill", { amazingKills: amazingKills });
    }
  });
});
  
router.get("/funniestScene", function(req, res) {
  FunniestScene.find({}, function(err, funniestScenes) {
    if (err) {
      //res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-funniest-scene", { funniestScenes: funniestScenes });
    }
  });
});

router.get("/loveScene", function(req, res) {
  LoveScene.find({}, function(err, loveScenes) {
    if (err) {
      //res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-love-scene", { loveScenes: loveScenes });
    }
  });
});

router.get("/bestScript", function(req, res) {
  BestScript.find({}, function(err, bestScripts) {
    if (err) {
      //res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-best-script", { bestScripts: bestScripts });
    }
  });
});

router.get("/deathScene", function(req, res) {
  DeathScene.find({}, function(err, deathScenes) {
    if (err) {
      //res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-death-scene", { deathScenes: deathScenes });
    }
  });
});

router.get("/amazingStunt", function(req, res) {
  AmazingStunt.find({}, function(err, amazingStunts) {
    if (err) {
      //res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-amazing-stunt", { amazingStunts: amazingStunts });
    }
  });
});

router.get("/scariestMovies", function(req, res) {
  ScariestMovies.find({}, function(err, scariestMovies) {
    if (err) {
      //res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-amazing-stunt", { scariestMovies: scariestMovies });
    }
  });
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  }
  
module.exports = router;