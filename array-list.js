/**
 * @description
 * 数组->链表
 * 1. 将数组的每一项的值都传递给 node 结点，并且保存在 nodes 数组中
 * 2. 遍历 nodes 数组，将上一结点指向下一个结点
 * 
 * @param {Array} array
 * @returns
 */
function arrayToList(array) {
  if (array.length === 0) return null
  let nodes = []
  for (let i = 0; i < array.length; i++) {
    let node = {
      val: array[i],
      next: null,
    }
    nodes.push(node)
  }
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }
  return nodes[0]
}
/**
 * @description
 * 数组->链表：使用指针操作
 * 构建首结点，通过 pnode node 两个结点来依次递进
 * 
 * @param {Array} array
 * @returns
 */
function arrayToList2(array) {
  let head = {
    val: array[0],
    next: null,
  }
  let pnode = head
  let node
  for (let i = 1; i < array.length; i++) {
    node = {
      val: array[i],
      next: null,
    }
    pnode.next = node
    pnode = node
  }
  return head
}

/**
 * @description
 * 数组->链表：使用递归来实现
 * 将链表除首结点的剩余部分作为递归返回
 * 结束条件：当传入的 start 为数组的长度时结束，即数组的最后一个元素
 * 
 * @param {Array} array
 * @param {number} [start=0]
 * @returns
 */
function arrayToList3(array, start = 0) {
  if (start === array.length) return null
  let node = {
    val: array[start],
    next: null,
  }
  let rest = arrayToList3(array, start + 1)
  node.next = rest
  return node
}
/**
 * @description
 * 链表->数组
 * 依次遍历链表的每个结点，并将其值传入数组中
 * 
 * @param {*} list
 * @returns {Array}
 */
function listToArray(list) {
  if (!list) return []
  let result = []
  while (list != null) {
    result.push(list.val)
    list = list.next
  }
  return result
}
/**
 * @description
 * 链表->数组：递归实现
 * 
 * @param {*} head
 * @returns {Array}
 */
function listToArray2(head) {
  if (!head) return []
  let result = [head.val]
  let restVal = listToArray2(head.next)
  return result.concat(restVal)
}
/**
 * @description
 * 向链表增加首结点
 * 
 * @param {*} head
 * @param {*} value
 * @returns
 */
function prepend(head, value) {
  return {
    val: value,
    next: head
  }
}
/**
 * @description
 * 返回链表的第 n 个结点
 * 
 * @param {*} head
 * @param {*} n
 * @returns
 */
function nth(head, n) {
  let p = head
  for (let i = 0; i < n - 1; i++) {
    p = p.next
  }
  if (p == null) return null
  return p.val
}
// 递归实现
function nth2(head, n) {
  if (head == null) return null
  if (n === 0) return head.val
  return nth(head.next, n - 1)
}
/**
 * @description
 * 向链表中插入某一结点，插入时需要注意建立链接的顺序
 * 
 * @param {*} head The first node.
 * @param {number} n The position of insert.
 * @param {*} value The value insert.
 * @returns
 */
function insert(head, n, value) {
  let node = {
    val: value,
    next: null,
  }
  if (head == null) return node 
  if (n === 0) {
    node.next = head
    return node
  }
  let p = head
  for (let i = 0; i < n - 1; i++) {
    p = p.next
  }
  node.next = p.next
  p.next = node
  return head
}
/**
 * @description
 * 向链表中插入某一结点， 使用递归来实现
 * 
 * @param {*} head
 * @param {*} n
 * @param {*} value
 * @returns
 */
function insert2(head, n, value) {
  let node = {
    val: value,
    next: null,
  }
  if (head == null) return node
  if (n === 0) {
    node.next = head
    return node
  }
  head.next = insert2(head.next, n - 1, value)
  return head
}
/**
 * @description
 * 删除链表的某一结点
 * 
 * @param {*} head The first node.
 * @param {number} n The position of removing.
 * @returns
 */
function removeList(head, n) {
  if (!head) return null
  if (n === 0) return head.next

  let p = head
  for (let i = 0; i < n - 1; i++) {
    p = p.next
  }
  p.next = p.next.next
  return head
}
/**
 * @description
 * 反转链表
 * 使用三个指针，将头结点指向 null，后一个结点指向前一个结点，依次移动指针
 * 
 * @param {*} head
 * @returns
 */
function reverseList(head) {
  if (!head || !head.next) return head

  let p1 = null
  let p2 = null
  let p3 = head

  while (p3) {
    p1 = p2
    p2 = p3
    p3 = p3.next
    p2.next = p1
  }
  return p2
}
function reverseList2(head) {
  let prev = null
  while (head) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}
// console.log(reverseList2(arrayToList([1,2,3,4,5,6,7])))
