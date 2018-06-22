// * Exercises chapter 2.1

var str = ''
for (var i = 0; i < 7; i++) {
  for (var j = 0; j < i + 1; j++) {
    str += '#'
  }
  str += '\n'
}
console.log(str)

// * Exercises chapter 2.2

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else {
    i % 3 === 0 ? console.log('Fizz') : i % 5 === 0 ? console.log('Buzz') : console.log(i)
  }
}

// * Exercises chapter 2.3

var str = ''

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    str += '# '
  }
  str += '\n'
  for (var k = 0; k < 4; k++) {
    str += ' #'
  }
  str += '\n'
}
console.log(str)


