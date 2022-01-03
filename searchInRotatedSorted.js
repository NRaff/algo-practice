/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// determine if rotation exists
// find pivot (smallest item in the array)
// unrotate
// bsearch for target
// transate bsearched idx to rotated idx

var search = function (nums, target) {
  const first = nums[0]
  const last = nums[nums.length - 1]
  let minIdx = 0
  if (first > last) {
    minIdx = minSearch(nums)
  }
  const left = nums.slice(minIdx, nums.length)
  const right = nums.slice(0, minIdx)
  const sorted = left.concat(right)
  const sortedIdx = bSearch(sorted, target)
  if (sortedIdx === -1) return -1
  console.log(`Sorted: ${sortedIdx}, minIdx: ${minIdx}`)
  if (sortedIdx === minIdx) {
    return sortedIdx - minIdx
  } else {
    return sortedIdx + minIdx
  }
};


const bSearch = function (nums, target) {
  let begin = 0
  let end = nums.length

  while (begin <= end) {
    const midIdx = Math.ceil((begin + end) / 2)
    const mid = nums[midIdx]

    if (mid === target) return midIdx
    if (mid < target) {
      begin = midIdx + 1
    } else {
      end = midIdx - 1
    }
  }

  return -1
}

const minSearch = function (nums) {
  let begin = 0
  let end = nums.length

  while (begin <= end) {
    const midIdx = Math.ceil((begin + end) / 2)
    const mid = nums[midIdx]

    if (mid < nums[begin]) {
      return midIdx
    } else {
      begin = mid + 1
    }

  }

  return -1
}