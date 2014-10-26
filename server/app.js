var config = require('./config/config');
var app = config.app;
var port = config.port;
var pem = require('pem');
var https = require('https');

module.exports = function(){
  pem.createCertificate({days:1, selfSigned:true}, function(err, keys){
    if(err){
      console.log(err.message);
      module.exports();
      return;
    }
    https.createServer({key: keys.serviceKey, cert: keys.certificate}, app).listen(port, function(){
      console.log('listening on port', port);
    });
  });
};