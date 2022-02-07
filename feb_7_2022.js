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

//* Recursive permutations
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