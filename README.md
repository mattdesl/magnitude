# magnitude

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

2D, 3D and n-dimensional [vector magnitude](https://en.wikipedia.org/?title=Magnitude_(mathematics)#Euclidean_vector_space). 

## Example

```js
var magnitude = require('magnitude')

magnitude([ 0, 1, 0 ]) 
//=> 1

magnitude([ 0, 4, -3 ])
//=> 5
```

Or the squared magnitude (to avoid a `sqrt` operation).

```js
var magSqr = require('magnitude/squared')

magSqr([ 0, 4, -3 ])
//=> 25
```

## Install

```sh
npm install magnitude --save
```

## Usage

[![NPM](https://nodei.co/npm/magnitude.png)](https://www.npmjs.com/package/magnitude)

#### `len = require('magnitude')(vector)`

Returns the vector magnitude of the given n-dimensional vector array.

#### `lenSqr = require('magnitude/squared')(vector)`

The same as above, but without the final `Math.sqrt` operation.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/magnitude/blob/master/LICENSE.md) for details.
