const passport = require("passport");
const googleStrategy = require('passport-google-oauth20').Strategy;
const facebookStrategy = require("passport-facebook").Strategy;
const twitterStrategy = require('passport-twitter').Strategy;
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new googleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/auth/google/redirect",
    }, (accessToken, refreshToken, profile, done) => {

        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log('user all ready exists:', currentUser);
                done(null, currentUser);
            } else {
                console.log(profile);
                new User({
                    username: profile._json.given_name,
                    fullname: profile._json.displayName,
                    googleId: profile.id,
                    email: profile._json.email,
                    picture: profile._json.picture,
                    provider: profile.provider
                }).save().then((newUser) => {
                    console.log("new user created........" + newUser);
                    done(null, newUser);
                });

            }
        })
    })
);

passport.use(
    new facebookStrategy({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL: "/auth/facebook/redirect",
        profileFields: ["emails", "gender", "displayName", "name", "photos"]
    },
        function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                User.findOne({ 'facebook.id': profile.id }, function (err, user) {
                    if (err)
                        return done(err);
                    if (user)
                        return done(null, user);
                    else {
                        console.log(profile);
                        var newUser = new User();
                        newUser.username = profile._json.first_name;
                        newUser.fullname = profile._json.name;
                        newUser.facebookId = profile.id;
                        newUser.facebookToken = accessToken;
                        newUser.email = profile._json.email,
                            newUser.picture = profile.photos[0].value,
                            newUser.provider = profile.provider
                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        })
                        console.log("new user created.");
                    }
                });
            });
        }

    ));


passport.use(
    new twitterStrategy({
        consumerKey: keys.twitter.clientID,
        consumerSecret: keys.twitter.clientSecret,
        callbackURL: "/auth/twitter/redirect",
        includeEmail: true
    }, (accessToken, refreshToken, profile, done) => {

        User.findOne({ twitterId: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log('user all ready exists:', currentUser);
                done(null, currentUser);
            } else {
                console.log(profile);
                new User({
                    username: profile.username,
                    fullname: profile.displayName,
                    twitterId: profile.id,
                    email: profile.emails[0].value,
                    picture: profile.photos[0].value,
                    provider: profile.provider
                }).save().then((newUser) => {
                    console.log("new user created." + newUser);
                    done(null, newUser);
                });

            }
        })
    })
);


