var path = require('path');

module.exports = absolute;

function absolute(s) {
  return path.resolve(s) === s;
}
