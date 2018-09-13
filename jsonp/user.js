function jsonp(url, callback) {
  let callbackName = 'JSONP_' + Math.random().toString().substr(2)
  
  window[callbackName] = function(data) {
    callback(data)
    delete window[callbackName]
  }

  url = url + '&callback=' + callbackName
  let script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}

jsonp('http://www.a.com/getusers?query=zhang', function(data) {

})

function jsonp(url, okCallback, errorCallback, timeoutCallback) {
  let callbackName = 'JSONP_' + Math.random().toString().substr(2)
  let isTimeoutInvoked = false

  window[callbackName] = function(data) {
    clearUp()
    if (isTimeoutInvoked) {
      return
    } else {
      try {
        okCallback(data)
      } catch (e) {
        console.log(e)
      }
    }
  }

  if (url.includes('?')) {
    url = url + '&callback=' + callbackName
  } else {
    url = url + '?callback=' + callbackName
  }
  let script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)

  script.onerror = function(e) {
    clearUp()
    if (isTimeoutInvoked) {
      return
    } else {
      errorCallback(e)
    }
  }

  
  let timeoutId = setTimeout(() => {
    isTimeoutInvoked = true
    timeoutCallback()
  }, 5000)

  function clearUp() {
    delete window[callbackName]
    clearTimeout(timeoutId)
  }
}