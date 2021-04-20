/*
    This is a script to add some users to database for test purpose.
    To use scrip just run node populatedb <server_url> in the command line in the root directory
*/

console.log('This script populates some test users to database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require('async');
const Question = require('./models/questions/question-model');

const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const questions = [];

/*
        firstName: {type: String, required: true, maxlength: 100},
        lastName: {type: String, required: true, maxlength: 100},
        userName: {type: String, required: true, maxlength: 100},
        password: {type: String, required: true},
        email: {type: String, default:''},
        type: String, // regular user, admin, or actor
 */
function userCreate(_id, title, quizId, question, correct, type, choices, cb) {
    questionDetails = {
        _id: String,
        title: String,
        quizId: String,
        question: String,
        correct: String,
        type: {type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE"]},
        choices: [String]
    }

    const question_ = new Question(questionDetails);
    question_.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Question: ' + question_);
        questions.push(question_)
        cb(null, question_)
    }  );
}

function createUsers(cb) {
    async.parallel([
                       function(callback) {
                           userCreate( "123",  "JPA True False", "234", "JPA stands for Java Persistence API", "true",  "TRUE_FALSE", callback);
                       }
                       // ,
                       // function(callback) {
                       //     userCreate("234",  "JPA Multiple Choice",  "234",  "What does JPA stand for?",  "Java Persistence API",  "MULTIPLE_CHOICE",  ["Java Pseudo API", "Java Persistence API", "JSON Persistence API", "JavaScript Persistence API"], callback);
                       // },
                       // function(callback) {
                       //     userCreate( "345",  "JSON True False",  "234",  "JSON stands for Java Object Notation",  "false", "TRUE_FALSE", callback);
                       // },
                       // function(callback) {
                       //     userCreate("456",  "JSON Multiple Choice",  "345",  "What does JSON stand for?",  "JavaScript Object Notation",  "MULTIPLE_CHOICE",  ["JavaScript Object Notation", "JavaScript Object Normalization", "Java Object Normalization", "Java Object Notation"], callback);
                       // },
                       // function(callback) {
                       //     userCreate( "567", "CSS True False",  "345", "CSS stands for Cascading Style Sheet",  "true",  "TRUE_FALSE", callback);
                       // },
                       // function(callback) {
                       //     userCreate( "678",  "CSS Multiple Choice",  "123", "What does CSS stand for?",  "Cascading Style Sheet", "MULTIPLE_CHOICE",  ["Class Style Sheet", "Cascading Screen Style", "Cascading Style Sheet", "Cascading Style Screen"], callback);
                       // },
                   ],
                   // optional callback
                   cb);
}

async.series([
                 createUsers,
             ],
             // Optional callback
             function(err, results) {
                 if (err) {
                     console.log('FINAL ERR: '+err);
                 }
                 mongoose.connection.close();
             });



