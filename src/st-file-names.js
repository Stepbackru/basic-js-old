import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const newArr = [];
  let count = 1;

  names.forEach((el) => {
    if (newArr.indexOf(el) === -1) {
      newArr.push(el);
    } else {
      const cond = newArr.indexOf(`${el}(${count})`) === -1 ? `${el}(${count})` : `${el}(${count + 1})`;
      newArr.push(cond);
    }
  });

  return newArr;
}
