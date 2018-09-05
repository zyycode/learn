var net = require('net')
var fs = require('fs')
var server = net.createServer()

const port = 80

server.on('connection', conn => {

  conn.on('data', data => {
    var data = data.toString()
    console.log('+------------------------------+')
    console.log(data)
    console.log('+------------------------------+')
    var lines = data.split('\r\n')
    var fistLine = lines.shift()
    var [method, path]  = fistLine.split(' ')
    
    console.log(method, path)
    
    try {
      var fileContent = fs.readFileSync('.' + path)
    } catch(e) {
      // console.log(e)
      fileContent = 'error'
    }

    conn.write(`HTTP/1.1 200 OK\r\n`)
    // conn.write(`Content-Type: text/html\r\n`)
    conn.write(`\r\n`)
    conn.write(fileContent)
    conn.end()
  })

})

server.listen(port, () => {
  console.log('server is running at ' + port)
})