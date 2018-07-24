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
console.log(selectSort([2,1,3,46,1,6,7]));
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