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
                reject(new Error('HTTP Code ' + response.statusCode));
                return;
            }

            if (body.length === 0) {
                reject(new Error('RuneScape API returned empty body'));
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

            resolve(json);
        });
    });
};

module.exports = new Request();