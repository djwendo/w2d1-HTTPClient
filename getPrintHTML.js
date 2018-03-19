var https = require('https');
var incomingData = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      incomingData += data;
    });

    response.on('end', function() {
      console.log(incomingData);
    });
  });
}

getAndPrintHTML();