/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // determine if rotated
  //nums is rotated
  // pick the middle, check if it's more than the last (search right if it is)
  return searchMin(nums)
};
// determine number of rotations
// determine where rotation begins <--that's the minimum

const searchMin = (nums) => {
  let begin = 0
  let end = nums.length - 1
  let min = nums[0]
  while (begin <= end) {
    const midIdx = Math.floor((begin + end) / 2)
    const mid = nums[midIdx]
    if (mid === undefined) return min
    if (mid > nums[end]) {
      // set the last min to current mid
      min = mid
      begin = midIdx + 1
      // search the right side
    } else {
      // search the left side
      if (min > mid) {
        min = mid
      }
      end = midIdx - 1
    }
  }
  return min
}