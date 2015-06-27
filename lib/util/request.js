'use strict';

var request = require('request'),
    Promise = require('promise');

function Request() {}

Request.prototype.csv = function(url) {
    return new Promise(function(resolve, reject) {
        request({
            url: url
        }, function(error, response, body) {
            if (error) {
                reject(error);
                return;
            }

            if (response.statusCode !== 200) {
                var httpError = new Error('HTTP Code ' + response.statusCode);
                httpError.statusCode = response.statusCode;
                reject(httpError);
                return;
            }

            if (body.length === 0) {
                var bodyError = new Error('RuneScape API returned empty body');
                reject(bodyError);
                return;
            }

            var lines = [];

            body.split('\n').forEach(function(line) {
                if (line.length > 0) {
                    lines.push(line.split(','));
                }
            });

            resolve(lines);
        });
    });
};

Request.prototype.json = function(url) {
    return new Promise(function(resolve, reject) {
        request({
            url: url,
            json: true
        }, function(error, response, json) {
            if (error) {
                reject(error);
                return;
            }

            if (response.statusCode !== 200) {
                var httpError = new Error('HTTP Code ' + response.statusCode);
                httpError.statusCode = response.statusCode;
                reject(httpError);
                return;
            }

            if (typeof json === 'undefined') {
                var jsonError = new Error('RuneScape API returned invalid json');
                reject(jsonError);
                return;
            }

            resolve(json);
        });
    });
};

module.exports = new Request();