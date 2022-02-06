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