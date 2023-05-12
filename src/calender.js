const {chunk} = require('../lib/array-utils.js');

const createSeries = function(start, end) {
  const series = [];

  for(let counter = start; counter <= end; counter++) {
    series.push(counter);
  }

  return series;
} // [1,2,3......31]

const createWeeks = function(numbers) {
  return chunk(numbers, 7);
}; // [[1,2,3,4,5,6,7], [8]]

exports.createSeries = createSeries;
exports.createWeeks = createWeeks;