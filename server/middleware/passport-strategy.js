const passport = require('passport');
const FacebookSrategy = require('passport-facebook');
const { model } = require('mongoose');
const User = require('../models/user.model');

const config = require('../keys');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // You can verify user info with the database if you need to here
  done(null, user);
});
const fbOpt = {
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL,
  profileFields: ['email', 'name', 'picture.type(large)', 'birthday'],
};
const fbCallback = async function(accessToken, refreshToken, profile, cb) {
  // const profiles = profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'
  const { email, last_name, first_name, id } = profile._json;
  const fbData = {
    id,
    email,
    name: `${first_name} ${last_name}`,
    picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg',
  };
  const candidate = await User.select('fb_id');
  console.log(candidate);
  // try {
  //     const candidat = await
  // } catch (e) {
  //     console.log(e)
  // }
  // console.log(profile._raw)
};

module.exports = passport.use(new FacebookSrategy(fbOpt, fbCallback));
