const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

export default function encodeLine(str) {
  const arr = str.split('');
  let newStr = '';
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        newStr += count + arr[i];
      } else {
        newStr += arr[i];
      }
      count = 1;
    }
  }

  return newStr;
}

module.exports = {
  encodeLine
};
