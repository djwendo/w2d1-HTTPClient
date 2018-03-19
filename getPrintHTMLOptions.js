var https = require('https');
var incomingData = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

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

getAndPrintHTML(requestOptions);