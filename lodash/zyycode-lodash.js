var zyycode = {
  chunk: function(array, size) {
    size = size || 1
    let result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i))
    }
    return result
  },
  compact: function(array) {
    for (let i = 0; i < array.length; i++) {
      if (!array[i]) {
        array.splice(i, 1)
      }
    }
    return array
  },
  concat: function(array, ...values) {
    let result = array.concat(...values)
    return result
  }
}
console.log(zyycode.concat([1], 2, [3], [[4]]))