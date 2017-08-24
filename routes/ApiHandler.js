/**
 * Created by altus on 9/22/16.
 */
var poll_model = require('../models/poll_config');
var twilio = require('twilio');
var mongoose = require('mongoose');

var judgeResult =   [
    {
        "poll_judge_id" : 1,
        "poll_jude_c_1" : 0,
        "poll_jude_c_2" : 0,
        "poll_jude_c_3" : 0,
        "poll_jude_c_4" : 0
    },
    {
        "poll_judge_id" : 2,
        "poll_jude_c_1" : 0,
        "poll_jude_c_2" : 0,
        "poll_jude_c_3" : 0,
        "poll_jude_c_4" : 0,
    },
    {
        "poll_judge_id" : 3,
        "poll_jude_c_1" : 0,
        "poll_jude_c_2" : 0,
        "poll_jude_c_3" : 0,
        "poll_jude_c_4" : 0
    }
]
var dataVar = {
    "data": [
        {
            "DT_RowId": "row_1",
            "first_name": "Tiger",
            "last_name": "Nixon",
            "position": "System Architect",
            "email": "t.nixon@datatables.net",
            "office": "Edinburgh",
            "extn": "5421",
            "age": "61",
            "salary": "320800",
            "start_date": "2011-04-25"
        },
        {
            "DT_RowId": "row_2",
            "first_name": "Garrett",
            "last_name": "Winters",
            "position": "Accountant",
            "email": "g.winters@datatables.net",
            "office": "Tokyo",
            "extn": "8422",
            "age": "63",
            "salary": "170750",
            "start_date": "2011-07-25"
        },
        {
            "DT_RowId": "row_3",
            "first_name": "Ashton",
            "last_name": "Cox",
            "position": "Junior Technical Author",
            "email": "a.cox@datatables.net",
            "office": "San Francisco",
            "extn": "1562",
            "age": "66",
            "salary": "86000",
            "start_date": "2009-01-12"
        },
        {
            "DT_RowId": "row_4",
            "first_name": "Cedric",
            "last_name": "Kelly",
            "position": "Senior Javascript Developer",
            "email": "c.kelly@datatables.net",
            "office": "Edinburgh",
            "extn": "6224",
            "age": "22",
            "salary": "433060",
            "start_date": "2012-03-29"
        },
        {
            "DT_RowId": "row_5",
            "first_name": "Airi",
            "last_name": "Satou",
            "position": "Accountant",
            "email": "a.satou@datatables.net",
            "office": "Tokyo",
            "extn": "5407",
            "age": "33",
            "salary": "162700",
            "start_date": "2008-11-28"
        },
        {
            "DT_RowId": "row_6",
            "first_name": "Brielle",
            "last_name": "Williamson",
            "position": "Integration Specialist",
            "email": "b.williamson@datatables.net",
            "office": "New York",
            "extn": "4804",
            "age": "61",
            "salary": "372000",
            "start_date": "2012-12-02"
        },
        {
            "DT_RowId": "row_7",
            "first_name": "Herrod",
            "last_name": "Chandler",
            "position": "Sales Assistant",
            "email": "h.chandler@datatables.net",
            "office": "San Francisco",
            "extn": "9608",
            "age": "59",
            "salary": "137500",
            "start_date": "2012-08-06"
        },
        {
            "DT_RowId": "row_8",
            "first_name": "Rhona",
            "last_name": "Davidson",
            "position": "Integration Specialist",
            "email": "r.davidson@datatables.net",
            "office": "Tokyo",
            "extn": "6200",
            "age": "55",
            "salary": "327900",
            "start_date": "2010-10-14"
        },
        {
            "DT_RowId": "row_9",
            "first_name": "Colleen",
            "last_name": "Hurst",
            "position": "Javascript Developer",
            "email": "c.hurst@datatables.net",
            "office": "San Francisco",
            "extn": "2360",
            "age": "39",
            "salary": "205500",
            "start_date": "2009-09-15"
        },
        {
            "DT_RowId": "row_10",
            "first_name": "Sonya",
            "last_name": "Frost",
            "position": "Software Engineer",
            "email": "s.frost@datatables.net",
            "office": "Edinburgh",
            "extn": "1667",
            "age": "23",
            "salary": "103600",
            "start_date": "2008-12-13"
        },
        {
            "DT_RowId": "row_11",
            "first_name": "Jena",
            "last_name": "Gaines",
            "position": "Office Manager",
            "email": "j.gaines@datatables.net",
            "office": "London",
            "extn": "3814",
            "age": "30",
            "salary": "90560",
            "start_date": "2008-12-19"
        },
        {
            "DT_RowId": "row_12",
            "first_name": "Quinn",
            "last_name": "Flynn",
            "position": "Support Lead",
            "email": "q.flynn@datatables.net",
            "office": "Edinburgh",
            "extn": "9497",
            "age": "22",
            "salary": "342000",
            "start_date": "2013-03-03"
        },
        {
            "DT_RowId": "row_13",
            "first_name": "Charde",
            "last_name": "Marshall",
            "position": "Regional Director",
            "email": "c.marshall@datatables.net",
            "office": "San Francisco",
            "extn": "6741",
            "age": "36",
            "salary": "470600",
            "start_date": "2008-10-16"
        },
        {
            "DT_RowId": "row_14",
            "first_name": "Haley",
            "last_name": "Kennedy",
            "position": "Senior Marketing Designer",
            "email": "h.kennedy@datatables.net",
            "office": "London",
            "extn": "3597",
            "age": "43",
            "salary": "313500",
            "start_date": "2012-12-18"
        },
        {
            "DT_RowId": "row_15",
            "first_name": "Tatyana",
            "last_name": "Fitzpatrick",
            "position": "Regional Director",
            "email": "t.fitzpatrick@datatables.net",
            "office": "London",
            "extn": "1965",
            "age": "19",
            "salary": "385750",
            "start_date": "2010-03-17"
        },
        {
            "DT_RowId": "row_16",
            "first_name": "Michael",
            "last_name": "Silva",
            "position": "Marketing Designer",
            "email": "m.silva@datatables.net",
            "office": "London",
            "extn": "1581",
            "age": "66",
            "salary": "198500",
            "start_date": "2012-11-27"
        },
        {
            "DT_RowId": "row_17",
            "first_name": "Paul",
            "last_name": "Byrd",
            "position": "Chief Financial Officer (CFO)",
            "email": "p.byrd@datatables.net",
            "office": "New York",
            "extn": "3059",
            "age": "64",
            "salary": "725000",
            "start_date": "2010-06-09"
        },
        {
            "DT_RowId": "row_18",
            "first_name": "Gloria",
            "last_name": "Little",
            "position": "Systems Administrator",
            "email": "g.little@datatables.net",
            "office": "New York",
            "extn": "1721",
            "age": "59",
            "salary": "237500",
            "start_date": "2009-04-10"
        },
        {
            "DT_RowId": "row_19",
            "first_name": "Bradley",
            "last_name": "Greer",
            "position": "Software Engineer",
            "email": "b.greer@datatables.net",
            "office": "London",
            "extn": "2558",
            "age": "41",
            "salary": "132000",
            "start_date": "2012-10-13"
        },
        {
            "DT_RowId": "row_20",
            "first_name": "Dai",
            "last_name": "Rios",
            "position": "Personnel Lead",
            "email": "d.rios@datatables.net",
            "office": "Edinburgh",
            "extn": "2290",
            "age": "35",
            "salary": "217500",
            "start_date": "2012-09-26"
        },
        {
            "DT_RowId": "row_21",
            "first_name": "Jenette",
            "last_name": "Caldwell",
            "position": "Development Lead",
            "email": "j.caldwell@datatables.net",
            "office": "New York",
            "extn": "1937",
            "age": "30",
            "salary": "345000",
            "start_date": "2011-09-03"
        },
        {
            "DT_RowId": "row_22",
            "first_name": "Yuri",
            "last_name": "Berry",
            "position": "Chief Marketing Officer (CMO)",
            "email": "y.berry@datatables.net",
            "office": "New York",
            "extn": "6154",
            "age": "40",
            "salary": "675000",
            "start_date": "2009-06-25"
        },
        {
            "DT_RowId": "row_23",
            "first_name": "Caesar",
            "last_name": "Vance",
            "position": "Pre-Sales Support",
            "email": "c.vance@datatables.net",
            "office": "New York",
            "extn": "8330",
            "age": "21",
            "salary": "106450",
            "start_date": "2011-12-12"
        },
        {
            "DT_RowId": "row_24",
            "first_name": "Doris",
            "last_name": "Wilder",
            "position": "Sales Assistant",
            "email": "d.wilder@datatables.net",
            "office": "Sidney",
            "extn": "3023",
            "age": "23",
            "salary": "85600",
            "start_date": "2010-09-20"
        },
        {
            "DT_RowId": "row_25",
            "first_name": "Angelica",
            "last_name": "Ramos",
            "position": "Chief Executive Officer (CEO)",
            "email": "a.ramos@datatables.net",
            "office": "London",
            "extn": "5797",
            "age": "47",
            "salary": "1200000",
            "start_date": "2009-10-09"
        },
        {
            "DT_RowId": "row_26",
            "first_name": "Gavin",
            "last_name": "Joyce",
            "position": "Developer",
            "email": "g.joyce@datatables.net",
            "office": "Edinburgh",
            "extn": "8822",
            "age": "42",
            "salary": "92575",
            "start_date": "2010-12-22"
        },
        {
            "DT_RowId": "row_27",
            "first_name": "Jennifer",
            "last_name": "Chang",
            "position": "Regional Director",
            "email": "j.chang@datatables.net",
            "office": "Singapore",
            "extn": "9239",
            "age": "28",
            "salary": "357650",
            "start_date": "2010-11-14"
        },
        {
            "DT_RowId": "row_28",
            "first_name": "Brenden",
            "last_name": "Wagner",
            "position": "Software Engineer",
            "email": "b.wagner@datatables.net",
            "office": "San Francisco",
            "extn": "1314",
            "age": "28",
            "salary": "206850",
            "start_date": "2011-06-07"
        },
        {
            "DT_RowId": "row_29",
            "first_name": "Fiona",
            "last_name": "Green",
            "position": "Chief Operating Officer (COO)",
            "email": "f.green@datatables.net",
            "office": "San Francisco",
            "extn": "2947",
            "age": "48",
            "salary": "850000",
            "start_date": "2010-03-11"
        },
        {
            "DT_RowId": "row_30",
            "first_name": "Shou",
            "last_name": "Itou",
            "position": "Regional Marketing",
            "email": "s.itou@datatables.net",
            "office": "Tokyo",
            "extn": "8899",
            "age": "20",
            "salary": "163000",
            "start_date": "2011-08-14"
        },
        {
            "DT_RowId": "row_31",
            "first_name": "Michelle",
            "last_name": "House",
            "position": "Integration Specialist",
            "email": "m.house@datatables.net",
            "office": "Sidney",
            "extn": "2769",
            "age": "37",
            "salary": "95400",
            "start_date": "2011-06-02"
        },
        {
            "DT_RowId": "row_32",
            "first_name": "Suki",
            "last_name": "Burks",
            "position": "Developer",
            "email": "s.burks@datatables.net",
            "office": "London",
            "extn": "6832",
            "age": "53",
            "salary": "114500",
            "start_date": "2009-10-22"
        },
        {
            "DT_RowId": "row_33",
            "first_name": "Prescott",
            "last_name": "Bartlett",
            "position": "Technical Author",
            "email": "p.bartlett@datatables.net",
            "office": "London",
            "extn": "3606",
            "age": "27",
            "salary": "145000",
            "start_date": "2011-05-07"
        },
        {
            "DT_RowId": "row_34",
            "first_name": "Gavin",
            "last_name": "Cortez",
            "position": "Team Leader",
            "email": "g.cortez@datatables.net",
            "office": "San Francisco",
            "extn": "2860",
            "age": "22",
            "salary": "235500",
            "start_date": "2008-10-26"
        },
        {
            "DT_RowId": "row_35",
            "first_name": "Martena",
            "last_name": "Mccray",
            "position": "Post-Sales support",
            "email": "m.mccray@datatables.net",
            "office": "Edinburgh",
            "extn": "8240",
            "age": "46",
            "salary": "324050",
            "start_date": "2011-03-09"
        },
        {
            "DT_RowId": "row_36",
            "first_name": "Unity",
            "last_name": "Butler",
            "position": "Marketing Designer",
            "email": "u.butler@datatables.net",
            "office": "San Francisco",
            "extn": "5384",
            "age": "47",
            "salary": "85675",
            "start_date": "2009-12-09"
        },
        {
            "DT_RowId": "row_37",
            "first_name": "Howard",
            "last_name": "Hatfield",
            "position": "Office Manager",
            "email": "h.hatfield@datatables.net",
            "office": "San Francisco",
            "extn": "7031",
            "age": "51",
            "salary": "164500",
            "start_date": "2008-12-16"
        },
        {
            "DT_RowId": "row_38",
            "first_name": "Hope",
            "last_name": "Fuentes",
            "position": "Secretary",
            "email": "h.fuentes@datatables.net",
            "office": "San Francisco",
            "extn": "6318",
            "age": "41",
            "salary": "109850",
            "start_date": "2010-02-12"
        },
        {
            "DT_RowId": "row_39",
            "first_name": "Vivian",
            "last_name": "Harrell",
            "position": "Financial Controller",
            "email": "v.harrell@datatables.net",
            "office": "San Francisco",
            "extn": "9422",
            "age": "62",
            "salary": "452500",
            "start_date": "2009-02-14"
        },
        {
            "DT_RowId": "row_40",
            "first_name": "Timothy",
            "last_name": "Mooney",
            "position": "Office Manager",
            "email": "t.mooney@datatables.net",
            "office": "London",
            "extn": "7580",
            "age": "37",
            "salary": "136200",
            "start_date": "2008-12-11"
        },
        {
            "DT_RowId": "row_41",
            "first_name": "Jackson",
            "last_name": "Bradshaw",
            "position": "Director",
            "email": "j.bradshaw@datatables.net",
            "office": "New York",
            "extn": "1042",
            "age": "65",
            "salary": "645750",
            "start_date": "2008-09-26"
        },
        {
            "DT_RowId": "row_42",
            "first_name": "Olivia",
            "last_name": "Liang",
            "position": "Support Engineer",
            "email": "o.liang@datatables.net",
            "office": "Singapore",
            "extn": "2120",
            "age": "64",
            "salary": "234500",
            "start_date": "2011-02-03"
        },
        {
            "DT_RowId": "row_43",
            "first_name": "Bruno",
            "last_name": "Nash",
            "position": "Software Engineer",
            "email": "b.nash@datatables.net",
            "office": "London",
            "extn": "6222",
            "age": "38",
            "salary": "163500",
            "start_date": "2011-05-03"
        },
        {
            "DT_RowId": "row_44",
            "first_name": "Sakura",
            "last_name": "Yamamoto",
            "position": "Support Engineer",
            "email": "s.yamamoto@datatables.net",
            "office": "Tokyo",
            "extn": "9383",
            "age": "37",
            "salary": "139575",
            "start_date": "2009-08-19"
        },
        {
            "DT_RowId": "row_45",
            "first_name": "Thor",
            "last_name": "Walton",
            "position": "Developer",
            "email": "t.walton@datatables.net",
            "office": "New York",
            "extn": "8327",
            "age": "61",
            "salary": "98540",
            "start_date": "2013-08-11"
        },
        {
            "DT_RowId": "row_46",
            "first_name": "Finn",
            "last_name": "Camacho",
            "position": "Support Engineer",
            "email": "f.camacho@datatables.net",
            "office": "San Francisco",
            "extn": "2927",
            "age": "47",
            "salary": "87500",
            "start_date": "2009-07-07"
        },
        {
            "DT_RowId": "row_47",
            "first_name": "Serge",
            "last_name": "Baldwin",
            "position": "Data Coordinator",
            "email": "s.baldwin@datatables.net",
            "office": "Singapore",
            "extn": "8352",
            "age": "64",
            "salary": "138575",
            "start_date": "2012-04-09"
        },
        {
            "DT_RowId": "row_48",
            "first_name": "Zenaida",
            "last_name": "Frank",
            "position": "Software Engineer",
            "email": "z.frank@datatables.net",
            "office": "New York",
            "extn": "7439",
            "age": "63",
            "salary": "125250",
            "start_date": "2010-01-04"
        },
        {
            "DT_RowId": "row_49",
            "first_name": "Zorita",
            "last_name": "Serrano",
            "position": "Software Engineer",
            "email": "z.serrano@datatables.net",
            "office": "San Francisco",
            "extn": "4389",
            "age": "56",
            "salary": "115000",
            "start_date": "2012-06-01"
        },
        {
            "DT_RowId": "row_50",
            "first_name": "Jennifer",
            "last_name": "Acosta",
            "position": "Junior Javascript Developer",
            "email": "j.acosta@datatables.net",
            "office": "Edinburgh",
            "extn": "3431",
            "age": "43",
            "salary": "75650",
            "start_date": "2013-02-01"
        },
        {
            "DT_RowId": "row_51",
            "first_name": "Cara",
            "last_name": "Stevens",
            "position": "Sales Assistant",
            "email": "c.stevens@datatables.net",
            "office": "New York",
            "extn": "3990",
            "age": "46",
            "salary": "145600",
            "start_date": "2011-12-06"
        },
        {
            "DT_RowId": "row_52",
            "first_name": "Hermione",
            "last_name": "Butler",
            "position": "Regional Director",
            "email": "h.butler@datatables.net",
            "office": "London",
            "extn": "1016",
            "age": "47",
            "salary": "356250",
            "start_date": "2011-03-21"
        },
        {
            "DT_RowId": "row_53",
            "first_name": "Lael",
            "last_name": "Greer",
            "position": "Systems Administrator",
            "email": "l.greer@datatables.net",
            "office": "London",
            "extn": "6733",
            "age": "21",
            "salary": "103500",
            "start_date": "2009-02-27"
        },
        {
            "DT_RowId": "row_54",
            "first_name": "Jonas",
            "last_name": "Alexander",
            "position": "Developer",
            "email": "j.alexander@datatables.net",
            "office": "San Francisco",
            "extn": "8196",
            "age": "30",
            "salary": "86500",
            "start_date": "2010-07-14"
        },
        {
            "DT_RowId": "row_55",
            "first_name": "Shad",
            "last_name": "Decker",
            "position": "Regional Director",
            "email": "s.decker@datatables.net",
            "office": "Edinburgh",
            "extn": "6373",
            "age": "51",
            "salary": "183000",
            "start_date": "2008-11-13"
        },
        {
            "DT_RowId": "row_56",
            "first_name": "Michael",
            "last_name": "Bruce",
            "position": "Javascript Developer",
            "email": "m.bruce@datatables.net",
            "office": "Singapore",
            "extn": "5384",
            "age": "29",
            "salary": "183000",
            "start_date": "2011-06-27"
        },
        {
            "DT_RowId": "row_57",
            "first_name": "Donna",
            "last_name": "Snider",
            "position": "Customer Support",
            "email": "d.snider@datatables.net",
            "office": "New York",
            "extn": "4226",
            "age": "27",
            "salary": "112000",
            "start_date": "2011-01-25"
        }
    ],
    "options": [],
    "files": []
}

function respond(req, res, message) {
    var twiml = new twilio.TwimlResponse();
    twiml.message(message);
    res.type('text/xml');
    res.send(twiml.toString());
}

function isObjEmpty(objName) {
    //console.log("Obj :", objName , " length ", Object.keys(objName).length === 0  );
   return Object.keys(objName).length === 0;
}


function eliminateDuplicates(arr) {
    var i,
        len=arr.length,
        out=[],
        obj={};

    for (i=0;i<len;i++) {
        obj[arr[i]]=0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}
function isEmpty(value) {
    return !(value == null || value.length === 0);
}

Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
}

function  HandlePolling(pollId, uniqueId, contestant, cb) {

    uniqueId = uniqueId.toUpperCase();
    console.log("poll ID: ", pollId);
    console.log("unique ID: ", uniqueId);
    console.log("contestents : ", contestant);
    var status = false;
    var message = "";

    if (isEmpty(pollId) && isEmpty(uniqueId) && isEmpty(contestant)) {
        contestant = eliminateDuplicates(contestant);
        GetConfig(pollId, function (err, pollConfig) {
            if (err) {
                message = "error while retrieving poll config : " + err;
                cb(err, status, message);
            } else {
                if (isObjEmpty(pollConfig)) {
                    message = "poll id not valid";
                    cb(err, status, message);
                    return;
                } else if (pollConfig.length > 1) {
                    message = "poll id not valid, more than one poll config found";
                    cb(err, status, message);
                    return;
                } else {
                    var pollConfigObj = pollConfig[0];
                    console.log("index : ", pollConfigObj.poll_unique_ids.indexOf(uniqueId))
                    if (contestant.length > pollConfigObj.poll_max_user_vote) {
                        console.log("voting more than specified limit");
                        message = "voting more than specified limit";
                        cb(err, status, message);
                        return;
                    } else if (pollConfigObj.poll_unique_ids.indexOf(uniqueId) === -1) {
                        console.log("unique id not valid");
                        message = "unique id not valid";
                        cb(err, status, message);
                        return;
                    } else {

                        GetPollDetails(pollId, function (err, pollDetails) {
                            if (err) {
                                message = "error while retrieving poll details : " + err;
                                cb(err, status, message);
                                return;
                            } else {

                                if (isObjEmpty(pollDetails)) {
                                    message = "poll id not valid"
                                    cb(err, status, message);
                                    return;
                                } else {

                                    var existingVotes = pollDetails.filter(function (obj) {
                                        return obj.poll_team_votes.indexOf(uniqueId) != -1;
                                    });

                                    console.log("in get poll detail ", existingVotes);

                                    if (existingVotes.length >= pollConfigObj.poll_max_user_vote) {
                                        message = "you have exceeded maximum number of votes"
                                        cb(err, status, message);
                                        return;
                                    } else {
                                        console.log("in get poll detail -2")
                                        var contestantCount = contestant.length;

                                        if (existingVotes.length !== 0) {

                                            for (var iUserCount = 0; iUserCount < contestantCount; iUserCount++) {

                                                var isAlreadyVoted = existingVotes.filter(function (obj) {
                                                    return obj.poll_team_id === Number(contestant[iUserCount]);
                                                });

                                                console.log("is already voted :", isAlreadyVoted);
                                                if (isAlreadyVoted.length !== 0) {
                                                    contestant.splice(iUserCount, 1);
                                                    iUserCount--;
                                                }
                                            }

                                            contestantCount = contestant.length;
                                            if (contestantCount === 0) {
                                                message = "you already voted for this team ";
                                                cb(err, status, message);
                                                return;
                                            } else {

                                                var existingPluNewVotes = contestant.length + existingVotes.length;
                                                var canVote = pollConfigObj.poll_max_user_vote - existingVotes.length;

                                                if (existingPluNewVotes > pollConfigObj.poll_max_user_vote) {
                                                    message = "you can vote only : " + canVote;
                                                    cb(err, status, message);
                                                    return;
                                                }
                                            }
                                        }
                                        var userNotFound = "";
                                        var usersDetails = [];

                                        for (var iUserCount = 0; iUserCount < contestantCount; iUserCount++) {

                                            var pollDetailVal = pollDetails.filter(function (obj) {
                                                return obj.poll_team_id === Number(contestant[iUserCount]);
                                            });

                                            if (pollDetailVal.length === 0) {
                                                //userNotFound.push({
                                                  userNotFound += contestant[iUserCount] +"  -  "+ " not a valid team id  ";
                                                //});
                                            } else {
                                                //console.log("push poll details", pollDetailVal);
                                                usersDetails.push(pollDetailVal[0]);
                                            }
                                        }

                                        if (userNotFound.length !== 0) {
                                            console.log("not  a valid team");
                                            cb(err, status, userNotFound);
                                            return;
                                        } else {
                                            console.log("user details :", usersDetails);

                                            for(var iUserCount=0; iUserCount < usersDetails.length; iUserCount++){

                                                console.log("id :", usersDetails[iUserCount]);
                                                UpdatePollDetails(usersDetails[iUserCount]._id, uniqueId, function (err, detail) {
                                                    console.log("detail", detail);
                                                })
                                            }
                                            status = true;
                                            message = "successfully voted"
                                            cb(err, status, message);
                                            return;
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            }
        });
    }else{
        message = "specified arguments are not correct"
        cb('', status, message);
    }
}

function GetConfig(pollId, CallBack) {
    poll_model.poll_config.find({poll_id:pollId}, function(err, pollConfig) {
        if (err){
            throw err;
            CallBack("error occured while getting config");
        }else{
            //console.log("pollConfig :", pollConfig[0])
            CallBack("",pollConfig);
        }


    });
}

function GetPollDetails(pollId, CallBack) {
    poll_model.poll_details.find({poll_id:pollId}, function(err, pollDetails) {
        if (err){
            throw err;
            CallBack("error occured while getting poll details");
        }
        //console.log("get poll details :", pollDetails)
        CallBack("",pollDetails);

    });
}

function GetPollContestant(pollId, pollTeamId, CallBack) {
    console.log("poll id : ", pollId , "poll team id ", pollTeamId);
    poll_model.poll_details.find({poll_id:pollId, poll_team_id:pollTeamId}, function(err, pollContestantDetails) {
        if (err){
            console.log("error ", err);
            throw err;
            CallBack("error occured while getting poll details");
        }
        console.log("get poll contestent :", pollContestantDetails)
        CallBack("",pollContestantDetails);

    });
}

function CreateUserDetails(contestat, CallBack) {

    var newContestant = new poll_model.poll_details(contestat);
    console.log("obj id :", contestat);
    newContestant.save(function(err) {
        if (err){
            console.log("err :", err);
            throw err;
            CallBack("error occured while getting poll details");
        }
        CallBack("");
    });
}

function UpdatePollDetails(objectId, uniqueId, CallBack) {
    console.log("obj id :", objectId);
    poll_model.poll_details.update({_id:objectId},{ $push: { poll_team_votes: uniqueId } }, function(err, updateDetails) {
        if (err){
            throw err;
            CallBack("error occured while getting poll details");
        }
        CallBack("","user created successfully");
    });
}

function UpdateMobile( mobileNum, CallBack) {

    // var newstr = mobileNum.replace(/\+/i, '');

    console.log("err :", mobileNum);
    //
    var abcd = new poll_model.mobilenumber({"mobile_number":mobileNum});

    console.log("mobile number", abcd);
    abcd.save(function(err, resObj) {
        if (err){
            console.log("err :", err);
            throw err;
            CallBack("error occured while getting poll details");
        }
        CallBack("", resObj);
    });
    // poll_model.mobile_number.update({n_id:1},{ $push: { mobile_number: mobileNum } }, function(err, updateDetails) {
    //     if (err){
    //         throw err;
    //         CallBack("error occured while getting poll details");
    //     }
    //     CallBack("","mobile updated");
    // });
}

function UpdateJudgeVoting(objectId, dataToUpdate, CallBack) {

    var id = mongoose.Types.ObjectId(objectId);

    var answerKey = Object.keys(dataToUpdate);
    console.log("anser key", answerKey);
    answerKey = answerKey[1];
    var c_1 = dataToUpdate['poll_jude_c_1'];
    var c_2 = dataToUpdate['poll_jude_c_2'];
    var c_3 = dataToUpdate['poll_jude_c_3'];
    var c_4 = dataToUpdate['poll_jude_c_4'];



    // poll_model.poll_details.find({"poll_judge_marks._id":id}, function(err, find) {
    //         if (err){
    //             throw err;
    //             CallBack("error occured while getting judge voting");
    //         }
    //         console.log("updateDetails find: ", find )
    //         CallBack("","vote updated  successfully");
    // });
    var queryStr = "poll_judge_marks.$."+answerKey;
    console.log("answerKey", answerKey, queryStr);
    console.log("obj id :", id, dataToUpdate, answerKey, queryStr);

    poll_model.poll_details.update({"poll_judge_marks._id":id},{$set : {"poll_judge_marks.$.poll_jude_c_1":c_1, "poll_judge_marks.$.poll_jude_c_2":c_2, "poll_judge_marks.$.poll_jude_c_3":c_3, "poll_judge_marks.$.poll_jude_c_4":c_4}}, { upsert: true}, function(err, updateDetails) {
        if (err){
            console.log("err: ", err);
            throw err;
            CallBack("error occured while getting judge voting");
        }
        console.log("updateDetails : ", updateDetails)
        CallBack("","vote updated  successfully");
    });

    // if(answerKey === "poll_jude_c_2"){
    //     poll_model.poll_details.update({"poll_judge_marks._id":id},{$set : {"poll_judge_marks.$.poll_jude_c_2":value}}, { upsert: true}, function(err, updateDetails) {
    //         if (err){
    //             throw err;
    //             CallBack("error occured while getting judge voting");
    //         }
    //         console.log("updateDetails : ", updateDetails)
    //         CallBack("","vote updated  successfully");
    //     });
    // }else if(answerKey === "poll_jude_c_3"){
    //     poll_model.poll_details.update({"poll_judge_marks._id":id},{$set : {"poll_judge_marks.$.poll_jude_c_3":value}}, { upsert: true}, function(err, updateDetails) {
    //         if (err){
    //             throw err;
    //             CallBack("error occured while getting judge voting");
    //         }
    //         console.log("updateDetails : ", updateDetails)
    //         CallBack("","vote updated  successfully");
    //     });
    // }else if(answerKey === "poll_jude_c_4"){
    //     poll_model.poll_details.update({"poll_judge_marks._id":id},{$set : {"poll_judge_marks.$.poll_jude_c_4":value}}, { upsert: true}, function(err, updateDetails) {
    //         if (err){
    //             throw err;
    //             CallBack("error occured while getting judge voting");
    //         }
    //         console.log("updateDetails : ", updateDetails)
    //         CallBack("","vote updated  successfully");
    //     });
    // }else{
    //     console.log("failed")
    //     CallBack("update failed");
    // }

}

function GetJudgeResult(pollID, CallBack) {
    {

        var resObj = [];

        GetConfig(pollID, function(err, pollConfig) {
            if (err) {
                throw err;
                CallBack(err);
            }else {

                var dataConfig = pollConfig[0].poll_judge_category;
                console.log("config data ",dataConfig);
                var weightageObj = {};

                GetPollDetails(pollID, function (err, pollDetails) {
                    if (err) {
                        throw err;
                        callback(err);
                    } else {

                        for(var iConfigCount = 0; iConfigCount < dataConfig.length; iConfigCount++){
                            if(dataConfig[iConfigCount].type === "Nutrition" ) {
                                weightageObj["poll_jude_c_1"] = dataConfig[iConfigCount].weightage;
                            }else if(dataConfig[iConfigCount].type === "Uniqueness" ) {
                                weightageObj["poll_jude_c_2"] = dataConfig[iConfigCount].weightage;
                            }else if(dataConfig[iConfigCount].type === "Presentation" ) {
                                weightageObj["poll_jude_c_4"] = dataConfig[iConfigCount].weightage;
                            }else {
                                weightageObj["poll_jude_c_3"] = dataConfig[iConfigCount].weightage;
                            }
                            console.log("weightageObj", weightageObj);
                        }

                        console.log("weightageObj", weightageObj);

                        for (var iPollUserCount = 0; iPollUserCount < pollDetails.length; iPollUserCount++) {
                            var userObj = {};
                            userObj.poll_team_id = pollDetails[iPollUserCount].poll_team_id;
                            userObj.poll_team_name = pollDetails[iPollUserCount].poll_team_name;

                            // var pollJudgeMarks = pollDetails[iPollUserCount].poll_judge_marks.filter(function (obj) {
                            //     return obj.poll_judge_id == judgeID;
                            // })

                            var pollJudgeMarks = pollDetails[iPollUserCount].poll_judge_marks;
                            var totalMarks = 0;

                            for (var iCount = 0; iCount < pollJudgeMarks.length; iCount++) {
                                console.log("pollJudgeMarks[0]", pollJudgeMarks[iCount]);
    
                                // userObj.poll_jude_c_1 = pollJudgeMarks[iCount]["poll_jude_c_1"];
                                // userObj.poll_jude_c_2 = pollJudgeMarks[iCount]["poll_jude_c_2"];
                                // userObj.poll_jude_c_3 = pollJudgeMarks[iCount]["poll_jude_c_3"];
                                // userObj.poll_jude_c_4 = pollJudgeMarks[iCount]["poll_jude_c_4"];
                                var total = pollJudgeMarks[iCount].poll_jude_c_1 * weightageObj["poll_jude_c_1"];
                                total += pollJudgeMarks[iCount].poll_jude_c_2 * weightageObj["poll_jude_c_2"];
                                total += pollJudgeMarks[iCount].poll_jude_c_3 * weightageObj["poll_jude_c_3"];
                                total += pollJudgeMarks[iCount].poll_jude_c_4 * weightageObj["poll_jude_c_4"];

                                if(total === 0 && totalMarks == 0 ){
                                    totalMarks = 0;
                                }else {

                                    totalMarks = totalMarks + (total / 10);
                                }

                            }
                            if( totalMarks === 0){
                                userObj.poll_total = 0;
                            }else{
                                userObj.poll_total = (totalMarks/3).round(3);
                            }

                            //userObj.DT_RowId = pollJudgeMarks[0]._id;


                            console.log("pollJudgeMarks", userObj);

                            resObj.push(userObj);

                        }

                        CallBack("", resObj)
                    }
                });
            }
        });

    }

}

function GetJudePollData(pollID,judgeID, CallBack) {

    var resObj = [];

    GetConfig(pollID, function(err, pollConfig) {
        if (err) {
            throw err;
            CallBack(err);
        }else {

            var dataConfig = pollConfig[0].poll_judge_category;
            console.log("config data ",dataConfig);
            var weightageObj = {};


            GetPollDetails(pollID, function (err, pollDetails) {
                if (err) {
                    throw err;
                    callback(err);
                } else {

                    for(var iConfigCount = 0; iConfigCount < dataConfig.length; iConfigCount++){
                        if(dataConfig[iConfigCount].type === "Nutrition" ) {
                            weightageObj["poll_jude_c_1"] = dataConfig[iConfigCount].weightage;
                        }else if(dataConfig[iConfigCount].type === "Uniqueness" ) {
                            weightageObj["poll_jude_c_2"] = dataConfig[iConfigCount].weightage;
                        }else if(dataConfig[iConfigCount].type === "Presentation" ) {
                            weightageObj["poll_jude_c_4"] = dataConfig[iConfigCount].weightage;
                        }else {
                            weightageObj["poll_jude_c_3"] = dataConfig[iConfigCount].weightage;
                        }
                        console.log("weightageObj", weightageObj);
                    }

                    console.log("weightageObj", weightageObj);

                    for (var iPollUserCount = 0; iPollUserCount < pollDetails.length; iPollUserCount++) {
                        var userObj = {};
                        userObj.poll_team_id = pollDetails[iPollUserCount].poll_team_id;
                        userObj.poll_team_name = pollDetails[iPollUserCount].poll_team_name;

                        console.log("pollJudgeMarks[0]", judgeID, pollDetails[iPollUserCount].poll_judge_marks);

                        var pollJudgeMarks = pollDetails[iPollUserCount].poll_judge_marks.filter(function (obj) {
                            return obj.poll_judge_id == judgeID;
                        })

                        console.log("pollJudgeMarks[0]", pollJudgeMarks[0]);

                        userObj.poll_jude_c_1 = pollJudgeMarks[0]["poll_jude_c_1"];
                        userObj.poll_jude_c_2 = pollJudgeMarks[0]["poll_jude_c_2"];
                        userObj.poll_jude_c_3 = pollJudgeMarks[0]["poll_jude_c_3"];
                        userObj.poll_jude_c_4 = pollJudgeMarks[0]["poll_jude_c_4"];
                        var total = pollJudgeMarks[0].poll_jude_c_1 * weightageObj["poll_jude_c_1"];
                        total += pollJudgeMarks[0].poll_jude_c_2 * weightageObj["poll_jude_c_2"];
                        total += pollJudgeMarks[0].poll_jude_c_3 * weightageObj["poll_jude_c_3"];
                        total += pollJudgeMarks[0].poll_jude_c_4 * weightageObj["poll_jude_c_4"];
                        userObj.poll_total = total/10;
                        userObj.DT_RowId = pollJudgeMarks[0]._id;


                        console.log("pollJudgeMarks", userObj);

                        resObj.push(userObj);

                    }

                    CallBack("", resObj)
                }
            });
        }
    });

}

module.exports = {

    poll_configs : function(request, response) {
        var pollId = request.params.poll_id;
        console.log("pollId : ", pollId);
        GetConfig(pollId, function(err, pollConfig) {
            if (err) throw err;
            response.json({"status":"success","poll_config":pollConfig});
        });
    },
    poll_details : function(request, response) {
        var pollId = request.params.poll_id;
        console.log("pollId : ", pollId);
        GetPollDetails(pollId,function(err, pollDetails) {
            if (err) throw err;
            response.json({"data":pollDetails});
        });
    },
    poll_vote : function (request, response) {
        var poll_body = request.body;
        console.log("poll ID: ", poll_body.poll_id);
        console.log("unique ID: ", poll_body.uniqueId);
        console.log("contestents : ", poll_body.contestent);

        HandlePolling(poll_body.poll_id, poll_body.uniqueId, poll_body.contestent, function (err, status, message) {
            response.json({"status":status, "message":message});
        });
    },
    poll_sms : function (req, res) {
        var bodySms = req.body;
        console.log("inbound message", bodySms);
        var smsArray = bodySms.Body.split(" ");

        var mobile = bodySms.From;

        UpdateMobile(mobile, function (err, resObj) {
            if(err){
                throw err;
            }
            console.log("UpdateMobile", resObj);
        })


        console.log("sms array",smsArray.slice(2,smsArray.length));
        if(smsArray.length>= 2 ) {
            HandlePolling('KK2017', smsArray[0], smsArray.slice(1,smsArray.length), function (err, status, message) {

                console.log("msg", message);
                console.log("status", status);
                respond(req, res, message);
            });
        }
    },
    poll_judge_vote_post : function (req, res) {
        var editBody = req.body;


        var judgeID  = req.params.judgeId;
        //console.log("body from post", judgeID, editBody);

        if(editBody.action === "edit"){
            var idObj = editBody.data;
            var idKey = Object.keys(idObj);
            var id = idKey[0];
            var idData = idObj[id];
            console.log("id : ", idKey[0], "data" , idData) ;
            UpdateJudgeVoting(id, idData, function (err, message) {
                if(err){
                    res.json({"status":false, "message":err});
                    return;
                }else{
                    GetJudePollData('KK2017', judgeID, function (err, judgeData) {
                        if(err){
                            res.json({"status":false, "message":err});
                            return;
                        }else {
                            //console.log("data for judge", judgeData)
                            res.json({"data": judgeData});
                        }
                    });
                }
            })
        }
    },
    poll_judge_vote_data : function (req, res) {

        var judgeID  = req.params.judgeId;

        console.log("in get data");

        GetJudePollData('KK2017',judgeID, function (err, judgeData) {

            //console.log("data for judge", judgeData)
            res.json({"data":judgeData});
        })
    },
    poll_judge_result_data : function (req, res) {

        var judgeID  = req.params.judgeId;

        console.log("in get data");

        GetJudgeResult('KK2017', function (err, judgeData) {

            //console.log("data for judge", judgeData)
            res.json({"data":judgeData});
        })
    },
    poll_create_user : function (req, res) {
        var pollId = req.params.pollID;
        var contestantBody  = req.body;
        var pollTeamID = contestantBody.poll_team_id;

        GetPollContestant(pollId,pollTeamID,function(err, contestantDetails) {
            if (err) throw err;

            console.log("contestant details", contestantDetails);
            if(contestantDetails.length === 0 ){
                contestantBody.poll_id = pollId;
                contestantBody.poll_team_votes = [];
                contestantBody.poll_judge_marks = judgeResult;

                console.log("contestantBody", contestantBody);

                CreateUserDetails(contestantBody, function (err,message) {

                    GetPollContestant(pollId,pollTeamID,function(err, contestantDetails1) {
                        if (err) throw err;
                        if(contestantDetails1.length === 0 ){
                            res.json({"status":false, "message":"team creation failed"})
                        }else{
                            res.json({"status":true, "message":"team  creation successful"});
                        }
                    });
                })
            }else{
                res.json({"status":false, "message":"team id already exist"});
            }
        });
    }
    
};

