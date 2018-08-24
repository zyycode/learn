function sleep(n) {
  let start = new Date()
  while (true) {
    if (new Date() - start > n) {
      break
    }
  }
}
let i = 0
for (;;) {
  sleep(1000)
  console.log('worker' + ' ' + i++)
}