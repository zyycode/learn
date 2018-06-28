// * Exercises chapter 2.1

var str = ''
for (var i = 0; i < 7; i++) {
  for (var j = 0; j < i + 1; j++) {
    str += '#'
  }
  str += '\n'
}
console.log(str)

// ! improved version
var str = ''
for (var i = 0; i < 7; i++) {
  str += '#'
  console.log(str)
}

var str = ''
var result = ''
for (var i = 0; i < 7; i++) {
  str += '#'
  result += (str + '\n')
}
console.log(result)

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
// 获取数字位数
var n = 0
var x = 153
while (x != 0) {
  x = x / 10 >> 0
  n++
}

var n = 0
var sum = 0
for (let i = 100; i < 100000; i++) {
  var n = 0
  var sum = 0
  var x = i
  var y = i
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
console.log((high + low) / 2);


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
