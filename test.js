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
// forEachDigit(12345, d => {
//   console.log(d)
// })

function filter(ary, test) {
  let res = []
  for (let i = 0; i < ary.length; i++) {
    res.push(test(i))
  }
  return res
}


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
// console.log(groupBy([{age: 1}, {age: 1}, {age: 2}], 'age'))

function unary(func) {
  return function(value) {
    func(value)
  }
}

let ary = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  _length: 4,
  push: function(val) {
    this[this._length++] = val
  },
  get length() {
    return this._length
  },
  set length(len) {
    if (len < this._length) {
      for (let i = len; i < this._length; i++) {
        delete this[i]
      }
    }
    this._length = len
  },
}
// console.log(ary.push(4))
// console.log(ary.length = 2)
// console.log(ary)
// console.log(ary.length)

function unless(test, then) {
  if (!test) then()
}
function repeat(times, body) {
  for (let i = 0; i < times; i++) body(i)
}
function repeatBody(n) {
  unless(n % 2, function() {
    console.log(n)
  })
}
repeat(3, repeatBody)

// function forEachDigit(n, action) {
//   do {
//     let digit = n % 10
//     action(digit)
//     n = (n - digit) / 10
//   } while (n > 0)
// }
// forEachDigit(12345, d => {
//   console.log(d)
// })

// function gatherCorrelations(journal) {
//   var phis = {}
//   journal.forEach(entry => {
//     entry.events.forEach(event => {
//       if (! (event in phis)) {
//         phis[event] = phi(tableFor(event, journal))
//       } 
//     })
//   })
//   // for (var entry = 0; entry < journal.length; entry++) {
//   //   var events = journal[entry].events
//   //   for (var i = 0; i < events.length; i++) {
//   //     var event = events[i]
//   //     if (!(event in phis)) 
//   //     phis[event] = phi(tableFor(event, journal))
//   //   }
//   // }
//   return phis
// }