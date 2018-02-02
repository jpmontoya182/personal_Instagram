var page = require('page');
var main = document.getElementById('main-container');

page('/', (ctx, next)=>{
    main.innerHTML = 'Home <a href="/signup">SignUp</a>';
});
page('/signup', (ctx, next)=> {
    main.innerHTML = 'SignUp <a href="/">Home</a>';
});

page();