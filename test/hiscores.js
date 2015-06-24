'use strict';

var chai = require('chai'),
    expect = chai.expect,
    api = require('../');

chai.should();
chai.use(require('chai-things'));

describe('Hiscores', function() {
    describe('#player', function() {
        it('should return a players skills and activities', function(done) {
            return api.rs.hiscores.player('zezima').then(function(player) {
                expect(player.skills.hitpoints.level).to.equal(99);
                expect(player.skills.hitpoints.exp).to.equal(200000000);
                done();
            });
        });
    });

    describe('#clan', function() {
        it('should return an array of players in a clan', function(done) {
            return api.rs.hiscores.clan('Efficiency Experts').then(function(players) {
                players.should.include.something.that.has.property('player', 'Dragonseance');
                done();
            });
        });
    });
});