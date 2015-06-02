'use strict';

var api = require('../');

/**
 * Get a players RuneScape 3 stats
 */
api.rs.hiscores.player('zezima').then(function(playerInfo) {
    var skills = playerInfo.skills,
        activities = playerInfo.activities;

    console.log(skills);
    console.log(activities);
}).catch(console.error);

/**
 * Get a players RuneScape 3 stats (ironman)
 */
api.rs.hiscores.player('sausage', 'ironman').then(function(playerInfo) {
    var skills = playerInfo.skills,
        activities = playerInfo.activities;

    console.log(skills);
    console.log(activities);
}).catch(console.error);

/**
 * Get a players RuneScape 3 stats (hardcore ironman)
 */
api.rs.hiscores.player('sausage', 'hardcore').then(function(playerInfo) {
    var skills = playerInfo.skills,
        activities = playerInfo.activities;

    console.log(skills);
    console.log(activities);
}).catch(console.error);

/**
 * Get a players Oldschool RuneScape stats (ironman)
 */
api.osrs.hiscores.player('lezley', 'ironman').then(function(playerInfo) {
    var skills = playerInfo.skills,
        activities = playerInfo.activities;

    console.log(skills);
    console.log(activities);
}).catch(console.error);

/**
 * Get a players Oldschool RuneScape stats (ultimate ironman)
 */
api.osrs.hiscores.player('perm iron', 'ultimate').then(function(playerInfo) {
    var skills = playerInfo.skills,
        activities = playerInfo.activities;

    console.log(skills);
    console.log(activities);
}).catch(console.error);