const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

export default function deleteDigit(n) {
  const numArr = n.toString().split('').map((el) => Number(el));
  const indNum = numArr.indexOf(Math.min(...numArr));
  numArr.splice(indNum, 1);

  return Number(numArr.join(''));
}

module.exports = {
  deleteDigit
};
