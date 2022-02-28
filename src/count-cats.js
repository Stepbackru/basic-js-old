const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
<<<<<<< HEAD
export default function countCats(matrix) {
  let cats = matrix.reduce((acc, subArray) => acc.concat(subArray), []);
  let count = 0;
  cats.forEach(e => {
    if (e == '^^') {
      count += 1;
    }
  });
  return count;
=======
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> c7b6e4ca24545c5e98dd7883637123d56d3f4d9f
}

module.exports = {
  countCats
};
