'use strict';

var request = require('../util/request'),
    Promise = require('promise');

function GrandExchange(config) {

    /**
     * Returns an object containing the number of items in the category for each starting letter
     *
     * @param  key The category id or name
     */
    this.category = function(key) {
        var id;

        if (typeof key === 'string') {
            id = typeof key === 'string' ? config.categories.indexOf(key) : key;
        }

        return new Promise(function(resolve, reject) {
            request.json(config.urls.category + id).then(resolve).catch(reject);
        });
    };

    /**
     * Gets items in a category starting with a specific prefix
     *
     * @param  key    The category id or name
     * @param  prefix An item's prefix
     * @param  page   Page number
     */
    this.categoryPrices = function(key, prefix, page) {
        var id;

        if (typeof key === 'string') {
            id = typeof key === 'string' ? config.categories.indexOf(key) : key;
        }

        return new Promise(function(resolve, reject) {
            request.json(config.urls.categoryPrice + 'category=' + key + '&alpha=' + prefix + '&page=' + page).then(resolve).catch(reject);
        });
    };

    /**
     * Return the price information for each day for 180 days
     *
     * @param  item An item id
     */
    this.graphData = function(item) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.graph + item + '.json').then(resolve).catch(reject);
        });
    };

    /**
     * Get an items current price, its price trend over 30, 90, and 180 days as well as its category and image urls.
     *
     * @param  item An item id
     */
    this.itemInformation = function(item) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.information + item).then(resolve).catch(reject);
        });
    };

}

module.exports = GrandExchange;