var express = require("express");
var app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var User = require("./models/user");
var LocalStrategy = require("passport-local");
var flash = require("connect-flash");
var methodOverride = require("method-override");
var path = require("path");
var config = require('./config');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var searchRoutes = require("./routes/search");
var movieThrillRoutes = require("./routes/movieThrill");
var tvSeriesRoutes = require("./routes/tvSeries");
var indexRoutes = require("./routes/index");
var newMovieRoutes = require("./routes/newMovie");
var adminRoutes = require("./routes/admin");
var chartsRoutes = require("./routes/charts");
var dashboardRoutes = require("./routes/dashboard");
var trailerRoutes = require("./routes/trailer");
var multerRoutes = require("./routes/multer");
var oauthRoutes = require("./routes/oauth");
var Setup = require('./oauth/setup');
var keys = require("./oauth/keys");
var compression = require('compression');
var helmet = require('helmet');

mongoose.connect(config.databaseName, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  connectTimeoutMS: 10000,
});

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(compression());
app.use(helmet());
app.use(flash());

// error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

//setting engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/views")));
app.set("views", path.join(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: keys.session.secret,
    key: keys.session.key,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.listen(config.port, () =>
  console.log(`Listening at port ${config.port} on the ${config.envName}`),
);

app.use(function (req, res, next) {
  res.locals.user = req.user;
  app.locals.plan = req.plan;
  next();
});

app.use(indexRoutes);
app.use(tvSeriesRoutes);
app.use(searchRoutes);
app.use(dashboardRoutes);
app.use(trailerRoutes);
app.use(movieThrillRoutes);
app.use(newMovieRoutes);
app.use(adminRoutes);
app.use(chartsRoutes);
app.use(multerRoutes);
app.use(oauthRoutes);

app.use(function (req, res, next) {
  res.status(404).render('404');
})
passport.use(new LocalStrategy(User.authenticate()));
passport.serialize + (User.serializeUser());
passport.deserializeUser(User.deserializeUser());