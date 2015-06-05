'use strict';

var chai = require('chai'),
    expect = chai.expect,
    api = require('../');

chai.should();
chai.use(require('chai-things'));

describe('Bestiary', function() {
    var hellhound = require('./data/bestiary_hellhound');

    describe('#beast()', function() {
        it('should return an object containing a beasts information', function() {
            return api.rs.bestiary.beast(49).then(function(beast) {
                expect(beast).to.deep.equal(hellhound);
            });
        });
    });

    describe('#beastsByTerms', function() {
        it('should return an array of beasts that have names containing specific term(s)', function() {
            return api.rs.bestiary.beastsByTerms(['sheep', 'cow']).then(function(beasts) {
                expect(beasts).to.have.length.above(0);
            });
        });
    });

    describe('#beastsByFirstLetter', function() {
        it('should return an array of beasts that start with a specific letter', function() {
            return api.rs.bestiary.beastsByFirstLetter('A').then(function(beasts) {
                expect(beasts).to.have.length.above(0);
            });
        });
    });

    describe('areas', function() {
        var area;

        describe('#areas', function() {
            it('should return an array of all possible area names', function() {
                return api.rs.bestiary.areas().then(function(areas) {
                    area = areas[0];
                    expect(areas).to.have.length.above(0);
                });
            });
        });

        describe('#beastsByArea', function() {
            it('should return an array of beasts in a possible area', function() {
                return api.rs.bestiary.beastsByArea(area).then(function(beasts) {
                    expect(beasts).to.have.length.above(0);
                });
            });
        });
    });

    describe('slayer', function() {
        describe('#slayerCategories', function() {
            it('should return an object of all possible slayer category names', function() {
                return api.rs.bestiary.slayerCategories().then(function(categories) {
                    expect(categories).to.not.be.empty;
                    expect(categories).to.contain.keys('Aberrant spectres');
                });
            });
        });

        describe('#beastsBySlayer', function() {
            it('should return an array of beasts that are in a specific slayer category', function() {
                return api.rs.bestiary.beastsBySlayer(41).then(function(beasts) {
                    expect(beasts).to.have.length.above(0);
                });
            });
        });
    });

    describe('weaknesses', function() {
        describe('#weaknesses', function() {
            it('should return an object of all possible weaknesses', function() {
                return api.rs.bestiary.weaknesses().then(function(weaknesses) {
                    expect(weaknesses).to.not.be.empty;
                    expect(weaknesses).to.contain.keys('Air', 'Water', 'Earth', 'Fire');
                });
            });
        });

        describe('#beastsByWeakness', function() {
            it('should return an array of beasts that are weak to a specific weakness', function() {
                return api.rs.bestiary.beastsByWeakness(1).then(function(beasts) {
                    expect(beasts).to.have.length.above(0);
                    beasts.should.include.something.that.deep.equals({value: 1257, label: 'Afflicted (60)'});
                });
            });
        });
    });

    describe('#beastsByLevelRange', function() {
        it('should return an array of beasts within a level range', function() {
            return api.rs.bestiary.beastsByLevelRange(200, 300).then(function(beasts) {
                expect(beasts).to.have.length.above(0);
                beasts.should.include.something.that.deep.equals({value: 2879, label: 'Bardur (200)'});
            });
        });
    });
});