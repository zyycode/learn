var fs = require('fs')

var cache = Object.create(null)

function readFile(path) {
  return fs.readFileSync(path).toString()
}

global.require2 = function require2(name) {
  if (name in cache) {
    return cache[name]
  }

  var moduleSrc = readFile(name)
  var code = new Function('exports, module', moduleSrc)
  var exports = {}
  var module = {
    exports: exports
  }
  code(exports, module)
  cache[name] = module.exports
  return module.exports
}

var weekDay = require2('week-day.js')
var add = require2('math.js')

console.log(weekDay.name(add(1, 2)))