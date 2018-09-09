function jsonp(url, callback) {
  let callbackName = Math.random().toString().substr(2)
  url = url + '&callbakc=' + callbackName
  window[callbackName] = function(data) {
    callback(data)
    delete window[callbackName]
  }
  let script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}

jsonp('http://www.a.com/getusers?query=zhang', function(data) {

})