const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { createSeries } = require('../src/calender.js');

describe('createSeries', function () {
  it('should give list of series of increment of one', function () {
    const actual = createSeries(1, 5);
    const expected = [1, 2, 3, 4, 5];
    deepStrictEqual(actual, expected);
  });
});