'use strict';

var chai = require('chai'),
    expect = chai.expect,
    api = require('../');

chai.should();
chai.use(require('chai-things'));

describe('Bestiary', function() {
    describe('#beast()', function() {
        it('should return an object containing a beasts information', function(done) {
            api.rs.bestiary.beast(49).then(function(beast) {
                expect(beast.slayercat).to.equal('Hellhounds');
                expect(beast.name).to.equal('Hellhound');
                done();
            });
        });
    });

    describe('#beastsByTerms', function() {
        it('should return an array of beasts that have names containing specific term(s)', function(done) {
            return api.rs.bestiary.beastsByTerms(['sheep', 'cow']).then(function(beasts) {
                expect(beasts).to.have.length.above(0);
                done();
            });
        });
    });

    describe('#beastsByFirstLetter', function() {
        it('should return an array of beasts that start with a specific letter', function(done) {
            return api.rs.bestiary.beastsByFirstLetter('A').then(function(beasts) {
                expect(beasts).to.have.length.above(0);
                done();
            });
        });
    });

    describe('areas', function() {
        var area;

        describe('#areas', function() {
            it('should return an array of all possible area names', function(done) {
                return api.rs.bestiary.areas().then(function(areas) {
                    area = areas[0];
                    expect(areas).to.have.length.above(0);
                    done();
                });
            });
        });

        describe('#beastsByArea', function() {
            it('should return an array of beasts in a possible area', function(done) {
                return api.rs.bestiary.beastsByArea(area).then(function(beasts) {
                    expect(beasts).to.have.length.above(0);
                    done();
                });
            });
        });
    });

    describe('slayer', function() {
        describe('#slayerCategories', function() {
            it('should return an object of all possible slayer category names', function(done) {
                return api.rs.bestiary.slayerCategories().then(function(categories) {
                    expect(categories).to.not.be.empty;
                    expect(categories).to.contain.keys('Aberrant spectres');
                    done();
                });
            });
        });

        describe('#beastsBySlayer', function() {
            it('should return an array of beasts that are in a specific slayer category', function(done) {
                return api.rs.bestiary.beastsBySlayer(41).then(function(beasts) {
                    expect(beasts).to.have.length.above(0);
                    done();
                });
            });
        });
    });

    describe('weaknesses', function() {
        describe('#weaknesses', function() {
            it('should return an object of all possible weaknesses', function(done) {
                return api.rs.bestiary.weaknesses().then(function(weaknesses) {
                    expect(weaknesses).to.not.be.empty;
                    expect(weaknesses).to.contain.keys('Air', 'Water', 'Earth', 'Fire');
                    done();
                });
            });
        });

        describe('#beastsByWeakness', function() {
            it('should return an array of beasts that are weak to a specific weakness', function(done) {
                return api.rs.bestiary.beastsByWeakness(1).then(function(beasts) {
                    expect(beasts).to.have.length.above(0);
                    beasts.should.include.something.that.deep.equals({value: 1257, label: 'Afflicted (60)'});
                    done();
                });
            });
        });
    });

    describe('#beastsByLevelRange', function() {
        it('should return an array of beasts within a level range', function(done) {
            return api.rs.bestiary.beastsByLevelRange(200, 300).then(function(beasts) {
                expect(beasts).to.have.length.above(0);
                beasts.should.include.something.that.deep.equals({value: 2879, label: 'Bardur (200)'});
                done();
            });
        });
    });
});