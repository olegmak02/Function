'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, elem) => (res << 8) + parseInt(elem);
  return ip.split('.').reduce(fn, 0);
}

module.exports = { ipToInt };
