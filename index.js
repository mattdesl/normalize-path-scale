var bounds = require('getboundingbox')
var unlerp = require('unlerp')

module.exports = function normalize(path) {
    var b = bounds(path)

    //TODO: hmm, doesn't really handle div by zero
    //in any sane manner

    var d = (b.maxY-b.minY)
    var aspect = d===0 ? 1 : (b.maxX-b.minX)/d

    return path.map(function(p) {
        return [
            range(b.minX, b.maxX, p[0]),
            range(b.minY, b.maxY, p[1])*1/aspect
        ]
    })
}

function range(min, max, value) {
    return ((max-min===0) ? 0 : unlerp(min, max, value))*2-1
}