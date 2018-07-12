/**
 * 415. Add Strings (大数相加)
 * 选择每一位上的字符相加，考虑进位，通过相加后的数除10 余10 可得个位和进位
 */
function addStrings(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let res = ''
  while (i >= 0 || j >= 0 || carry) {
    let sum = 0
    if (i >= 0) {
      sum += (num1[i] - 0)
      i--
    }
    if (j >= 0) {
      sum += (num2[j] - 0)
      j--
    }
    sum += carry
    carry = Math.floor(sum / 10)
    sum = sum % 10
    res += sum.toString() 
  }
  return res.split('').reverse().join('')
}
console.log(addStrings('123', '123'));
/**
 * 387. First Unique Character in a String
 */
// 1st step: Getting a count of all characters in string.
// 2st step: compare input character to our key/value pairs. 
function firstUniqChar(s) {
  // 1st step
  var map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i],2)
    } else {
      map.set(s[i],1)
    }
  }
  // 2st step
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i
    }
  }
  return -1
}
console.log(firstUniqChar('loveleetcode'))
function firstUniqChar(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}

/**
 * ! 5. Longest Palindromic Substring 回文子串
 * 1>  
 */


// 326. Power of Three

function isPowerOfThree(n) {

}

// 367. Valid Perfect Square

function isPerfectSquare() {

}

// 136. Single Number

function sigleNumber(nums) {
  var res = 0
  for (var i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}

function sigleNumber2(nums) {
  nums.sort()
  for (var i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return num[i]
    }
  }
}

// hangmingDistance

function hangmingDistance(x, y) {
  var digit1
  var digit2
  var count = 0
  do {
    digit1 = x % 2
    digit2 = y % 2
    count += digit1 === digit2 ? 0 : 1
    x = (x - digit1) / 2
    y = (y - digit2) / 2
  } while (x > 0 || y > 0)
  return count
}
// console.log(hangmingDistance2(1, 4))

function hangmingDistance2(x, y) {
  var count = 0
  var z = x ^ y
  while (z) {
    if (z & 1) count++
    z = z >> 1
  }
  return count
}

// add binary

function addBinary(a, b) {
  var str = ''
  var i = a.length - 1
  var j = b.length - 1
  var reminder = 0
  while (i >= 0 || j >= 0) {
    var sum = reminder
    if (i >= 0) sum += parseInt(a[i])
    if (j >= 0) sum += parseInt(b[j])
    str += (sum % 2)
    reminder = (sum / 2) | 0
    i--
    j--
  }
  if (reminder !== 0) {
    str += reminder
  }
  return str.split('').reverse().join('')
}
console.log(addBinary('11', '1'))

// 58. Length of Last Word

function lengthOfLastWord(s) {
  if (s === null || s.length === 0) return 0
  var count = 0
  for (var i = s.length - 1; i > 0; i--) {
    if (s[i] === ' ') {
      if (count === 0) {
        continue
      } else {
        return count
      }
    }
    count++
  }
  return count
}
console.log(lengthOfLastWord('hello world'))