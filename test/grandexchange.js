'use strict';

var chai = require('chai'),
    expect = chai.expect,
    api = require('../');

chai.should();
chai.use(require('chai-things'));

describe('GrandExchange', function() {
    describe('category', function() {
        it('should return an object containing a categories information', function(done) {
            return api.rs.ge.category(0).then(function(category) {
                expect(category).to.not.be.empty;
                done();
            });
        });
    });

    describe('categoryPrices', function() {
        var category;

        before(function() {
            return api.rs.ge.categoryPrices(0, 'a', 1).then(function(c) {
                category = c;
            });
        });

        it('should have a total property', function(done) {
            expect(category).to.have.property('total');
            done();
        });

        it('should have an items property with items', function(done) {
            expect(category).to.have.property('items');
            expect(category.items).to.have.length.above(0);
            done();
        });
    });

    describe('graphData', function() {
        it('should return an object containing data for the past 180 days', function(done) {
            return api.rs.ge.graphData(4151).then(function(item) {
                expect(item.daily).to.not.be.empty;
                done();
            });
        });
    });

    describe('itemInformation', function() {
        it('should return an object containing an items information', function(done) {
            return api.rs.ge.itemInformation(4151).then(function(item) {
                expect(item).to.not.be.empty;
                done();
            });
        });
    });
});