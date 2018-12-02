// 实现 Promise 

const PENDING = Symbol()
const FULLFILLED = Symbol()
const REJECTED = Symbol()

function Promisee(fn) {
  // fn 必须为一个函数
  if (typeof fn !== 'function') {
    throw new Error('fn must be a function.')
  }

  let state = PENDING
  let value = null
  let handle = {}
  
  // fullfilled function
  function fullfill(result) {
    state = FULLFILLED
    value = result
    next(handle)
  }

  // rejected function
  function reject(error) {
    state = REJECTED
    value = error
    next(handle)
  }

  // 完成时调用的方法，容错处理
  function resolve(result) {
    try {
      fullfill(result)
    } catch (error) {
      reject(error)
    }
  }

  function next({ onFullfill, onReject }) {
    switch (state) {
      case FULLFILLED: 
       onFullfill && onFullfill(value)
        break
      case REJECTED:
        onReject && onReject(value)
        break
      case PENDING:
        handle = { onFullfill, onReject }
    }
  }
  // then function
  this.then = function (onFullfill, onReject) {
    return new Promisee((resolve, reject) => {
      next({
        onFullfill: val => {
          resolve(onFullfill(val))
        },
        onReject: val => {
          reject(onReject(val))
        }
      })
    })
  }

  fn(resolve, reject)
}

let p = new Promise((resolve, reject) => {
  // resolve('resolve')
  setTimeout(() => {
    resolve('resolve')
  }, 0)
})

p.then(console.log, console.error)