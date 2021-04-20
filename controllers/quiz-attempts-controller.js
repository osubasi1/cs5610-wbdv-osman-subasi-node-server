module.exports = (app) => {
    const quizAttemptDao = require('../daos/quiz-attempts-dao')

    const createAttempt = (req, res) => {
        const quizId = req.params['qid'];
        const quiz = req.body;

        quizAttemptDao.createAttempt(quizId, quiz)
            .then(attempt => {
                res.send(attempt);
            })
    }

    const findAttemptsForQuiz = (req, res) => {
        const quizId = req.params['qid'];
        quizAttemptDao.findAttemptsForQuiz(quizId)
            .then(attempts => {
                res.send(attempts);
            })
    }

    app.post('/api/quizzes/:qid/attempts', createAttempt);
    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz);

}