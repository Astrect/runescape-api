'use strict';

var api = require('../');

function logInfo(info) {
    var skills = info.skills,
        activities = info.activities;

    console.log(skills);
    console.log(activities);
}

/**
 * Get a players RuneScape 3 stats
 */
api.rs.hiscores.player('zezima').then(logInfo).catch(console.error);

/**
 * Get a players RuneScape 3 stats (ironman)
 */
api.rs.hiscores.player('sausage', 'ironman').then(logInfo).catch(console.error);

/**
 * Get a players RuneScape 3 stats (hardcore ironman)
 */
api.rs.hiscores.player('sausage', 'hardcore').then(logInfo).catch(console.error);

/**
 * Get a players Oldschool RuneScape stats (ironman)
 */
api.osrs.hiscores.player('lezley', 'ironman').then(logInfo).catch(console.error);

/**
 * Get a players Oldschool RuneScape stats (ultimate ironman)
 */
api.osrs.hiscores.player('perm iron', 'ultimate').then(logInfo).catch(console.error);