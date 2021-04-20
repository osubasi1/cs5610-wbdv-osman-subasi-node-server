module.exports = (app) => {

    const questionService = require('../services/questions/question-service')

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid'];
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.json(questions)
            })
    }

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then((questions) => {
                res.json(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const questionId = req.params['qid'];
        questionService.findQuestionById(questionId)
            .then((question) => {
                res.json(question)
            })
    }


    app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz)
    app.get('/api/questions', findAllQuestions)
    app.get('/api/questions/:qid', findQuestionById)
}


/*
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
*/