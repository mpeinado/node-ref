var express = require('express');
var bodyParser = require('body-parser');
const port = 3000;

var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// set ejs as view engine
app.set('view engine', 'ejs');

// Middleware - code the runs between the request and response
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    //res.sendFile(__dirname + '/index.html');
    //res.send('This is the home page');
    // Middleware - code the runs between the request and response
    res.render('index')
});

app.get('/contact', function(req, res){
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    const data = {
        age: 20, 
        job: 'Software Engineer',
        hobbies: [
            'eating',
            'fishing',
            'running'
        ]
    };

    res.render('profile', {person: req.params.name, data: data});
});

app.listen(port)