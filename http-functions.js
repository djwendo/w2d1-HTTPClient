var https = require('https');

module.exports = function getHTML (options, callback) {

    var incomingData = '';

    https.get(options, function (response) {
      response.setEncoding('utf8');
      response.on('data', function (data) {
        incomingData += data;
      });
      response.on('end', function() {
        callback(incomingData);
      });
    });
};