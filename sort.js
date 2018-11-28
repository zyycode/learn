/**
 * @description
 * Create random array.
 * 生成随机数组
 * 
 * @param {number} n The number of array.
 * @returns {Array} Returns the disarray array.
 */{}
function rangeArray(n) {
  return new Array(n).fill(0).map(item => Math.random() * n | 0)
}
// ------------------------------------------------------------------
/**
 * @description
 * 冒泡排序
 * 优化：内层循环次数依次减少；若已排序好则直接返回
 * 
 * @param {Array} array
 * @returns
 */
function bubbleSort(array) {
  let len = array.length
  for (let i = 0; i < len - 1; i++) {
    let swaped = false
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swaped = true
      }
    }
    if (swaped === false) break
  }
  return array
}
// console.log(bubbleSort(rangeArray(10)))
function swap(array, i, j) {
  let temp = array[j]
  array[i] = array[j]
  array[j] = temp
}
// ------------------------------------------------------------------
/**
 * @description
 * 选择排序
 * 
 * @param {Array} array
 * @returns
 */
function selectSort(array) {
  let len = array.length
  let minIndex 
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}
// console.log(selectSort([2,1,3,4,6,1,6,7]));
// ------------------------------------------------------------------
/**
 * @description
 * 插入排序
 * 
 * @param {Array} array
 * @returns
 */
function insertSort(array) {
  return array
}

// time: n * log(n); space: log(n)

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}
function partition(array) {
  let pivotIndex = array.length * Math.random() | 0
  let pivot = array[pivotIndex]

  let i = -1

  swap(array, pivotIndex, array.length - 1)
  for (let i = -1, j = 0; j < array.length; j++) {
    if (array[j] <= pivot) {
      i++
      swap(array, i, j)
    } 
  }
  console.log(pivot)
  return array
}
// console.log(partition(randomRange(10)));
// console.log(randomRange(10))

function  mergeSort(array) {
  
}


function inOrderTraverse(root, action = console.log) {
  if (root) {
    inOrderTraverse(root.left)
    action(root.val)
    inOrderTraverse(root.right)
  }
}
// ------------------------------------------------------------------
// quick sort algorithm
function partition(array, left = 0, right = array.length - 1) {
  // 递归结束条件
  if (left >= right) return

  let pivotIndex =  Math.floor(Math.random() * (right - left + 1) + left)
  let pivot = array[pivotIndex]
  let i, j
  // 将基准值与最后一个值进行交换
  swap(array, pivotIndex, right)
  for (i = left - 1, j = left; j <= right; j++) {
    if (array[j] <= pivot) {
      i++
      swap(array, i, j)
    }
  }
  partition(array, left, i - 1)
  partition(array, i + 1, right)
  return array
}
// ---------------------------------
function quickSort(array) {
  if (array.length <= 1) {
    return [...array]
  }
  let pivot = Math.floor(Math.random() * array.length)
  let left = []
  let right = []
  let middle = []
  for (let val of array) {
    if (val < array[pivot]) {
      left.push(val)
    } else if (val > array[pivot]) {
      right.push(val)
    } else {
      middle.push(val)
    }
  }
  return quickSort(left).concat(middle, quickSort(right))
}
console.log(quickSort(rangeArray(10)))

// ------------------------------------------
function quickSort(arr, left, right) {
  let len = arr.length;
  let partitionIndex;
  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? len - 1 : right;
  if (left <= right) {
    partitionIndex = parition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
function parition(arr, left, right) {
  let pivotIndex = Math.floor(Math.random() * (right - left + 1) + left)
  let pivot = arr[pivotIndex]
  let index = left - 1
  swap(arr, pivotIndex, right)
  for (let i = left; i <= right; i++) {
    if (arr[i] <= pivot) {
      index++
      swap(arr, i, index)
    }
  }
  return index
}

// ------------------------------------------------------------------
function partition(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return
  let pivotIndex = Math.floor(Math.random() * (right - left + 1) + left)
  let pivot = arr[pivotIndex]
  swap(arr, pivotIndex, right)
  let index = left - 1
  for (let i = left; i <= right; i++) {
    if (arr[i] <= pivot) {
      index++
      swap(arr, i, index)
    }
  }
  partition(arr, left, index - 1)
  partition(arr, left + 1, right)
  return arr
}
// console.log(partition(rangeArray(10)))