var http = require('http');
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var urlencoded = require('body-parser').urlencoded;
var config = require('./config');
var voice = require('./routes/voice');
var message = require('./routes/message');
var inboundsms = require('./routes/inboundsms');
var results = require('./routes/results');
var bodyParser = require('body-parser');
var ApiHandler = require('./routes/ApiHandler');

// initialize MongoDB connection
mongoose.connect('mongodb://localhost/survey');

// Create Express web app with some useful middleware
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

// Twilio Webhook routes
app.post('/voice', voice.interview);
app.post('/voice/:responseId/transcribe/:questionIndex', voice.transcription);
app.post('/message', message);
app.post('/inboundsms', ApiHandler.poll_sms)

app.get('/poll_sample_data/:judgeId', ApiHandler.poll_judge_vote_data);

app.post('/poll_sample_data/:judgeId', ApiHandler.poll_judge_vote_post);


app.get('/poll_judge_result/:pollId', ApiHandler.poll_judge_result_data);

app.post('/poll/polling', ApiHandler.poll_vote);

app.get('/poll/config/:poll_id', ApiHandler.poll_configs);
app.get('/poll/details/:poll_id', ApiHandler.poll_details);


/* user creation */
app.post('/poll/user/create/:pollID', ApiHandler.poll_create_user);


// Ajax route to aggregate response data for the UI
app.get('/results', results);

// Create HTTP server and mount Express app
var server = http.createServer(app);
server.listen(config.port, function() {
    console.log('Express server started on *:'+config.port);
});
