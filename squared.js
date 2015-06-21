module.exports = magnitude

function magnitude (vec) {
  var res = 0
  for (var n = 0; n < vec.length; n++) {
    res += vec[n] * vec[n]
  }
  return res
}
