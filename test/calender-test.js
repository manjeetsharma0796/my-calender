const { describe, it } = require('node:test');
const { deepStrictEqual, strictEqual } = require('assert');
const { createSeries, chunk } = require('../src/calender.js');

describe('createSeries', function () {
  it('should give list of series of increment of one', function () {
    const actual = createSeries(1, 5);
    const expected = [1, 2, 3, 4, 5];
    deepStrictEqual(actual, expected);
  });

  it('should give chunks of 2 with overlap size 0', function() {
    const numbers = [1,2,3,4,5];
    const chunkSize = 2;
    const overlapSize = 0;
    const actual = chunk(numbers, chunkSize, overlapSize);
    const expected = [[1,2], [3,4], [5]];

    deepStrictEqual(actual, expected);
  });

  it('should give chunks of 2 with overlap size 1', function() {
    const numbers = [1,2,3,4,5];
    const chunkSize = 2;
    const overlapSize = 1;
    const actual = chunk(numbers, chunkSize, overlapSize);
    const expected = [[1,2], [2,3], [3,4], [4,5], [5]];

    deepStrictEqual(actual, expected);
  })
});