
// console.log(countPrimes(10))
// function countPrimes(n) {
//   let count = 0
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       count++
//     }
//   }
//   return count
// };
// function isPrime(x) {
//   for (let i = 2; i <= x / 2; i++) {
//     if (x % i !== 0) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// function digitWidth(x) {
//   var width = 0;
//   while (x != 0) {
//     var digit = x % 10
//     x = (x - digit) / 10
//     width++
//   }
//   return width
// }
// console.log(digitWidth(1234))

// function isCompleterNumber(x) {
//   let sum = 0
//   for (let i = 1; i <= x / 2; i++) {
//     if (x % i === 0) {
//       sum += i
//     }
//   }
//   if (x === sum) {
//     console.log(x + ' 是完全数')
//   } else {
//     console.log(x + ' 不是完全数')
//   }
// }
// isCompleterNumber(7)

/*
  * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
*/
var isUgly = function(num) {
  for (var i of [2, 3, 5]) {
    while (num && num % i === 0) {
      num /= i
    }
  }
  return num === 1
}
console.log(isUgly(14))

var nthUglyNumber = function(n) {
  var count = 0
  for (var i = 1; i <= n; i++) {
    for (var p of [2,3,5]) {
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

console.log(arr)
 