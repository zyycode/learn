/**
 * @description
 * 冒泡排序
 * 优化：内层循环次数依次减少；若已排序好则直接返回
 * 
 * @param {Array} array
 * @returns
 */
function bubbleSort(array) {
  return array
}
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
// console.log(selectSort([2,1,3,46,1,6,7]));
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
function randomRange(n) {
  return new Array(n).fill(0).map(it => Math.random() * n | 0)
}
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
  let mid = array.length / 2 | 0
  let left = array.slice(0, mid)
  let right = array.slice(mid)

  
}