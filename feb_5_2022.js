// * Reverse String
var reverseString = function (s) {
  let i = s.length - 1
  while (i >= 0) {
    s.push(s.splice(i, 1)[0])
    i--
  }
};

function reverseTwo(s) {
  const reversed = []
  for (item of s) {
    reversed.unshift(item)
  }
  reversed.forEach((item, idx) => {
    s[idx] = item
  })
}

// fastest version, slightly heavier memory
function reverseN(s) {
  const maxIdx = s.length - 1
  const halfway = Math.ceil(s.length / 2)
  let i = 0
  while (i < halfway) {
    var newIdx = maxIdx - i
    const temp = s[i]
    s[i] = s[newIdx]
    s[newIdx] = temp
    i++
  }
}

// * reverse words in string
var reverseWords = function (s) {
  const words = s.split(' ')
  const reversedWords = words.map(word => {
    return reverseString(word)
  })
  return reversedWords.join(' ')
};

function reverseString(s) {
  let i = 0
  const reversed = []
  while (i < s.length) {
    reversed.unshift(s[i])
    i++
  }
  return reversed.join('')
}