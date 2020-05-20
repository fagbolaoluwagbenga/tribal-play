var express = require("express");
var router = express.Router();
var DashboardController = require("../controllers/dashboard");

// getting users profile
router.get("/profile", DashboardController.get_user_profile);

// getting users account payment details
router.get("/account-payment", DashboardController.get_user_account_payment_details);

// getting users favourite plays
router.get("/favorites", DashboardController.get_user_favourite_plays);

// getting categories for movie thrill -- on landing page (under construction)
router.get("/categories", DashboardController.get_category);

// getting help and support 
router.get("/support", DashboardController.get_help_support);

//  getting users account details to be edited
router.get("/account/:id/edit", DashboardController.get_edit_user_account_details);

// router.get("/account/countries", DashboardController.get_countries);

// updating user profile
router.put("/account/:id/updated", DashboardController.put_updated_user_profile);
//route update plan
// router.get("/plan", DashboardController.get_payment_details)
//update plan
router.put("/plan-updated", DashboardController.put_updated_user_plan);

// uploading users profile picture
router.post("/uploadUser", isLoggedIn, DashboardController.post_user_uploading_profile_pictures);





function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;

