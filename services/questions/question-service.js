const questions = require('./question.json')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const updateQuestions = () => {}
const deleteQuestion = () => {}

const findQuestionById = (questionId) => {
    return questions.find(q => q._id === questionId)
}

const findQuestionsForQuiz = (quizId) => {
    return questions.filter((question) => {
        return question.quizId === quizId
    })
}
// console.log(findQuestionForQuiz('123'))
const findAllQuestions = () => {
    return questions
}
// console.log('testing questionId method', findQuestionById('123'))
module.exports = {
    findQuestionsForQuiz, findAllQuestions,
    createQuestion, updateQuestions,
    deleteQuestion, createQuestionForQuiz,
    findQuestionById
}