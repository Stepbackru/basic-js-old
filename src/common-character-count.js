const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 export default function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;

  if (arr1.length >= arr2.length) {
    arr1.forEach((el) => {
      const common = arr2.indexOf(el);

      if (common >= 0) {
        count += 1;
        arr2.splice(common, 1);
      }
    });
  } else {
    arr2.forEach((el) => {
      const common = arr1.indexOf(el);

      if (common >= 0) {
        count += 1;
        arr1.splice(common, 1);
      }
    });
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
