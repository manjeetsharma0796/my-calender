const { describe, it } = require('node:test');
const { deepStrictEqual, strictEqual } = require('assert');
const { createSeries, createWeeks } = require('../src/calender.js');

describe('createSeries', function () {
  it('should give list of series of increment of one', function () {
    const actual = createSeries(1, 5);
    const expected = [1, 2, 3, 4, 5];
    deepStrictEqual(actual, expected);
  });
});

describe('createWeeks', function () {
  it('should give days in weeks format', function () {
    const actual = createWeeks([1, 2, 3, 4, 5, 6, 7, 8]);
    const expected = [[1, 2, 3, 4, 5, 6, 7], [8]];

    deepStrictEqual(actual, expected);
  })
  
  it('should give days in weeks format', function () {
    const actual = createWeeks([1, 2, 3, 4, 5]);
    const expected = [[1, 2, 3, 4, 5]];

    deepStrictEqual(actual, expected);
  })
})