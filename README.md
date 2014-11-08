# normalize-path-scale

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Normalizes a 2D path to its bounding box. This is useful to take a series of paths (e.g. SVG) and normalize them all into the `-1.0 .. 1.0` range, for easier rendering. It also makes it more suitable for rendering SVG paths in 3D space with WebGL.

Also corrects aspect ratio.

```js
var discretize = require('discretize-svg-path')
var parse = require('parse-svg-path')
var normalize = require('normalize-path-scale')

//parse into usable array
var path = parse(svgContents)

//approximate into discrete points
var points = discretize(path)

//normalize to -1.0 .. 1.0
points = normalize(points)

//render with webgl / canvas / etc
//...
```

## Usage

[![NPM](https://nodei.co/npm/normalize-path-scale.png)](https://nodei.co/npm/normalize-path-scale/)

### normalize(path[, bounds])

Produces a new path (with new points) from the original 2D path, but scaled based on its bounding box so that all points are within the range of -1.0 to 1.0. This also maintains the original aspect ratio of the path. 

You can specify `bounds` for a custom bounding box which has the following members: `{ minX, minY, maxX, maxY }` -- if no `bounds` is specified, it will be computed with [getboundingbox](https://nodei.co/npm/getboundingbox/).

```js
var path = normalize([ [20,20], [10,10], [40,-50] ])
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/normalize-path-scale/blob/master/LICENSE.md) for details.
