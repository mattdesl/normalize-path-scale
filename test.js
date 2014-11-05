var normalize = require('./')
var test = require('tape').test

var paths = [ 
    [[-10, -5], [10, 0], [0, 0]],
    [[10, 10], [5, 5]]
]

test("normalizes a 2d path to its bounding box", function(t) {
    t.deepEqual(normalize(paths[0]), [ [ -1, -0.25 ], [ 1, 0.25 ], [ 0, 0.25 ] ])

    var aspect = [
        [10, 10], [20, 20], [0, 10]
    ]
    t.deepEqual(normalize(aspect), [ [ 0, -0.5 ], [ 1, 0.5 ], [ -1, -0.5 ] ])
    t.end() 
})