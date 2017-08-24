var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var poll_config_schema = new Schema({
    poll_name : String,
    poll_id : String,
    poll_max_user_vote : Number,
    poll_unique_ids : [ String ],
    poll_unique_ids_enabled : Boolean,
    poll_is_active : Boolean,
    poll_start_date_time : Date,
    poll_end_date_time : Date,
    poll_judge_votes : Boolean,
    poll_judge_select : Boolean,
    poll_judge_select_count : Number,
    poll_judge_details : [{
        poll_judge_name : String,
        poll_judge_id : Number,
        poll_judge_desciption : String
    }],
    poll_judge_category :[
        Schema.Types.Mixed
    ]
});

var poll_details_schema = new Schema({
    "poll_id" : String,
    "poll_team_name" : String,
    "poll_team_id" : Number,
    "poll_team_members" : [
    {
        "name" : String,
        "mobile" : Number,
        "email" : String
    }
],
    "poll_team_votes" : [
        String
],
    "poll_judge_marks" : [
        {
            "poll_jude_c_4" : Number,
            "poll_jude_c_3" : Number,
            "poll_jude_c_2" : Number,
            "poll_jude_c_1" : Number,
            "poll_judge_id" : Number
        }
]
});

var mobilenumber_schema = new Schema({
    "mobile_number" : Schema.Types.Mixed
});

// var xyzcollect = new Schema({
//     _id:Number,
//     "n_1":Schema.Types.Mixed,
//     "n":Schema.Types.Mixed
//
// });

// the schema is useless so far
// we need to create a model using it
var poll_config_fun = mongoose.model('poll_configs', poll_config_schema);
var poll_details_fun = mongoose.model('poll_details', poll_details_schema);
var mobilenumberfun = mongoose.model('mobilenumber', mobilenumber_schema);


// make this available to our users in our Node applications
module.exports = {
    poll_config : poll_config_fun,
    poll_details : poll_details_fun,
    mobilenumber : mobilenumberfun

};
