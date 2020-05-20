var User = require("../models/user");
var nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");
var crypto = require("crypto");
var async = require("async");
var passport = require("passport");
const { check, validationResult } = require('express-validator');
var Plan = require("../models/plan");

// getting landing page
exports.get_index_page = (req, res) => {
    res.render("index");
}

// getting signup page 1 
exports.get_signup_page1 = function (req, res) {
    res.render("signup-step1");
}

// getting signup page 2
exports.get_signup_page2 = function (req, res) {
    Plan.find({}, function (err, allPlans) {
        if (err) {
            console.log(err);
        } else {
            res.render("signup-step2", { plans: allPlans });
        }
    });


    // res.render("signup-step2", { plan: req.plan });
}
// getting signup page 3
exports.get_signup_page3 = function (req, res) {
    res.render("signup-step3", { user: req.user });
}
// posting users details to create account
exports.post_signup2_user_details = function (req, res) {
    req.body.username;
    req.body.password;
    req.body.email;
    req.body.plan;
    req.body.confirmpassword;
    req.query.selectplan;

    const { username, password, email, plan, confirmpassword } = req.body;
    let errors = [];

    if (!username || !password || !email || !plan || !confirmpassword) {
        errors.push({ msg: "please fill required field" });
    }

    if (password !== confirmpassword) {
        errors.push({ msg: "password don't match" })
    }

    if (password.length < 6) {
        errors.push({ msg: "password should be at least 6 characters" })
    }
    if (errors.length > 0) {
        res.render('signup-step2', {
            errors,
            username,
            email,
            password,
            confirmpassword,
            plan

        });
    } else {
        User.findOne({ email: email }).then(user => {
            if (user) {
                errors.push({ msg: 'Email already exists' });
                res.render('signup-step2', {
                    errors,
                    username,
                    email,
                    password,
                    confirmpassword,
                    plan
                });
            } else {
                User.register(
                    new User({
                        username: req.body.username,
                        email: req.body.email,
                        plan: req.body.plan,
                        selectplan: req.query.selectplan
                    }),
                    req.body.password,
                    function (err, user) {
                        if (err) {
                            Plan.find({}, function (err, allPlans) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    res.render("signup-step2", { plans: allPlans });
                                }
                            });
                        
                        }
                        passport.authenticate("local")(req, res, function () {
                            res.redirect("/signup3");
                            console.log("user created");
                            console.log(user)
                        });
                    }
                );

            }
        });
    }
}


// getting signup page 4
exports.get_signup_page4 = function (req, res) {
    res.render("signup-step4", { user: req.user });
}

// getting faq page
exports.get_faqs_page = function (req, res) {
    res.render("faqs");
}

// getting welcome page
exports.get_welcome_page = function (req, res) {
    res.render("signup-welcome", { user: req.user });
}

// login route 
exports.get_login_route = function (req, res) {
    const flashMessages = res.locals.getMessages();
    console.log('flash', flashMessages);
    if (flashMessages.error) {
        res.render('index', {
            showErrors: true,
            errors: flashMessages.error
        });
    } else {
        res.render("index");
    }
}

// logging out user session  
exports.get_logout_page = function (req, res) {
    req.logout();
    res.redirect("/");
}

//getting forgot route page  
exports.get_forgot_page = function (req, res) {
    res.render("forgot", {
        user: req.user
    });
}

//posting forgot route page
exports.post_forgot_user_new_details = function (req, res, next) {
    async.waterfall(
        [
            function (done) {
                crypto.randomBytes(20, function (err, buf) {
                    var token = buf.toString("hex");
                    done(err, token);
                });
            },
            function (token, done) {
                User.findOne({ email: req.body.email }, function (err, user) {
                    if (!user) {
                        // req.flash("result", "alert('success!')");
                        return res.render("forgot", {
                            result: " tittle:'Oops', text:'something went wrong', 'error'"
                        });
                    }
                    user.resetPasswordToken = token;
                    user.resetPasswordExpires = Date.now() + 3600000; // == 1 hour

                    user.save(function (err) {
                        done(err, token, user);
                    });
                });
            },
            function (token, user, done) {
                var smtpTransport = nodemailer.createTransport(sgTransport(options));

                var d = new Date();

                var mailOptions = {
                    to: user.email,
                    from: "Tribal Play <noreply@tribalplay.com>",
                    subject: "Request to Reset Password",
                    text: `Hi ${user.username},
            Your Account password was reset using the email address ${
                        user.email
                        } on ${d} follow the link below in other to reset it
             http://${
                        req.headers.host
                        }/reset/${token} if you did not do this please ignore this e-mail and your password will remain unchanged.`
                };
                smtpTransport.sendMail(mailOptions, function (err) {
                    console.log("mail sent");

                    result: "success rit";

                    done(err, "done");
                });
            }
        ],
        function (err) {
            if (err) return next(err);
            res.redirect("/forgot");
        }
    );
}

// reset route  
exports.get_user_new_reset_token = function (req, res) {
    User.findOne(
        {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        },
        function (err, user) {
            if (!user) {
                req.flash("error", "password reset token is invalid or has expired!.");
                return res.redirect("/forgot");
            }
            res.render("reset", { token: req.params.token });
        }
    );
}

//   Users profile
exports.get_user_id = function (req, res) {
    User.findById(req.params.id, function (err, foundUser) {
        if (err) {
            req.flash("error", "Something went wrong.");
        }
    });
}