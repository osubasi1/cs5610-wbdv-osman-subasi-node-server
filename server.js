const express = require('express');
const app = express();

// Configures CORS
app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Method',
               'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/demos-controller')(app);

require('./controllers/quizzes-controller')(app)

require('./controllers/question-controller')(app)

app.listen(4000, () => {
    console.log("app listening on port 4000")
})