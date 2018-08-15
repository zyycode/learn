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
/** 回溯算法
 * 对于一个数组，取出数组内相加为 target 值的元素
 * 
 * example:
 * input: [15, 3, 10, 12, 5] target = 15
 * output: [15] [3, 12] [10, 5]
 */

var items = []
var sum = ary => ary.reduce((a, b) => a + b)
var aryRandom = new Array(50).fill(0).map(item => Math.random() * 50 | 0)

function targetSum(array, target, start = 0) {
  for (let i = start; i < array.length; i++) {
    items.push(array[i])
    if (sum(items) === target) {
      console.log(items)
    } else if (sum(items) < target) {
      targetSum(array, target, i + 1)
    }
    items.pop()
  }
}
// targetSum(aryRandom, 30, 0)
//-------------------------------------------------------------------

// EloquentJS Book Page  177.
// The second argument replace is function 
var stock = "1 lemon, 2 cabbages, and 101 eggs"

function minusOne(match, amount, unit) {
  amount = Number(amount) - 1
  if (amount === 1) {
    unit = unit.slice(0, unit.length - 1)
  } else if (amount === 0) {
    amount = 'No'
  }
  return amount + ' ' + unit
}
// console.log(stock.replace(/(\d+) (\w+)/g, minusOne))
//-------------------------------------------------------------------
// String raw 的实现
function raw(parts, ...insections) {
  return parts.raw.reduce((result, part, i) => {
    return result + insections[i - 1] + part
  })
}
raw`\\${3 + 2}\\`
// console.log(raw`\\${3 + 2}\\`)
//-------------------------------------------------------------------

/**
 *! 正则表达式
 ** RegExp.test  
 * eg: reg.test(str)
 * 判断 str 中是否有匹配 reg 的模式。
 * 
 ** RegExp.exec
 * eg: reg.exec(str)
 * 在 str 中匹配 reg。如果能找到匹配，则返回匹配及捕获的数组，同时数组上的 index 属性表示匹配开始的位置。
 * 
 * 以上两个方法在 reg 都有 g 标识时，从 str 的 reg.lastIndex 位置开始匹配。
 * 
 ** String.match
 * str.match(reg)
 * 如果 reg 没有 g 标志：
 *   在 str 从头开始查找 reg 的匹配，返回匹配捕获组成的数组，数组中的 index 属性表示匹配开始的位置。
 *   基本相当于 reg.exec(str) 中 reg 没有 g 的用法(或者有 g 但 reg.lastIndex 为 0)
 * 如果 reg 有 g 标志：
 *   返回 str 中 reg 所有匹配组成的数组，每个匹配的完整内容占数组的每一项，reg 的捕获分组不会出现在
 *   返回的数组中。 
 * 
 ** String.search 
 * eg: str.search(reg)
 * 在 str 中查找匹配 reg 部分，返回匹配开始的位置，如果找不到，返回 -1。
 * 
 ** String.split
 * eg: str.split(reg)
 * 按 reg 的匹配将 str 分割成数组，如果 reg 中捕获分组，则捕获分组会按序出现在相应分割的位置。
 * 
 ** String.replace
 * eg: str.replace(reg)
 * reg 如果没有 g ，则只替换第一个匹配，有 g 则替换所有匹配。
 * 第一个参数如果为字符串，则仅替换第一个匹配。
 * 第二个参数为字符串时，字符串中的 $1, $2, $3...会分别代表正则的每个捕获，$& 代表整个正则匹配的内容。
 * 第二个参数如果是函数，则对于每个匹配，函数的返回值将作为被替换元素插入字符串的相应位置，函数每次运行
 * 时接受的参数为 reg.exec(str) 返回的数组每一项。
 */
//-------------------------------------------------------------------
// filter map reduce 的实现
function filter(array, test) {
  let passed = []
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i])
    } 
  }
  return passed
}

// use reduce to achieve filter
function filter2(array, test) {
  return array.reduce((result, item, index, ary) => {
    if (test(item, index, ary)) {
      result.push(item)
    }
    return result
  }, [])
}

function map(array, mapper) {
  let mapped = []
  for (let i = 0; i < array.length; i++) {
    mapped.push(mapper(array[i]))
  }
  return mapped
}

// use reduce to achieve map
function map2(array, mapper) {
  return array.reduce((result, item, index, array) => {
    result.push(mapper(item, index, array))
    return result
  }, [])
}

// console.log(map2([1,2,3], item => item * 2))

function reduce(array, reducer, initialValue) {
  let i = 0
  if (arguments.length === 2) {
    initialValue = array[0]
    i = 1
  }
  for (; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i])
  }
  return initialValue
}
// console.log(reduce([1,2,3,4], (a, b) => a + b))
//-------------------------------------------------------------------
// DOM
function talkAbout(node, text) {
  for (let el of node.childNodes) {
    if (el.nodeType === document.ELEMENT_NODE) {
      if (talkAbout(el, text)) {
        return true
      }
    } else if (el.nodeType === document.TEXT_NODE)  {
      if (el.nodeValue.indexOf(text) >= 0) {
        return true
      }
    }
  }
  return false
}

function getElementByTagName(node, tagName, result = []) {
  tagName = tagName.toUpperCase()
  for (let child of node.children) {
    if (child.tagName === tagName) {
      result.push(child)
    }
    getElementByTagName(child, tagName, result)
  }
  return result
}

function getElementById(id, node = document.documentElement) {
  if (node.id === id) {
    return node
  } else {
    for (let child of node.children) {
      let result = getElementById(id, child)
      if (result) {
        return result
      }
    }
  }
  return null
}

function replaceImg() {
  let images = document.body.getElementsByTagName('img')
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i]
    if (image.alt) {
      let text = document.createTextNode(image.alt)
      image.parentNode.removeChild(text, images)
    }
  }
}

function elt(tagName, ...children) {
  let node = document.createElement(tagName)
  children.forEach(child => {
    if (typeof child === 'string') 
      child = document.createTextNode(child)
    node.appendChild(child)
  })
  return node
}
elt('a', elt('b', 'foo', elt('c', 'bar')))

function t(parts) {
  let node = document.createElement('div')
  node.innerHTML = parts.join('')
  return node.firstElementChild
}
t`
  <a>
    <b>
      'foo'
      <i>bar</i>
    </b>
  </a>
`
//-------------------------------------------------------------------
