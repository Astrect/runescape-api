'use strict';

var api = require('../');

/**
 * Get a beasts information by it's id
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#Beast_Data
 */
api.rs.bestiary.beast(49).then(function(beast) {
    console.log(beast);
}).catch(console.error);

/**
 * Search for beasts by specific term(s)
 * beastsByTerms accepts an array of terms or terms seperated by a space
 * http://services.runescape.com/m=itemdb_rs/bestiary/beastSearch.json?term=sheep+cow
 */
api.rs.bestiary.beastsByTerms('cow sheep').then(function(beasts) {
    console.log(beasts);
}).catch(console.error);

/**
 * Search for beasts by their starting letter
 * http://services.runescape.com/m=itemdb_rs/bestiary/bestiaryNames.json?letter=Y
 */
api.rs.bestiary.beastsByFirstLetter('A').then(function(beasts) {
    console.log(beasts);
}).catch(console.error);

/**
 * Get an array of possible area names
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#areaNames
 */
api.rs.bestiary.areas().then(function(areas) {
    console.log(areas);
}).catch(console.error);

/**
 * Search for beasts in a specific area
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#areaBeasts
 */
api.rs.bestiary.beastsByArea('Shadow Dungeon').then(function(beasts) {
    console.log(beasts);
}).catch(console.error);

/**
 * Get object of all slayer categories
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#slayerCatNames
 */
api.rs.bestiary.slayerCategories().then(function(categories) {
    console.log(categories);
}).catch(console.error);

/**
 * Search for beasts by a specific slayer category id
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#slayerBeasts
 */
api.rs.bestiary.beastsBySlayer(42).then(function(beasts) {
    console.log(beasts);
}).catch(console.error);

/**
 * Get an object of all weaknesses
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#weaknessNames
 */
api.rs.bestiary.weaknesses().then(function(weaknesses) {
    console.log(weaknesses);
}).catch(console.error);

/**
 * Search for beasts that have a specific weakness 
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#weaknessBeasts
 */
api.rs.bestiary.beastsByWeakness(10).then(function(beasts) {
    console.log(beasts);
}).catch(console.error);

/**
 * Search for beasts by a level range
 * http://services.runescape.com/m=rswiki/en/Bestiary_APIs#Beasts_by_Level
 */
api.rs.bestiary.beastsByLevelRange(200, 300).then(function(beasts) {
    console.log(beasts);
}).catch(console.error);