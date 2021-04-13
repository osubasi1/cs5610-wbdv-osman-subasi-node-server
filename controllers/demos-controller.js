module.exports = (app) => {  //module.export is equality of export default in java

    app.get('/can/be/anything', function (req, res) {
        res.send('Hello World')
    })

    const add = (request, response) => {
        const a = parseInt(request.params['paramA'])
        const b = parseInt(request.params['paramB'])
        response.send(`${a + b}`)
    }

    const subtract = (req, res) => {
        const a = req.query['x'];
        const b = req.query['y'];
        const c = a - b;
        res.send(`${c}`);
    }
    app.get('/subtract', subtract)

    app.get('/add/:paramA/:paramB', add)

}