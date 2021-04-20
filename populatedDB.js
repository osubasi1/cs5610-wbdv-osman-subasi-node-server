/*
    This is a script to add some users to database for test purpose.
    To use scrip just run node populatedb <server_url> in the command line in the root directory
*/

console.log('This script populates some test users to database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require('async');
const QuizModel = require('./models/quizzes/quizzes-model');

const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const quizzes = [];

function userCreate(_id, title, cb) {
    quizDetail = {

        _id: String,
        title: String,
        questions: [{
            type: String,
            ref: 'QuestionModel'
        }]
    }

    const quiz = new QuizModel(quizDetail);
    quiz.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New User: ' + quiz);
        quizzes.push(quiz)
        cb(null, quiz)
    }  );
}

function createQuizzes(cb) {
    async.parallel([
                       function(callback) {
                           userCreate('123', 'Quiz 1',callback);
                       },
                       function(callback) {
                           userCreate('234','Quiz 2', callback);
                       },
                       function(callback) {
                           userCreate('345','Quiz 3', callback);
                       },
                   ],
                   // optional callback
                   cb);
}

async.series([
                 createQuizzes,
             ],
             // Optional callback
             function(err, results) {
                 if (err) {
                     console.log('FINAL ERR: '+err);
                 }
                 mongoose.connection.close();
             });



