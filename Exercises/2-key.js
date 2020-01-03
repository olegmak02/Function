'use strict';

const generateKey = (length, possible) => {
  let amount = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * amount);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
