"use strict";

const sequence = require('../../src/day10/sequence.js');

module.exports = seed => {
    for (let i = 0; i < 40; i++) {
        seed = sequence(seed);
    };
    return seed.length;
}
