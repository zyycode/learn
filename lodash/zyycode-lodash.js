var zyycode = {
  /**
   * Creates an array of elements split into groups the length of size. 
   * If array can't be split evenly, the final chunk will be the remaining 
   * elements.
   *
   * @param {Array} array The array to process.
   * @param {number} size The length of each chunk.
   * @returns {Array} Returns the new array of chunks.
   */
  chunk: function(array, size) {
    size = size || 1
    let result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i))
    }
    return result
  },
  /**
   * Creates an array with all falsey values removed. 
   * The values false, null, 0, "", undefined, and NaN are falsey.
   *
   * @param {Array} array The array.
   * @returns {Array} Returns the new array of the filtered values.
   */
  compact: function(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }, 
  /**
   * Creates a new array concatenating array with any additional arrays 
   * and/or values.
   *
   * @param {Array} array The array to concatenate.
   * @param {...*} values The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   */
  concat: function(array, ...values) {
    let result = array.concat(...values)
    return result
  }
}
