var rn = Math.floor(Math.random() * 100) + 1
var n
var counter = 0

do {
  n = Number(prompt('Please input number you want guess: '))
  if (Number.isNaN(n)) {
    alert('Please input the right number!')
  }
  if (n < rn) {
    alert('The number is smaller that you guess!')
  }
  if (n > rn) {
    alert('The number is bigger that you guess!')
  }
  counter++
} while (n !== rn)
if (n === rn) {
  alert('You are right, you guess ' + counter + 'times totally')
}

var sum = 0
var arr = [1,2,3,4,5,34,5,6,1,23]

for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum)

