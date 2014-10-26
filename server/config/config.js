var app = require('express')();
var passport = require('./passport');

app.get('/*', function(req, res, next){
  console.log('/GET', req.url);
  next();
});
//Google Authentication
app.get('/auth/google', passport.authenticate('google'));

//Returned from google
app.get('/auth/google/return',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect:'/login'
  })
);


app.get('/*', function(req, res, next){
  var url = req.url;
  //Checking for urls like ../../passwd etc
  if(!url.match(/\.\.+?\//)){
    res.sendFile(req.url, {root:'./client'});
  } else if(url === '/'){
    next();
  } else {
    res.status(405).send('Did you try something naughty?');
  }
});

app.get('/', function(req, res){
  res.sendFile('index.html', {root:'./client'});
});


module.exports.app = app;
//Config checks process.env, otherwise sets to 9000
module.exports.port = process.env.PORT || 9443;