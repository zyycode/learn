let http = require('http')
let queryString = require('querystring')
let server = http.createServer()

const port = 8088

let users = [
  'zhangyi',
  'zhanger',
  'liyi',
  'lier'
]

// /gerusers?query=zhang&callback=foo
server.on('request', (req, res) => {
  console.log(req.method, req.url)
  if (req.url.startsWith('/getusers')) {
    let queryPos = req.url.indexOf('?')
    let query = req.url.slice(queryPos + 1)
    let queryObj = queryString.parse(query)

    let result = users.filter(it => it.includes(queryObj.query))

    if (queryObj.callback) {
      res.setHeader('Content-Type', 'application/javascript')
      res.write(queryObj.callback)
      res.write('(')
      res.write(JSON.stringify(result))
      res.write(')')
      res.end()
    } else {
      res.setHeader('Content-Type', 'application/javascript')
      res.write(JSON.stringify(result))
      res.end()
    }
  }
})

server.listen(port, () => {
  console.log('server listening on port ' + port)
})
