var zyycode = {
  /**
   * @description
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
   * @description
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
   * @description
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
  },
  /**
   * @description
   * Creates an array of array values not included in the other given arrays.
   * The order and references of result values are determined by the first array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} values The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   */
  difference: function(array, ...values) {
    let rest = [].concat(...values)
    return array.filter(item => !rest.includes(item))
  },
  /**
   * @description
   * create a slice of array with n elements droppen from the beaginning.
   *
   * @param {Array} array The array to query.
   * @param {number} [n = 1] The number of elements to drop.
   * @returns {Array} Returns the slice of array.
   */
  drop: function(array, n = 1) {
    return array.slice(n) 
  },
  /**
   * @description
   * create a slice of array with n elements droppen from the end.
   *
   * @param {Array} array The array to query.
   * @param {number} [n = 1] The number of elements to drop.
   * @returns {Array} Returns the slice of array.
   */
  dropRight: function(array, n = 1) {
    if (n === 0) return array
    array.splice(-n)
    return array
  },
   /**
   * @description
   * Fills elements of array with value from start up to, but not including end.
   * 
   * @param {Array} array The array to fill.
   * @param {*} value The value to array with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns array.
   */
  fill: function(array, value, start = 0, end = array.length) {
    return array.fill(value, start, end)
  },
  /**
   * @description
   * Flattens array a single level deep.
   *
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   */
  flatten: function(array) {
    return [].concat.apply([], array)
    // ES6 ...
    // return [].concat(...array)
    // use reduce()
    // let newArray = array.reduce((prev, curr) => {
    //   return prev.concat(curr)
    // })
    // return newArray()
  },
  flattenDeep: function(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let tmp = this.flattenDeep(array[i])
        res = [...res, ...tmp]
      } else {
        res.push(array[i])
      }
    }
    return res
  },
  flattenDepth: function(array, depth = 1) {
    if (depth === 0) {
      return [...array]
    }
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let tmp = this.flattenDepth(array[i], depth - 1)
        res = [...res, ...tmp]
      } else {
        res.push(array[i])
      }
    }
    return res
  },
  /**
   * @description
   * Get the first element of array.
   * 
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of array.
   */
  head: function(array) {
    return array.shift(0)
  },
  /**
   * @description
   * Gets the index at which the first occurrence of value is found in array. 
   * If fromIndex is negative, it's used as the offset from the end of array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] THe index to search from.
   * @returns {number} Return the index of the matched value, else -1
   */
  indexOf: function(array, value, fromIndex = 0) {
    return array.indexOf(value, fromIndex)
  },
  /**
   * @description
   * Converts all elements in array into a string separated by separator.
   * 
   * @param {Array} array The array to convert.
   * @param {string} [separatpor=','] The element separator.
   * @returns {string} Returns the joined string.
   */
  join: function(array, separatpor = ',') {
    return array.join(separatpor)
  },
  /**
   * @description
   * Get the last element of array.
   * 
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of array.
   */
  last: function(array) {
    return array.pop()
  },
  /**
   * @description
   * This method is like _.indexOf except that it iterates 
   * over elements of array from right to left.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {*} [fromIndex=array.length - 1] The index to search from.
   * @returns {number} Returns the index of the matched value, else -1.
   */
  lastIndexOf: function(array, value, fromIndex = array.length - 1) {
    return array.lastIndexOf(value, fromIndex)
  },
  /**
   * @description
   * Gets the element at index n of array. 
   * If n is negative, the nth element from the end is returned.
   * 
   * @param {Array} array The array to query.
   * @param {number} [n=0] The index of the element to return.
   * @returns {*} Returns the nth element of array.
   */
  nth: function(array, n = 0) {
    if (n < 0) {
      n = n + array.length
    }
    return array[n]
  },
  /**
   * @description
   * Removes all givens values from array.
   * 
   * @param {Array} array The array to modify.
   * @param {*} values The values to remove.
   * @returns {Array} Retruns array.
   */
  pull: function(array, ...values) {
    let restArray = [...values]
    return array.filter(item => !restArray.includes(item))
  },
  /**
   * @description
   * This method is like _.pull except that it accepts an array of values to remove.
   * 
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @returns {Array} Returns array.
   */
  pullAll: function(array, values) {
    return array.filter(item => !values.includes(item))
  },
  /**
   * @description
   * Reverses array so that the first element becomes the last, 
   * the second element becomes the second to last, and so on.
   * 
   * @param {Array} array The array to modify.
   * @returns {Array} Returns array.
   */
  reverse: function(array) {
    return array.reverse()
  },
  /**
   * @description
   * Computes the sum in array.
   *
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the sum.
   */
  sum: function(array) {
    if (!array) return 0
    return this.sumBy(array, it => it)
  },
  /**
   * @description
   * This method is like _.sum except that it accepts iteratee 
   * which is invoked for each element in array to generate the value to be summed. 
   * The iteratee is invoked with one argument: (value).
   *
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The iteratee invoked per element.
   * @returns {number} Returns sum.
   */
  sumBy: function(array, iteratee) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += iteratee(array[i])
    }
    return sum
  },
  /**
   * @description
   * Creates a slice of array from start up to, but not including, end.
   * 
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of array.
   */
  slice: function(array, start = 0, end = array.length) {
    return array.slice(start, end)
  },
  /**
   * @description
   * Uses a binary search to determine the lowest index at which value
   * should be inserted into array in order to maintain its sort order.
   * 
   * @param {Array} array The sorted array to inspect.
   * @param {number} value The value to evaluate.
   * @returns {number} Returns the index at which value should be inserted into array.
   */
  sortedIndex: function(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (value <= array[i]) {
        return i
      }
    }
    return array.length
  },
  /**
   * @description
   * This method is like _.indexOf except that it performs 
   * a binary search on a sorted array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else -1.
   */
  sortedIndexOf: function(array, value) {
    return array.indexOf(value)
  },
  /**
   * @description
   * This method is like _.sortedIndex except that it 
   * returns the highest index at which value should be inserted into
   * array in order to maintain its sort order.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index at which value should be inserted into array.
   */
  sortedLastIndex: function(array, value) {
    return array.lastIndexOf(value) + 1
  },
  /**
   * @description
   * This method is like _.lastIndexOf except that 
   * it performs a binary search on a sorted array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else -1.
   */
  sortedLastIndexOf: function(array, value) {
    return array.lastIndexOf(value)
  },
  /**
   * @description
   * Gets all but the last element of array.
   * 
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of array.
   */
  initial: function(array) {
    return array.slice(0, array.length - 1)
  },
  /**
   * @description
   * Gets all but the first element of array.
   * 
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of array.
   */
  tail: function(array) {
    return array.slice(1)
  },
  /**
   * @description
   * Creates a slice of array with n elements taken from the beginning.
   * 
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @returns {Array} Returns the slice of array.
   */
  take: function(array, n = 1) {
    return array.slice(0, n)
  },
  /**
   * @description
   * Creates a slice of array with n elements taken from the end.
   * 
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to take.
   * @returns {Array} Returns the slice of array.
   */
  takeRight: function(array, n = 1) {
    if (n === 0) return []
    return array.slice(-n)
  },
  /**
   * @description
   * Creates a function that accepts up to one argument, ignoring any additional arguments.
   * 
   * @param {Function} func The function to cap arguments for.
   * @param  {Function} Returns the new capped function.
   */
  unary: function(func) {
    return function(val) {
      return func(val)
    }
  },
  /**
   * @description
   * Creates a function that negates the result of the predicate func. 
   * The func predicate is invoked with the this binding and arguments of the created function.
   * 
   * @example
   * function isMale(p) {return p.gender === 1}
   * 
   * function isFemale(p) {return p.gender !== 1} 
   * equals:
   * isFemale = negate(isMale(p))
   * 
   * @param {Function} predicate The predicate to negate.
   * @returns {Function} Returns the new negated function.
   */
  negate: function(predicate) {
    return function(...args) {
      return ! predicate(...args)
    }
  },
  /**
   * @description
   * Creates an array of numbers (positive and/or negative) progressing from start up to.
   * 
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment of decrement by.
   * @returns {Array} Returns the range of numbers.
   */
  range: function(start = 0, end, step = 1) {
    let result = []
    
    if (arguments.length === 1) {
      end = start
      start = 0
    }
    if (step === 0) return new Array(Math.abs(end) - start).fill(1)
    if (!step) step = end < start ? -1 : 1
    if (end < 0) step = step < 0 ? step : -step
    let length = Math.max(Math.ceil((end - start) / step), 0)

    for (let i = 0; i < length; i++, start += step) {
      result.push(start)
    }
    return result
  },
  /**
   * @description
   * Performs a deep comparsion between two values to determine if they are equivalent.
   * 
   * @param {*} value The value to compare.
   * @param {*} other The other to compare.
   * @returns {boolean} Returns true if two values are equivalent, else false.
   */
  isEqual: function(value, other) {
    if (value === other) return true
    // judge `NaN`
    if (value !== value && other !== other) return true
    // judge `Array`
    if (Array.isArray(value) && Array.isArray(other)) {
      let maxLen = Math.max(value.length, other.length)
      for (let i = 0; i < maxLen; i++) {
        if (! this.isEqual(value[i], other[i])) return false
      }
      return true
    }
    // judge `Object`
    if (this.isObject(value) && this.isObject(other) && !(Array.isArray(value) || Array.isArray(other))) {
      let propKeys = Object.keys(value).concat(Object.keys(other))
      propKeys = [...new Set(propKeys)]
      for (let p of propKeys) {
        if (! this.isEqual(value[p], other[p])) return false
      }
      return true
    }
    return value === other
  },
  /**
   * @description
   * This method is based on Number.isNaN and is not the same as 
   * global isNaN which returns true for undefined and other non-number values.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is NaN, else false.
   */
  isNaN: function(value) {
    // return Number.isNaN(Number(value)) && value !== undefined
    return Object.prototype.toString.call(value) === '[object Number]' && isNaN(value)
  },
  /**
   * @description
   * Checks if value is classified as a boolean primitive or object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is boolean, else false.
   */
  isBooelean: function(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  },

  // isNative: function(value) {
  //   return Function.prototype.toString.call(value).indexOf('[native code]') === -1 ? false : true
  // },
  /**
   * @description
   * Checks if value is null or undefined.
   * 
   * @param {*} value  The value to check.
   * @returns {boolean} Returns true if value is nullish, else false.
   */
  isNil: function(value) {
    return value == null
  },
  /**
   * @description
   * Checks if value is null.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is null, else false.
   */
  isNull: function(value) {
    return value === null
  },
  /**
   * @description
   * Checks if value is classified as a Number primitive or object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is a number, else false.
   */
  isNumber: function(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]'
  },
  /**
   * @description
   * Checks if value is the language type of Object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is an object, else false.
   */
  isObject: function(value) {
    let type = typeof value
    return value !== null && (type === 'object' || type === 'function')
  },
  /**
   * @description
   * Checks if value is object-like. 
   * A value is object-like if it's not null and has a typeof result of "object".
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value if object-like, or else.
   */
  isObjectLike: function(value) {
    return value !== null && typeof value === 'object'
  },
  /**
   * @description
   * Checks if value is classified as a Set object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is a set, else false.
   */
  isSet: function(value) {
    return Object.prototype.toString.call(value) === '[object Set]'
  },
  /**
   * @description
   * Checks if value is classified as a String primitive or object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if the value is string, else false.
   */
  isString: function(value) {
    return Object.prototype.toString.call(value) === '[object String]'
  },
  /**
   * @description
   * Checks if value is classified as a Symbol primitive or object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is a symbol, else false.
   */
  isSymbol: function(value) {
    return Object.prototype.toString.call(value) === '[object Symbol]'
  },
  /**
   * @description
   * Gets the size of collection by returning its length for array-like values or 
   * the number of own enumerable string keyed properties for objects.
   * 
   * @param {*} collection The collection to inspect.
   * @returns {number} Returns collection size.
   */
  size: function(collection) {
    if (typeof collection === 'string' || Array.isArray(collection)) return collection.length
    if (typeof collection === 'object') return Object.keys(collection).length
  },
  /**
   * @description
   * Checks if value is greater than other.
   * 
   * @param {*} value The value to compare.
   * @param {*} other The other to compare.
   * @returns {boolean} Returns true if value greater than other, else false.
   */
  gt: function(value, other) {
    if ((Array.isArray(value) && value.length > 1) 
        || (Array.isArray(value) && value.length > 1)) return false
    return value > other
  },
  /**
   * @description
   * Checks if value is greater than or equal to other.
   * 
   * @param {*} value The value to compare.
   * @param {*} other The other to compare.
   * @returns {boolean} Returns true if value greater than or equal to other, else false.
   */
  gte: function(value, other) {
    if ((Array.isArray(value) && value.length > 1) 
        || (Array.isArray(value) && value.length > 1)) return false
    return value >= other
  },
  /**
   * @description
   * Checks if value is likely an arguments object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is arguments object, else false.
   */
  isArguments: function(value) {
    return Object.prototype.toString.call(value) === '[object Arguments]'
  },
  /**
   * @description
   * Checks if value is classified as an Array object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is an Array, else false.
   */
  isArray: function(value) {
    return Array.isArray(value)
  },
  /**
   * @description
   * Checks if value is array-like.
   * 
   * @param {*} value The value to check.
   * @returns {boolean}  Returns true if value is array-like, else false.
   */
  isArrayLike: function(value) {
    if (value.length === undefined) return false
    return (value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER)
  },
  /**
   * @description
   * Checks if value is classified as a boolean primitive or object.
   * 
   * @param {*} value The value to check.
   * @returns {boolean} Returns true if value is a boolean, else false.
   */
  isBoolean: function(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  },
  /**
   * @description
   * Add two numbers.
   * 
   * @param {number} augend The first number in an addition.
   * @param {number} addend The second number in an addition.
   * @returns {number} Returns the total.
   */
  add: function(augend, addend) {
    return augend + addend
  },
  /**
   * @description
   * Computes number rounded up to precision.
   * 
   * @param {number} number The number to round up.
   * @param {number} [precision=0] The precision to round up.
   * @returns {number} Returns the rounded up number.
   */
  ceil: function(number, precision = 0) {
    return Math.ceil(number * Math.pow(10, precision)) / Math.pow(10, precision)
  },
  /**
   * @description
   * Divide two numbers.
   * 
   * @param {number} dividend The first number in a division.
   * @param {number} divisor The second number in a division.
   * @returns {number} Returns the quotient.
   */
  divide: function(dividend, divisor) {
    return dividend / divisor
  },
  /**
   * @description
   * Computes number rounded down to precision.
   * 
   * @param {number} number The number to round down.
   * @param {number} [precision=0] The precision to round down to.
   * @returns {number} Returns the rounded down number.
   */
  floor: function(number, precision = 0) {
    return Math.floor(number * Math.pow(10, precision)) / Math.pow(10, precision)
  },
  /**
   * @description
   * Computed the maximum value of array. If array is empty of falsey, undefined returned.
   * #abb2bf #82AAFF
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   */
  max: function(array) {
    if (!array || array.length === 0) return undefined
    return Math.max(...array)
  },
  /**
   * @description
   * Computes the mean of values in array.
   * 
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the mean.
   */
  mean: function(array) {
    return array.reduce((a, b) => a + b) / array.length

    // return this.sum(array) / array.length

    // let len = array.length
    // let sum = 0
    // for (let i = 0; i < len; i++) {
    //   sum += array[i]
    // }
    // return sum / len
  },
  /**
   * @description
   * Computes the minimum value of array. If array is empty or falsey, undefined is returned.
   * 
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   */
  min: function(array) {
    if (!array || array.length === 0) return undefined
    return Math.min(...array)
  },
  /**
   * @description
   * Multiply two numbers.
   * 
   * @param {number} multiplier The first number in a multiplication.
   * @param {number} multiplicand The second number in a multiplication.
   * @returns {number} Returns the product.
   */
  multiply: function(multiplier, multiplicand) {
    return multiplier * multiplicand
  },
  /**
   * @description
   * Computes number rounded to precision.
   * 
   * @param {number} number The number to round.
   * @param {number} [precision=0] The precision to round to.
   * @returns {number} Returns the rounded number.
   */
  round: function(number, precision = 0) {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision)
  },
  /**
   * @description
   * Creates an array of unique values, in order, from given arrays.
   * 
   * @param {Array} arrays The array to inspect.
   * @returns {Array} Returns the new array of combined values.
   */
  union: function(...arrays) {
    let res = [].concat(this.flatten(arrays))
    return [...new Set(res)]
  },
  // ! TODO
  unionBy: function(arrays, iteratee) {
    
  },
  /**
   * @description
   * Converts values to array.
   * 
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   */
  toArray: function(value) {
    let res = []
    for (let i in value) {
      res.push(value[i])
    }
    return res
  },
  /**
   * @description
   * Repeats the string n times.
   * 
   * @param {string} [string=''] The string to repeat.
   * @param {number} [n=1] The number of times to repeat string.
   * @returns {string} Returns the repeated string.
   */
  repeat: function(string = '', n = 1) {
    let res = ''
    for (let i = 0; i < n; i++) {
      res += string
    }
    return res
  },
  /**
   * @description
   * Replaces matches for pattern in string with replacement.
   * 
   * @param {string} [string=''] The string to modify.
   * @param {RegExp|string} pattern The pattern to replace.
   * @param {Function|string} replacement The match replacement.
   * @returns {string} Returns the modified string.
   */
  replace: function(string = '', pattern, replacement) {
    return string.replace(pattern, replacement)
  },
  /**
   * @description
   * Splits string by separator.
   * 
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separetor The separator pattern to split by.
   * @param {number} limit The length to truncate results to.
   * @returns {Array} Returns the string segments.
   */
  split: function(string = '', separetor, limit) {
    return string.split(separetor, limit)
  },
  /**
   * @description
   * Converts string, as a whole, to lower case just like String#toLowerCase.
   * 
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the lower cased string.
   */ 
  toLower: function(string = '') {
    return string.toLowerCase()
  },
  /**
   * @description
   * Converts string, as a whole, to upper case just like String#toUpperCase.
   * 
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the upper cased string.
   */
  toUpper: function(string = '') {
    return string.toUpperCase()
  },
  /**
   * @description
   * @param {Array|Object} ary The collection to iterate over.
   * @param {Function} iteratee The iteratee to transform keys.
   * @returns {Object} Returns the composed aggregate object.
   */
  groupBy: function(ary, iteratee) {
    let map = {}
    for (let item of ary) {
      let key
      if (typeof iteratee === 'string') {
        key = item[iteratee]
      } else {
        key = iteratee(item)
      }

      if (key in map) {
        map[key].push(item)
      } else {
        map[key] = [item]
      }
    }
    return map
  },
  /**
   * @description
   * 
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee
   * @returns {*} Returns collection.
   */
  forEach: function(collection, iteratee) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i])
      }
      return collection
    }
    if (typeof collection === 'object') {
      for (let key in collection) {
        iteratee(collection[key], key)
      }
      return collection
    }
  },

  identity: function(v) {
    return v
  },
  isMatch: function(obj, src) {
    if (typeof obj !== 'object' || typeof src !== 'object') return false
    for (let key in src) {
      if (obj[key] !== src[key]) {
        if (!zyycode.isMatch(obj[key], src[key])) {
          return false
        }
      }
    }
    return true
  },
  
}

console.log(zyycode.difference([1,2,3,4,5,6,7,8],[1,3],[4,8],[6]))