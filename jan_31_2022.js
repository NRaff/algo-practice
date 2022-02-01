// * Binary Search
var search = function (nums, target) {
  let begin = 0
  let end = nums.length
  while (begin <= end) {
    const mid = Math.ceil((begin + end) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      begin = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
};

// * Finding the first bad version in a set
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let begin = 0
    let end = n
    let lastBad = 1
    while (begin <= end) {
      let tryVersion = Math.ceil((begin + end) / 2)
      if (isBadVersion(tryVersion)) {
        // check the versions before
        end = tryVersion - 1
        // set lastBad
        lastBad = tryVersion
      } else {
        // check the versions after
        begin = tryVersion + 1
      }
    }
    return lastBad
  };
};

// * Find the position where something should be
var searchInsert = function (nums, target) {
  let begin = 0
  let end = nums.length
  let mid = Math.ceil((begin + end) / 2)
  while (begin <= end) {
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      //search the right side
      begin = mid + 1
      //
    } else {
      //search the left side
      end = mid - 1
    }
    mid = Math.ceil((begin + end) / 2)
  }
  return mid
};