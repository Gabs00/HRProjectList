var passport = require('passport'),
GoogleStrategy = require('passport-google').Strategy;

passport.use(new GoogleStrategy({
    returnURL:'http://localhost:9000/auth/google/return',
    realm:'http://localhost:9000'
  },

  function(identifier, profile, done) {
    User.findOrCreate({openId:identifier}, function(err, user) {
      done(err,user);
    });
  }
));

module.exports = passport;