const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

const port = 8080
const server = http.createServer()

const base = 'E:/git/github/miao'

server.on('request', (req, res) => {
  console.log(req.method, req.url)
  var urlObj = url.parse(req.url)
  var finalPath = path.join(base, urlObj.pathname)

  fs.stat(finalPath, (err, stats) => {
    if (err) {
      res.end('404 Not Found.')
    } else {
      if (stats.isDirectory()) {
        finalPath = path.join(finalPath, 'index.html')
      }
      fs.readFile(finalPath, (err, content) => {
        if (err) {
          finalPath = path.join(base, urlObj.pathname)
          
          fs.readdir(finalPath, {withFileTypes: true}, (err, list) => {
            res.end(list.map(entry => {
              var ending = entry.isDirectory() ? '/' : ''
              return `<div><a href="${entry.name}${ending}">${entry.name}${ending}</a></div>`
            }).join(''))
          })
        } else {
          res.end(content)
        }
      })
    }
  })

})

server.listen(port, () => {
  console.log(`server in running at ${port}.`)
})