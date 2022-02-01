// * Squares of a Sorted Array (quick and cheep way)
var sortedSquares = function (nums) {
  const result = nums.map(num => Math.pow(num, 2))
  return result.sort(compare)
};

function compare(a, b) {
  return a - b
}