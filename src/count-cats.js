import { NotImplementedError } from '../extensions/index.js';

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
export default function countCats(matrix) {
  let cats = backyard.reduce((acc, subArray) => acc.concat(subArray), []);
  let count = 0;
  cats.forEach(e => {
    if(e == '^^'){
      count += 1;
    }
  });
  return count;
}
