window.IntlRelativeFormat = require('intl-relativeformat');
window.IntlMessageFormat = require('intl-messageformat');

if(!window.Intl){
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-US.js');
    require('intl/locale-data/jsonp/es.js');
}

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');


var es = require('./es');
var en = require('./en-US');

var messages = {};
messages.es = es;
messages['en-US'] = en;

var locale = localStorage.locale || 'es';

module.exports = { 
    message : function (text, opts){
        opts = opts || {};
        var msg =  new IntlMessageFormat(messages[locale][text], locale, null);
        return msg.format(opts);
    },
    date : new IntlRelativeFormat(locale)
}