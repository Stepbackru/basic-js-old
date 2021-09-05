import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  const team = [];
  if (Array.isArray(members)) {
    members.forEach(e => {
      if (typeof e === 'string') {
        team.push(e.trim().charAt(0).toUpperCase());
      }
    });
    return team.sort().join('');
  } else {
    return false
  }
}
