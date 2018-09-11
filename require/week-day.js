var week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

exports.number = function (name) {
  return names.indexOf(name)
}
exports.name = function(number) {
  return week[number]
}