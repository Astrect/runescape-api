'use strict';

var request = require('../util/request'),
    Promise = require('promise');

function Hiscores(config) {

    var readSkills = function(data) {
        var skills = {};

        for (var i = 0; i < config.skills.length; i++) {
            var skillName = config.skills[i].toLowerCase();

            skills[skillName] = {
                rank: Number(data[i][0]),
                level: Number(data[i][1]),
                exp: Number(data[i][2])
            };
        }

        return skills;
    };

    var readActivities = function(data) {
        var activities = {};

        for (var i = 0; i < config.activities.length; i++) {
            var activityName = config.activities[i].replace(/^[^a-zA-Z_]+|[^a-zA-Z_0-9]+/g, ' ').replace(/\s/g, '_').toLowerCase();

            activities[activityName] = {
                rank: Number(data[i + config.skills.length][0]),
                score: Number(data[i + config.skills.length][1])
            };
        }

        return activities;
    };

    var readClan = function(data) {
        var members = [],
            space = new RegExp(String.fromCharCode(65533), 'g');

        for (var i = 0; i < data.length; i++) {
            var member = data[i];
            members.push({
                player: member[0].replace(space, ' '),
                rank: member[1],
                exp: Number(member[2]),
                kills: Number(member[3])
            });
        }

        return members;
    };

    var isMaxed = function(data){
        var skills = readSkills(data);
        for (var skill in skills) {
          if(skill.level < 99){
              return false;
          }
        }
        return true;
    };

    /**
     * Gets a players skill and activity information
     *
     * @param  player The players name
     * @param  type   [Optional] normal, ironman, hardcore/ultimate
     */
    this.player = function(player, type) {
        if (typeof type === 'undefined') {
            type = 'normal';
        }

        if (type === 'ultimate') {
            type = 'hardcore';
        }

        return new Promise(function(resolve, reject) {
            request.csv(config.urls[type] + encodeURIComponent(player)).then(function(data) {
                var playerInformation = {
                    skills: readSkills(data),
                    activities: readActivities(data),
                    maxed: isMaxed(data)
                };

                resolve(playerInformation);
            }).catch(reject);
        });
    };

    /**
     * Get a clans member list with exp gained and total kills
     *
     * @param  name The clans name
     */
    this.clan = function(name) {
        return new Promise(function(resolve, reject) {
            if (typeof config.urls.clan === 'undefined') {
                reject(new Error('Oldschool RuneScape does not have clans.'));
                return;
            }

            request.csv(config.urls.clan + encodeURIComponent(name)).then(function(data) {
                resolve(readClan(data));
            }).catch(reject);
        });
    };
}

module.exports = Hiscores;
