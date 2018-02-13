var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signup', (ctx, next)=> {
    title('Instagram - Signup');
    var main = document.getElementById('main-container');   
    empty(main).appendChild(template);   
});