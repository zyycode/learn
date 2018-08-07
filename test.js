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

// function unless(test, then) {
//   if (!test) then()
// }
// function repeat(times, body) {
//   for (let i = 0; i < times; i++) body(i)
// }
// function repeatBody(n) {
//   unless(n % 2, function() {
//     console.log(n)
//   })
// }
// repeat(3, repeatBody)

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



// eval()
var a = 1
var run = eval
function f() {
  var a = 9
  run('console.log(a)')
}
// expected output: 1
function g() {
  var a = 10
  eval('console.log(a)')
  
}
// expected output: 10

// ------------------------------------------------------------------
// 判断一个构造函数是否被正常调用
function Person(name, age) {
  // ES6
  if (new.target !== Person) {
    return new Person(name, age)
  }
  // if (! (this instanceof Person)) {
  //   return new Person(name, age)
  // }
  this.name = name
  this.age = age
}
// var person = Person('zyy', 18)
// console.log(person)
// ------------------------------------------------------------------
// with 语句 改变当前的作用域
let obj = {
  a: 1,
  b: 2,
  c: 3,
}
with (obj) {
  // let a = 99
  // console.log(a)
}
//-------------------------------------------------------------------
// eval() 如果用一个其它变量指向 eval 调用的是全局作用域内
// var a = 8
// var run = eval
// function f() {
//   var a = 9
//   run('console.log(a)')
// }
// f()
// expected output: 8
//-------------------------------------------------------------------
// 在严格模式下通过this传递给一个函数的值不会被强制转换为一个对象
// 非严格模式下会转换为包装对象
function f() {
   this
   debugger
 }
 f.call(2)
// this: Number(2)
// In strice mode this: 2
// 'use strict'
// function fun() { return this; }
// console.assert(fun() === undefined);
// console.assert(fun.call(2) === 2);
// console.assert(fun.apply(null) === null);
// console.assert(fun.call(undefined) === undefined);
// console.assert(fun.bind(true)() === true);
//-------------------------------------------------------------------
function Vector(x, y) {
  this.x = x
  this.y = y
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y)
}
var p1 = new Vector(10,20)
var p2 = new Vector(-5, 10)
// console.log(p1.plus(p2))
//-------------------------------------------------------------------
function numberToString(n, base = 10) {
  let result = ''
  let sign = ''
  if (n < 0) {
    sign = '-'
    n = -n
  }
  do {
    result = String(n % base) + result
    n = Math.floor(n / base)
  } while (n > 0)
  return sign + result
}
// console.log(numberToString(-123, 2))
// ------------------------------------------------------------------
function promptDirection(question) {
  let result = prompt(question, '')
  if (result.toLocaleLowerCase() == 'left') return 'L'
  if (result.toLocaleLowerCase() == 'right') return 'R'
  throw new Error('Invailed direction: ' + result)
}
function look() {
  if (promptDirection('Which Way?') == 'L') 
    return 'a house'
  else
    return 'two bears' 
}
try {
  // console.log(look())
} catch (error) {
  // console.log('Sometion were wrong ' + error)
}
//-------------------------------------------------------------------
// Cleaning up after exception.
// 函数 withContext 在执行时，全局变量 context 拥有特定的上下文值，
// 当执行完之后, 变量 context 恢复为旧值 
let context = null
function withContext(newContext, body) {
  let oldContext = context
  context = newContext
  try {
    return body()
  } finally {
    context = oldContext
  }
}
try {
  // withContext(5, function () {
  //   if (context < 10) {
  //     throw new Error('Not enough context!')
  //   }
  // })
} catch (e) {
  console.log('Ingoring: ' + e)
}
// console.log(context)
//-------------------------------------------------------------------

// var stack = []
// function descript(val, func) {
//   stack.push(' ')
//   console.log(stack.join('') + val)
//   func()
//   stack.pop(' ')
// }
var d = 0
function descript(val, f) {
  d++
  console.log(' '.repeat(d * 2) + val)
  f()
  d--
}
// descript('1', () => {
//   descript('1.1', () => {
//     descript('1.1.1', () => {
    
//     })
//     descript('1.1.2', () => {

//     })
//   })
//   descript('1.2', () => {

//   })
// })
//-------------------------------------------------------------------
