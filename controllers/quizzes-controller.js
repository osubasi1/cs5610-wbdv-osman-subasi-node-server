module.exports = (app) => {
    const quizzesService = require('../services/quizzes/quizzes-service')

    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then(quizzes => {
                res.json(quizzes);
            })
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['qzid'];
        quizzesService.findQuizById(quizId)
            .then(quiz => {
                res.json(quiz);
            })
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qzid', findQuizById)
}


/*


module.exports = (app) => {

    const quizzesService = require('../services/quizzes/quizzes-service')
    const findAllQuizzes = (req, res) => {
        const quizzes = quizzesService.findAllQuizzes()
        res.send(quizzes)
    }
    const findQuizById = (req, res) => {
        const qid = req.params['quizId']
        const quiz = quizzesService.findQuizById(qid)
        res.send(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}
 */