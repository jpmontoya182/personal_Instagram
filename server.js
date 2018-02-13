var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title : 'Instagram' });
});
app.get('/signup', (req, res) => {
    res.render('index', { title : 'Instagram - Signup' });
});

app.get('/signin', (req, res) => {
    res.render('index', { title : 'Instagram - Signin' });
});

app.listen(3000, (err) => {
    if(err){
        return console.log('Server Error');
        process.exit(1);
    }
    console.log('Server listening on port 3000 ...');
});