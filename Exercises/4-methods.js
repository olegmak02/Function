'use strict';

const methods = iface => {
  const functions = [];
  for (let key in iface) {
    if (typeof iface[key] === 'function') {
      functions.push([key, iface[key].length]);
    }
  }
  return functions;
};

module.exports = { methods };
