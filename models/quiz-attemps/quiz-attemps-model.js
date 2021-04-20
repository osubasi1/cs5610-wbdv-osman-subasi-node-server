const mongoose = require('mongoose')
const quizAttemptSchema = require('./quiz-attempts-schema')
const QuizAttemptModel = mongoose.model(
    'QuizAttemptModel',
    quizAttemptSchema
)
module.exports = QuizAttemptModel