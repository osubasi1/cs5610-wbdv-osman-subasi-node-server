const mongoose = require('mongoose')
const questionsSchema = require('./questions-schema')
const QuestionsModel = mongoose.model(
    'QuestionsModel',
    questionsSchema
)
module.exports = QuestionsModel