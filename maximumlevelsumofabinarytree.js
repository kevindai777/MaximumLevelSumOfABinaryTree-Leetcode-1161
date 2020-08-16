//

class Node {
    constructor(left = null, right = null, val) {
      this.val = val
      this.left = left
      this.right = right
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)



//O(n) solution where n is the number of nodes in the binary tree
//We do a standard level order traversal then find the max sum
//between all of the levels

let result = []
    
function bfs(node, level) {
    if (!node) {
        return
    }

    if (!result[level]) {
        result[level] = []
    }
    result[level].push(node.val)

    bfs(node.left, level + 1)
    bfs(node.right, level + 1)
} 
bfs(tree.root, 0)

for (let i = 0; i < result.length; i++) {
    result[i] = result[i].reduce((sum, curr) => sum + curr)
}

let max = -Infinity
let maxIndex
for (let i = 0; i < result.length; i++) {
    if (result[i] > max) {
        max = result[i]
        maxIndex = i
    }
}

return maxIndex + 1