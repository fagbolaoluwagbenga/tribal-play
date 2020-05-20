var express = require("express");
var router = express.Router();
var passport = require("passport");

//google route
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

//callback route for google
router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/signup3');
});

//facebook route
router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ["email"]
}));

//callback route for facebook
router.get('/auth/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/signup3');
});

// twitter route   
    router.get('/auth/twitter', passport.authenticate('twitter', {
        scope: ['email']
    }));

//callback route for facebook
router.get('/auth/twitter/redirect', passport.authenticate('twitter', { failureRedirect: '/signup2' }), function (req, res) {
    res.redirect('/signup3')
});


module.exports = router;