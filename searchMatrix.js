/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // determine which row the number is in
  // get rows and bSearch against the last number of each row
  // search the correct row for the number
  // output true or false for depending on if exists
  return searchRows(matrix, target)
};

const searchRows = (matrix, target) => {
  let begin = 0
  let end = matrix.length
  let midIdx = 0
  while (begin <= end) {
    midIdx = Math.floor((begin + end) / 2)
    const midRow = matrix[midIdx]
    if (midRow === undefined) return false
    if (target < midRow[0]) {
      end = midIdx - 1
    } else if (target > midRow[midRow.length - 1]) {
      begin = midIdx + 1
    } else {
      return searchRow(midRow, target)
    }
  }
  return false
}

const searchRow = (array, target) => {
  let begin = 0
  let end = array.length

  while (begin <= end) {
    const midIdx = Math.floor((begin + end) / 2)
    const mid = array[midIdx]
    if (target === mid) return true
    if (target < mid) {
      end = midIdx - 1
    } else {
      begin = midIdx + 1
    }
  }
  return false
}