const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const objAnswer = {};
  const newArr = domains.map((el) => el.split('.').reverse(''));

  newArr.forEach((el) => {
    let str = '';

    el.forEach((el2) => {
      str = `${str}.${el2}`;
      if (objAnswer[str] === undefined) {
        objAnswer[str] = 1;
      } else {
        objAnswer[str] += 1;
      }
    })

  })

  return objAnswer;
}

module.exports = {
  getDNSStats
};