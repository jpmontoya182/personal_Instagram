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

// middlewares
app.get('/api/pictures', function(req, res){
    var pictures = [
        {
            user : {
                username : 'Ernesto Arbelaez', 
                avatar : 'https://www.shareicon.net/data/128x128/2016/08/18/810199_user_512x512.png'
            }, 
            url : 'http://materializecss.com/images/sample-1.jpg',
            likes : 3,
            liked : true, 
            createAt : new Date().getTime()
        },
        {
            user : {
                username : 'Juan Pablo M.', 
                avatar : 'https://www.shareicon.net/data/128x128/2016/08/18/810199_user_512x512.png'
            }, 
            url : 'https://www.shareicon.net/data/256x256/2015/12/07/683840_image_512x512.png',
            likes: 4,
            liked : false,
            createAt : new Date().setDate(0)
        },
        {
            user : {
                username : 'Camilo Montoya', 
                avatar : 'https://www.shareicon.net/data/128x128/2016/08/18/810199_user_512x512.png'
            }, 
            url : 'https://www.shareicon.net/data/256x256/2015/12/07/683840_image_512x512.png',
            likes: 0,
            liked : false,
            createAt : new Date().setDate(-10)
        }
    ];
    //simular acceso a BD
    setTimeout(() => {
        res.send(pictures); 
    }, 2000);   
})

app.listen(3000, (err) => {
    if(err){
        return console.log('Server Error');
        process.exit(1);
    }
    console.log('Server listening on port 3000 ...');
});