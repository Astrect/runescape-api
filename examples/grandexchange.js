'use strict';

var api = require('../');

/**
 * Get a categories information
 * http://services.runescape.com/m=rswiki/en/Grand_Exchange_APIs#Category_information_details
 */
api.rs.ge.category('Miscellaneous').then(function(category) {
    console.log(category);
}).catch(console.error);

/**
 * Get items in a category by their prefix
 * http://services.runescape.com/m=rswiki/en/Grand_Exchange_APIs#Category_price_details
 */
api.rs.ge.categoryPrices(0, 'a', 1).then(function(category) {
    console.log(category.total, category.items);
}).catch(console.error);

/**
 * Get an items graphing data
 * http://services.runescape.com/m=rswiki/en/Grand_Exchange_APIs#Graphing_Data
 */
api.rs.ge.graphData(4151).then(function(item) {
    console.log(item.daily, item.average);
}).catch(console.error);

/**
 * Get an items current price, its price trend over 30, 90, and 180 days as well as its category and image urls.
 * http://services.runescape.com/m=rswiki/en/Grand_Exchange_APIs#GE_Item_price_information
 */
api.rs.ge.itemInformation(4151).then(function(item) {
    console.log(item);
}).catch(console.error);