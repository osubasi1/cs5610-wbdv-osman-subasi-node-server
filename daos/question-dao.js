const QuestionsModel = require('../models/questions/question-model')
const QuizModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () =>
    QuestionsModel.find();

const findQuestionById = (qid) =>
    QuestionsModel.findById(qid);

const findQuestionsForQuiz = (qzid) =>
    QuizModel.findById(qzid)
        .populate('questions')
        // .then(q => console.log(q.questions))
        .then(quiz => quiz.questions);

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}