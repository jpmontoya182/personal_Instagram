var yo = require('yo-yo');

var result = function landing(box){
    return yo`<div class="container landing">
            <div class="row">
                <div class="col s10 push-s1">
                    <div class="row">
                        <div class="col m5 hide-on-small-only">
                            <img src="iphone.jpg" alt="Resource" class="iphone">
                        </div>
                        ${box}
                    </div>
                </div>
            </div>
        </div>`;
}

module.exports = result; 