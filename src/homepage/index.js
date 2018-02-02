var page = require('page');

page('/', (ctx, next)=>{
    var main = document.getElementById('main-container');   
    main.innerHTML = '<a href="/signup">Signup</a>';
});