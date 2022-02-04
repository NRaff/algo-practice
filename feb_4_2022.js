// * move zeros
var moveZeroes = function (nums) {
  let i = 0
  const len = nums.length
  const zeros = []
  const nonzeros = []
  nums.forEach((num, idx) => {
    if (num === 0) {
      zeros.push(num)
    } else {
      nonzeros.push(num)
    }
  })

  nonzeros.concat(zeros).forEach((num, idx) => {
    nums[idx] = num
  })
};

// * Two Sum 2 - Input Array is Sorted
var twoSum = function (numbers, target) {
  // iterate over numbers
  // for each number, search for a counter part that would get the target, search should return the index
  // if not found, continue to the next number
  // each search should not include any of the numbers before it, since those have already been checked
  let i = 0
  const checked = []
  for (const num of numbers) {
    if (!checked.includes(num)) {
      const counterpart = target - num
      const foundPartner = bSearch(numbers.slice(i), counterpart)
      if (foundPartner > -1) {
        return [i + 1, foundPartner + i + 1]
      }
      checked.push(num)
    }
    i++
  }
  return [-1, -1]
};

function bSearch(nums, target) {
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
}