var twilio = require('twilio');
var SurveyResponse = require('../models/SurveyResponse');
var User = require('../models/SurveyReadAndInsert');
var survey = require('../survey_data');

// Handle SMS submissions
module.exports = function(request, response) {
    //var phone = request.body.From;
    //var input = request.body.Body;

    var body = request.body;

    console.log("inbound message",request.headers);
    console.log("inbound message",request.body);

    // var chris = new User({
    //     name: 'Karthik',
    //     username: 'karthikeyan2418',
    //     password: 'password'
    // });
    //
    // chris.save(function(err) {
    //     if (err) throw err;
    //
    //     console.log('User saved successfully!');
    // });

function respond(message) {
        var twiml = new twilio.TwimlResponse();
        twiml.message(message);
        response.type('text/xml');
        response.send(twiml.toString());
    }
    
    respond("Thanks for your vote");
    
};
