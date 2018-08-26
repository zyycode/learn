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


function aryToList(ary, start = 0) {
  if (start === ary.length) return null
  let node = {
    val: ary[start],
    next: null
  }
  let rest = aryToList(ary, start + 1)
  node.next = rest
  return node
}
aryToList([1,2,3])

function listToArray(head) {
  if (!head) return []
  let result = [head.val]
  let restVals = listToArray(head.next)
  return result.concat(restVals)
}

function A() {

}
function B() {

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