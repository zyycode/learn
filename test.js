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
//   console.log(d)-
// })
//-------------------------------------------------------------------
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
function arrToList(ary) {
  let head = {
    val: ary[0],
    next: null
  }
  let pnode = head
  for (let i = 1; i < ary.length; i++) {
    let node = {
      val: ary[i],
      next: null
    }
    pnode.next = node
    pnode = node
  }
  return head
}
// console.log(arrToList([1,2,3,4]))
//-------------------------------------------------------------------
// 回溯算法 
// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]

function restoreIpAdresses(s) {
  
}

// 工厂模式
function createPerson(name, age, job) {
  let o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    return this.name
  }
  return o
}
// let person = createPerson('z', 18, 'Web')

// 构造函数模式
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = sayName
}
function sayName() {
  return this.name
}
// var p1 = new Person('aa', 11)
// var p2 = new Person('bb', 22)
// console.log(p1.sayName())
// console.log(p2.sayName())

// var div = document.querySelector('div')
var action = function() {

}
var id
// div.addEventListener('mousemove', function() {
//   clearTimeout(id)
//   id = setTimeout(action, 3000)
// })

function debounce(f, interval) {
  var id = null
  return function(...args) {
    clearTimeout(id)
    id = setTimeout(() => {
      f.apply(this, ...args)
    }, interval)
  }
}
function throttle(f, interval) {
  var lastRunTime = 0
  return function (...args) {
    var now = Date.now()
    if (now - lastRunTime > interval) {
      f.apply(this, ...args)
      lastRunTime = now
    }
  }
}
// div.addEventListener(
//   'mousemove',
//   debounce(function() {
//     console.log(1)
//   }, 2000)
// )

for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log(i))
  i++
}

for (
  let i = (setTimeout( () => console.log(i)), 0);
  i < 2;
  i++
) {
  i++
}

var name = 'window'

var obj = {
  name: 'object',
  getName () {
    return function () {
      return this.name
    }
  }
}
// console.log(obj.getName()())

var o = new Object()
function foo(obj) {
  obj.name = "xyc"
  obj = new Object()
  obj.name = "lxy"
}
foo(o)
// console.log(o.name)

function create(o) {
  var F = function(){}
  F.prototype = o
  return new F()
}
// ------------------------------------------------------------------
/**
 * this 调用的四种情况
 * 1. 当方法调用 (指向调用该方法的对象)
 * 2. 使用 bind apply call 调用 (this 指向这些函数传入的第一个参数)
 * 3. 当函数调用 (一般指向的是全局，严格模式下指向的 undefined)
 * 4. 使用构造函数 new Function()
 */

function bind(f, thisArg, ...fixedArgs) {
  return function (...restArgs) {
    f.apply(thisArg, [...fixedArgs, ...restArgs])
  }
} 
function f(a) {
  return a + this.val
}
// f2 = f.bind({val: 1}, 1) // 2
// f2.bind({val: 2}, 3) // 4; f2 不会再改变 this
// ------------------------------------------------------------------

function INSTANCEOF(val, fn) {
  if (!val || !val.__proto__) return false
  if (val.__proto__.constructor === fn) {
    return true
  } else {
    return INSTANCEOF(val.__proto__, fn)
  }
}
// new 的模拟实现
// 当构造函数没有返回值时，apply 返回值是 undefined
// 若构造函数有返回对象，则返回这个对象
function NEW(F, ...args) {
  let obj = {}
  obj.__proto__ = F.prototype
  // obj = Object.create(F.prototype)
  let result = F.apply(obj, args)
  // if (!result) 
  //   return obj
  // if (typeof result === 'object') 
  //   return result
  // return obj
  return typeof result === 'object' ? result : obj 
}

function objToString(val) {
  if (val === null) return '[object Null]'
  if (val === undefined) return '[object Undefined]'
  return '[object ' + val.constructor.name + ']'
}

function classOf(o) {
  if (o === null) return 'Null'
  if (o === undefined) return 'Undefined'
  return Object.prototype.toString.call(o).slice(8, -1)
}
// ------------------------------------------------------------------


// 1 1 2 3 5 8
var sum = 0

function fib(n) {
  var res = [1]
  var a = 1
  var b = 1
  for (let i = 0; i < n; i++) {
    res.push(b)
    b = a + b
    a = b - a
  }
  return res
}

function * f() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}
var sum = 0
var generated
var itera = f()

while (true) {
  generated = itera.next()
  if (!generated.done) {
    sum += generated.value
  } else {
    break
  }
}

function * fib(n) {
  let a = 0
  let b = 1
  for (let i = 0; i < n; i++) {
    b = a + b
    a = b - a
    yield a
  }

}

for (let i of fib(5)) {
  console.log(i)
}

(function(r) {
  try {
    return r
  } finally {
    r = null
    return r
  }
})('1')

// 打印 1 到 10
Number.prototype[Symbol.iterator] = function () {
  // for (let i = 1; i <= this; i++) {
  //   yield i
  // }
  var i = 1
  var self = this
  return {
    next () {
      if (i <= self) {
        return {
          value: i++,
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

for (let val of 10) {
  console.log(val)
}


Number.prototype.digits = function *() {
  // let n = this.valueOf()
  // do {
  //   let digit = n % 10
  //   yield digit
  //   n = (n - digit) / 10
  // } while (n)
  let n = this.valueOf()
  let digit = n % 10
  n = (n - digit) / 10

  if (n >= 1) {
    yield *n.digits()
  }
  yield digit
}

var n = 12593
for (let digit of n.digits()) {
  console.log(digit)
}


function wraper(f) {
  return function(...args) {
    let g = f(...args)
    g.next()
    return g
  }
}

const wraped = wraper(function *() {
  console.log(`input: ${yield}`);
  return 'done'
})

wraped().next('hello')


function get(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', () => {
    callback(xhr.responseText)
  })
  xhr.send()
}

// 最小特权原则

var a = 2;
(function IIFE(def) {
  def(window);
  console.log(a) // 2
}(function def(global) {
  var a = 3;
  console.log(a); // 3
  console.log( global.a ); // 2 
}));

// Closure 闭包
// 当函数可以记住访问所在的词法作用域时，就产生了闭包。
function foo() {
  var a = 2

  function bar() {
    console.log(a)
  } 

  return bar
}
var baz = foo()
baz() // 这就是闭包

// ------------------------------------------------------------------
// 无法捕获到错误
try {
  setTimeout(() => {
    throw 3
  }, 3000)
} catch (e) {
  console.log(e)
}
// 为错误程序添加一个处理程序
function getURL(url, callback) {
  let req = new XMLHttpRequest()
  req.open('GET', url)
  req.addEventListener('load', () => {
    if (req.status < 400) {
      callback(req.responseText)
    } else {
      callback(null, new Error('Failed to loading: ' + req.responseText))
    }
  })
  req.addEventListener('error', () => {
    callback(null, new Error('Network error'))
  })
}
getURL('data/none.txt', (content, error) => {
  if (error !== null) {
    console.log('Request failed: ' + error)
  } else {
    console.log('Request content: ' + content)
  }
})
// ------------------------------------------------------------------
const hexColor = '#' + 
  Math.floor(Math.random() * 0x1000000)
  .toString(16)
  .padStart(6, '0')
// ------------------------------------------------------------------
