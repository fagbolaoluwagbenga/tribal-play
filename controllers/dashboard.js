var User = require("../models/user");
var Countrie = require("../models/countrie");
var Plan = require("../models/plan");
var uploadUser = require("../routes/multer");

// getting users profile
exports.get_user_profile = function (req, res) {
    res.render("dashboard-profile", { user: req.user });
}
// exports.get_tv_profile =  function(req, res) {
//     request(
//       "https://api.themoviedb.org/3/trending/person/week?api_key=0374471c4735f7947d0663362926939d",
//       function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//           var data = JSON.parse(body);
//           res.render("dashboard-tv-profile", { data: data, user: req.user });
//         }
//       }
//     );
//   }


// getting users favourite plays (under construction)
exports.get_user_favourite_plays = function (req, res) {
    res.redirect("/profile");
}

// getting categories for movie thrill -- on landing page (under construction) 
exports.get_category = function (req, res) {
    res.render("categories");
}

// getting help and support 
exports.get_help_support = function (req, res) {
    res.render("support", { user: req.user });
}

//  getting users account details to be edited
// exports.get_user_account_details = function (req, res) {
//     res.render("dashboard-account", { user: req.user, newMovie: req.newMovie });
// }



exports.get_edit_user_account_details = function (req, res) {
    User.findById(req.params.id, function (err, userId) {
        if (err) {
            res.redirect("/account/:id/edit")
        } else {
            res.render("dashboard-account", { user: userId, user: req.user, countries: req.countrie, newMovie: req.newMovie });
        }
    });
}


// exports.get_countries = function(req, res){
//     Countrie.find({}, function (err, allCountries) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("dashboard-account", { countries: allCountries });
//         }
//     });
// }


exports.put_updated_user_profile = function (req, res) {
    User.findOneAndUpdate(req.params.id, req.body.user, function (err, updatedUser) {
        if (err) {
            res.redirect("/account/" + req.params.id + "/edit");
            console.log(err);
        } else {
            res.render("dashboard-account", { user: updatedUser });
            // res.redirect("/profile");
            // res.render("dashboard-account")
            console.log("updated")
            console.log(updatedUser)
        }
    });
}

// getting users account payment details (under construction)
exports.get_user_account_payment_details = function (req, res) {
    User.findById(req.params.id);
    Plan.find({}, function (err, allPlans) {
        if (err) {
            console.log(err);
        } else {
            res.render("dashboard-account-payment", { user: req.user, plans: allPlans });
        }
    });
}

exports.put_updated_user_plan = function (req, res) {
   var plan = req.body.plan;
   var newPlan = { plan: plan };
    User.findOneAndUpdate(req.params.id, req.body.plan, function (err, updatedPlan) {
        if (err) {
            res.redirect("/account-payment");
            console.log(err);
        } else {
            res.redirect("/account-payment");
            // res.redirect("/profile");
            // res.render("dashboard-account")
            console.log("updated")
            console.log(updatedPlan)
        }
    });
}


// uploading users profile picture 
exports.post_user_uploading_profile_pictures = (req, res) => {
    uploadUser(req, res, err => {
        if (err) {
            res.render("dashboard-account", {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render("dashboard-account", {
                    msg: "Error: No file selected!"
                });
            } else {
                User.findOne({ username: req.user.username })
                    .then(user => {
                        user.profile_pic = `userImage/${req.file.filename}`;
                        user.save();
                        res.render("dashboard-account", {
                            msg: "File Uploaded!",
                            file: `userImage/${req.file.filename}`,
                            user: user
                        });
                    });
            }
        }
    });
} 
