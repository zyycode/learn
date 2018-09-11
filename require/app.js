var fs = require('fs')

function readFile(path) {
  return fs.readFileSync(path).toString()
}

function require2(name) {
  var moduleSource = readFile(name)
  var moduleFunction = new Function('exports', moduleSource)
  var exports = {}
  moduleFunction(exports)
  return exports
}

var weekDay = require2('week-day.js')
console.log(weekDay.name(2))