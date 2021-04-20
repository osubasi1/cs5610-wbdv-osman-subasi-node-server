const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://osman:osman1@cluster0.8t9jx.mongodb.net/cs5610?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Configures CORS
app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Method',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/demos-controller')(app);
require('./controllers/quizzes-controller')(app);
require('./controllers/question-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(process.env.PORT || 4000, () => {
    console.log("app listening on port 4000")
})