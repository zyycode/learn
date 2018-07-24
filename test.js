
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
    res.push(test(i))
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


/* let ancestry = [{
  name: 'aa',
  age: 13,
}, {
  name: 'bb',
  age: 14,
}]

{
  'aa' = {
    name: 'aa',
    age: 13,
  },
  'bb' = {
    name: 'bb',
    age: 14,
  }
} */
function keyBy(ary, key) {
  let obj = {}
  for (let item of ary) {
    obj[item[key]] = people
  }
}

// [{},{},{},{},...]

function groupBy(ary, propName) {
  let map = {}

  // for (let item of ary) {
  //   if (item[propName] in map) {
  //     map[item[propName]].push(item)
  //   } else {
  //     map[item[propName]] = [item]
  //   }
  // }
  for (let item of ary) {
    let key = item[propName]
    if (item[propName] in map) {
      map[key].push(item)
    } else {
      map[key] = [item]
    }
  }    
  return map
}
console.log(groupBy([{age: 1}, {age: 1}, {age: 2}], 'age'))

function unary(func) {
  return function(value) {
    func(value)
  }
}