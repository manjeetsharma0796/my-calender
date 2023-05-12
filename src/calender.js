const createSeries = function(start, end) {
  const series = [];

  for(let counter = start; counter <= end; counter++) {
    series.push(counter);
  }

  return series;
}

const chunk = function(list, size, overlap) {
  if(list.length === 0) return list;
  if(list.length <= overlap) return [list];

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size - overlap);
  return [currentChunk].concat(chunk(remaining, size, overlap));
}

exports.createSeries = createSeries;
exports.chunk = chunk;