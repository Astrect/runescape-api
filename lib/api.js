'use strict';

var Hiscores = require('./hiscores'),
    Bestiary = require('./bestiary'),
    config = require('./config');

function API(type) {
    this.hiscores = new Hiscores(config[type].hiscores);

    if (type === 'rs') {
        this.bestiary = new Bestiary(config[type].bestiary);
    }
}

module.exports = API;