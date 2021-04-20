const mongoose = require('mongoose');
const quizSchema = require('./quizzes-schema')
const QuizModel = mongoose.model(
    'QuizModel',
    quizSchema
)
module.exports = QuizModel

