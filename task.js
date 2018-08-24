// * Exercises chapter 2.1

var str = ''
for (var i = 0; i < 7; i++) {
  for (var j = 0; j < i + 1; j++) {
    str += '#'
  }
  str += '\n'
}
// console.log(str)

// ! improved version
var str = ''
for (var i = 0; i < 7; i++) {
  str += '#'
  // console.log(str)
}

var str = ''
var result = ''
for (var i = 0; i < 7; i++) {
  str += '#'
  result += (str + '\n')
}
// console.log(result)

// * Exercises chapter 2.2

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else {
    i % 3 === 0 ? console.log('Fizz') : i % 5 === 0 ? console.log('Buzz') : console.log(i)
  }
}

// * Exercises chapter 2.3

var str = ''

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    str += '# '
  }
  str += '\n'
  for (var k = 0; k < 4; k++) {
    str += ' #'
  }
  str += '\n'
}
console.log(str)

// ! improved version

var result = ''
var n = 8
for (var x = 0; x < n; x++) {
  for (var y = 0; y < n; y++) {
    var s = (x + y)
    if (s % 2 == 0) {
      result += ' '
    } else {
      result += '#'
    }
  }
  result += '\n'
}
console.log(result)

/* 
 * 题目：输入三个数，把此三个数按升序输出
*/
var a = 1
var b = 5
var c = 3
var arr = [1, 5, 3]
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
}
console.log(arr)

/* 
 * 题目：水仙花数。水仙花数是指一个N位的十进制数，其各位数的N次方的和等于它自己。
 * 如：153 =　1的三次方+5的三次方+3的三次方，则153就是一个水仙花数
 * 或：1634 =　1的四次方+6的四次方+3的四次方+4的四次方
 * 因为1634是一个四位数。
 * 找出100到100000以内所有的水仙花数。
*/

var n = 0
var sum = 0
for (let i = 100; i < 100000; i++) {
  var n = 0
  var sum = 0
  var x = i
  var y = i
  // 获取数字位数
  while (x != 0) {
    x = x / 10 >> 0
    n++
  }
  while (y != 0) {
    var pop = y % 10
    y = y / 10 >> 0
    sum += pop ** n
  }
  if (i == sum) {
    console.log(i)
  }
}

// 使用函数来抽象化解决
function isWaterFlowerNumber(n) {
  var width = numberWidth(n)
  var sum = digitPowerSum(n, width)
  return sum === n
}

function numberWidth(n) {
  var width = 0
  do {
    var digit = n % 10
    width++
    n = (n - digit) / 10
  } while (n > 0)
  return width
}

function digitPowerSum(n, e) {
  var sum = 0
  do {
    var digit = n % 10
    sum += digit ** e
    n = (n - digit) / 10
  } while  (n > 0)
  return sum
}

/* 
 * 题目：在控制输出九九乘法表。
*/
var str = ''
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    str += (j + "*" + i + "=" + i * j + '  ')
  }
  str += '\n'
}
console.log(str)

/* 
 * 题目：判断一个非负整数是否为回文数字，回文是指从左往右与从右往左读是一样的。
 * 例如：12321是回文数。12344321也是回文数。
*/
var x = 1234432
var yx = x
var rx = 0
while (x != 0) {
  var pop = x % 10
  x = x / 10 >> 0
  rx = rx * 10 + pop
}
if (yx == rx) {
  console.log(yx + ' 是回文数')
} else {
  console.log(yx + ' 不是回文数')
}
/* 
 * 题目：求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。
 * 例如2+22+222+2222+22222(此时共有5个数相加)，具体有几个数相加有通过输入或者函数的实际参数决定。
*/
var a = parseInt(prompt('输入底数：'))
var n = parseInt(prompt('输入次数：'))
var an = 0
var sum = 0
for (let i = 0; i < n; i++) {
  an += (a * 10 ** i)
  sum += an
}
console.log(sum)

/* 
 * 题目：输入年份与月份，给出该年该月的第一天是星期几。
 * 例如，输入2016年，11月，输出“星期2”
 * 为了简化复杂性，可以只考虑2000年以后的时间。做为参考，2000年的1月1日是星期六。
*/



/*
 * 题目：完全数。如果一个数的所有小于它的约数之和等于它自己，则它是一个完全数，例如6（1，2，3都是它的约数，它们的和正好为6）。找出10000以内所有的完全数
 * 给定M和N，求从M个物体中选出N个的排列与组合的数量：
 * Ｃ（ｍ，ｎ）
 * Ａ（ｍ，ｎ）
*/
for (let x = 1; x <= 10000; x++) {
  var sum = 0
  for (let i = 1; i <= x / 2; i++) {
    if (x % i === 0) {
      sum += i
    } 
  }
  if (x === sum) {
    console.log(x)
  }
}

/*
 * 题目：给定一个数，对其进行四舍五入，如1.4返回1，1.6返回2
 */
var n = 1.6
var intN = n >> 0
var fN = n - intN
if (fN >= 0.5) {
  console.log(intN + 1)
} else {
  console.log(intN)
}

/*
 * 题目：把一个数字转换成字符串；当然不能使用String(123)了，也不能使用任意内置的方法比如：""+123
 */


/*
 * 题目：给定两个数，求它们的最小公倍数和最大公约数
 */
var m = 15
var n = 12
var min
min = m > n ? n : m

for (var i = min; i > 0; i--) {
  if (m % i === 0 && n % i === 0) {
    console.log(i)
    break
  }
}

var m = 15
var n = 12
var max
max = m > n ? m : n
for (var i = max; ; i++) {
  if (i % m === 0 && i % n === 0) {
    console.log(i)
    break
  }
}


var a = parseInt(prompt('输入a：'))
var b = parseInt(prompt('输入b：'))
var a = 15
var b = 12
var m = a
var n = b
while (1) {
  if ( a > b) {
    a -= b
  } else if (a < b) {
    b -= a
  } else {
    console.log(a)
    break
  }
}
// 最小公倍数：(m * n) / a 。a 为最大公倍数
// m = a * b; n = a * c
// 最小公倍数为 a * b * c, 即为 (m * n) / a
console.log((m * n) / a)

/*
 * 题目：敲7。输出1到100以内所有7的倍数以及数字中包含7的数。
 * 如7（7的倍数），37（不是倍数但数位中包含7）都需要输出，依次类推
 */
for (let i = 1; i <= 100; i++) {
  if (i % 7 == 0 || i % 10 == 7 || (i / 10 >> 0) == 7) {
    console.log(i)
  }
}

for (let i = 1; i < 100; i++) {
  let n = i
  let flag = false
  if (n % 7 === 0) {
    flag = true
  } else {
    while (n > 0) {
      let digit = n % 10
      if (digit === 7) {
        flag = true;
        break
      }
      n = (n - digit) /10
    }
  }
  if (flag) {
    console.log(i)
  }
}
/*
 * 题目：不使用Math.sqrt，求一个非负数的平方根
*/
var count = 0
var x = 2
while (count < 6) {
  count++
  x = x - (x * x - 2) / (2 * x)
}
console.log(x)

var low = 0
var high = 2
var n = 2
var x

while((high - low) > 0.00001) {
  x = (high + low) / 2
  if (x * x > n) {
    high = x 
  } else if (x * x < n) {
    low = x
  }
}
console.log((high + low) / 2)



/*
 * 题目：判断一个数是否是素数。
 * 题目：输出100以内所有的素数。
*/
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return 0
  }
  return 1
}
for (let i = 2; i < 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
// for (let i = 2; i < Math.sqrt(n); i++) {
//   if (n % i == 0) {
//     num++
//   }
//   if (n == 2) {
//     num = 0
//   }
// }
// if (num == 0) {
//   console.log(n + ' 是素数')
// } else {
//   console.log(n + ' 不是素数')
// }

/* 
 * 题目：分解质因数，把一个数分解为若干质数的乘积
*/
function divideByPrime(n) {
  let arr = []
  for (let i = 2; i < n / 2; i++) {
    if (isPrime(i)) arr.push(i)
  }
  // console.log(arr)
  let x = n
  for (let j = 0; j < arr.length; j++) {
    while (x % arr[j] === 0) {
      x = x / arr[j]
      console.log(arr[j])
    }
  }
}
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % 2 === 0) return 0
  }
  return 1
}
divideByPrime(120)

/*
 * 题目：找出最小的能被1到20所有数整除的数。
*/


/**
 * 
 * * 数素数
 */
function countPrimes(n) {
  let count = 0
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
};
function isPrime(x) {
  for (let i = 2; i <= x / 2; i++) {
    if (x % i !== 0) {
      return true
    } else {
      return false
    }
  }
}

function digitWidth(x) {
  var width = 0;
  while (x != 0) {
    var digit = x % 10
    x = (x - digit) / 10
    width++
  }
  return width
}
console.log(digitWidth(1234))

function isCompleterNumber(x) {
  let sum = 0
  for (let i = 1; i <= x / 2; i++) {
    if (x % i === 0) {
      sum += i
    }
  }
  if (x === sum) {
    console.log(x + ' 是完全数')
  } else {
    console.log(x + ' 不是完全数')
  }
}
isCompleterNumber(7)

/*
  * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
*/
var isUgly = function (num) {
  for (var i of [2, 3, 5]) {
    while (num && num % i === 0) {
      num /= i
    }
  }
  return num === 1
}
console.log(isUgly(14))

var nthUglyNumber = function (n) {
  var count = 0
  for (var i = 1; i <= n; i++) {
    for (var p of [2, 3, 5]) {
      while (i && i % p === 0) {
        i /= p
        count++
      }
    }
  }
  return count
}
console.log(nthUglyNumber(10))

var arr = []
for (var i = 0; i < 5; i++) {
  arr.unshift(Number(prompt('第 ' + (i + 1) + ' 个数')))
}

// console.log(arr)
//------------------------------------------------------------------0
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
//-------------------------------------------------------------------
// indexOf and includes
function indexOf(arr, val) {
  if (Array.prototype.indexOf) return Array.prototype.indexOf(arr, val)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

function includes(arr, val) {
  if (val !== val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i]) {
        return true
      }
    }
    return false
  }
  return arr.indexOf(arr, val) !== -1
}
// console.log(includes([1, 2, NaN], NaN))

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
// elt('a', elt('b', 'foo', elt('c', 'bar')))

function t(parts) {
  let node = document.createElement('div')
  node.innerHTML = parts.join('')
  return node.firstElementChild
}
// t`
//   <a>
//     <b>
//       'foo'
//       <i>bar</i>
//     </b>
//   </a>
// `
//-------------------------------------------------------------------
/* var ancestry = [
  {
    name: 'foo',
    age: 18,
  }, {
    name: 'bar',
    age: 19,
  }
]

{
  'foo': {
    name: 'foo',
    age: 18,
  },
  'bar': {
    name: 'bar',
    age: 19,
  }
} */

function keyBy(ary, key) {
  let obj = {}
  for (let item of ary) {
    obj[item[key]] = item 
  }
  return obj
}

// var ary1 = [
//   {
//     name: 'foo',
//     age: 18,
//   }, {
//     name: 'bar',
//     age: 19,
//   }
// ]
// console.log(keyBy(ary1, 'name'))

// [{},{},{}] => {[{}],[{}],[{}]}
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
    if (key in map) {
      map[key].push(item)
    } else {
      map[key] = [item]
    }
  }
  return map
}
// 使用 reduce 实现 groupBy 函数
function groupBy(ary, propName) {
  return ary.reduce((map, item) => {
    if (item[propName] in map) {
      map[item[propName]].push(item)
    } else {
      map[item[propName]] = [item]
    }
    return map
  }, {})
}
// 简化
function groupBy(ary, propName) {
  return ary.reduce((map, item) => {
    let key = item[propName]
    key in map ? map[key].push(item) : map[key] = [item]
    return map
  })
}
var groupBy = (ary, propName) => ary.reduce((item, propName, key) => (key = item[propName]), key in map ? map[key].push(item) : map[key] = [item], {})
//-------------------------------------------------------------------
