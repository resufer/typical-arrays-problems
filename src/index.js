let min = arr => arr && arr[0] !== undefined ? arr.sort((a, b) => a - b)[0] : 0;
let max = arr => arr && arr[0] !== undefined ? arr.sort((a, b) => b - a)[0] : 0;
let avg = arr => arr && arr[0] !== undefined ? arr.reduce((a, b) => a + b) / arr.length : 0;

exports.min = min;
exports.max = max;
exports.avg = avg;
