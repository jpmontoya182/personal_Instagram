var yo = require('yo-yo');
var translation = require('../translate');

module.exports = function layaout (content){
    return yo`<div class="content">
            ${ content }
        </div>`;
}
