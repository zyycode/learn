/*
 * 素数
*/
var primeLists = []

function isPrime(n) {
  var sn = Math.sqrt(n)
  for (var i = 0; primeLists[i] <= sn; i++) {
    if (n % primeLists[i] === 0) {
      return false
    }
  }
  return true
}

function countPrimes(n) {
  var count = 1
  for (var i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      primeLists.push(i)
      count++
    }
  }
  return count
}
console.log(countPrimes(10000))