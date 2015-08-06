'use strict';

var Hiscores = require('./apis/hiscores'),
    Bestiary = require('./apis/bestiary'),
    GrandExchange = require('./apis/grandexchange');

function API(type) {
    var config = require('./configs/' + type);

    this.hiscores = new Hiscores(config.hiscores);
    this.grandexchange = new GrandExchange(config.ge);
    this.ge = this.grandexchange;

    if (type === 'rs') {
        this.bestiary = new Bestiary(config.bestiary);
    }
}

module.exports = API;