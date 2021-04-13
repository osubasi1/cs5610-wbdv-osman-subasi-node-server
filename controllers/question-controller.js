module.exports = (app) => {

    const questionService = require('../services/questions/question-service')

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        const questions = questionService.findQuestionsForQuiz(quizId)
        res.send(questions)
    }
    const findAllQuestions = (req, res) => {
        const questions = questionService.findAllQuestions()
        res.send(questions)
    }

    app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz)
    app.get('/api/questions', findAllQuestions)
}