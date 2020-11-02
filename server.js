const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;


server.set('view engine', 'ejs');

server.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

/*  PASSPORT SETUP  */


let userProfile;

server.use(passport.initialize());
server.use(passport.session());

server.get('/success', (req, res) => res.send(userProfile));
server.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

/* GOOGLE AUTH */


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));
 
server.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 

server.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {

    res.redirect('/success');
  });

server.get('/auth/facebook',
  passport.authenticate('facebook'));

server.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  function(req, res) {

    res.redirect('/success');
  });  

 //// 

server.use(helmet());
server.use(
  cors({
    origin: [
      "http ://localhost:3000"
    ],
  })
);
server.use(express.json());

server.use(
  morgan(":method :url :status :res[content-type] - :response-time ms")
);

const welcomeRouter = require("./welcome");
const shipsRouter = require("./ships/ships-router")

server.use("/", welcomeRouter);
server.use("/ships", shipsRouter)


module.exports = server;