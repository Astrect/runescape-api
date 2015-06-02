'use strict';

var API = require('./api');

var osrs = new API('osrs'),
    rs = new API('rs');

var RuneScapeAPI = {};

Object.defineProperty(RuneScapeAPI, 'osrs', {
    get: function() {
        return osrs;
    }
});

Object.defineProperty(RuneScapeAPI, 'rs', {
    get: function() {
        return rs;
    }
});

module.exports = RuneScapeAPI;