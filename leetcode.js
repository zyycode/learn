// * 326. Power of Three

function isPowerOfThree(n) {

}

// * 367. Valid Perfect Square

function isPerfectSquare() {

}

// * 136. Single Number

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