// * Squares of a Sorted Array (quick and cheep way)
var sortedSquares = function (nums) {
  const result = nums.map(num => Math.pow(num, 2))
  return result.sort(compare)
};

function compare(a, b) {
  return a - b
}

// * Rotate array in place
var rotate = function (nums, k) {
  // get the remaining number of rotations
  let rotations = k > nums.length ? k % nums.length : k
  // shift and unshift the array that many times
  let i = 0
  const len = nums.length
  const results = []

  while (i < nums.length) {
    const newPos = (i + k) % len
    results[newPos] = nums[i]
    i++
  }

  results.forEach((item, idx) => {
    nums[idx] = item
  })
};