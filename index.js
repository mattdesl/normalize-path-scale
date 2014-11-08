var bounds = require('getboundingbox')
var unlerp = require('unlerp')

module.exports = function normalize(path, box) {
    var b
    if (box && typeof box === 'object') {
        b = box
    } else
        b = bounds(path)

    //TODO: hmm, doesn't really handle div by zero
    //in any sane manner

    var w = (b.maxX-b.minX),
        h = (b.maxY-b.minY)

    var aspectX = w>h ? 1 : h/w,
        aspectY = w>h ? w/h : 1

    return path.map(function(p) {
        return [
            range(b.minX, b.maxX, p[0])*1/aspectX,
            range(b.minY, b.maxY, p[1])*1/aspectY
        ]
    })
}

function range(min, max, value) {
    return ((max-min===0) ? 0 : unlerp(min, max, value))*2-1
}