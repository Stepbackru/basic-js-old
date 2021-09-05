import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  this.repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  this.separator = options.separator !== undefined ? String(options.separator) : '+';
  this.addition = options.addition !== undefined ? String(options.addition) : '';
  this.additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  this.additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '+';
  
  let newStr='';
  
  for (let i = 0; i < this.repeatTimes; i++) {
      newStr += String(str);
      for (let j = 0; j < this.additionRepeatTimes; j++) {
          newStr += this.addition;      
          j < (this.additionRepeatTimes-1) ? newStr += this.additionSeparator : 0;
      }
      i < (this.repeatTimes - 1) ? newStr += this.separator : 0;
  }

  return newStr;
}
