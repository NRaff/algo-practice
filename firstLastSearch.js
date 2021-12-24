// ! This answer does not work if there are more than 2 of any number (after 2 hours)
var searchRange = function (nums, target) {
  // get just the position of one (binary search)
  const firstFound = bSearch(nums, target)
  if (firstFound !== null) {
    const leftIdx = firstFound - 1
    const rightIdx = firstFound + 1
    // else do everything below
    if (nums[leftIdx] === target) {
      return [leftIdx, firstFound]
    } else if (nums[rightIdx] === target) {
      return [firstFound, rightIdx]
    } else {
      return [firstFound, firstFound]
    }
  } else {
    //not found, so return [-1, -1]
    return [-1, -1]
  }
  // since nums are sorted, just check either side
  // return an array of the found position and either side,
  // or the same position tw
};


// this is log n time
const bSearch = function (nums, target) {
  const midIdx = Math.floor(nums.length / 2)
  const midNum = nums[midIdx]
  if (midNum === target) return midIdx
  if (nums.length === 1 && midNum != target) return null
  if (nums.length === 0) return null
  if (midNum > target) {
    const sliceTo = midIdx === 1 ? 1 : midIdx - 1
    const searchLeft = bSearch(nums.slice(0, sliceTo), target)
    return searchLeft
  } else {
    const searchRight = bSearch(nums.slice(midIdx + 1, nums.length), target)
    console.log(searchRight)
    if (searchRight !== null) {
      return searchRight + midIdx + 1
    } else {
      return searchRight
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
  const firstIdx = findBound(nums, target, true)
  if (firstIdx === -1) return ([-1, -1])
  return [firstIdx, findBound(nums, target, false)]
}

// without recursion
const findBound = function (nums, target, isFirst) {
  let begin = 0
  let end = nums.length
  let results = [-1, -1]
  if (nums.length === 0) return -1
  while (begin <= end) {
    const mid = Math.floor((begin + end) / 2)
    if (nums[mid] === target) {
      // keep searching left if...
      if (isFirst) {
        if (mid === begin || nums[mid - 1] !== target) {
          return mid //mid is minimum idx of target
        } else {
          end = mid - 1
        }
      } else {
        if (mid === end || nums[mid + 1] != target) {
          return mid
        } else {
          begin = mid + 1
        }
      }
    }
    if (nums[mid] < target || nums[mid] === undefined) {
      begin = mid + 1
    } else if (nums[mid] > target) {
      end = mid - 1
    }
  }
  return -1
}