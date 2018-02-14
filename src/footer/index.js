var yo = require('yo-yo');
var translation = require('../translate');

var el = yo`<footer class="side-footer">
    <div class="container">
        <div class="row">
            <div class="col s12 l3 center-align">
                <a href="#" class="dropdown-button btn btn-flat" data-activates="ddlLanguages">
                    ${ translation.message('language')}
                </a>
                <ul id="ddlLanguages" class="dropdown-content">
                    <li><a href="#" onclick="${ lang.bind(null, 'es') }"> ${ translation.message('spanish') }</a></li>
                    <li><a href="#" onclick="${ lang.bind(null, 'en-US') }"> ${ translation.message('english') }</a></li>
                </ul>               
            </div>
            <div class="col s12 l3 push-l6 center-align">© 2018 Instagram</div>
        </div>
    </div>
</footer>`

function lang(locale){
    console.log(locale);
    localStorage.locale = locale;
    location.reload();
    return false;
}

document.body.appendChild(el);

