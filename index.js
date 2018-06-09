var express = require('express')
var app = express()
var VoiceResponse = require('twilio').twiml.VoiceResponse;

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.post("/custommessagee/:message", function (request, response) {
  var message = request.params.message;
  message = message.split('_').join(' ');
  var vresponse = new VoiceResponse();
  vresponse.say(message);
  response.set('Content-Type', 'text/xml');
  response.type('text/xml');
  response.send(vresponse.toString());
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
