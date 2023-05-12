const {createSeries} = require('./src/calender.js');

const main = function() {
  console.log('May 2023');
  console.log('Su Mo Tu We Th Fr Sa');
  console.log(createSeries(1, 31));
};

main();