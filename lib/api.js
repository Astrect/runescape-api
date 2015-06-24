'use strict';

var Hiscores = require('./apis/hiscores'),
    Bestiary = require('./apis/bestiary'),
    GrandExchange = require('./apis/grandexchange');

function API(type) {
    var config = require('./configs/' + type);

    this.hiscores = new Hiscores(config.hiscores);

    if (type === 'rs') {
        this.bestiary = new Bestiary(config.bestiary);
        this.grandexchange = new GrandExchange(config.ge);
        this.ge = this.grandexchange;
    }
}

module.exports = API;