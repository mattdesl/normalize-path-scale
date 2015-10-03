var normalize = require('./')
var test = require('tape').test

test('normalizes a 2d path to its bounding box', function (t) {
  t.deepEqual(normalize([
    [-10, -5], [10, 0], [0, 0]
  ]), [ [ -1, -0.25 ], [ 1, 0.25 ], [ 0, 0.25 ] ])
  
  var aspect = [
      [10, 10], [20, 20], [0, 10]
  ]
  t.deepEqual(normalize(aspect), [ [ 0, -0.5 ], [ 1, 0.5 ], [ -1, -0.5 ] ])
  var result = normalize(aspect, [ [-1, 1], [1, 2] ])
  t.notDeepEqual(result, [ [ 0, -0.5 ], [ 1, 0.5 ], [ -1, -0.5 ] ], 'user specified bounding box')
  
  var input = [ [2, 2] ]
  var output = normalize(input)
  t.equal(input, output, 'mutates path')
  
  t.deepEqual(normalize([ [1, 0], [1, 1] ]), [ [1, 0], [1, 1] ], 'zero size has no change')
  t.end()
})
