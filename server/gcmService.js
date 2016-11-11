// Load modules

var gcm = require('node-gcm');

// Replace these with your own values.
var apiKey = "AIzaSyDOhR__3W_4K0dna1urouf6U1S1wpKsGzU";
var deviceID = "db8mecTja2Q:APA91bG78G9PA_TjnZt6o9sLt4YD63vu8xrourFU7HTIVdxkeECEfQBJg0Tvuy1HwqCZwZaV2gOoTesBJJ6_3QKhVsVBUfHZ8CsWTIA1KJkfHWlpiigyiMC9VyFYxxkJsENCMlE7aLvO";

var service = new gcm.Sender(apiKey);
var message = new gcm.Message();
message.addData('title', 'Hello, World');
message.addData('body', 'This is a notification that will be displayed ASAP.');
message.addData('content-available', '1');

service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
	if(err) console.error(err);
	else 	console.log(response);
});
