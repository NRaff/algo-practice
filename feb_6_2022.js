// * Get the middle node in linked list
var middleNode = function (head) {
  // flatten the nodes into an array
  // choose the middle
  const nodes = getNodes(head)
  return nodes[Math.floor(nodes.length / 2)]

};

function getNodes(head) {
  if (head.next !== null) {
    return [head].concat(getNodes(head.next))
  } else {
    return [head]
  }
}

// * Delete the node n spaces from the end
var removeNthFromEnd = function (head, n) {
  // flatten the nodes to an array
  const nodes = getNodes(head)
  const removeNodeIdx = nodes.length - n
  if (nodes.length - n > 0) {
    // get the node n + 1 spaces from the end
    const beforeNodeIdx = nodes.length - n - 1
    // set that nodes next value to be the node after n
    const afterNodeIdx = nodes.length - n + 1
    nodes[beforeNodeIdx].next = nodes[afterNodeIdx] ? nodes[afterNodeIdx] : null
    return nodes[0]
  } else {
    nodes.splice(removeNodeIdx, 1)
    return nodes[0] ? nodes[0] : new ListNode(undefined, null).next
  }

};

function getNodes(head) {
  if (head.next !== null) {
    return [head].concat(getNodes(head.next))
  }
  return [head]
}