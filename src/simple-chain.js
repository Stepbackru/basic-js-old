import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength () {
    return this.chain.length;
  },
  addLink (value) {
    this.chain.push(value);
    return this;
  },
  removeLink (position) {
    if (typeof(position) !== 'number') {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    position--;
    if (position < 0 || position >= this.getLength()) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain.splice(position, 1);
    return this;
  },
  reverseChain () {
    this.chain.reverse();
    return this;
  },
  finishChain () {
    let str = '';

    for(let i = 0; i < this.getLength(); ++i) {
      str += `( ${this.chain[i]} )`;

      if(i < this.getLength() - 1) {
        str += '~~';
      }
    }

    this.chain = [];
    return str;
  }
};
