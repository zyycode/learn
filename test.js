function arrayToList(array) {
  if (array.length === 0) {
    return null
  }
  let nodes = []
  for (let i = 0; i < array.length; i++) {
    let node = {}
    node.value = array[i]
    node.next = null
    nodes.push(node)
  }
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }
  // nodes[nodes.length - 1].next = null
  return nodes[0]
}

function arrayToList(array) {
  let node
  let head = {
    value: array[0],
    next: null,
  }
  let pnode = head

  for (let i = 1; i < array.length; i++) {
    node = {value: array[i], next: null}
    pnode.next = node
    pnode = node
  }
  return head
}
function arrayToList(array, start = 0) {
  if (start === array.length) {
    return null
  }
  let node = {
    value: array[0],
    next: null,
  }
  node.next
  return arrayToList(array, start + 1)
  node.next = node
}


function listToArray(list) {
  if (!list) {
    return []
  }
  let array = []
  while (list.next !== null) {
    array.push(list.value)
    list = list.next
  }
  return array
}

function insert(head, n, value) {
  let node = {
    value: value,
    next: null,
  }
  let p = head
  for (let i = 0; i < n - 1; i++) {
    p = p.next
  }
  node.next = p.next
  p.next = node
  return head
}
// 递归实现
function insert(head, n, value) {
  
}

function remove(head, n) {
  if (!head) {
    return null
  }
  if (n === 0) {
    return head.next
  }
  let p = head
  for (let i = 0; i < n - 1; i++) {
    p = p.next
  }
  p.next = p.next.next
  return head
}
  
function forEachDigit(n, action) {
  do {
    var digit = n % 10
    action(digit)
    n = (n - digit) / 10
  } while (n > 0)
}
forEachDigit(12345, d => {
  console.log(d)
})

function filter(ary, test) {
  let res = []
  for (let i = 0; i < ary.length; i++) {
    res.push(test(i))/*?*/
  }
  return res
}
console.log(filter([1,2,3], n => n))

function reduce(array, reducer, initVal) {
  for (let i = 0; i < array.length; i++) {
    initVal = reducer(initVal, array[i], i, array)
  }
  return initVal
}