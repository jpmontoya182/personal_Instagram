var yo = require('yo-yo');
var landing = require('../landing');
var translation = require('../translate');

var signupForm =  yo`<div class="col s12 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="Instagram">Instagram</h1>
            <form class="signup-form">
                <h2>${ translation.message('signup.subheading')}</h2>
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only">${ translation.message('signup.facebook')}</a>
                    <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook"></i>${ translation.message('signup.text')}</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="email" name="email" placeholder="${ translation.message('email')} ">
                    <input type="text" name="name" placeholder="${ translation.message('fullname')} ">
                    <input type="text" name="username" placeholder="${ translation.message('username')} ">
                    <input type="password" name="password" placeholder="${ translation.message('password')} ">
                    <button class="btn waves-effect waves-light btn-signup" type="submit">${ translation.message('signup.call-to-action')}</button>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            ${ translation.message('signup.have-account')} 
            <a href="/signin">${ translation.message('signin')}</a>
        </div>
    </div>
</div>`;

module.exports = landing(signupForm);