const createSeries = function(start, end) {
  const series = [];

  for(let counter = start; counter <= end; counter++) {
    series.push(counter);
  }

  return series;
}



exports.createSeries = createSeries;