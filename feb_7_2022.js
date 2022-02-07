// * Longest Substring without repeating characters
var lengthOfLongestSubstring = function (s) {
  // get all substrings
  // filter out substrings with duplicate characters
  // n squared
  let longest = s[0] ? s[0] : ''
  s.split('').forEach((char, idx) => {
    let sub = char
    for (let x = idx + 1; x < s.length; x++) {
      if (!sub.includes(s[x])) {
        sub += s[x]
        if (sub.length > longest.length) {
          longest = sub
        }
      } else {
        break
      }
    }
  })
  return longest.length
};

// * Attempting permutations in string
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (!eachCharIn(s1, s2)) return false
  if (hasSameLength(s1, s2)) {
    return hasSameCharacters(s1, s2)
  } else {
    const subs = substrings(s2, s1.length)
    const s1Perms = perms([s1])
    for (sub of subs) {
      if (s1Perms.includes(sub)) return true
    }
    return false
  }
};

function perms(strs, frozen = 0) {
  // swap each letter into the starting postion, recursively do that with the remaining letters and concatenate back onto the string
  // iterate over each character
  // check if that idx is frozen, if it is, then leave it, otherwise swap it and recall perms
  const newPerms = []
  if (frozen >= strs[0].length - 1) return strs
  strs.forEach(str => {
    for (let i = frozen; i < str.length; i++) {
      let newStr = str.split('')
      const first = newStr[frozen]
      newStr[frozen] = newStr[i]
      newStr[i] = first
      newPerms.push(newStr.join(''))
    }
  })
  return perms(newPerms, frozen + 1)
}

function substrings(str, len) {
  let subs = []
  str.split('').forEach((char, idx) => {
    let subStr = ''
    for (let x = idx; x < str.length; x++) {
      subStr += str[x]
      if (subStr.length === len) subs.push(subStr)
    }
  })
  return subs
}

function hasSameLength(s1, s2) {
  return s1.length === s2.length
}

function hasSameCharacters(s1, s2) {
  const result = {}
  for (let i = 0; i < s1.length; i++) {
    const one = s1[i]
    const two = s2[i]
    result[one] = result[one] ? result[one] + 1 : 1
    result[two] = result[two] ? result[two] - 1 : -1
  }
  return Object.values(result).every(val => val === 0)
}

// if s1 has a letter that s2 doesn't, false
function eachCharIn(s1, s2) {
  return s1.split('').every(char => s2.includes(char))
}