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
// console.log(addStrings('123', '123'))
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
// console.log(firstUniqChar('loveleetcode'))

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
// console.log(addBinary('11', '1'))

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
// console.log(lengthOfLastWord('hello world'))
// 回溯算法
/**
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 */
function restoreIpAddresses(s, parts = [], result = []) {
  if (parts.length === 3) {
    if (s <= 255) {
      parts.push(s)
      result.push(parts.join('.'))
      parts.pop()
    } else {
      return
    }
  }
  for (let i = 1; i <= 3 && i <= s.length; i++) {
    let part = s.slice(0, i) 
    if (part <= 255) {
      parts.push(part)
      restoreIpAddresses(s.slice(i), parts, result)
      parts.pop()
    }
  }
  return result
}
// console.log(restoreIpAddresses('25525511135'))
//-------------------------------------------------------------------
/**
 * @description
 * merge the second sorted array to first sorted array, and in order.
 * return the first array.
 * 
 * @example
 * Input: [1,3,5] [2,4,6]
 * Output: [1,2,3,4,5,6]
 * 
 * @param {Array} A The first sorted array.
 * @param {Array} B The second sorted array.
 * @returns {Array} Returns the A array.
 */
function merge2(A, B) {
  let i = A.length - 1
  let j = B.length - 1
  let k = (A.length + B.length) - 1
  while (i >= 0 && j >= 0) {
    if (A[i] > B[j]) {
      A[k--] = A[i--]
    } else {
      A[k--] = B[j--]
    }
  }
  while (j >= 0) {
    A[k--] = B[j--]
  }
  return A
}
// console.log(merge2([1,3,5], [2,4,6]))
//-------------------------------------------------------------------
// 160. Intersection of Two Linked Lists
// 解法一：获取两个链表的长度，将长度长的链表截取多余的部分，然后在进行比较
// time: O(n); space: O(1);
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) return null
  let lenA = len(headA)
  let lenB = len(headB)
  if (lenA < lenB) {
    while (lenA !== lenB) {
      headB = headB.next
      lenB--
    }
  } else {
    while (lenA !== lenB) {
      headA = headA.next
      lenA--
    }
  }
  while (headA !== headB) {
    headA = headA.next
    headB = headB.next
  }
  return headA
}
// 获取链表的长度
function len(head) {
  let len = 0
  while (head !== null) {
    head = head.next
  }
  return len
}
// 解法二：两次迭代。第一次迭代中，到达尾节点后将指针指向另一个节点的头部，依次移动两个指针，直到指向同一个节点
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) return null
  let a = headA
  let b = headB
  while (a !== b) {
    a = a === null ? headB : a.next
    b = b === null ? headA : b.next
  }
  return a
}
// ------------------------------------------------------------------
// 24. Swap Nodes in Pairs
/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 */
// 
function swapPairs(head) {
  let dummy = new ListNode(0)
  let prev = dummy
  prev.next = head
  while (prev !== null && prev.next.next !== null) {
    let first = prev.next
    let second = prev.next.next
    first.next = second.next
    prev.next = second
    second.next = first
    prev = first
  }
  return dummy.next
}
// *考虑进位
function addTwoNumbers(l1, l2) {
  if (l1 === null && l2 === null) return null
  let hummy = new ListNode(0)
  let cur = hummy
  let sum = 0
  let p1 = l1, p2 = l2
  while (p1 !== null || p2 !== null) {
    if (p1 !== null) {
      sum += p1.val
      p1 = p1.next
    }
    if (p2 !== null) {
      sum += p2.val
      p2 = p2.next
    }
    cur.next = new ListNode(sum % 10)
    sum = Math.floor(sum / 10)
    cur = cur.next
  }
  if (sum === 1) {
    cur.next = new ListNode(1)
  }
  return hummy.next
}
/** 
 * input: 1->2->3->4->5 n = 2
 * output: 1->2->3->5
 * 
 * dummy -> 1 -> 2 -> 3 -> 4 -> 5
 * fast               fast
 * slow               slow
*/
function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0)
  let slow = dummy
  let fast = dummy
  dummy.next = head
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}
// Reverse Linked List II
/**
 * given 1 -> 2 -> 3 -> 4 -> 5, m = 2, n = 4
 * return 1 -> 4 -> 3 -> 2 -> 1
 * 
 * dummy -> 1 -> 2 -> 3 -> 4 -> 5
 * prev
 *         cur
 */
function reverseBetween(head, m, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let cur = dummy.next
  for (let i = 1; i < m; i++) {
    cur = cur.next
    prev = prev.next
  }
  for (let i = 0; i < n - m; i++) {
    let tmp = cur.next
    cur.next = tmp.next
    tmp.next = prev.next
    prev.next = tmp
  }
  return dummy.next
}

function dominantIndex(nums) {
  let max = 0
  let secondMax = 0
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max
      max = nums[i]
      index = i
    } else if (nums[i] > secondMax) {
      secondMax = nums[i]
    }
  }
  return max >= 2 * secondMax ? index : -1
}
// ------------------------------------------------------------------
// Linked List Cycle II 单链表是否存在环，并找出环相交的第一个节点
function linkClycle(head) {
  let slow = head
  let fast = head

  while (true) {
    // 判断是否存在环
    if (fast === null || false.next === null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
    // 第一次交点
    if (slow === fast) break
  }
  // 将 slow 指向头结点
  slow = head
  // 找出环的第一个交点
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
// ------------------------------------------------------------------