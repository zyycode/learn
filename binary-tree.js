/**
 * @description
 * 把一棵由数组保存的完全二叉树转换为二叉树链表形式
 * 顺序存储
 * @param {Array} array
 * @param {number} [rootIndex=0] 根结点所在位置
 * @returns
 */
function arrayToTreePro(array, rootIndex = 0) {
  if (array[rootIndex] == null) return null
  return {
    val: array[rootIndex],
    left: arrayToTreePro(array, rootIndex * 2 + 1),
    right: arrayToTreePro(array, rootIndex * 2 + 2),
  }
}
function arrayToTree(array, rootIndex = 0) {
  if (array[rootIndex] == null) return null
  let rootNode = {
    val: array[rootIndex],
    left: null,
    right: null,
  }
  let leftIndex = rootIndex * 2 + 1
  let rightIndex = rootIndex * 2 + 2
  rootNode.left = arrayToTree(array, leftIndex)
  rootNode.right = arrayToTree(array, rightIndex)
  return rootNode 
}

/**
 * @description
 * 把一棵由二叉链表表示的二叉树转换为由顺序存储表达的二叉树数组形式
 * 
 * @param {*} rootNode
 * @param {number} [rootIndex=0]
 * @param {Array} [result=[]]
 * @returns
 */
function treeToArray(rootNode, rootIndex = 0, result = []) {
  if (!rootNode) {
    return result
  }
  result[rootIndex] = rootNode.val
  let leftRootIndex = rootIndex * 2 + 1
  let rightRootIndex = rootIndex * 2 + 2
  treeToArray(rootNode.left, leftRootIndex, result)
  treeToArray(rootNode.right, rightRootIndex, result)
  return result
}

// 函数只返回一个参数
var unary = f => v => f(v)
// function unary(f) {
//   return function(v) {
//     return f(v)
//   }
// }
/**
 * @description
 * 将一个稠密二叉链表表示的数组转换为二叉树链表形式
 * 
 * @param {Array}} array
 * @returns
 */
function condenseArrayToTree(array) {
  if (array.length === 0) return null
  let root = {
    val: array[0],
    left: null,
    right: null,
  }
  let queue = []
  let node
  queue.push(root)
  for (let i = 1; i < array.length; i++) {
    node = queue.shift()
    if (array[i] != null) {
      node.left = {
        val: array[i],
        left: null,
        right: null,
      }
      queue.push(node.left)
    }
    i++
    if (array[i] != null) {
      node.right = {
        val: array[i],
        left: null,
        right: null,
      }
      queue.push(node.right)
    }
  }
  return root
}
/**
 * @description
 * 将一棵稠密二叉树转换为数组表示形式 
 * 根节点 -> 左子树 -> 右子树
 * 
 * @param {*} root root node
 * @returns
 */
function treeToCondensedArray(root) {
  if (root == null)  return []
  let queue = [root]
  let result = [root.val]
  let node
  while (node = queue.shift()) {
    if (node.left) {
      result.push(node.left.val)
      queue.push(node.left)
    } else {
      result.push(null)
    }
    if (node.right) {
      result.push(node.right.val)
      queue.push(node.right)
    } else {
      result.push(null)
    }
  }
  return result
}
/**
 * @description
 * 先序遍历
 * 
 * @param {*} root
 */
function prevOrderTraverse(root, action) {
  if (root) {
    action(root.val)
    prevOrderTraverse(root.left, action)
    prevOrderTraverse(root.right, action)
  }
}
/**
 * @description
 * 中序遍历
 * 
 * @param {*} root
 */
function inOrderTraverse(root) {
  if (root) {
    inOrderTraverse(root.left)
    console.log(root.val)
    inOrderTraverse(root.right)
  }
}
/**
 * @description
 * 后序遍历
 * 
 * @param {*} root
 */
function postOrderTraverse(root) {
  if (root) {
    postOrderTraverse(root.left)
    postOrderTraverse(root.right)
    console.log(root.val)
  }
}