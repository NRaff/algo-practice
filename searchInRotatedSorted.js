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
  // console.log(minIdx)
  const left = nums.slice(minIdx, nums.length)
  const right = nums.slice(0, minIdx)
  // console.log(left)
  // console.log(right)
  if (target > left[left.length - 1]) {
    return bSearch(right, target)
  } else {
    const leftSearch = bSearch(left, target)
    if (leftSearch === -1) return -1
    return leftSearch + minIdx
  }
}

const minSearch = function (nums) {
  let begin = 0
  let end = nums.length

  while (begin <= end) {
    let midIdx = 0
    if (nums.length === 3) {
      midIdx = Math.floor((begin + end) / 2)
    } else {
      midIdx = Math.ceil((begin + end) / 2)
    }

    const mid = nums[midIdx]
    console.log(`mid: ${mid}, begin: ${begin}`)
    if (mid <= nums[begin]) {
      return midIdx
    } else {
      begin = midIdx + 1
    }
  }
  return -1
}

const bSearch = function (nums, target) {
  let begin = 0
  let end = nums.length
  if (nums.length === 1 && nums[0] === target) return 0
  if (nums.length === 1 && nums[0] !== target) return -1
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

// brute force
var searchBrute = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i
  }
  return -1
}