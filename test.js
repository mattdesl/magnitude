var magnitude = require('./')
var magSqr = require('./squared')

var test = require('tape')

test('n-dimensional vector magnitude', function (t) {
  t.equal(magnitude([ 1, 3, 4 ]), Math.sqrt(1 * 1 + 3 * 3 + 4 * 4))
  t.equal(magnitude([ 1, 3 ]), Math.sqrt(1 * 1 + 3 * 3))
  t.equal(magSqr([ 1, 3, 4 ]), 1 * 1 + 3 * 3 + 4 * 4)
  t.equal(magSqr([ 1, 3 ]), 1 * 1 + 3 * 3)
  t.equal(magSqr([ 2 ]), 2 * 2)
  t.equal(magnitude([ 0, 1, 0 ]), 1)
  t.equal(magnitude([ 0, 4, -3 ]), 1)
  t.equal(magSqr([]), 0)
  t.end()
})
