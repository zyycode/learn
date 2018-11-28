// 生成随机乱序数组
function rangeArray(n) {
  return new Array(n).fill(0).map(item => Math.random() * n | 0)
}
/**
 * * 冒泡排序
 * ? 比较相邻两个元素的大小，若第一个大于第二个则交换位置，这样最大的元素会排到最后面。
 * 优化：内层循环次数依次减少；若已排序好则直接返回
 * time: O(n^2)
 * 优化：
 * 1. 内层循环逐次减少
 * 2. 判断是比较的两个数值否交换位置，若没有则跳出当前循环
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let swaped = false
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swaped = true
      }
    }
    if (swaped === false) break
  }
  return arr;
}
/** 
 * * 选择排序
 * ? 找到数组中最小的值放到第一个位置，找到第二小的值放到第二位置，依此类推。
 * time: O(n^2)
*/
function selectionSort(arr) {
  let len = arr.length;
  let indexMin;
  for (let i = 0; i < len - 1; i++) {
    indexMin = i;
    for (let j = i; j < len; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
}
/** 
 * * 插入排序
 * ? 将未排序数组中的元素插入到已排序数组中的合适位置。
 */
function insertionSort(arr) {
  let len = arr.length;
  let temp;
  let j;
  for (let i = 1; i < len; i++) {
    temp = arr[i];
    j = i;
    // 选择需要插入的位置
    while (j > 0 && arr[j-1] > temp) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
function insertionSort2(arr) {
  let len = arr.length;
  let j, p, tmp
  for (p = 1; p < len; p++) {
    tmp = arr[p]
    for (j = p; j > 0 && arr[j - 1] > tmp; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = tmp
  }
  return arr
}
/** 
 * * 归并排序
 * ? 将原始数组切分称较小数组，直到每个小数组只有一个位置，接着合并成较大的数组，直到最后只有一个已经排序完的数组
 */
function mergeSort(arr) {
  let len = arr.length;
  if (len === 1) {
    return arr;
  }
  let min = Math.floor(len/2);
  let left = arr.slice(0, min);
  let right = arr.slice(min, len);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  let il = 0;
  let ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
}
/** 
 * * 快速排序
 * ? 选取一个基准，一般选中间值。将比基准小的值排到左边，比它大的值排到右边，排完之后对左右两边的子数组重复以上操作。
*/
function quickSort(arr, left, right) {
  let len = arr.length;
  let partitionIndex;
  left = typeof left !== 'number' ? 0 : left;
  right = typeof right !== 'number' ? len - 1 : right;
  if (left < right) {
    partitionIndex = parition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
function parition(arr, left, right) {
  let len = arr.length;
  let pivot = left;
  let index = left + 1;
  for (let i = index; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(quickSort([1,3,4,6,7,3,5,6,7]));
// -----------------------------------------------
function quickSort(arr, left, right) {
  let index;
  let len = arr.length;
  let l = typeof left !== 'number' ? 0 : left;
  let r = typeof right !== 'number' ? len - 1 : right;
  // if (arr.length > 1) {
  //   index = parition(arr, l, r);
  //   if (l < index-1) {
  //     quickSort(arr, l, index-1);
  //   }
  //   if (index < r) {
  //     quickSort(arr, index, r);
  //   }
  // }
  if (l < r) {
    index = parition(arr, l, r);
    quickSort(arr, 0, index-1);
    quickSort(arr, index, r);
  }
  return arr;
}

function parition(arr, left, right) {
  let pivot = arr[Math.floor((left + right)/2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}
/** 
 * * 堆排序
*/
