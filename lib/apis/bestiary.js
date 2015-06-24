'use strict';

var request = require('../util/request'),
    Promise = require('promise');

function Bestiary(config) {

    /**
     * Gets a beasts information by id
     *
     * @param  id The beasts id
     */
    this.beast = function(id) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.beast + id).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts whoes name contains specific terms
     *
     * @param  terms String seperating terms with spaces or an array of terms
     */
    this.beastsByTerms = function(terms) {
        if (terms.constructor === Array) {
            terms = terms.join(' ');
        }

        return new Promise(function(resolve, reject) {
            request.json(config.urls.beastTerm + encodeURIComponent(terms)).then(resolve).catch(reject);
        });
    };

    /**
     * Alias of beastByTerms
     */
    this.beastsByTerm = this.beastsByTerms;

    /**
     * Gets a list of beasts that start with a specific letter
     *
     * @param  letter The letter to search for
     */
    this.beastsByFirstLetter = function(letter) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.beastLetter + letter).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible area names
     */
    this.areas = function() {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.areas).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by an area name
     *
     * @param  area The area name to search for
     */
    this.beastsByArea = function(area) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.beastArea + encodeURIComponent(area)).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible slayer categories
     */
    this.slayerCategories = function() {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.slayerCats).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by a specific slayer category id
     *
     * @param  slayerId A slayer category id
     */
    this.beastsBySlayer = function(slayerId) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.beastSlayer + slayerId).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible weaknesses
     */
    this.weaknesses = function() {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.weaknesses).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by a specific weekeness id
     *
     * @param weeknessId A weekeness id
     */
    this.beastsByWeakness = function(weeknessId) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.beastWeekend + weeknessId).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by the specified level range(200-300)
     *
     * @param  min The minimum level to lookup
     * @param  max The maximum level to lookup
     */
    this.beastsByLevelRange = function(min, max) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.beastLevel + min + '-' + max).then(resolve).catch(reject);
        });
    };

}

module.exports = Bestiary;