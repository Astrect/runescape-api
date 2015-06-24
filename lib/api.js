'use strict';

var Hiscores = require('./hiscores'),
    Bestiary = require('./bestiary'),
    GrandExchange = require('./grandexchange'),
    config = require('./config');

function API(type) {
    this.hiscores = new Hiscores(config[type].hiscores);

    if (type === 'rs') {
        this.bestiary = new Bestiary(config[type].bestiary);
        this.grandexchange = new GrandExchange(config[type].ge);
        this.ge = this.grandexchange;
    }
}

module.exports = API;