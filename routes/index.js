var express = require("express");
var router = express.Router();
var passport = require("passport");
var IndexController = require("../controllers/index");
const { check, validationResult } = require('express-validator');


// getting landing page
router.get("/",IndexController.get_index_page);

router.get("/2", (req, res) => {
  res.render("index2");
});

// getting signup page 1
router.get("/signup1", IndexController.get_signup_page1);

// getting signup page 2
router.get("/signup2", IndexController.get_signup_page2);

// getting signup page 3
router.get("/signup3", IndexController.get_signup_page3);

// posting users details to create account
router.post("/signup2",IndexController.post_signup2_user_details);

// getting signup page 4
router.get("/signup4", IndexController.get_signup_page4);

// getting faq page
router.get("/faqs", IndexController.get_faqs_page);

// getting welcome page
router.get("/welcome", IndexController.get_welcome_page);

// login route 
router.get("/login",IndexController.get_login_route);
//mobile
router.get("/loginM",IndexController.get_login_routeM);

// authenticating user
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
  }),
  function(req, res) {}
);

router.post( "/loginM", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/loginM",
  }),
  function(req, res) {}
);

// logging out user session
router.get("/logout", IndexController.get_logout_page);

//getting forgot route page
router.get("/forgot", IndexController.get_forgot_page);

//posting forgot route page
router.post("/forgot", IndexController.post_forgot_user_new_details);

// router.get("/plan", IndexController.get_plan);

// reset route
router.get("/reset/:token", IndexController.get_user_new_reset_token);

router.post('/reset/:token', IndexController.post_new_password);

//Users profile
router.get("/users/:id",isLoggedIn, IndexController.get_user_id);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}


module.exports = router;