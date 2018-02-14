var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', (ctx, next)=> {
    title('Instagram');
    var main = document.getElementById('main-container');   
    var pictures = [
        {
            user : {
                username : 'Ernesto Arbelaez', 
                avatar : 'https://www.shareicon.net/data/128x128/2016/08/18/810199_user_512x512.png'
            }, 
            url : 'http://materializecss.com/images/sample-1.jpg',
            likes : 3,
            liked : true, 
            createAt : new Date()
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
    empty(main).appendChild(template(pictures));  
});