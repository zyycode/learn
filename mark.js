// curry 的实现
function curry(fn, args = []) {
  let length = fn.length
  
  return function(...arg) {
    let _args = args.slice(0)
    _args = [..._args, ...arg]

    // for (let i = 0; i < arguments.length; i++) {
    //   _args.push(arguments[i])
    // }
    if (_args.length < length) {
      return curry.call(this, fn, _args)
    } else {
      return fn.apply(this, _args)
    }
  }
}
// ----------------调用----------------------
var add = curry(function (a, b, c) {
  return a + b + c
})
console.log(add(1, 2, 3))
console.log(add(1, 2)(3))
console.log(add(1)(2, 3))
console.log(add(1)(2)(3))
// ----------------------------------------------------------------------------
// call 的模拟实现
/**
 * call 方法在使用一个 this 值和若干个指定的参数值的前提先调用某个函数或方法。
 * - call 改变 this 指向
 * - 函数执行
 * - 传递参数
 * - 第一个参数为 null 时，指向的是 window；函数是可以有返回值的。
 */
Function.prototype.call2 = function(context) {
  // 传入的第一个参数为 null 时，指向 window
  context = context || window
  context.fn = this
  let args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  let result = eval('context.fn(' + args +')')
  delete context.fn
  return result
}
// 优化实现
Funtion.prototype.call3 = function(context) {
  context = context || window
  context.fn = this
  let args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}
//--------------调用------------------
var value = 1
var foo = {
  value: 2
}
function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name: name,
    age: age
  }
}
// bar.call2(null)
bar.call2(foo, 'kevin', 11)

// ----------------------------------------------------------------------------
// apply 的模拟实现
Function.prototype.apply2 = function(context, arr) {
  context = context || window
  let result
  if (!arr) {
    result = context.fn()
  } else {
    let args = []
    for (let i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}
// 优化实现
Function.prototype.apply2 = function(context) {
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
// ----------------------------------------------------------------------------
// bind 模拟实现
/**
 * bind 方法会创建一个函数。当新函数被调用时，bind 函数的第一个参数作为它运行时的
 * this，之后的一系列参数会在传递参数前作为它的参数。
 * - 返回一个参数
 * - 可以传入参数
 * - 构造函数效果的模拟实现
 *   提供的 this 会被忽略，同时调用时的参数被提供模拟函数(this 失效，但参数依然有效)
 */
Function.prototype.bind2 = function(context) {
  let _this = this
  let args = [].slice.call(arguments, 1)
  let fBound =  function() {
    let bindArgs = [].slice.call(arguments)
    // new.target 也可以判断是否用 new 调用
    return _this.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
  }
  // 修改 fBound.prototype 也会直接修改绑定函数的 prototype
  // let fNOP = function() {}
  // fNOP.prototype = this.prototype
  // fBound.prototype = new fNOP
  fBound.prototype = this.prototype
  return fBound
}
// 优化实现
Function.prototype.bind3 = function(context) {
  let _this = this
  let args = [...arguments].slice(1)
  return function fBound() {
    if (this instanceof fBound) {
      // return _this.apply(this, args.concat(...arguments))
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
// 优化
Function.prototype.bind4 = function(context) {
  let _this = this
  let args = [...arguments].slice(1)
  return function fBound() {
    return _this.apply(this instanceof fBound ? this : context, args.concat(...arguments))
  }
}
// ----------------------------------------------------------------------------
// Object.keys() 的模拟实现
// Object.keys() 返回一个给定对象的自身可枚举属性组成的数组。
Object.prototype.keys2 = function(obj) {
  let result = []
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(key)
    }
  }
  return result
}
// ----------------------------------------------------------------------------
// throttle 节流的实现
// https://zhuanlan.zhihu.com/p/26054718
function throttle(fn, wait, options) {
  var context, args, result

  // setTimeout 的 handler
  var timeout = null

  // 标记时间戳
  // 上一次执行回调的时间戳
  var previous = 0

  // 如果没有传入 options 参数
  // 则将 options 参数置为空对象
  if (!options)
    options = {}

  var later = function () {
    // 如果 options.leading === false
    // 则每次触发回调后将 previous 置为 0
    // 否则置为当前时间戳
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = fn.apply(context, args)
    // 这里的 timeout 变量一定是 null 了吧
    // 是否没有必要进行判断？
    if (!timeout)
      context = args = null
  };

  // 以滚轮事件为例（scroll）
  // 每次触发滚轮事件即执行这个返回的方法
  // _.throttle 方法返回的函数
  return function () {
    // 记录当前时间戳
    var now = Date.now()

    // 第一次执行回调（此时 previous 为 0，之后 previous 值为上一次时间戳）
    // 并且如果程序设定第一个回调不是立即执行的（options.leading === false）
    // 则将 previous 值（表示上次执行的时间戳）设为 now 的时间戳（第一次触发时）
    // 表示刚执行过，这次就不用执行了
    if (!previous && options.leading === false)
      previous = now

    // 距离下次触发 fn 还需要等待的时间
    var remaining = wait - (now - previous)
    context = this
    args = arguments

    // 要么是到了间隔时间了，随即触发方法（remaining <= 0）
    // 要么是没有传入 {leading: false}，且第一次触发回调，即立即触发
    // 此时 previous 为 0，wait - (now - previous) 也满足 <= 0
    // 之后便会把 previous 值迅速置为 now
    // ========= //
    // remaining > wait，表示客户端系统时间被调整过
    // 则马上执行 fn 函数
    // @see https://blog.coding.net/blog/the-difference-between-throttle-and-debounce-in-underscorejs
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        // 解除引用，防止内存泄露
        timeout = null
      }

      // 重置前一次触发的时间戳
      previous = now

      // 触发方法
      // result 为该方法返回值
      result = fn.apply(context, args)
      // 引用置为空，防止内存泄露
      // 感觉这里的 timeout 肯定是 null 啊？这个 if 判断没必要吧？循环递归
      if (!timeout)
        context = args = null
    } else if (!timeout && options.trailing !== false) { // 最后一次需要触发的情况
      // 如果已经存在一个定时器，则不会进入该 if 分支
      // 如果 {trailing: false}，即最后一次不需要触发了，也不会进入这个分支
      // 间隔 remaining milliseconds 后触发 later 方法
      timeout = setTimeout(later, remaining)
    }

    // 回调返回值
    return result
  }
}
// ----------------------------------------------------------------------------
// debounce 防抖的实现
function debounce(fn, wait, immediate) {
  let timeout, args, context, timestamp, result

  let later = function () {
    // 定时器设置的回调 later 方法的触发时间，和连续事件触发的最后一次时间戳的间隔
    // 如果间隔为 wait（或者刚好大于 wait），则触发事件
    let last = Date.now() - timestamp

    // 时间间隔 last 在 [0, wait) 中
    // 还没到触发的点，则继续设置定时器
    // last 值应该不会小于 0 吧？
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      // 到了可以触发的时间点
      timeout = null
      // 可以触发了
      // 并且不是设置为立即触发的
      // 因为如果是立即触发（callNow），也会进入这个回调中
      // 主要是为了将 timeout 值置为空，使之不影响下次连续事件的触发
      // 如果不是立即执行，随即执行 fn 方法
      if (!immediate) {
        // 执行 fn 函数
        result = fn.apply(context, args)
        // 这里的 timeout 一定是 null 了吧
        // 感觉这个判断多余了
        if (!timeout)
          context = args = null
      }
    }
  }

  // 嗯，闭包返回的函数，是可以传入参数的
  // 也是 DOM 事件所触发的回调函数
  return function () {
    // 可以指定 this 指向
    context = this
    args = arguments

    // 每次触发函数，更新时间戳
    // later 方法中取 last 值时用到该变量
    // 判断距离上次触发事件是否已经过了 wait seconds 了
    // 即我们需要距离最后一次事件触发 wait seconds 后触发这个回调方法
    timestamp = Date.now()

    // 立即触发需要满足两个条件
    // immediate 参数为 true，并且 timeout 还没设置
    // immediate 参数为 true 是显而易见的
    // 如果去掉 !timeout 的条件，就会一直触发，而不是触发一次
    // 因为第一次触发后已经设置了 timeout，所以根据 timeout 是否为空可以判断是否是首次触发
    let callNow = immediate && !timeout

    // 设置 wait seconds 后触发 later 方法
    // 无论是否 callNow（如果是 callNow，也进入 later 方法，去 later 方法中判断是否执行相应回调函数）
    // 在某一段的连续触发中，只会在第一次触发时进入这个 if 分支中
    if (!timeout)
      // 设置了 timeout，所以以后不会进入这个 if 分支了
      timeout = setTimeout(later, wait)

    // 如果是立即触发
    if (callNow) {
      // fn 可能是有返回值的
      result = fn.apply(context, args)
      // 解除引用
      context = args = null
    }
    return result
  }
}
// 容易理解
function debounce(fn, wait, immediate) {
  let timeout, context, args, result
  return function() {
    context = this
    args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) result = fn.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        fn.apply(context, args)
      })
    }
    // 问题： 如果 immediate 为 false result 的返回值一直是 undefined ？
    return result
  }
}
// ------------------------------------------------------------------
// filter 实现
function filter(array, action) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (action(array[i])) {
      result.push(array[i])
    }
  }
  return result
}
// ------------------------------------------------------------------
// map 实现
function map(array, action) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(action(array[i]))
  }
  return result
}
// ------------------------------------------------------------------
// reduce 实现
function reduce(array, reducer, initVal) {
  let i = 0
  if (arguments.length === 2) {
    initVal = array[0]
    i = 1
  }
  for (; i < array.length; i++) {
    initVal = reducer(initVal, array[i])
  }
  return initVal
}
// ------------------------------------------------------------------
// 深拷贝的实现
/** 
 * 递归爆栈
 *    消除尾递归
 *    不用递归使用循环 
 * 循环引用
 */
// ------------------------------------------------------------------
// memoize 的实现
function memoize(fn) {
  let cache = {}
  return function() {
    let key = JSON.stringify(arguments)
    let value = cache[key]
    if (!value) {
      value = [fn.apply(this, arguments)]
      cache[key] = value
    }
    return value[0]
  }
}