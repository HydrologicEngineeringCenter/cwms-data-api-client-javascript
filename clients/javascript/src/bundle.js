(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":1,"buffer":3,"ieee754":6}],4:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],5:[function(require,module,exports){
module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var LIMIT_REPLACE_NODE = '[...]'
var CIRCULAR_REPLACE_NODE = '[Circular]'

var arr = []
var replacerStack = []

function defaultOptions () {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

// Regular stringify
function stringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  decirc(obj, '', 0, [], undefined, 0, options)
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer)
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function setReplace (replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, { value: replace })
      arr.push([parent, k, val, propertyDescriptor])
    } else {
      replacerStack.push([val, k, replace])
    }
  } else {
    parent[k] = replace
    arr.push([parent, k, val])
  }
}

function decirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, i, stack, val, depth, options)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer)
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    // Ensure that we restore the object as it was.
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function deterministicDecirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return
      }
    } catch (_) {
      return
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, i, stack, val, depth, options)
        tmp[key] = val[key]
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues (replacer) {
  replacer =
    typeof replacer !== 'undefined'
      ? replacer
      : function (k, v) {
        return v
      }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = part[2]
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}

},{}],6:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],7:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],8:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],9:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":7,"./encode":8}],10:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts'].forEach(function (fn) {
  // Default setting for all requests from this agent
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, _toConsumableArray(def.args));
  });
};

module.exports = Agent;

},{}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Root reference for iframes.
 */
var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self === 'undefined') {
  // Other environments
  console.warn('Using browser-only version of superagent in non-browser environment');
  root = void 0;
} else {
  // Web Worker
  root = self;
}

var Emitter = require('component-emitter');

var safeStringify = require('fast-safe-stringify');

var RequestBase = require('./request-base');

var isObject = require('./is-object');

var ResponseBase = require('./response-base');

var Agent = require('./agent-base');
/**
 * Noop.
 */


function noop() {}
/**
 * Expose `request`.
 */


module.exports = function (method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports = module.exports;
var request = exports;
exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  }

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (_unused) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (_unused2) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (_unused3) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (_unused4) {}

  throw new Error('Browser-only version of superagent could not find XHR');
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */


var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val === undefined) return;

  if (val === null) {
    pairs.push(encodeURI(key));
    return;
  }

  if (Array.isArray(val)) {
    val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else if (isObject(val)) {
    for (var subkey in val) {
      if (Object.prototype.hasOwnProperty.call(val, subkey)) pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
    }
  } else {
    pairs.push(encodeURI(key) + '=' + encodeURIComponent(val));
  }
}
/**
 * Expose serialization method.
 */


request.serializeObject = serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */


request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  form: 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[/+]json($|[^-\w])/.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method !== 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  this.header = this.headers; // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (this.text === null && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method === 'HEAD' ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
} // eslint-disable-next-line new-cap


ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */


request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (err_) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err_; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType === 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
      }
    } catch (err_) {
      new_err = err_; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */
// eslint-disable-next-line new-cap


Emitter(Request.prototype); // eslint-disable-next-line new-cap

RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: typeof btoa === 'function' ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if (typeof btoa === 'function') {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (val) {
  if (typeof val !== 'string') val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.agent = function () {
  console.warn('This is not supported in browser version of superagent');
  return this;
};

Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; // This throws, because it can't send/receive data as expected

Request.prototype.write = function () {
  throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe = Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */

Request.prototype._isHost = function (obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn('Warning: .end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  this._end();
};

Request.prototype._setUploadTimeout = function () {
  var self = this; // upload timeout it's wokrs only if deadline timeout is off

  if (this._uploadTimeout && !this._uploadTimeoutTimer) {
    this._uploadTimeoutTimer = setTimeout(function () {
      self._timeoutError('Upload timeout of ', self._uploadTimeout, 'ETIMEDOUT');
    }, this._uploadTimeout);
  }
}; // eslint-disable-next-line complexity


Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var self = this;
  this.xhr = request.getXHR();
  var xhr = this.xhr;
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (readyState !== 4) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (_unused5) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;

      if (e.percent === 100) {
        clearTimeout(self._uploadTimeoutTimer);
      }
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.addEventListener('progress', handleProgress.bind(null, 'download'));

      if (xhr.upload) {
        xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
      }
    } catch (_unused6) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  if (xhr.upload) {
    this._setUploadTimeout();
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && this.method !== 'GET' && this.method !== 'HEAD' && typeof data !== 'string' && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (this.header[field] === null) continue;
    if (Object.prototype.hasOwnProperty.call(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data === 'undefined' ? null : data);
};

request.agent = function () {
  return new Agent();
};

['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype.delete;
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.head = function (url, data, fn) {
  var req = request('HEAD', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


function del(url, data, fn) {
  var req = request('DELETE', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request.del = del;
request.delete = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.post = function (url, data, fn) {
  var req = request('POST', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.put = function (url, data, fn) {
  var req = request('PUT', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./agent-base":10,"./is-object":12,"./request-base":13,"./response-base":14,"component-emitter":4,"fast-safe-stringify":5}],12:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

module.exports = isObject;

},{}],13:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = require('./is-object');
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in RequestBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key)) obj[key] = RequestBase.prototype[key];
  }

  return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (err_) {
      console.error(err_);
    }
  }

  if (res && res.status && res.status >= 500 && res.status !== 501) return true;

  if (err) {
    if (err.code && ERROR_CODES.includes(err.code)) return true; // Superagent timeout

    if (err.timeout && err.code === 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new Promise(function (resolve, reject) {
      self.on('abort', function () {
        if (_this._maxRetries && _this._maxRetries > _this._retries) {
          return;
        }

        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var err = new Error('Aborted');
        err.code = 'ABORTED';
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        reject(err);
      });
      self.end(function (err, res) {
        if (err) reject(err);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      if (Object.prototype.hasOwnProperty.call(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (Object.prototype.hasOwnProperty.call(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      if (Object.prototype.hasOwnProperty.call(val, i)) this.field(name, val[i]);
    }

    return this;
  } // val should be defined now


  if (val === null || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof val === 'boolean') {
    val = String(val);
  }

  this._getFormData().append(name, val);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser

  if (this.req) this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } // merge


  if (isObj && isObject(this._data)) {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];

    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArr = this.url.slice(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }

      this.url = this.url.slice(0, index) + '?' + queryArr.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.timedoutError = err;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

},{"./is-object":12}],14:[function(require,module,exports){
"use strict";

/**
 * Module dependencies.
 */
var utils = require('./utils');
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key)) obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) this[key] = params[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; // basics

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; // sugar

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};

},{"./utils":15}],15:[function(require,module,exports){
"use strict";

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();
    if (key && val) obj[key] = val;
    return obj;
  }, {});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; // secuirty

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};

},{}],16:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _superagent = _interopRequireDefault(require("superagent"));
var _querystring = _interopRequireDefault(require("querystring"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* @module ApiClient
* @version 3.0
*/
/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
var ApiClient = /*#__PURE__*/function () {
  /**
   * The base URL against which to resolve every API call's (relative) path.
   * Overrides the default value set in spec file if present
   * @param {String} basePath
   */
  function ApiClient() {
    var basePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://localhost';
    _classCallCheck(this, ApiClient);
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default http://localhost
     */
    this.basePath = basePath.replace(/\/+$/, '');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'CwmsAAACacAuth': {
        type: 'apiKey',
        'in': 'query',
        name: 'JSESSIONIDSSO'
      },
      'ApiKey': {
        type: 'apiKey',
        'in': 'header',
        name: 'Authorization'
      }
    };

    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {
      'User-Agent': 'OpenAPI-Generator/3.0/Javascript'
    };

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    this.cache = true;

    /**
     * If set to true, the client will save the cookies from each server
     * response, and return them in the next request.
     * @default false
     */
    this.enableCookies = false;

    /*
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if this.enableCookies is set to true.
     */
    if (typeof window === 'undefined') {
      this.agent = new _superagent["default"].agent();
    }

    /*
     * Allow user to override superagent agent
     */
    this.requestAgent = null;

    /*
     * Allow user to add superagent plugins
     */
    this.plugins = null;
  }

  /**
  * Returns a string representation for an actual parameter.
  * @param param The actual parameter.
  * @returns {String} The string representation of <code>param</code>.
  */
  _createClass(ApiClient, [{
    key: "paramToString",
    value: function paramToString(param) {
      if (param == undefined || param == null) {
        return '';
      }
      if (param instanceof Date) {
        return param.toJSON();
      }
      if (ApiClient.canBeJsonified(param)) {
        return JSON.stringify(param);
      }
      return param.toString();
    }

    /**
    * Returns a boolean indicating if the parameter could be JSON.stringified
    * @param param The actual parameter
    * @returns {Boolean} Flag indicating if <code>param</code> can be JSON.stringified
    */
  }, {
    key: "buildUrl",
    value:
    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
     * @returns {String} The encoded path with parameter values substituted.
     */
    function buildUrl(path, pathParams, apiBasePath) {
      var _this = this;
      if (!path.match(/^\//)) {
        path = '/' + path;
      }
      var url = this.basePath + path;

      // use API (operation, path) base path if defined
      if (apiBasePath !== null && apiBasePath !== undefined) {
        url = apiBasePath + path;
      }
      url = url.replace(/\{([\w-\.]+)\}/g, function (fullMatch, key) {
        var value;
        if (pathParams.hasOwnProperty(key)) {
          value = _this.paramToString(pathParams[key]);
        } else {
          value = fullMatch;
        }
        return encodeURIComponent(value);
      });
      return url;
    }

    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
  }, {
    key: "isJsonMime",
    value: function isJsonMime(contentType) {
      return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
  }, {
    key: "jsonPreferredMime",
    value: function jsonPreferredMime(contentTypes) {
      for (var i = 0; i < contentTypes.length; i++) {
        if (this.isJsonMime(contentTypes[i])) {
          return contentTypes[i];
        }
      }
      return contentTypes[0];
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
  }, {
    key: "isFileParam",
    value: function isFileParam(param) {
      // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
      if (typeof require === 'function') {
        var fs;
        try {
          fs = require('fs');
        } catch (err) {}
        if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
          return true;
        }
      }

      // Buffer in Node.js
      if (typeof Buffer === 'function' && param instanceof Buffer) {
        return true;
      }

      // Blob in browser
      if (typeof Blob === 'function' && param instanceof Blob) {
        return true;
      }

      // File in browser (it seems File object is also instance of Blob, but keep this for safe)
      if (typeof File === 'function' && param instanceof File) {
        return true;
      }
      return false;
    }

    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
  }, {
    key: "normalizeParams",
    value: function normalizeParams(params) {
      var newParams = {};
      for (var key in params) {
        if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
          var value = params[key];
          if (this.isFileParam(value) || Array.isArray(value)) {
            newParams[key] = value;
          } else {
            newParams[key] = this.paramToString(value);
          }
        }
      }
      return newParams;
    }

    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
  }, {
    key: "buildCollectionParam",
    value: function buildCollectionParam(param, collectionFormat) {
      if (param == null) {
        return null;
      }
      switch (collectionFormat) {
        case 'csv':
          return param.map(this.paramToString, this).join(',');
        case 'ssv':
          return param.map(this.paramToString, this).join(' ');
        case 'tsv':
          return param.map(this.paramToString, this).join('\t');
        case 'pipes':
          return param.map(this.paramToString, this).join('|');
        case 'multi':
          //return the array directly as SuperAgent will handle it as expected
          return param.map(this.paramToString, this);
        case 'passthrough':
          return param;
        default:
          throw new Error('Unknown collection format: ' + collectionFormat);
      }
    }

    /**
    * Applies authentication headers to the request.
    * @param {Object} request The request object created by a <code>superagent()</code> call.
    * @param {Array.<String>} authNames An array of authentication method names.
    */
  }, {
    key: "applyAuthToRequest",
    value: function applyAuthToRequest(request, authNames) {
      var _this2 = this;
      authNames.forEach(function (authName) {
        var auth = _this2.authentications[authName];
        switch (auth.type) {
          case 'basic':
            if (auth.username || auth.password) {
              request.auth(auth.username || '', auth.password || '');
            }
            break;
          case 'bearer':
            if (auth.accessToken) {
              var localVarBearerToken = typeof auth.accessToken === 'function' ? auth.accessToken() : auth.accessToken;
              request.set({
                'Authorization': 'Bearer ' + localVarBearerToken
              });
            }
            break;
          case 'apiKey':
            if (auth.apiKey) {
              var data = {};
              if (auth.apiKeyPrefix) {
                data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
              } else {
                data[auth.name] = auth.apiKey;
              }
              if (auth['in'] === 'header') {
                request.set(data);
              } else {
                request.query(data);
              }
            }
            break;
          case 'oauth2':
            if (auth.accessToken) {
              request.set({
                'Authorization': 'Bearer ' + auth.accessToken
              });
            }
            break;
          default:
            throw new Error('Unknown authentication type: ' + auth.type);
        }
      });
    }

    /**
     * Deserializes an HTTP response body into a value of the specified type.
     * @param {Object} response A SuperAgent response object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns A value of the specified type.
     */
  }, {
    key: "deserialize",
    value: function deserialize(response, returnType) {
      if (response == null || returnType == null || response.status == 204) {
        return null;
      }

      // Rely on SuperAgent for parsing response body.
      // See http://visionmedia.github.io/superagent/#parsing-response-bodies
      var data = response.body;
      if (data == null || _typeof(data) === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length) {
        // SuperAgent does not always produce a body; use the unparsed response as a fallback
        data = response.text;
      }
      return ApiClient.convertToType(data, returnType);
    }

    /**
     * Callback function to receive the result of the operation.
     * @callback module:ApiClient~callApiCallback
     * @param {String} error Error message, if any.
     * @param data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invokes the REST service using the supplied settings and parameters.
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {Array.<String>} authNames An array of authentication type names.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * constructor for a complex type.
     * @param {String} apiBasePath base path defined in the operation/path level to override the default one
     * @param {module:ApiClient~callApiCallback} callback The callback function.
     * @returns {Object} The SuperAgent request object.
     */
  }, {
    key: "callApi",
    value: function callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, apiBasePath, callback) {
      var _this3 = this;
      var url = this.buildUrl(path, pathParams, apiBasePath);
      var request = (0, _superagent["default"])(httpMethod, url);
      if (this.plugins !== null) {
        for (var index in this.plugins) {
          if (this.plugins.hasOwnProperty(index)) {
            request.use(this.plugins[index]);
          }
        }
      }

      // apply authentications
      this.applyAuthToRequest(request, authNames);

      // set query parameters
      if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
        queryParams['_'] = new Date().getTime();
      }
      request.query(this.normalizeParams(queryParams));

      // set header parameters
      request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

      // set requestAgent if it is set by user
      if (this.requestAgent) {
        request.agent(this.requestAgent);
      }

      // set request timeout
      request.timeout(this.timeout);
      var contentType = this.jsonPreferredMime(contentTypes);
      if (contentType) {
        // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
        if (contentType != 'multipart/form-data') {
          request.type(contentType);
        }
      }
      if (contentType === 'application/x-www-form-urlencoded') {
        request.send(_querystring["default"].stringify(this.normalizeParams(formParams)));
      } else if (contentType == 'multipart/form-data') {
        var _formParams = this.normalizeParams(formParams);
        for (var key in _formParams) {
          if (_formParams.hasOwnProperty(key)) {
            var _formParamsValue = _formParams[key];
            if (this.isFileParam(_formParamsValue)) {
              // file field
              request.attach(key, _formParamsValue);
            } else if (Array.isArray(_formParamsValue) && _formParamsValue.length && this.isFileParam(_formParamsValue[0])) {
              // multiple files
              _formParamsValue.forEach(function (file) {
                return request.attach(key, file);
              });
            } else {
              request.field(key, _formParamsValue);
            }
          }
        }
      } else if (bodyParam !== null && bodyParam !== undefined) {
        if (!request.header['Content-Type']) {
          request.type('application/json');
        }
        request.send(bodyParam);
      }
      var accept = this.jsonPreferredMime(accepts);
      if (accept) {
        request.accept(accept);
      }
      if (returnType === 'Blob') {
        request.responseType('blob');
      } else if (returnType === 'String') {
        request.responseType('text');
      }

      // Attach previously saved cookies, if enabled
      if (this.enableCookies) {
        if (typeof window === 'undefined') {
          this.agent._attachCookies(request);
        } else {
          request.withCredentials();
        }
      }
      request.end(function (error, response) {
        if (callback) {
          var data = null;
          if (!error) {
            try {
              data = _this3.deserialize(response, returnType);
              if (_this3.enableCookies && typeof window === 'undefined') {
                _this3.agent._saveCookies(response);
              }
            } catch (err) {
              error = err;
            }
          }
          callback(error, data, response);
        }
      });
      return request;
    }

    /**
    * Parses an ISO-8601 string representation or epoch representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
  }, {
    key: "hostSettings",
    value:
    /**
      * Gets an array of host settings
      * @returns An array of host settings
      */
    function hostSettings() {
      return [{
        'url': "",
        'description': "No description provided"
      }];
    }
  }, {
    key: "getBasePathFromSettings",
    value: function getBasePathFromSettings(index) {
      var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var servers = this.hostSettings();

      // check array index out of bound
      if (index < 0 || index >= servers.length) {
        throw new Error("Invalid index " + index + " when selecting the host settings. Must be less than " + servers.length);
      }
      var server = servers[index];
      var url = server['url'];

      // go through variable and assign a value
      for (var variable_name in server['variables']) {
        if (variable_name in variables) {
          var variable = server['variables'][variable_name];
          if (!('enum_values' in variable) || variable['enum_values'].includes(variables[variable_name])) {
            url = url.replace("{" + variable_name + "}", variables[variable_name]);
          } else {
            throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server['variables'][variable_name]['enum_values'] + ".");
          }
        } else {
          // use default value
          url = url.replace("{" + variable_name + "}", server['variables'][variable_name]['default_value']);
        }
      }
      return url;
    }

    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
  }], [{
    key: "canBeJsonified",
    value: function canBeJsonified(str) {
      if (typeof str !== 'string' && _typeof(str) !== 'object') return false;
      try {
        var type = str.toString();
        return type === '[object Object]' || type === '[object Array]';
      } catch (err) {
        return false;
      }
    }
  }, {
    key: "parseDate",
    value: function parseDate(str) {
      if (isNaN(str)) {
        return new Date(str.replace(/(\d)(T)(\d)/i, '$1 $3'));
      }
      return new Date(+str);
    }

    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
  }, {
    key: "convertToType",
    value: function convertToType(data, type) {
      if (data === null || data === undefined) return data;
      switch (type) {
        case 'Boolean':
          return Boolean(data);
        case 'Integer':
          return parseInt(data, 10);
        case 'Number':
          return parseFloat(data);
        case 'String':
          return String(data);
        case 'Date':
          return ApiClient.parseDate(String(data));
        case 'Blob':
          return data;
        default:
          if (type === Object) {
            // generic object, return directly
            return data;
          } else if (typeof type.constructFromObject === 'function') {
            // for model type like User and enum class
            return type.constructFromObject(data);
          } else if (Array.isArray(type)) {
            // for array type like: ['String']
            var itemType = type[0];
            return data.map(function (item) {
              return ApiClient.convertToType(item, itemType);
            });
          } else if (_typeof(type) === 'object') {
            // for plain object type like: {'String': 'Integer'}
            var keyType, valueType;
            for (var k in type) {
              if (type.hasOwnProperty(k)) {
                keyType = k;
                valueType = type[k];
                break;
              }
            }
            var result = {};
            for (var k in data) {
              if (data.hasOwnProperty(k)) {
                var key = ApiClient.convertToType(k, keyType);
                var value = ApiClient.convertToType(data[k], valueType);
                result[key] = value;
              }
            }
            return result;
          } else {
            // for unknown type, return the data directly
            return data;
          }
      }
    }
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj, itemType) {
      if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          if (data.hasOwnProperty(i)) obj[i] = ApiClient.convertToType(data[i], itemType);
        }
      } else {
        for (var k in data) {
          if (data.hasOwnProperty(k)) obj[k] = ApiClient.convertToType(data[k], itemType);
        }
      }
    }
  }]);
  return ApiClient;
}();
/**
 * Enumeration of collection format separator strategies.
 * @enum {String}
 * @readonly
 */
ApiClient.CollectionFormatEnum = {
  /**
   * Comma-separated values. Value: <code>csv</code>
   * @const
   */
  CSV: ',',
  /**
   * Space-separated values. Value: <code>ssv</code>
   * @const
   */
  SSV: ' ',
  /**
   * Tab-separated values. Value: <code>tsv</code>
   * @const
   */
  TSV: '\t',
  /**
   * Pipe(|)-separated values. Value: <code>pipes</code>
   * @const
   */
  PIPES: '|',
  /**
   * Native array. Value: <code>multi</code>
   * @const
   */
  MULTI: 'multi'
};

/**
* The default API client implementation.
* @type {module:ApiClient}
*/
ApiClient.instance = new ApiClient();
var _default = exports["default"] = ApiClient;

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":3,"fs":2,"querystring":9,"superagent":11}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ApiKey = _interopRequireDefault(require("../model/ApiKey"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Authorization service.
* @module api/AuthorizationApi
* @version 3.0
*/
var AuthorizationApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthorizationApi. 
  * @alias module:api/AuthorizationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthorizationApi(apiClient) {
    _classCallCheck(this, AuthorizationApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataAuthKeysWithKeyName operation.
   * @callback module:api/AuthorizationApi~deleteCwmsDataAuthKeysWithKeyNameCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ApiKey} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData auth keys with keyName
   * Delete API key for a user
   * @param {String} keyName 
   * @param {Object} opts Optional parameters
   * @param {module:model/ApiKey} [apiKey] 
   * @param {module:api/AuthorizationApi~deleteCwmsDataAuthKeysWithKeyNameCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ApiKey}
   */
  _createClass(AuthorizationApi, [{
    key: "deleteCwmsDataAuthKeysWithKeyName",
    value: function deleteCwmsDataAuthKeysWithKeyName(keyName, opts, callback) {
      opts = opts || {};
      var postBody = opts['apiKey'];
      // verify the required parameter 'keyName' is set
      if (keyName === undefined || keyName === null) {
        throw new Error("Missing the required parameter 'keyName' when calling deleteCwmsDataAuthKeysWithKeyName");
      }
      var pathParams = {
        'key-name': keyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApiKey["default"];
      return this.apiClient.callApi('/cwms-data/auth/keys/{key-name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataAuthKeys operation.
     * @callback module:api/AuthorizationApi~getCwmsDataAuthKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApiKey>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData auth keys
     * View all keys for the current user
     * @param {module:api/AuthorizationApi~getCwmsDataAuthKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApiKey>}
     */
  }, {
    key: "getCwmsDataAuthKeys",
    value: function getCwmsDataAuthKeys(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ApiKey["default"]];
      return this.apiClient.callApi('/cwms-data/auth/keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataAuthKeysWithKeyName operation.
     * @callback module:api/AuthorizationApi~getCwmsDataAuthKeysWithKeyNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData auth keys with keyName
     * View specific key
     * @param {String} keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     * @param {module:api/AuthorizationApi~getCwmsDataAuthKeysWithKeyNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKey}
     */
  }, {
    key: "getCwmsDataAuthKeysWithKeyName",
    value: function getCwmsDataAuthKeysWithKeyName(keyName, callback) {
      var postBody = null;
      // verify the required parameter 'keyName' is set
      if (keyName === undefined || keyName === null) {
        throw new Error("Missing the required parameter 'keyName' when calling getCwmsDataAuthKeysWithKeyName");
      }
      var pathParams = {
        'key-name': keyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApiKey["default"];
      return this.apiClient.callApi('/cwms-data/auth/keys/{key-name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataAuthKeys operation.
     * @callback module:api/AuthorizationApi~postCwmsDataAuthKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData auth keys
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiKey} [apiKey] 
     * @param {module:api/AuthorizationApi~postCwmsDataAuthKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKey}
     */
  }, {
    key: "postCwmsDataAuthKeys",
    value: function postCwmsDataAuthKeys(opts, callback) {
      opts = opts || {};
      var postBody = opts['apiKey'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApiKey["default"];
      return this.apiClient.callApi('/cwms-data/auth/keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return AuthorizationApi;
}();

},{"../ApiClient":16,"../model/ApiKey":41,"../model/CdaError":50}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Basin = _interopRequireDefault(require("../model/Basin"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Basins service.
* @module api/BasinsApi
* @version 3.0
*/
var BasinsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new BasinsApi. 
  * @alias module:api/BasinsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BasinsApi(apiClient) {
    _classCallCheck(this, BasinsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataBasins operation.
   * @callback module:api/BasinsApi~getCwmsDataBasinsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Basin} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData basins
   * Returns CWMS Basin Data
   * @param {Object} opts Optional parameters
   * @param {String} [office] Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
   * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
   * @param {module:api/BasinsApi~getCwmsDataBasinsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Basin}
   */
  _createClass(BasinsApi, [{
    key: "getCwmsDataBasins",
    value: function getCwmsDataBasins(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.named+pg+json', 'application/json'];
      var returnType = _Basin["default"];
      return this.apiClient.callApi('/cwms-data/basins', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataBasinsWithBasinId operation.
     * @callback module:api/BasinsApi~getCwmsDataBasinsWithBasinIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Basin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData basins with basinId
     * Returns CWMS Basin Data
     * @param {String} basinId 
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     * @param {module:api/BasinsApi~getCwmsDataBasinsWithBasinIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Basin}
     */
  }, {
    key: "getCwmsDataBasinsWithBasinId",
    value: function getCwmsDataBasinsWithBasinId(basinId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'basinId' is set
      if (basinId === undefined || basinId === null) {
        throw new Error("Missing the required parameter 'basinId' when calling getCwmsDataBasinsWithBasinId");
      }
      var pathParams = {
        'basin-id': basinId
      };
      var queryParams = {
        'office': opts['office'],
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.named+pg+json', 'application/json'];
      var returnType = _Basin["default"];
      return this.apiClient.callApi('/cwms-data/basins/{basin-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return BasinsApi;
}();

},{"../ApiClient":16,"../model/Basin":44,"../model/CdaError":50}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Blobs = _interopRequireDefault(require("../model/Blobs"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Blob service.
* @module api/BlobApi
* @version 3.0
*/
var BlobApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new BlobApi. 
  * @alias module:api/BlobApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BlobApi(apiClient) {
    _classCallCheck(this, BlobApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataBlobs operation.
   * @callback module:api/BlobApi~getCwmsDataBlobsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Blobs} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData blobs
   * @param {Object} opts Optional parameters
   * @param {String} [office] Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
   * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
   * @param {Number} [pageSize] How many entries per page returned. Default 20.
   * @param {String} [like] Posix <a href=\"regexp.html\">regular expression</a> describing the blob id's you want
   * @param {module:api/BlobApi~getCwmsDataBlobsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Blobs}
   */
  _createClass(BlobApi, [{
    key: "getCwmsDataBlobs",
    value: function getCwmsDataBlobs(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'page': opts['page'],
        'page-size': opts['pageSize'],
        'like': opts['like']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/xml;version=2', 'application/json'];
      var returnType = _Blobs["default"];
      return this.apiClient.callApi('/cwms-data/blobs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataBlobsWithBlobId operation.
     * @callback module:api/BlobApi~getCwmsDataBlobsWithBlobIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData blobs with blobId
     * @param {String} blobId 
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office.
     * @param {module:api/BlobApi~getCwmsDataBlobsWithBlobIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getCwmsDataBlobsWithBlobId",
    value: function getCwmsDataBlobsWithBlobId(blobId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blobId' is set
      if (blobId === undefined || blobId === null) {
        throw new Error("Missing the required parameter 'blobId' when calling getCwmsDataBlobsWithBlobId");
      }
      var pathParams = {
        'blob-id': blobId
      };
      var queryParams = {
        'office': opts['office']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/blobs/{blob-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return BlobApi;
}();

},{"../ApiClient":16,"../model/Blobs":46,"../model/CdaError":50}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Catalog = _interopRequireDefault(require("../model/Catalog"));
var _CatalogableEndpoint = _interopRequireDefault(require("../model/CatalogableEndpoint"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _UnitSystem = _interopRequireDefault(require("../model/UnitSystem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Catalog service.
* @module api/CatalogApi
* @version 3.0
*/
var CatalogApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new CatalogApi. 
  * @alias module:api/CatalogApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CatalogApi(apiClient) {
    _classCallCheck(this, CatalogApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataCatalogWithDataset operation.
   * @callback module:api/CatalogApi~getCwmsDataCatalogWithDatasetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Catalog} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData catalog with dataset
   * @param {module:model/CatalogableEndpoint} dataset A list of what data? E.g. Timeseries, Locations, Ratings, etc
   * @param {Object} opts Optional parameters
   * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are.
   * @param {Number} [pageSize] How many entires per page returned. Default 500.
   * @param {module:model/UnitSystem} [unitSystem] Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
   * @param {String} [office] 3-4 letter office name representing the district you want to isolate data to.
   * @param {String} [like] Posix <a href=\"regexp.html\">regular expression</a> matching against the id
   * @param {String} [timeseriesCategoryLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries category id
   * @param {String} [timeseriesGroupLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries group id
   * @param {String} [locationCategoryLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the location category id
   * @param {String} [locationGroupLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the location group id
   * @param {String} [boundingOfficeLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the location bounding office. When this field is used items with no bounding office set will not be present in results.
   * @param {module:api/CatalogApi~getCwmsDataCatalogWithDatasetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Catalog}
   */
  _createClass(CatalogApi, [{
    key: "getCwmsDataCatalogWithDataset",
    value: function getCwmsDataCatalogWithDataset(dataset, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'dataset' is set
      if (dataset === undefined || dataset === null) {
        throw new Error("Missing the required parameter 'dataset' when calling getCwmsDataCatalogWithDataset");
      }
      var pathParams = {
        'dataset': dataset
      };
      var queryParams = {
        'page': opts['page'],
        'page-size': opts['pageSize'],
        'unit-system': opts['unitSystem'],
        'office': opts['office'],
        'like': opts['like'],
        'timeseries-category-like': opts['timeseriesCategoryLike'],
        'timeseries-group-like': opts['timeseriesGroupLike'],
        'location-category-like': opts['locationCategoryLike'],
        'location-group-like': opts['locationGroupLike'],
        'bounding-office-like': opts['boundingOfficeLike']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/xml', 'application/json'];
      var returnType = _Catalog["default"];
      return this.apiClient.callApi('/cwms-data/catalog/{dataset}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return CatalogApi;
}();

},{"../ApiClient":16,"../model/Catalog":47,"../model/CatalogableEndpoint":49,"../model/CdaError":50,"../model/UnitSystem":108}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _Clob = _interopRequireDefault(require("../model/Clob"));
var _Clobs = _interopRequireDefault(require("../model/Clobs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Clob service.
* @module api/ClobApi
* @version 3.0
*/
var ClobApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new ClobApi. 
  * @alias module:api/ClobApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ClobApi(apiClient) {
    _classCallCheck(this, ClobApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataClobsWithClobId operation.
   * @callback module:api/ClobApi~deleteCwmsDataClobsWithClobIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData clobs with clobId
   * Delete clob
   * @param {String} clobId Specifies the id of the clob to be deleted
   * @param {String} office Specifies the office of the clob.
   * @param {module:api/ClobApi~deleteCwmsDataClobsWithClobIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(ClobApi, [{
    key: "deleteCwmsDataClobsWithClobId",
    value: function deleteCwmsDataClobsWithClobId(clobId, office, callback) {
      var postBody = null;
      // verify the required parameter 'clobId' is set
      if (clobId === undefined || clobId === null) {
        throw new Error("Missing the required parameter 'clobId' when calling deleteCwmsDataClobsWithClobId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataClobsWithClobId");
      }
      var pathParams = {
        'clob-id': clobId
      };
      var queryParams = {
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/clobs/{clob-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataClobs operation.
     * @callback module:api/ClobApi~getCwmsDataClobsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Clobs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData clobs
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 20.
     * @param {Boolean} [includeValues] Do you want the value associated with this particular clob (default: false)
     * @param {String} [like] Posix <a href=\"regexp.html\">regular expression</a> matching against the id
     * @param {module:api/ClobApi~getCwmsDataClobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Clobs}
     */
  }, {
    key: "getCwmsDataClobs",
    value: function getCwmsDataClobs(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'page': opts['page'],
        'page-size': opts['pageSize'],
        'include-values': opts['includeValues'],
        'like': opts['like']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/xml;version=2', 'application/json'];
      var returnType = _Clobs["default"];
      return this.apiClient.callApi('/cwms-data/clobs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataClobsWithClobId operation.
     * @callback module:api/ClobApi~getCwmsDataClobsWithClobIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Clob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData clobs with clobId
     * @param {String} clobId 
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office.
     * @param {module:api/ClobApi~getCwmsDataClobsWithClobIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Clob}
     */
  }, {
    key: "getCwmsDataClobsWithClobId",
    value: function getCwmsDataClobsWithClobId(clobId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'clobId' is set
      if (clobId === undefined || clobId === null) {
        throw new Error("Missing the required parameter 'clobId' when calling getCwmsDataClobsWithClobId");
      }
      var pathParams = {
        'clob-id': clobId
      };
      var queryParams = {
        'office': opts['office']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _Clob["default"];
      return this.apiClient.callApi('/cwms-data/clobs/{clob-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataClobsWithClobId operation.
     * @callback module:api/ClobApi~patchCwmsDataClobsWithClobIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData clobs with clobId
     * Update clob
     * @param {String} clobId Specifies the id of the clob to be updated
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [ignoreNulls] If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     * @param {module:api/ClobApi~patchCwmsDataClobsWithClobIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataClobsWithClobId",
    value: function patchCwmsDataClobsWithClobId(clobId, clob, opts, callback) {
      opts = opts || {};
      var postBody = clob;
      // verify the required parameter 'clobId' is set
      if (clobId === undefined || clobId === null) {
        throw new Error("Missing the required parameter 'clobId' when calling patchCwmsDataClobsWithClobId");
      }
      // verify the required parameter 'clob' is set
      if (clob === undefined || clob === null) {
        throw new Error("Missing the required parameter 'clob' when calling patchCwmsDataClobsWithClobId");
      }
      var pathParams = {
        'clob-id': clobId
      };
      var queryParams = {
        'ignore-nulls': opts['ignoreNulls']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json;version=2', 'application/xml;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/clobs/{clob-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataClobs operation.
     * @callback module:api/ClobApi~postCwmsDataClobsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData clobs
     * Create new Clob
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/ClobApi~postCwmsDataClobsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataClobs",
    value: function postCwmsDataClobs(clob, opts, callback) {
      opts = opts || {};
      var postBody = clob;
      // verify the required parameter 'clob' is set
      if (clob === undefined || clob === null) {
        throw new Error("Missing the required parameter 'clob' when calling postCwmsDataClobs");
      }
      var pathParams = {};
      var queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json;version=2', 'application/xml;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/clobs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ClobApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/Clob":51,"../model/Clobs":52}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _County = _interopRequireDefault(require("../model/County"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Counties service.
* @module api/CountiesApi
* @version 3.0
*/
var CountiesApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new CountiesApi. 
  * @alias module:api/CountiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CountiesApi(apiClient) {
    _classCallCheck(this, CountiesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataCounties operation.
   * @callback module:api/CountiesApi~getCwmsDataCountiesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/County>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData counties
   * @param {module:api/CountiesApi~getCwmsDataCountiesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/County>}
   */
  _createClass(CountiesApi, [{
    key: "getCwmsDataCounties",
    value: function getCwmsDataCounties(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = [_County["default"]];
      return this.apiClient.callApi('/cwms-data/counties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return CountiesApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/County":53}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Default service.
* @module api/DefaultApi
* @version 3.0
*/
var DefaultApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsData operation.
   * @callback module:api/DefaultApi~getCwmsDataCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData
   * @param {module:api/DefaultApi~getCwmsDataCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(DefaultApi, [{
    key: "getCwmsData",
    value: function getCwmsData(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLevelsWithLevelIdTimeseries operation.
     * @callback module:api/DefaultApi~getCwmsDataLevelsWithLevelIdTimeseriesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData levels with levelId timeseries
     * @param {String} levelId 
     * @param {module:api/DefaultApi~getCwmsDataLevelsWithLevelIdTimeseriesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getCwmsDataLevelsWithLevelIdTimeseries",
    value: function getCwmsDataLevelsWithLevelIdTimeseries(levelId, callback) {
      var postBody = null;
      // verify the required parameter 'levelId' is set
      if (levelId === undefined || levelId === null) {
        throw new Error("Missing the required parameter 'levelId' when calling getCwmsDataLevelsWithLevelIdTimeseries");
      }
      var pathParams = {
        'level-id': levelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/levels/{level-id}/timeseries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseriesRecentWithGroupId operation.
     * @callback module:api/DefaultApi~getCwmsDataTimeseriesRecentWithGroupIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries recent with groupId
     * @param {String} groupId 
     * @param {module:api/DefaultApi~getCwmsDataTimeseriesRecentWithGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getCwmsDataTimeseriesRecentWithGroupId",
    value: function getCwmsDataTimeseriesRecentWithGroupId(groupId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getCwmsDataTimeseriesRecentWithGroupId");
      }
      var pathParams = {
        'group-id': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/recent/{group-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return DefaultApi;
}();

},{"../ApiClient":16,"../model/CdaError":50}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _LocationLevel = _interopRequireDefault(require("../model/LocationLevel"));
var _LocationLevels = _interopRequireDefault(require("../model/LocationLevels"));
var _SpecifiedLevel = _interopRequireDefault(require("../model/SpecifiedLevel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Levels service.
* @module api/LevelsApi
* @version 3.0
*/
var LevelsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new LevelsApi. 
  * @alias module:api/LevelsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LevelsApi(apiClient) {
    _classCallCheck(this, LevelsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataLevelsWithLevelId operation.
   * @callback module:api/LevelsApi~deleteCwmsDataLevelsWithLevelIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData levels with levelId
   * Delete CWMS Location Level
   * @param {String} levelId Specifies the location level id of the Location Level to be deleted
   * @param {Object} opts Optional parameters
   * @param {Boolean} [cascadeDelete] 
   * @param {String} [office] Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices.
   * @param {String} [effectiveDate] Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level.
   * @param {module:api/LevelsApi~deleteCwmsDataLevelsWithLevelIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(LevelsApi, [{
    key: "deleteCwmsDataLevelsWithLevelId",
    value: function deleteCwmsDataLevelsWithLevelId(levelId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'levelId' is set
      if (levelId === undefined || levelId === null) {
        throw new Error("Missing the required parameter 'levelId' when calling deleteCwmsDataLevelsWithLevelId");
      }
      var pathParams = {
        'level-id': levelId
      };
      var queryParams = {
        'cascade-delete': opts['cascadeDelete'],
        'office': opts['office'],
        'effective-date': opts['effectiveDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/levels/{level-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId operation.
     * @callback module:api/LevelsApi~deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * Deletes requested specified level id
     * @param {String} specifiedLevelId The specified level id to be deleted
     * @param {String} office Specifies the owning office of the timeseries identifier to be deleted
     * @param {module:api/LevelsApi~deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId",
    value: function deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, office, callback) {
      var postBody = null;
      // verify the required parameter 'specifiedLevelId' is set
      if (specifiedLevelId === undefined || specifiedLevelId === null) {
        throw new Error("Missing the required parameter 'specifiedLevelId' when calling deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId");
      }
      var pathParams = {
        'specified-level-id': specifiedLevelId
      };
      var queryParams = {
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/specified-levels/{specified-level-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLevels operation.
     * @callback module:api/LevelsApi~getCwmsDataLevelsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData levels
     * @param {Object} opts Optional parameters
     * @param {String} [levelIdMask] Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all.
     * @param {String} [office] Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {String} [datum] Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param {String} [begin] Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @param {String} [end] Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param {String} [format] Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version=2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)  
     * @param {String} [page] This identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 100.
     * @param {module:api/LevelsApi~getCwmsDataLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "getCwmsDataLevels",
    value: function getCwmsDataLevels(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'level-id-mask': opts['levelIdMask'],
        'office': opts['office'],
        'unit': opts['unit'],
        'datum': opts['datum'],
        'begin': opts['begin'],
        'end': opts['end'],
        'timezone': opts['timezone'],
        'format': opts['format'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', '', 'application/json;version=2'];
      var returnType = Object;
      return this.apiClient.callApi('/cwms-data/levels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLevelsWithLevelId operation.
     * @callback module:api/LevelsApi~getCwmsDataLevelsWithLevelIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationLevel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData levels with levelId
     * Retrieves requested Location Level
     * @param {String} levelId Specifies the requested location level.
     * @param {String} office Specifies the office of the Location Level to be returned
     * @param {String} effectiveDate Specifies the effective date of Location Level to be returned
     * @param {Object} opts Optional parameters
     * @param {String} [unit] Desired unit for the values retrieved.
     * @param {module:api/LevelsApi~getCwmsDataLevelsWithLevelIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationLevel}
     */
  }, {
    key: "getCwmsDataLevelsWithLevelId",
    value: function getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'levelId' is set
      if (levelId === undefined || levelId === null) {
        throw new Error("Missing the required parameter 'levelId' when calling getCwmsDataLevelsWithLevelId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataLevelsWithLevelId");
      }
      // verify the required parameter 'effectiveDate' is set
      if (effectiveDate === undefined || effectiveDate === null) {
        throw new Error("Missing the required parameter 'effectiveDate' when calling getCwmsDataLevelsWithLevelId");
      }
      var pathParams = {
        'level-id': levelId
      };
      var queryParams = {
        'office': office,
        'effective-date': effectiveDate,
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _LocationLevel["default"];
      return this.apiClient.callApi('/cwms-data/levels/{level-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataSpecifiedLevels operation.
     * @callback module:api/LevelsApi~getCwmsDataSpecifiedLevelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpecifiedLevel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData specifiedLevels
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [templateIdMask] Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     * @param {module:api/LevelsApi~getCwmsDataSpecifiedLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpecifiedLevel}
     */
  }, {
    key: "getCwmsDataSpecifiedLevels",
    value: function getCwmsDataSpecifiedLevels(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'template-id-mask': opts['templateIdMask']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _SpecifiedLevel["default"];
      return this.apiClient.callApi('/cwms-data/specified-levels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataLevelsWithLevelId operation.
     * @callback module:api/LevelsApi~patchCwmsDataLevelsWithLevelIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData levels with levelId
     * Update CWMS Location Level
     * @param {String} levelId Specifies the location level id of the Location Level to be updated
     * @param {module:model/LocationLevel} locationLevel 
     * @param {Object} opts Optional parameters
     * @param {String} [effectiveDate] Specifies the effective date of Location Level that will be updated
     * @param {module:api/LevelsApi~patchCwmsDataLevelsWithLevelIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataLevelsWithLevelId",
    value: function patchCwmsDataLevelsWithLevelId(levelId, locationLevel, opts, callback) {
      opts = opts || {};
      var postBody = locationLevel;
      // verify the required parameter 'levelId' is set
      if (levelId === undefined || levelId === null) {
        throw new Error("Missing the required parameter 'levelId' when calling patchCwmsDataLevelsWithLevelId");
      }
      // verify the required parameter 'locationLevel' is set
      if (locationLevel === undefined || locationLevel === null) {
        throw new Error("Missing the required parameter 'locationLevel' when calling patchCwmsDataLevelsWithLevelId");
      }
      var pathParams = {
        'level-id': levelId
      };
      var queryParams = {
        'effective-date': opts['effectiveDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/levels/{level-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId operation.
     * @callback module:api/LevelsApi~patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * Renames the requested specified level id
     * @param {String} specifiedLevelId 
     * @param {String} specifiedLevelId2 The new specified level id.
     * @param {String} office Specifies the owning office of the specified level to be renamed
     * @param {module:api/LevelsApi~patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId",
    value: function patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, specifiedLevelId2, office, callback) {
      var postBody = null;
      // verify the required parameter 'specifiedLevelId' is set
      if (specifiedLevelId === undefined || specifiedLevelId === null) {
        throw new Error("Missing the required parameter 'specifiedLevelId' when calling patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId");
      }
      // verify the required parameter 'specifiedLevelId2' is set
      if (specifiedLevelId2 === undefined || specifiedLevelId2 === null) {
        throw new Error("Missing the required parameter 'specifiedLevelId2' when calling patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId");
      }
      var pathParams = {
        'specified-level-id': specifiedLevelId
      };
      var queryParams = {
        'specified-level-id': specifiedLevelId2,
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/specified-levels/{specified-level-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataLevels operation.
     * @callback module:api/LevelsApi~postCwmsDataLevelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData levels
     * Create new CWMS Location Level
     * @param {module:model/LocationLevel} locationLevel 
     * @param {module:api/LevelsApi~postCwmsDataLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataLevels",
    value: function postCwmsDataLevels(locationLevel, callback) {
      var postBody = locationLevel;
      // verify the required parameter 'locationLevel' is set
      if (locationLevel === undefined || locationLevel === null) {
        throw new Error("Missing the required parameter 'locationLevel' when calling postCwmsDataLevels");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/levels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataSpecifiedLevels operation.
     * @callback module:api/LevelsApi~postCwmsDataSpecifiedLevelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData specifiedLevels
     * Create new SpecifiedLevel
     * @param {module:model/SpecifiedLevel} specifiedLevel 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/LevelsApi~postCwmsDataSpecifiedLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataSpecifiedLevels",
    value: function postCwmsDataSpecifiedLevels(specifiedLevel, opts, callback) {
      opts = opts || {};
      var postBody = specifiedLevel;
      // verify the required parameter 'specifiedLevel' is set
      if (specifiedLevel === undefined || specifiedLevel === null) {
        throw new Error("Missing the required parameter 'specifiedLevel' when calling postCwmsDataSpecifiedLevels");
      }
      var pathParams = {};
      var queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/specified-levels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return LevelsApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/LocationLevel":65,"../model/LocationLevels":66,"../model/SpecifiedLevel":84}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _LocationCategory = _interopRequireDefault(require("../model/LocationCategory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* LocationCategories service.
* @module api/LocationCategoriesApi
* @version 3.0
*/
var LocationCategoriesApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new LocationCategoriesApi. 
  * @alias module:api/LocationCategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LocationCategoriesApi(apiClient) {
    _classCallCheck(this, LocationCategoriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataLocationCategoryWithCategoryId operation.
   * @callback module:api/LocationCategoriesApi~deleteCwmsDataLocationCategoryWithCategoryIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData location category with categoryId
   * Deletes requested location category
   * @param {String} categoryId The location category to be deleted
   * @param {String} office Specifies the owning office of the location category to be deleted
   * @param {Object} opts Optional parameters
   * @param {Boolean} [cascadeDelete] Specifies whether to delete any location groups in this location category. Default: false
   * @param {module:api/LocationCategoriesApi~deleteCwmsDataLocationCategoryWithCategoryIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(LocationCategoriesApi, [{
    key: "deleteCwmsDataLocationCategoryWithCategoryId",
    value: function deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCwmsDataLocationCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataLocationCategoryWithCategoryId");
      }
      var pathParams = {
        'category-id': categoryId
      };
      var queryParams = {
        'office': office,
        'cascade-delete': opts['cascadeDelete']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/location/category/{category-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLocationCategory operation.
     * @callback module:api/LocationCategoriesApi~getCwmsDataLocationCategoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LocationCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData location category
     * Returns CWMS Location Category Data
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     * @param {module:api/LocationCategoriesApi~getCwmsDataLocationCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LocationCategory>}
     */
  }, {
    key: "getCwmsDataLocationCategory",
    value: function getCwmsDataLocationCategory(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LocationCategory["default"]];
      return this.apiClient.callApi('/cwms-data/location/category', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLocationCategoryWithCategoryId operation.
     * @callback module:api/LocationCategoriesApi~getCwmsDataLocationCategoryWithCategoryIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData location category with categoryId
     * Retrieves requested Location Category
     * @param {String} categoryId Specifies the Category whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the Location Category whose data is to be included in the response.
     * @param {module:api/LocationCategoriesApi~getCwmsDataLocationCategoryWithCategoryIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationCategory}
     */
  }, {
    key: "getCwmsDataLocationCategoryWithCategoryId",
    value: function getCwmsDataLocationCategoryWithCategoryId(categoryId, office, callback) {
      var postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCwmsDataLocationCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataLocationCategoryWithCategoryId");
      }
      var pathParams = {
        'category-id': categoryId
      };
      var queryParams = {
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LocationCategory["default"];
      return this.apiClient.callApi('/cwms-data/location/category/{category-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataLocationCategory operation.
     * @callback module:api/LocationCategoriesApi~postCwmsDataLocationCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData location category
     * Create new LocationCategory
     * @param {module:model/LocationCategory} locationCategory 
     * @param {module:api/LocationCategoriesApi~postCwmsDataLocationCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataLocationCategory",
    value: function postCwmsDataLocationCategory(locationCategory, callback) {
      var postBody = locationCategory;
      // verify the required parameter 'locationCategory' is set
      if (locationCategory === undefined || locationCategory === null) {
        throw new Error("Missing the required parameter 'locationCategory' when calling postCwmsDataLocationCategory");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/location/category', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return LocationCategoriesApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/LocationCategory":63}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _LocationGroup = _interopRequireDefault(require("../model/LocationGroup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* LocationGroups service.
* @module api/LocationGroupsApi
* @version 3.0
*/
var LocationGroupsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new LocationGroupsApi. 
  * @alias module:api/LocationGroupsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LocationGroupsApi(apiClient) {
    _classCallCheck(this, LocationGroupsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataLocationGroupWithGroupId operation.
   * @callback module:api/LocationGroupsApi~deleteCwmsDataLocationGroupWithGroupIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData location group with groupId
   * Deletes requested location group
   * @param {String} groupId The location group to be deleted
   * @param {String} categoryId Specifies the location category of the location group to be deleted
   * @param {String} office Specifies the owning office of the location group to be deleted
   * @param {Object} opts Optional parameters
   * @param {Boolean} [cascadeDelete] Specifies whether to specifies whether to unassign any location assignments. Default: false
   * @param {module:api/LocationGroupsApi~deleteCwmsDataLocationGroupWithGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(LocationGroupsApi, [{
    key: "deleteCwmsDataLocationGroupWithGroupId",
    value: function deleteCwmsDataLocationGroupWithGroupId(groupId, categoryId, office, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteCwmsDataLocationGroupWithGroupId");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCwmsDataLocationGroupWithGroupId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataLocationGroupWithGroupId");
      }
      var pathParams = {
        'group-id': groupId
      };
      var queryParams = {
        'category-id': categoryId,
        'office': office,
        'cascade-delete': opts['cascadeDelete']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/location/group/{group-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLocationGroup operation.
     * @callback module:api/LocationGroupsApi~getCwmsDataLocationGroupCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LocationGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData location group
     * Returns CWMS Location Groups Data
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param {Boolean} [includeAssigned] Include the assigned locations in the returned location groups. (default: false)
     * @param {String} [locationCategoryLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the location category id
     * @param {module:api/LocationGroupsApi~getCwmsDataLocationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LocationGroup>}
     */
  }, {
    key: "getCwmsDataLocationGroup",
    value: function getCwmsDataLocationGroup(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'include-assigned': opts['includeAssigned'],
        'location-category-like': opts['locationCategoryLike']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/csv'];
      var returnType = [_LocationGroup["default"]];
      return this.apiClient.callApi('/cwms-data/location/group', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLocationGroupWithGroupId operation.
     * @callback module:api/LocationGroupsApi~getCwmsDataLocationGroupWithGroupIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData location group with groupId
     * Retrieves requested Location Group
     * @param {String} groupId Specifies the location_group whose data is to be included in the response
     * @param {String} office Specifies the owning office of the location group whose data is to be included in the response.
     * @param {String} categoryId Specifies the category containing the location group whose data is to be included in the response.
     * @param {module:api/LocationGroupsApi~getCwmsDataLocationGroupWithGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationGroup}
     */
  }, {
    key: "getCwmsDataLocationGroupWithGroupId",
    value: function getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getCwmsDataLocationGroupWithGroupId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataLocationGroupWithGroupId");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCwmsDataLocationGroupWithGroupId");
      }
      var pathParams = {
        'group-id': groupId
      };
      var queryParams = {
        'office': office,
        'category-id': categoryId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/csv', 'application/geo+json'];
      var returnType = _LocationGroup["default"];
      return this.apiClient.callApi('/cwms-data/location/group/{group-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataLocationGroupWithGroupId operation.
     * @callback module:api/LocationGroupsApi~patchCwmsDataLocationGroupWithGroupIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData location group with groupId
     * Update existing LocationGroup
     * @param {String} groupId 
     * @param {String} office Specifies the owning office of the location group to be updated
     * @param {module:model/LocationGroup} locationGroup 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [replaceAssignedLocs] Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     * @param {module:api/LocationGroupsApi~patchCwmsDataLocationGroupWithGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataLocationGroupWithGroupId",
    value: function patchCwmsDataLocationGroupWithGroupId(groupId, office, locationGroup, opts, callback) {
      opts = opts || {};
      var postBody = locationGroup;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling patchCwmsDataLocationGroupWithGroupId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling patchCwmsDataLocationGroupWithGroupId");
      }
      // verify the required parameter 'locationGroup' is set
      if (locationGroup === undefined || locationGroup === null) {
        throw new Error("Missing the required parameter 'locationGroup' when calling patchCwmsDataLocationGroupWithGroupId");
      }
      var pathParams = {
        'group-id': groupId
      };
      var queryParams = {
        'replace-assigned-locs': opts['replaceAssignedLocs'],
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/location/group/{group-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataLocationGroup operation.
     * @callback module:api/LocationGroupsApi~postCwmsDataLocationGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData location group
     * Create new LocationGroup
     * @param {module:model/LocationGroup} locationGroup 
     * @param {module:api/LocationGroupsApi~postCwmsDataLocationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataLocationGroup",
    value: function postCwmsDataLocationGroup(locationGroup, callback) {
      var postBody = locationGroup;
      // verify the required parameter 'locationGroup' is set
      if (locationGroup === undefined || locationGroup === null) {
        throw new Error("Missing the required parameter 'locationGroup' when calling postCwmsDataLocationGroup");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/location/group', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return LocationGroupsApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/LocationGroup":64}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _Location = _interopRequireDefault(require("../model/Location"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Locations service.
* @module api/LocationsApi
* @version 3.0
*/
var LocationsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new LocationsApi. 
  * @alias module:api/LocationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LocationsApi(apiClient) {
    _classCallCheck(this, LocationsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataLocationsWithLocationId operation.
   * @callback module:api/LocationsApi~deleteCwmsDataLocationsWithLocationIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData locations with locationId
   * Delete CWMS Location
   * @param {String} locationId 
   * @param {Object} opts Optional parameters
   * @param {String} [office] Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
   * @param {module:api/LocationsApi~deleteCwmsDataLocationsWithLocationIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(LocationsApi, [{
    key: "deleteCwmsDataLocationsWithLocationId",
    value: function deleteCwmsDataLocationsWithLocationId(locationId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling deleteCwmsDataLocationsWithLocationId");
      }
      var pathParams = {
        'location-id': locationId
      };
      var queryParams = {
        'office': opts['office']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/locations/{location-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLocations operation.
     * @callback module:api/LocationsApi~getCwmsDataLocationsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData locations
     * Returns CWMS Location Data
     * @param {Object} opts Optional parameters
     * @param {String} [names] Specifies the name(s) of the location(s) whose data is to be included in the response
     * @param {String} [office] Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {String} [datum] Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param {String} [format] Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     * @param {module:api/LocationsApi~getCwmsDataLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "getCwmsDataLocations",
    value: function getCwmsDataLocations(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'names': opts['names'],
        'office': opts['office'],
        'unit': opts['unit'],
        'datum': opts['datum'],
        'format': opts['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/tab-separated-values', 'text/csv', 'application/xml', 'application/vnd.opengis.waterml+xml', 'application/geo+json', ''];
      var returnType = Object;
      return this.apiClient.callApi('/cwms-data/locations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataLocationsWithLocationId operation.
     * @callback module:api/LocationsApi~getCwmsDataLocationsWithLocationIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Location} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData locations with locationId
     * Returns CWMS Location Data
     * @param {String} locationId 
     * @param {String} office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {Object} opts Optional parameters
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {module:api/LocationsApi~getCwmsDataLocationsWithLocationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Location}
     */
  }, {
    key: "getCwmsDataLocationsWithLocationId",
    value: function getCwmsDataLocationsWithLocationId(locationId, office, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling getCwmsDataLocationsWithLocationId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataLocationsWithLocationId");
      }
      var pathParams = {
        'location-id': locationId
      };
      var queryParams = {
        'office': office,
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/xml;version=2', 'application/json'];
      var returnType = _Location["default"];
      return this.apiClient.callApi('/cwms-data/locations/{location-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataLocationsWithLocationId operation.
     * @callback module:api/LocationsApi~patchCwmsDataLocationsWithLocationIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData locations with locationId
     * Update CWMS Location
     * @param {String} locationId 
     * @param {module:model/Location} location 
     * @param {module:api/LocationsApi~patchCwmsDataLocationsWithLocationIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataLocationsWithLocationId",
    value: function patchCwmsDataLocationsWithLocationId(locationId, location, callback) {
      var postBody = location;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling patchCwmsDataLocationsWithLocationId");
      }
      // verify the required parameter 'location' is set
      if (location === undefined || location === null) {
        throw new Error("Missing the required parameter 'location' when calling patchCwmsDataLocationsWithLocationId");
      }
      var pathParams = {
        'location-id': locationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/locations/{location-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataLocations operation.
     * @callback module:api/LocationsApi~postCwmsDataLocationsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData locations
     * Create new CWMS Location
     * @param {module:model/Location} location 
     * @param {module:api/LocationsApi~postCwmsDataLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataLocations",
    value: function postCwmsDataLocations(location, callback) {
      var postBody = location;
      // verify the required parameter 'location' is set
      if (location === undefined || location === null) {
        throw new Error("Missing the required parameter 'location' when calling postCwmsDataLocations");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/locations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return LocationsApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/Location":60}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _CsvV1Office = _interopRequireDefault(require("../model/CsvV1Office"));
var _Office = _interopRequireDefault(require("../model/Office"));
var _OfficeFormatV = _interopRequireDefault(require("../model/OfficeFormatV1"));
var _TabV1Office = _interopRequireDefault(require("../model/TabV1Office"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Offices service.
* @module api/OfficesApi
* @version 3.0
*/
var OfficesApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new OfficesApi. 
  * @alias module:api/OfficesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OfficesApi(apiClient) {
    _classCallCheck(this, OfficesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataOffices operation.
   * @callback module:api/OfficesApi~getCwmsDataOfficesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OfficeFormatV1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData offices
   * @param {Object} opts Optional parameters
   * @param {String} [format] (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
   * @param {Boolean} [hasData] A flag ('True'/'False') When set to true this returns offices that have operational data. Default value is <b>False</b>,. <a href=\"https://github.com/USACE/cwms-data-api/issues/321\" target=\"_blank\">Feature #321</a>
   * @param {module:api/OfficesApi~getCwmsDataOfficesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OfficeFormatV1}
   */
  _createClass(OfficesApi, [{
    key: "getCwmsDataOffices",
    value: function getCwmsDataOffices(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'format': opts['format'],
        'has-data': opts['hasData']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['', 'application/json;version=2', 'application/json', 'text/tab-separated-values', 'text/csv', 'application/xml'];
      var returnType = _OfficeFormatV["default"];
      return this.apiClient.callApi('/cwms-data/offices', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataOfficesWithOffice operation.
     * @callback module:api/OfficesApi~getCwmsDataOfficesWithOfficeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OfficeFormatV1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData offices with office
     * @param {String} office The 3 letter office ID you want more information for
     * @param {Object} opts Optional parameters
     * @param {String} [format] (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param {module:api/OfficesApi~getCwmsDataOfficesWithOfficeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OfficeFormatV1}
     */
  }, {
    key: "getCwmsDataOfficesWithOffice",
    value: function getCwmsDataOfficesWithOffice(office, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataOfficesWithOffice");
      }
      var pathParams = {
        'office': office
      };
      var queryParams = {
        'format': opts['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['', 'application/json;version=2', 'application/json', 'text/tab-separated-values', 'text/csv', 'application/xml'];
      var returnType = _OfficeFormatV["default"];
      return this.apiClient.callApi('/cwms-data/offices/{office}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return OfficesApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/CsvV1Office":54,"../model/Office":67,"../model/OfficeFormatV1":69,"../model/TabV1Office":90}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Parameters service.
* @module api/ParametersApi
* @version 3.0
*/
var ParametersApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new ParametersApi. 
  * @alias module:api/ParametersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ParametersApi(apiClient) {
    _classCallCheck(this, ParametersApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataParameters operation.
   * @callback module:api/ParametersApi~getCwmsDataParametersCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData parameters
   * @param {Object} opts Optional parameters
   * @param {String} [format] Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
   * @param {module:api/ParametersApi~getCwmsDataParametersCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(ParametersApi, [{
    key: "getCwmsDataParameters",
    value: function getCwmsDataParameters(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'format': opts['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/parameters', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ParametersApi;
}();

},{"../ApiClient":16,"../model/CdaError":50}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _Pool = _interopRequireDefault(require("../model/Pool"));
var _Pools = _interopRequireDefault(require("../model/Pools"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Pools service.
* @module api/PoolsApi
* @version 3.0
*/
var PoolsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new PoolsApi. 
  * @alias module:api/PoolsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PoolsApi(apiClient) {
    _classCallCheck(this, PoolsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataPools operation.
   * @callback module:api/PoolsApi~getCwmsDataPoolsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Pools} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData pools
   * Returns Pools Data
   * @param {Object} opts Optional parameters
   * @param {String} [office] Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned.
   * @param {String} [idMask] Project Id mask. Default value:*
   * @param {String} [nameMask] Name mask. Default value:*
   * @param {String} [bottomMask] Bottom level mask. Default value:*
   * @param {String} [topMask] Top level mask. Default value:*
   * @param {String} [includeExplicit] Specifies if the results should include explicit Pools. Default value:false
   * @param {String} [includeImplicit] Specifies if the results should include implicit Pools. Default value:true
   * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
   * @param {Number} [pageSize] How many entries per page returned. Default 100.
   * @param {module:api/PoolsApi~getCwmsDataPoolsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Pools}
   */
  _createClass(PoolsApi, [{
    key: "getCwmsDataPools",
    value: function getCwmsDataPools(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'id-mask': opts['idMask'],
        'name-mask': opts['nameMask'],
        'bottom-mask': opts['bottomMask'],
        'top-mask': opts['topMask'],
        'include-explicit': opts['includeExplicit'],
        'include-implicit': opts['includeImplicit'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _Pools["default"];
      return this.apiClient.callApi('/cwms-data/pools', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataPoolsWithPoolId operation.
     * @callback module:api/PoolsApi~getCwmsDataPoolsWithPoolIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData pools with poolId
     * Retrieves requested Pool
     * @param {String} poolId Specifies the pool whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the Pool whose data is to be included in the response.
     * @param {String} projectId Specifies the project-id of the Pool whose data is to be included in the response.
     * @param {Object} opts Optional parameters
     * @param {String} [bottomMask] Bottom level mask. Default value:*
     * @param {String} [topMask] Top level mask. Default value:*
     * @param {String} [includeExplicit] Specifies if the results should include explicit Pools. Default value:false
     * @param {String} [includeImplicit] Specifies if the results should include implicit Pools. Default value:true
     * @param {module:api/PoolsApi~getCwmsDataPoolsWithPoolIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pool}
     */
  }, {
    key: "getCwmsDataPoolsWithPoolId",
    value: function getCwmsDataPoolsWithPoolId(poolId, office, projectId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling getCwmsDataPoolsWithPoolId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataPoolsWithPoolId");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getCwmsDataPoolsWithPoolId");
      }
      var pathParams = {
        'pool-id': poolId
      };
      var queryParams = {
        'office': office,
        'project-id': projectId,
        'bottom-mask': opts['bottomMask'],
        'top-mask': opts['topMask'],
        'include-explicit': opts['includeExplicit'],
        'include-implicit': opts['includeImplicit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _Pool["default"];
      return this.apiClient.callApi('/cwms-data/pools/{pool-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return PoolsApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/Pool":74,"../model/Pools":76}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _DatabaseLoadMethod = _interopRequireDefault(require("../model/DatabaseLoadMethod"));
var _DeleteMethod = _interopRequireDefault(require("../model/DeleteMethod"));
var _RatingMetadataList = _interopRequireDefault(require("../model/RatingMetadataList"));
var _RatingSpec = _interopRequireDefault(require("../model/RatingSpec"));
var _RatingSpecs = _interopRequireDefault(require("../model/RatingSpecs"));
var _RatingTemplate = _interopRequireDefault(require("../model/RatingTemplate"));
var _RatingTemplates = _interopRequireDefault(require("../model/RatingTemplates"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Ratings service.
* @module api/RatingsApi
* @version 3.0
*/
var RatingsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new RatingsApi. 
  * @alias module:api/RatingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RatingsApi(apiClient) {
    _classCallCheck(this, RatingsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataRatingsSpecWithRatingId operation.
   * @callback module:api/RatingsApi~deleteCwmsDataRatingsSpecWithRatingIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData ratings spec with ratingId
   * Deletes requested rating specification
   * @param {String} ratingId The rating-spec-id of the ratings data to be deleted.
   * @param {String} office Specifies the owning office of the ratings to be deleted.
   * @param {module:model/DeleteMethod} method Specifies the delete method used.
   * @param {module:api/RatingsApi~deleteCwmsDataRatingsSpecWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(RatingsApi, [{
    key: "deleteCwmsDataRatingsSpecWithRatingId",
    value: function deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method, callback) {
      var postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling deleteCwmsDataRatingsSpecWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataRatingsSpecWithRatingId");
      }
      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling deleteCwmsDataRatingsSpecWithRatingId");
      }
      var pathParams = {
        'rating-id': ratingId
      };
      var queryParams = {
        'office': office,
        'method': method
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/ratings/spec/{rating-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteCwmsDataRatingsTemplateWithTemplateId operation.
     * @callback module:api/RatingsApi~deleteCwmsDataRatingsTemplateWithTemplateIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cwmsData ratings template with templateId
     * Deletes requested rating specification
     * @param {String} templateId The rating-template-id of the ratings data to be deleted.
     * @param {String} office Specifies the owning office of the ratings to be deleted.
     * @param {module:model/DeleteMethod} method Specifies the delete method used.
     * @param {module:api/RatingsApi~deleteCwmsDataRatingsTemplateWithTemplateIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteCwmsDataRatingsTemplateWithTemplateId",
    value: function deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method, callback) {
      var postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteCwmsDataRatingsTemplateWithTemplateId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataRatingsTemplateWithTemplateId");
      }
      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling deleteCwmsDataRatingsTemplateWithTemplateId");
      }
      var pathParams = {
        'template-id': templateId
      };
      var queryParams = {
        'office': office,
        'method': method
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/ratings/template/{template-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteCwmsDataRatingsWithRatingId operation.
     * @callback module:api/RatingsApi~deleteCwmsDataRatingsWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cwmsData ratings with ratingId
     * @param {String} ratingId The rating-id of the effective dates to be deleted. 
     * @param {String} office Specifies the office of the ratings to be deleted.
     * @param {String} begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {String} end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {Object} opts Optional parameters
     * @param {String} [timezone] This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     * @param {module:api/RatingsApi~deleteCwmsDataRatingsWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteCwmsDataRatingsWithRatingId",
    value: function deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling deleteCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'begin' is set
      if (begin === undefined || begin === null) {
        throw new Error("Missing the required parameter 'begin' when calling deleteCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'end' is set
      if (end === undefined || end === null) {
        throw new Error("Missing the required parameter 'end' when calling deleteCwmsDataRatingsWithRatingId");
      }
      var pathParams = {
        'rating-id': ratingId
      };
      var queryParams = {
        'office': office,
        'begin': begin,
        'end': end,
        'timezone': opts['timezone']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/ratings/{rating-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatings operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings
     * @param {Object} opts Optional parameters
     * @param {String} [name] Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @param {String} [office] Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {String} [datum] Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param {String} [at] Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @param {String} [end] Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param {String} [format] Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default)
     * @param {module:api/RatingsApi~getCwmsDataRatingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "getCwmsDataRatings",
    value: function getCwmsDataRatings(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'name': opts['name'],
        'office': opts['office'],
        'unit': opts['unit'],
        'datum': opts['datum'],
        'at': opts['at'],
        'end': opts['end'],
        'timezone': opts['timezone'],
        'format': opts['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml', 'text/tab-separated-values', 'text/csv'];
      var returnType = Object;
      return this.apiClient.callApi('/cwms-data/ratings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsMetadata operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingMetadataList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings metadata
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [ratingIdMask] RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param {String} [start] Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used.
     * @param {String} [end] Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used.
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 50.
     * @param {module:api/RatingsApi~getCwmsDataRatingsMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingMetadataList}
     */
  }, {
    key: "getCwmsDataRatingsMetadata",
    value: function getCwmsDataRatingsMetadata(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'rating-id-mask': opts['ratingIdMask'],
        'start': opts['start'],
        'end': opts['end'],
        'timezone': opts['timezone'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _RatingMetadataList["default"];
      return this.apiClient.callApi('/cwms-data/ratings/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsSpec operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsSpecCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingSpecs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings spec
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [ratingIdMask] Posix <a href=\"regexp.html\">regular expression</a>  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 100.
     * @param {module:api/RatingsApi~getCwmsDataRatingsSpecCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingSpecs}
     */
  }, {
    key: "getCwmsDataRatingsSpec",
    value: function getCwmsDataRatingsSpec(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'rating-id-mask': opts['ratingIdMask'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _RatingSpecs["default"];
      return this.apiClient.callApi('/cwms-data/ratings/spec', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsSpecWithRatingId operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsSpecWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingSpec} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings spec with ratingId
     * @param {String} ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param {String} office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {module:api/RatingsApi~getCwmsDataRatingsSpecWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingSpec}
     */
  }, {
    key: "getCwmsDataRatingsSpecWithRatingId",
    value: function getCwmsDataRatingsSpecWithRatingId(ratingId, office, callback) {
      var postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling getCwmsDataRatingsSpecWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataRatingsSpecWithRatingId");
      }
      var pathParams = {
        'rating-id': ratingId
      };
      var queryParams = {
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _RatingSpec["default"];
      return this.apiClient.callApi('/cwms-data/ratings/spec/{rating-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsTemplate operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingTemplates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings template
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [templateIdMask] RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 100.
     * @param {module:api/RatingsApi~getCwmsDataRatingsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingTemplates}
     */
  }, {
    key: "getCwmsDataRatingsTemplate",
    value: function getCwmsDataRatingsTemplate(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'template-id-mask': opts['templateIdMask'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _RatingTemplates["default"];
      return this.apiClient.callApi('/cwms-data/ratings/template', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsTemplateWithTemplateId operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsTemplateWithTemplateIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RatingTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings template with templateId
     * @param {String} templateId Specifies the template whose data is to be included in the response
     * @param {String} office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {module:api/RatingsApi~getCwmsDataRatingsTemplateWithTemplateIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RatingTemplate>}
     */
  }, {
    key: "getCwmsDataRatingsTemplateWithTemplateId",
    value: function getCwmsDataRatingsTemplateWithTemplateId(templateId, office, callback) {
      var postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getCwmsDataRatingsTemplateWithTemplateId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataRatingsTemplateWithTemplateId");
      }
      var pathParams = {
        'template-id': templateId
      };
      var queryParams = {
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = [_RatingTemplate["default"]];
      return this.apiClient.callApi('/cwms-data/ratings/template/{template-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsWithRatingId operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings with ratingId
     * Returns CWMS Rating Data
     * @param {String} ratingId The rating-id of the effective dates to be retrieve. 
     * @param {String} office Specifies the owning office of the ratingset to be included in the response.
     * @param {Object} opts Optional parameters
     * @param {String} [begin] Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used.
     * @param {String} [end] Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used.
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param {module:model/DatabaseLoadMethod} [method] Specifies the retrieval method used.  If no method is provided EAGER will be used.
     * @param {module:api/RatingsApi~getCwmsDataRatingsWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "getCwmsDataRatingsWithRatingId",
    value: function getCwmsDataRatingsWithRatingId(ratingId, office, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling getCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataRatingsWithRatingId");
      }
      var pathParams = {
        'rating-id': ratingId
      };
      var queryParams = {
        'office': office,
        'begin': opts['begin'],
        'end': opts['end'],
        'timezone': opts['timezone'],
        'method': opts['method']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/xml;version=2', 'application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/cwms-data/ratings/{rating-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataRatingsWithRatingId operation.
     * @callback module:api/RatingsApi~patchCwmsDataRatingsWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData ratings with ratingId
     * Update a RatingSet
     * @param {String} ratingId 
     * @param {Object.<String, Object>} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [storeTemplate] Also store updates to the rating template. Default: true
     * @param {module:api/RatingsApi~patchCwmsDataRatingsWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataRatingsWithRatingId",
    value: function patchCwmsDataRatingsWithRatingId(ratingId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling patchCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchCwmsDataRatingsWithRatingId");
      }
      var pathParams = {
        'rating-id': ratingId
      };
      var queryParams = {
        'store-template': opts['storeTemplate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/xml;version=2', 'application/json;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/ratings/{rating-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataRatings operation.
     * @callback module:api/RatingsApi~postCwmsDataRatingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData ratings
     * Create new RatingSet
     * @param {Object.<String, Object>} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [storeTemplate] Also store updates to the rating template. Default: true
     * @param {module:api/RatingsApi~postCwmsDataRatingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataRatings",
    value: function postCwmsDataRatings(body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postCwmsDataRatings");
      }
      var pathParams = {};
      var queryParams = {
        'store-template': opts['storeTemplate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/xml;version=2', 'application/json;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/ratings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataRatingsSpec operation.
     * @callback module:api/RatingsApi~postCwmsDataRatingsSpecCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData ratings spec
     * Create new Rating Specification
     * @param {module:model/RatingSpec} ratingSpec 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/RatingsApi~postCwmsDataRatingsSpecCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataRatingsSpec",
    value: function postCwmsDataRatingsSpec(ratingSpec, opts, callback) {
      opts = opts || {};
      var postBody = ratingSpec;
      // verify the required parameter 'ratingSpec' is set
      if (ratingSpec === undefined || ratingSpec === null) {
        throw new Error("Missing the required parameter 'ratingSpec' when calling postCwmsDataRatingsSpec");
      }
      var pathParams = {};
      var queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/xml;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/ratings/spec', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataRatingsTemplate operation.
     * @callback module:api/RatingsApi~postCwmsDataRatingsTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData ratings template
     * Create new Rating Template
     * @param {module:model/RatingTemplate} ratingTemplate 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/RatingsApi~postCwmsDataRatingsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataRatingsTemplate",
    value: function postCwmsDataRatingsTemplate(ratingTemplate, opts, callback) {
      opts = opts || {};
      var postBody = ratingTemplate;
      // verify the required parameter 'ratingTemplate' is set
      if (ratingTemplate === undefined || ratingTemplate === null) {
        throw new Error("Missing the required parameter 'ratingTemplate' when calling postCwmsDataRatingsTemplate");
      }
      var pathParams = {};
      var queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/xml;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/ratings/template', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return RatingsApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/DatabaseLoadMethod":55,"../model/DeleteMethod":56,"../model/RatingMetadataList":78,"../model/RatingSpec":79,"../model/RatingSpecs":80,"../model/RatingTemplate":81,"../model/RatingTemplates":82}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _State = _interopRequireDefault(require("../model/State"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* States service.
* @module api/StatesApi
* @version 3.0
*/
var StatesApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new StatesApi. 
  * @alias module:api/StatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StatesApi(apiClient) {
    _classCallCheck(this, StatesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataStates operation.
   * @callback module:api/StatesApi~getCwmsDataStatesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/State>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData states
   * @param {module:api/StatesApi~getCwmsDataStatesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/State>}
   */
  _createClass(StatesApi, [{
    key: "getCwmsDataStates",
    value: function getCwmsDataStates(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = [_State["default"]];
      return this.apiClient.callApi('/cwms-data/states', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return StatesApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/State":85}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _StoreRule = _interopRequireDefault(require("../model/StoreRule"));
var _TimeSeries = _interopRequireDefault(require("../model/TimeSeries"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* TimeSeries service.
* @module api/TimeSeriesApi
* @version 3.0
*/
var TimeSeriesApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeSeriesApi. 
  * @alias module:api/TimeSeriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeSeriesApi(apiClient) {
    _classCallCheck(this, TimeSeriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataTimeseriesWithTimeseries operation.
   * @callback module:api/TimeSeriesApi~deleteCwmsDataTimeseriesWithTimeseriesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData timeseries with timeseries
   * @param {String} timeseries The timeseries-id of the timeseries values to be deleted. 
   * @param {String} office Specifies the office of the timeseries to be deleted.
   * @param {String} begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
   * @param {String} end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
   * @param {Object} opts Optional parameters
   * @param {String} [timezone] This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
   * @param {String} [versionDate] The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version.
   * @param {Boolean} [startTimeInclusive] A flag specifying whether any data at the start time should be deleted ('True') or only data <b><em>after</em></b> the start time ('False').  Default value is True
   * @param {Boolean} [endTimeInclusive] A flag ('True'/'False') specifying whether any data at the end time should be deleted ('True') or only data <b><em>before</em></b> the end time ('False'). Default value is False
   * @param {Boolean} [maxVersion] A flag ('True'/'False') specifying whether to use the earliest ('False') or latest ('True') version date for each time if p_version_date is NULL.  Default is 'True'
   * @param {Boolean} [overrideProtection] A flag ('True'/'False') specifying whether to delete protected data. Default is False
   * @param {module:api/TimeSeriesApi~deleteCwmsDataTimeseriesWithTimeseriesCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(TimeSeriesApi, [{
    key: "deleteCwmsDataTimeseriesWithTimeseries",
    value: function deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, begin, end, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'timeseries' is set
      if (timeseries === undefined || timeseries === null) {
        throw new Error("Missing the required parameter 'timeseries' when calling deleteCwmsDataTimeseriesWithTimeseries");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataTimeseriesWithTimeseries");
      }
      // verify the required parameter 'begin' is set
      if (begin === undefined || begin === null) {
        throw new Error("Missing the required parameter 'begin' when calling deleteCwmsDataTimeseriesWithTimeseries");
      }
      // verify the required parameter 'end' is set
      if (end === undefined || end === null) {
        throw new Error("Missing the required parameter 'end' when calling deleteCwmsDataTimeseriesWithTimeseries");
      }
      var pathParams = {
        'timeseries': timeseries
      };
      var queryParams = {
        'office': office,
        'begin': begin,
        'end': end,
        'timezone': opts['timezone'],
        'version-date': opts['versionDate'],
        'start-time-inclusive': opts['startTimeInclusive'],
        'end-time-inclusive': opts['endTimeInclusive'],
        'max-version': opts['maxVersion'],
        'override-protection': opts['overrideProtection']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/{timeseries}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseries operation.
     * @callback module:api/TimeSeriesApi~getCwmsDataTimeseriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeSeries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries
     * @param {String} name Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {String} [datum] Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param {String} [begin] Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {String} [end] Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone.
     * @param {String} [format] Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default)
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 500.
     * @param {module:api/TimeSeriesApi~getCwmsDataTimeseriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeSeries}
     */
  }, {
    key: "getCwmsDataTimeseries",
    value: function getCwmsDataTimeseries(name, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getCwmsDataTimeseries");
      }
      var pathParams = {};
      var queryParams = {
        'name': name,
        'office': opts['office'],
        'unit': opts['unit'],
        'datum': opts['datum'],
        'begin': opts['begin'],
        'end': opts['end'],
        'timezone': opts['timezone'],
        'format': opts['format'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/xml;version=2', 'application/xml', 'application/json', ''];
      var returnType = _TimeSeries["default"];
      return this.apiClient.callApi('/cwms-data/timeseries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataTimeseriesWithTimeseries operation.
     * @callback module:api/TimeSeriesApi~patchCwmsDataTimeseriesWithTimeseriesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData timeseries with timeseries
     * Update a TimeSeries with provided values
     * @param {String} timeseries Full CWMS Timeseries name
     * @param {module:model/TimeSeries} timeSeries 
     * @param {Object} opts Optional parameters
     * @param {String} [versionDate] Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., 'format', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {String} [timezone] Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @param {Boolean} [createAsLrts] 
     * @param {module:model/StoreRule} [storeRule] The business rule to use when merging the incoming with existing data
     * @param {Boolean} [overrideProtection] A flag to ignore the protected data quality when storing data.  \"'true' or 'false'\"
     * @param {module:api/TimeSeriesApi~patchCwmsDataTimeseriesWithTimeseriesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataTimeseriesWithTimeseries",
    value: function patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, opts, callback) {
      opts = opts || {};
      var postBody = timeSeries;
      // verify the required parameter 'timeseries' is set
      if (timeseries === undefined || timeseries === null) {
        throw new Error("Missing the required parameter 'timeseries' when calling patchCwmsDataTimeseriesWithTimeseries");
      }
      // verify the required parameter 'timeSeries' is set
      if (timeSeries === undefined || timeSeries === null) {
        throw new Error("Missing the required parameter 'timeSeries' when calling patchCwmsDataTimeseriesWithTimeseries");
      }
      var pathParams = {
        'timeseries': timeseries
      };
      var queryParams = {
        'version-date': opts['versionDate'],
        'timezone': opts['timezone'],
        'create-as-lrts': opts['createAsLrts'],
        'store-rule': opts['storeRule'],
        'override-protection': opts['overrideProtection']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json;version=2', 'application/xml;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/{timeseries}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataTimeseries operation.
     * @callback module:api/TimeSeriesApi~postCwmsDataTimeseriesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData timeseries
     * Create new TimeSeries, will store any data provided
     * @param {module:model/TimeSeries} timeSeries 
     * @param {Object} opts Optional parameters
     * @param {String} [versionDate] Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., 'format', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {String} [timezone] Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @param {Boolean} [createAsLrts] Flag indicating if timeseries should be created as Local Regular Time Series. 'True' or 'False', default is 'False'
     * @param {module:model/StoreRule} [storeRule] The business rule to use when merging the incoming with existing data
     * @param {Boolean} [overrideProtection] A flag to ignore the protected data quality when storing data. 'True' or 'False'
     * @param {module:api/TimeSeriesApi~postCwmsDataTimeseriesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataTimeseries",
    value: function postCwmsDataTimeseries(timeSeries, opts, callback) {
      opts = opts || {};
      var postBody = timeSeries;
      // verify the required parameter 'timeSeries' is set
      if (timeSeries === undefined || timeSeries === null) {
        throw new Error("Missing the required parameter 'timeSeries' when calling postCwmsDataTimeseries");
      }
      var pathParams = {};
      var queryParams = {
        'version-date': opts['versionDate'],
        'timezone': opts['timezone'],
        'create-as-lrts': opts['createAsLrts'],
        'store-rule': opts['storeRule'],
        'override-protection': opts['overrideProtection']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json;version=2', 'application/xml;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return TimeSeriesApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/StoreRule":86,"../model/TimeSeries":93}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _TimeSeriesCategory = _interopRequireDefault(require("../model/TimeSeriesCategory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* TimeSeriesCategories service.
* @module api/TimeSeriesCategoriesApi
* @version 3.0
*/
var TimeSeriesCategoriesApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeSeriesCategoriesApi. 
  * @alias module:api/TimeSeriesCategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeSeriesCategoriesApi(apiClient) {
    _classCallCheck(this, TimeSeriesCategoriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataTimeseriesCategoryWithCategoryId operation.
   * @callback module:api/TimeSeriesCategoriesApi~deleteCwmsDataTimeseriesCategoryWithCategoryIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData timeseries category with categoryId
   * Deletes requested time series category
   * @param {String} categoryId The time series category to be deleted
   * @param {String} office Specifies the owning office of the time series category to be deleted
   * @param {Object} opts Optional parameters
   * @param {Boolean} [cascadeDelete] Specifies whether to delete any time series groups in this time series category. Default: false
   * @param {module:api/TimeSeriesCategoriesApi~deleteCwmsDataTimeseriesCategoryWithCategoryIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(TimeSeriesCategoriesApi, [{
    key: "deleteCwmsDataTimeseriesCategoryWithCategoryId",
    value: function deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCwmsDataTimeseriesCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataTimeseriesCategoryWithCategoryId");
      }
      var pathParams = {
        'category-id': categoryId
      };
      var queryParams = {
        'office': office,
        'cascade-delete': opts['cascadeDelete']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/category/{category-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseriesCategory operation.
     * @callback module:api/TimeSeriesCategoriesApi~getCwmsDataTimeseriesCategoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TimeSeriesCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries category
     * Returns CWMS timeseries category Data
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     * @param {module:api/TimeSeriesCategoriesApi~getCwmsDataTimeseriesCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TimeSeriesCategory>}
     */
  }, {
    key: "getCwmsDataTimeseriesCategory",
    value: function getCwmsDataTimeseriesCategory(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TimeSeriesCategory["default"]];
      return this.apiClient.callApi('/cwms-data/timeseries/category', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseriesCategoryWithCategoryId operation.
     * @callback module:api/TimeSeriesCategoriesApi~getCwmsDataTimeseriesCategoryWithCategoryIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeSeriesCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries category with categoryId
     * Retrieves requested timeseries category
     * @param {String} categoryId Specifies the Category whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the timeseries category whose data is to be included in the response.
     * @param {module:api/TimeSeriesCategoriesApi~getCwmsDataTimeseriesCategoryWithCategoryIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeSeriesCategory}
     */
  }, {
    key: "getCwmsDataTimeseriesCategoryWithCategoryId",
    value: function getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, callback) {
      var postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCwmsDataTimeseriesCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataTimeseriesCategoryWithCategoryId");
      }
      var pathParams = {
        'category-id': categoryId
      };
      var queryParams = {
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TimeSeriesCategory["default"];
      return this.apiClient.callApi('/cwms-data/timeseries/category/{category-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataTimeseriesCategory operation.
     * @callback module:api/TimeSeriesCategoriesApi~postCwmsDataTimeseriesCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData timeseries category
     * Create new TimeSeriesCategory
     * @param {module:model/TimeSeriesCategory} timeSeriesCategory 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/TimeSeriesCategoriesApi~postCwmsDataTimeseriesCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataTimeseriesCategory",
    value: function postCwmsDataTimeseriesCategory(timeSeriesCategory, opts, callback) {
      opts = opts || {};
      var postBody = timeSeriesCategory;
      // verify the required parameter 'timeSeriesCategory' is set
      if (timeSeriesCategory === undefined || timeSeriesCategory === null) {
        throw new Error("Missing the required parameter 'timeSeriesCategory' when calling postCwmsDataTimeseriesCategory");
      }
      var pathParams = {};
      var queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/category', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return TimeSeriesCategoriesApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/TimeSeriesCategory":94}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _DeleteMethod = _interopRequireDefault(require("../model/DeleteMethod"));
var _TimeSeriesIdentifierDescriptor = _interopRequireDefault(require("../model/TimeSeriesIdentifierDescriptor"));
var _TimeSeriesIdentifierDescriptors = _interopRequireDefault(require("../model/TimeSeriesIdentifierDescriptors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* TimeSeriesIdentifier service.
* @module api/TimeSeriesIdentifierApi
* @version 3.0
*/
var TimeSeriesIdentifierApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeSeriesIdentifierApi. 
  * @alias module:api/TimeSeriesIdentifierApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeSeriesIdentifierApi(apiClient) {
    _classCallCheck(this, TimeSeriesIdentifierApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId operation.
   * @callback module:api/TimeSeriesIdentifierApi~deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData timeseries identifierDescriptor with timeseriesId
   * Deletes requested timeseries identifier
   * @param {String} timeseriesId The timeseries-id of the timeseries to be deleted. 
   * @param {String} office Specifies the owning office of the timeseries to be deleted.
   * @param {module:model/DeleteMethod} method Specifies the delete method used.
   * @param {module:api/TimeSeriesIdentifierApi~deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(TimeSeriesIdentifierApi, [{
    key: "deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId",
    value: function deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method, callback) {
      var postBody = null;
      // verify the required parameter 'timeseriesId' is set
      if (timeseriesId === undefined || timeseriesId === null) {
        throw new Error("Missing the required parameter 'timeseriesId' when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      var pathParams = {
        'timeseries-id': timeseriesId
      };
      var queryParams = {
        'office': office,
        'method': method
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/identifier-descriptor/{timeseries-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseriesIdentifierDescriptor operation.
     * @callback module:api/TimeSeriesIdentifierApi~getCwmsDataTimeseriesIdentifierDescriptorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeSeriesIdentifierDescriptors} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries identifierDescriptor
     * Returns CWMS timeseries identifier descriptorData
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param {String} [timeseriesIdRegex] A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 500.
     * @param {module:api/TimeSeriesIdentifierApi~getCwmsDataTimeseriesIdentifierDescriptorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeSeriesIdentifierDescriptors}
     */
  }, {
    key: "getCwmsDataTimeseriesIdentifierDescriptor",
    value: function getCwmsDataTimeseriesIdentifierDescriptor(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'timeseries-id-regex': opts['timeseriesIdRegex'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _TimeSeriesIdentifierDescriptors["default"];
      return this.apiClient.callApi('/cwms-data/timeseries/identifier-descriptor', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId operation.
     * @callback module:api/TimeSeriesIdentifierApi~getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeSeriesIdentifierDescriptor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * Retrieves requested timeseries identifier descriptor
     * @param {String} timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param {String} office Specifies the owning office of the timeseries identifier to be included in the response.
     * @param {module:api/TimeSeriesIdentifierApi~getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeSeriesIdentifierDescriptor}
     */
  }, {
    key: "getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId",
    value: function getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, callback) {
      var postBody = null;
      // verify the required parameter 'timeseriesId' is set
      if (timeseriesId === undefined || timeseriesId === null) {
        throw new Error("Missing the required parameter 'timeseriesId' when calling getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      var pathParams = {
        'timeseries-id': timeseriesId
      };
      var queryParams = {
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;version=2', 'application/json'];
      var returnType = _TimeSeriesIdentifierDescriptor["default"];
      return this.apiClient.callApi('/cwms-data/timeseries/identifier-descriptor/{timeseries-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId operation.
     * @callback module:api/TimeSeriesIdentifierApi~patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param {String} timeseriesId 
     * @param {String} timeseriesId2 A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
     * @param {String} office Specifies the owning office of the timeseries identifier to be updated
     * @param {Object} opts Optional parameters
     * @param {Number} [intervalOffset] The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
     * @param {Number} [snapForward] The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
     * @param {Number} [snapBackward] The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
     * @param {Boolean} [active] 'True' or 'true' if the time series is active
     * @param {module:api/TimeSeriesIdentifierApi~patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId",
    value: function patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'timeseriesId' is set
      if (timeseriesId === undefined || timeseriesId === null) {
        throw new Error("Missing the required parameter 'timeseriesId' when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'timeseriesId2' is set
      if (timeseriesId2 === undefined || timeseriesId2 === null) {
        throw new Error("Missing the required parameter 'timeseriesId2' when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      var pathParams = {
        'timeseries-id': timeseriesId
      };
      var queryParams = {
        'timeseries-id': timeseriesId2,
        'office': office,
        'interval-offset': opts['intervalOffset'],
        'snap-forward': opts['snapForward'],
        'snap-backward': opts['snapBackward'],
        'active': opts['active']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/identifier-descriptor/{timeseries-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataTimeseriesIdentifierDescriptor operation.
     * @callback module:api/TimeSeriesIdentifierApi~postCwmsDataTimeseriesIdentifierDescriptorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData timeseries identifierDescriptor
     * Create new TimeSeriesIdentifierDescriptor
     * @param {module:model/TimeSeriesIdentifierDescriptor} timeSeriesIdentifierDescriptor 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/TimeSeriesIdentifierApi~postCwmsDataTimeseriesIdentifierDescriptorCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataTimeseriesIdentifierDescriptor",
    value: function postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, opts, callback) {
      opts = opts || {};
      var postBody = timeSeriesIdentifierDescriptor;
      // verify the required parameter 'timeSeriesIdentifierDescriptor' is set
      if (timeSeriesIdentifierDescriptor === undefined || timeSeriesIdentifierDescriptor === null) {
        throw new Error("Missing the required parameter 'timeSeriesIdentifierDescriptor' when calling postCwmsDataTimeseriesIdentifierDescriptor");
      }
      var pathParams = {};
      var queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json;version=2', 'application/xml;version=2'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/identifier-descriptor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return TimeSeriesIdentifierApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/DeleteMethod":56,"../model/TimeSeriesIdentifierDescriptor":98,"../model/TimeSeriesIdentifierDescriptors":99}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* TimeZones service.
* @module api/TimeZonesApi
* @version 3.0
*/
var TimeZonesApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeZonesApi. 
  * @alias module:api/TimeZonesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeZonesApi(apiClient) {
    _classCallCheck(this, TimeZonesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataTimezones operation.
   * @callback module:api/TimeZonesApi~getCwmsDataTimezonesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData timezones
   * @param {Object} opts Optional parameters
   * @param {String} [format] Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
   * @param {module:api/TimeZonesApi~getCwmsDataTimezonesCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(TimeZonesApi, [{
    key: "getCwmsDataTimezones",
    value: function getCwmsDataTimezones(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'format': opts['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timezones', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return TimeZonesApi;
}();

},{"../ApiClient":16,"../model/CdaError":50}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
var _TimeSeriesGroup = _interopRequireDefault(require("../model/TimeSeriesGroup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* TimeseriesGroups service.
* @module api/TimeseriesGroupsApi
* @version 3.0
*/
var TimeseriesGroupsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeseriesGroupsApi. 
  * @alias module:api/TimeseriesGroupsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeseriesGroupsApi(apiClient) {
    _classCallCheck(this, TimeseriesGroupsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the deleteCwmsDataTimeseriesGroupWithGroupId operation.
   * @callback module:api/TimeseriesGroupsApi~deleteCwmsDataTimeseriesGroupWithGroupIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete cwmsData timeseries group with groupId
   * Deletes requested time series group
   * @param {String} groupId The time series group to be deleted
   * @param {String} categoryId Specifies the time series category of the time series group to be deleted
   * @param {String} office Specifies the owning office of the time series group to be deleted
   * @param {module:api/TimeseriesGroupsApi~deleteCwmsDataTimeseriesGroupWithGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(TimeseriesGroupsApi, [{
    key: "deleteCwmsDataTimeseriesGroupWithGroupId",
    value: function deleteCwmsDataTimeseriesGroupWithGroupId(groupId, categoryId, office, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteCwmsDataTimeseriesGroupWithGroupId");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCwmsDataTimeseriesGroupWithGroupId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataTimeseriesGroupWithGroupId");
      }
      var pathParams = {
        'group-id': groupId
      };
      var queryParams = {
        'category-id': categoryId,
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/group/{group-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseriesGroup operation.
     * @callback module:api/TimeseriesGroupsApi~getCwmsDataTimeseriesGroupCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TimeSeriesGroup>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries group
     * Returns CWMS Timeseries Groups Data
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param {Boolean} [includeAssigned] Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param {String} [timeseriesCategoryLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries category id
     * @param {String} [timeseriesGroupLike] Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries group id
     * @param {module:api/TimeseriesGroupsApi~getCwmsDataTimeseriesGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TimeSeriesGroup>}
     */
  }, {
    key: "getCwmsDataTimeseriesGroup",
    value: function getCwmsDataTimeseriesGroup(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'office': opts['office'],
        'include-assigned': opts['includeAssigned'],
        'timeseries-category-like': opts['timeseriesCategoryLike'],
        'timeseries-group-like': opts['timeseriesGroupLike']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TimeSeriesGroup["default"]];
      return this.apiClient.callApi('/cwms-data/timeseries/group', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCwmsDataTimeseriesGroupWithGroupId operation.
     * @callback module:api/TimeseriesGroupsApi~getCwmsDataTimeseriesGroupWithGroupIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeSeriesGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData timeseries group with groupId
     * Retrieves requested timeseries group
     * @param {String} groupId Specifies the timeseries group whose data is to be included in the response
     * @param {String} office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param {String} categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     * @param {module:api/TimeseriesGroupsApi~getCwmsDataTimeseriesGroupWithGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeSeriesGroup}
     */
  }, {
    key: "getCwmsDataTimeseriesGroupWithGroupId",
    value: function getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId, callback) {
      var postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getCwmsDataTimeseriesGroupWithGroupId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataTimeseriesGroupWithGroupId");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCwmsDataTimeseriesGroupWithGroupId");
      }
      var pathParams = {
        'group-id': groupId
      };
      var queryParams = {
        'office': office,
        'category-id': categoryId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TimeSeriesGroup["default"];
      return this.apiClient.callApi('/cwms-data/timeseries/group/{group-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the patchCwmsDataTimeseriesGroupWithGroupId operation.
     * @callback module:api/TimeseriesGroupsApi~patchCwmsDataTimeseriesGroupWithGroupIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData timeseries group with groupId
     * Update existing TimeSeriesGroup
     * @param {String} groupId 
     * @param {String} office Specifies the owning office of the time series group to be updated
     * @param {module:model/TimeSeriesGroup} timeSeriesGroup 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [replaceAssignedTs] Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     * @param {module:api/TimeseriesGroupsApi~patchCwmsDataTimeseriesGroupWithGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "patchCwmsDataTimeseriesGroupWithGroupId",
    value: function patchCwmsDataTimeseriesGroupWithGroupId(groupId, office, timeSeriesGroup, opts, callback) {
      opts = opts || {};
      var postBody = timeSeriesGroup;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling patchCwmsDataTimeseriesGroupWithGroupId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling patchCwmsDataTimeseriesGroupWithGroupId");
      }
      // verify the required parameter 'timeSeriesGroup' is set
      if (timeSeriesGroup === undefined || timeSeriesGroup === null) {
        throw new Error("Missing the required parameter 'timeSeriesGroup' when calling patchCwmsDataTimeseriesGroupWithGroupId");
      }
      var pathParams = {
        'group-id': groupId
      };
      var queryParams = {
        'replace-assigned-ts': opts['replaceAssignedTs'],
        'office': office
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/group/{group-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postCwmsDataTimeseriesGroup operation.
     * @callback module:api/TimeseriesGroupsApi~postCwmsDataTimeseriesGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData timeseries group
     * Create new TimeSeriesGroup
     * @param {module:model/TimeSeriesGroup} timeSeriesGroup 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/TimeseriesGroupsApi~postCwmsDataTimeseriesGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "postCwmsDataTimeseriesGroup",
    value: function postCwmsDataTimeseriesGroup(timeSeriesGroup, opts, callback) {
      opts = opts || {};
      var postBody = timeSeriesGroup;
      // verify the required parameter 'timeSeriesGroup' is set
      if (timeSeriesGroup === undefined || timeSeriesGroup === null) {
        throw new Error("Missing the required parameter 'timeSeriesGroup' when calling postCwmsDataTimeseriesGroup");
      }
      var pathParams = {};
      var queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey', 'CwmsAAACacAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/timeseries/group', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return TimeseriesGroupsApi;
}();

},{"../ApiClient":16,"../model/CdaError":50,"../model/TimeSeriesGroup":97}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CdaError = _interopRequireDefault(require("../model/CdaError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Units service.
* @module api/UnitsApi
* @version 3.0
*/
var UnitsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new UnitsApi. 
  * @alias module:api/UnitsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UnitsApi(apiClient) {
    _classCallCheck(this, UnitsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getCwmsDataUnits operation.
   * @callback module:api/UnitsApi~getCwmsDataUnitsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get cwmsData units
   * @param {Object} opts Optional parameters
   * @param {String} [format] Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
   * @param {module:api/UnitsApi~getCwmsDataUnitsCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(UnitsApi, [{
    key: "getCwmsDataUnits",
    value: function getCwmsDataUnits(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'format': opts['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/cwms-data/units', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return UnitsApi;
}();

},{"../ApiClient":16,"../model/CdaError":50}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AbstractRatingMetadata", {
  enumerable: true,
  get: function get() {
    return _AbstractRatingMetadata["default"];
  }
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient["default"];
  }
});
Object.defineProperty(exports, "ApiKey", {
  enumerable: true,
  get: function get() {
    return _ApiKey["default"];
  }
});
Object.defineProperty(exports, "AssignedLocation", {
  enumerable: true,
  get: function get() {
    return _AssignedLocation["default"];
  }
});
Object.defineProperty(exports, "AssignedTimeSeries", {
  enumerable: true,
  get: function get() {
    return _AssignedTimeSeries["default"];
  }
});
Object.defineProperty(exports, "AuthorizationApi", {
  enumerable: true,
  get: function get() {
    return _AuthorizationApi["default"];
  }
});
Object.defineProperty(exports, "Basin", {
  enumerable: true,
  get: function get() {
    return _Basin["default"];
  }
});
Object.defineProperty(exports, "BasinsApi", {
  enumerable: true,
  get: function get() {
    return _BasinsApi["default"];
  }
});
Object.defineProperty(exports, "Blob", {
  enumerable: true,
  get: function get() {
    return _Blob["default"];
  }
});
Object.defineProperty(exports, "BlobApi", {
  enumerable: true,
  get: function get() {
    return _BlobApi["default"];
  }
});
Object.defineProperty(exports, "Blobs", {
  enumerable: true,
  get: function get() {
    return _Blobs["default"];
  }
});
Object.defineProperty(exports, "Catalog", {
  enumerable: true,
  get: function get() {
    return _Catalog["default"];
  }
});
Object.defineProperty(exports, "CatalogApi", {
  enumerable: true,
  get: function get() {
    return _CatalogApi["default"];
  }
});
Object.defineProperty(exports, "CatalogEntry", {
  enumerable: true,
  get: function get() {
    return _CatalogEntry["default"];
  }
});
Object.defineProperty(exports, "CatalogableEndpoint", {
  enumerable: true,
  get: function get() {
    return _CatalogableEndpoint["default"];
  }
});
Object.defineProperty(exports, "CdaError", {
  enumerable: true,
  get: function get() {
    return _CdaError["default"];
  }
});
Object.defineProperty(exports, "Clob", {
  enumerable: true,
  get: function get() {
    return _Clob["default"];
  }
});
Object.defineProperty(exports, "ClobApi", {
  enumerable: true,
  get: function get() {
    return _ClobApi["default"];
  }
});
Object.defineProperty(exports, "Clobs", {
  enumerable: true,
  get: function get() {
    return _Clobs["default"];
  }
});
Object.defineProperty(exports, "CountiesApi", {
  enumerable: true,
  get: function get() {
    return _CountiesApi["default"];
  }
});
Object.defineProperty(exports, "County", {
  enumerable: true,
  get: function get() {
    return _County["default"];
  }
});
Object.defineProperty(exports, "CsvV1Office", {
  enumerable: true,
  get: function get() {
    return _CsvV1Office["default"];
  }
});
Object.defineProperty(exports, "DatabaseLoadMethod", {
  enumerable: true,
  get: function get() {
    return _DatabaseLoadMethod["default"];
  }
});
Object.defineProperty(exports, "DefaultApi", {
  enumerable: true,
  get: function get() {
    return _DefaultApi["default"];
  }
});
Object.defineProperty(exports, "DeleteMethod", {
  enumerable: true,
  get: function get() {
    return _DeleteMethod["default"];
  }
});
Object.defineProperty(exports, "ExpressionRating", {
  enumerable: true,
  get: function get() {
    return _ExpressionRating["default"];
  }
});
Object.defineProperty(exports, "ExpressionRatingAllOf", {
  enumerable: true,
  get: function get() {
    return _ExpressionRatingAllOf["default"];
  }
});
Object.defineProperty(exports, "IndependentRoundingSpec", {
  enumerable: true,
  get: function get() {
    return _IndependentRoundingSpec["default"];
  }
});
Object.defineProperty(exports, "LevelsApi", {
  enumerable: true,
  get: function get() {
    return _LevelsApi["default"];
  }
});
Object.defineProperty(exports, "Location", {
  enumerable: true,
  get: function get() {
    return _Location["default"];
  }
});
Object.defineProperty(exports, "LocationAlias", {
  enumerable: true,
  get: function get() {
    return _LocationAlias["default"];
  }
});
Object.defineProperty(exports, "LocationCatalogEntry", {
  enumerable: true,
  get: function get() {
    return _LocationCatalogEntry["default"];
  }
});
Object.defineProperty(exports, "LocationCategoriesApi", {
  enumerable: true,
  get: function get() {
    return _LocationCategoriesApi["default"];
  }
});
Object.defineProperty(exports, "LocationCategory", {
  enumerable: true,
  get: function get() {
    return _LocationCategory["default"];
  }
});
Object.defineProperty(exports, "LocationGroup", {
  enumerable: true,
  get: function get() {
    return _LocationGroup["default"];
  }
});
Object.defineProperty(exports, "LocationGroupsApi", {
  enumerable: true,
  get: function get() {
    return _LocationGroupsApi["default"];
  }
});
Object.defineProperty(exports, "LocationLevel", {
  enumerable: true,
  get: function get() {
    return _LocationLevel["default"];
  }
});
Object.defineProperty(exports, "LocationLevels", {
  enumerable: true,
  get: function get() {
    return _LocationLevels["default"];
  }
});
Object.defineProperty(exports, "LocationsApi", {
  enumerable: true,
  get: function get() {
    return _LocationsApi["default"];
  }
});
Object.defineProperty(exports, "Office", {
  enumerable: true,
  get: function get() {
    return _Office["default"];
  }
});
Object.defineProperty(exports, "OfficeCSV", {
  enumerable: true,
  get: function get() {
    return _OfficeCSV["default"];
  }
});
Object.defineProperty(exports, "OfficeFormatV1", {
  enumerable: true,
  get: function get() {
    return _OfficeFormatV["default"];
  }
});
Object.defineProperty(exports, "OfficeTabulation", {
  enumerable: true,
  get: function get() {
    return _OfficeTabulation["default"];
  }
});
Object.defineProperty(exports, "OfficesApi", {
  enumerable: true,
  get: function get() {
    return _OfficesApi["default"];
  }
});
Object.defineProperty(exports, "OfficesFMT", {
  enumerable: true,
  get: function get() {
    return _OfficesFMT["default"];
  }
});
Object.defineProperty(exports, "Offset", {
  enumerable: true,
  get: function get() {
    return _Offset["default"];
  }
});
Object.defineProperty(exports, "ParameterSpec", {
  enumerable: true,
  get: function get() {
    return _ParameterSpec["default"];
  }
});
Object.defineProperty(exports, "ParametersApi", {
  enumerable: true,
  get: function get() {
    return _ParametersApi["default"];
  }
});
Object.defineProperty(exports, "Pool", {
  enumerable: true,
  get: function get() {
    return _Pool["default"];
  }
});
Object.defineProperty(exports, "PoolNameType", {
  enumerable: true,
  get: function get() {
    return _PoolNameType["default"];
  }
});
Object.defineProperty(exports, "Pools", {
  enumerable: true,
  get: function get() {
    return _Pools["default"];
  }
});
Object.defineProperty(exports, "PoolsApi", {
  enumerable: true,
  get: function get() {
    return _PoolsApi["default"];
  }
});
Object.defineProperty(exports, "RatingMetadata", {
  enumerable: true,
  get: function get() {
    return _RatingMetadata["default"];
  }
});
Object.defineProperty(exports, "RatingMetadataList", {
  enumerable: true,
  get: function get() {
    return _RatingMetadataList["default"];
  }
});
Object.defineProperty(exports, "RatingSpec", {
  enumerable: true,
  get: function get() {
    return _RatingSpec["default"];
  }
});
Object.defineProperty(exports, "RatingSpecs", {
  enumerable: true,
  get: function get() {
    return _RatingSpecs["default"];
  }
});
Object.defineProperty(exports, "RatingTemplate", {
  enumerable: true,
  get: function get() {
    return _RatingTemplate["default"];
  }
});
Object.defineProperty(exports, "RatingTemplates", {
  enumerable: true,
  get: function get() {
    return _RatingTemplates["default"];
  }
});
Object.defineProperty(exports, "RatingsApi", {
  enumerable: true,
  get: function get() {
    return _RatingsApi["default"];
  }
});
Object.defineProperty(exports, "SeasonalValueBean", {
  enumerable: true,
  get: function get() {
    return _SeasonalValueBean["default"];
  }
});
Object.defineProperty(exports, "SpecifiedLevel", {
  enumerable: true,
  get: function get() {
    return _SpecifiedLevel["default"];
  }
});
Object.defineProperty(exports, "State", {
  enumerable: true,
  get: function get() {
    return _State["default"];
  }
});
Object.defineProperty(exports, "StatesApi", {
  enumerable: true,
  get: function get() {
    return _StatesApi["default"];
  }
});
Object.defineProperty(exports, "StoreRule", {
  enumerable: true,
  get: function get() {
    return _StoreRule["default"];
  }
});
Object.defineProperty(exports, "Stream", {
  enumerable: true,
  get: function get() {
    return _Stream["default"];
  }
});
Object.defineProperty(exports, "StreamLocation", {
  enumerable: true,
  get: function get() {
    return _StreamLocation["default"];
  }
});
Object.defineProperty(exports, "StreamReach", {
  enumerable: true,
  get: function get() {
    return _StreamReach["default"];
  }
});
Object.defineProperty(exports, "TabV1Office", {
  enumerable: true,
  get: function get() {
    return _TabV1Office["default"];
  }
});
Object.defineProperty(exports, "TableRating", {
  enumerable: true,
  get: function get() {
    return _TableRating["default"];
  }
});
Object.defineProperty(exports, "TableRatingAllOf", {
  enumerable: true,
  get: function get() {
    return _TableRatingAllOf["default"];
  }
});
Object.defineProperty(exports, "TimeSeries", {
  enumerable: true,
  get: function get() {
    return _TimeSeries["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesApi", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesApi["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesCategoriesApi", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesCategoriesApi["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesCategory", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesCategory["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesColumn", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesColumn["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesExtents", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesExtents["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesGroup", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesGroup["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesIdentifierApi", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesIdentifierApi["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesIdentifierDescriptor", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesIdentifierDescriptor["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesIdentifierDescriptors", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesIdentifierDescriptors["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesInterval", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesInterval["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesIntervalUnitsInner", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesIntervalUnitsInner["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesIntervalUnitsInnerDuration", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesIntervalUnitsInnerDuration["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesRecord", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesRecord["default"];
  }
});
Object.defineProperty(exports, "TimeSeriesValuesInnerInner", {
  enumerable: true,
  get: function get() {
    return _TimeSeriesValuesInnerInner["default"];
  }
});
Object.defineProperty(exports, "TimeZonesApi", {
  enumerable: true,
  get: function get() {
    return _TimeZonesApi["default"];
  }
});
Object.defineProperty(exports, "TimeseriesCatalogEntry", {
  enumerable: true,
  get: function get() {
    return _TimeseriesCatalogEntry["default"];
  }
});
Object.defineProperty(exports, "TimeseriesGroupsApi", {
  enumerable: true,
  get: function get() {
    return _TimeseriesGroupsApi["default"];
  }
});
Object.defineProperty(exports, "TransitionalRating", {
  enumerable: true,
  get: function get() {
    return _TransitionalRating["default"];
  }
});
Object.defineProperty(exports, "TransitionalRatingAllOf", {
  enumerable: true,
  get: function get() {
    return _TransitionalRatingAllOf["default"];
  }
});
Object.defineProperty(exports, "UnitSystem", {
  enumerable: true,
  get: function get() {
    return _UnitSystem["default"];
  }
});
Object.defineProperty(exports, "UnitsApi", {
  enumerable: true,
  get: function get() {
    return _UnitsApi["default"];
  }
});
Object.defineProperty(exports, "UsgsStreamRating", {
  enumerable: true,
  get: function get() {
    return _UsgsStreamRating["default"];
  }
});
Object.defineProperty(exports, "VerticalDatumInfo", {
  enumerable: true,
  get: function get() {
    return _VerticalDatumInfo["default"];
  }
});
Object.defineProperty(exports, "VirtualRating", {
  enumerable: true,
  get: function get() {
    return _VirtualRating["default"];
  }
});
Object.defineProperty(exports, "VirtualRatingAllOf", {
  enumerable: true,
  get: function get() {
    return _VirtualRatingAllOf["default"];
  }
});
var _ApiClient = _interopRequireDefault(require("./ApiClient"));
var _AbstractRatingMetadata = _interopRequireDefault(require("./model/AbstractRatingMetadata"));
var _ApiKey = _interopRequireDefault(require("./model/ApiKey"));
var _AssignedLocation = _interopRequireDefault(require("./model/AssignedLocation"));
var _AssignedTimeSeries = _interopRequireDefault(require("./model/AssignedTimeSeries"));
var _Basin = _interopRequireDefault(require("./model/Basin"));
var _Blob = _interopRequireDefault(require("./model/Blob"));
var _Blobs = _interopRequireDefault(require("./model/Blobs"));
var _Catalog = _interopRequireDefault(require("./model/Catalog"));
var _CatalogEntry = _interopRequireDefault(require("./model/CatalogEntry"));
var _CatalogableEndpoint = _interopRequireDefault(require("./model/CatalogableEndpoint"));
var _CdaError = _interopRequireDefault(require("./model/CdaError"));
var _Clob = _interopRequireDefault(require("./model/Clob"));
var _Clobs = _interopRequireDefault(require("./model/Clobs"));
var _County = _interopRequireDefault(require("./model/County"));
var _CsvV1Office = _interopRequireDefault(require("./model/CsvV1Office"));
var _DatabaseLoadMethod = _interopRequireDefault(require("./model/DatabaseLoadMethod"));
var _DeleteMethod = _interopRequireDefault(require("./model/DeleteMethod"));
var _ExpressionRating = _interopRequireDefault(require("./model/ExpressionRating"));
var _ExpressionRatingAllOf = _interopRequireDefault(require("./model/ExpressionRatingAllOf"));
var _IndependentRoundingSpec = _interopRequireDefault(require("./model/IndependentRoundingSpec"));
var _Location = _interopRequireDefault(require("./model/Location"));
var _LocationAlias = _interopRequireDefault(require("./model/LocationAlias"));
var _LocationCatalogEntry = _interopRequireDefault(require("./model/LocationCatalogEntry"));
var _LocationCategory = _interopRequireDefault(require("./model/LocationCategory"));
var _LocationGroup = _interopRequireDefault(require("./model/LocationGroup"));
var _LocationLevel = _interopRequireDefault(require("./model/LocationLevel"));
var _LocationLevels = _interopRequireDefault(require("./model/LocationLevels"));
var _Office = _interopRequireDefault(require("./model/Office"));
var _OfficeCSV = _interopRequireDefault(require("./model/OfficeCSV"));
var _OfficeFormatV = _interopRequireDefault(require("./model/OfficeFormatV1"));
var _OfficeTabulation = _interopRequireDefault(require("./model/OfficeTabulation"));
var _OfficesFMT = _interopRequireDefault(require("./model/OfficesFMT"));
var _Offset = _interopRequireDefault(require("./model/Offset"));
var _ParameterSpec = _interopRequireDefault(require("./model/ParameterSpec"));
var _Pool = _interopRequireDefault(require("./model/Pool"));
var _PoolNameType = _interopRequireDefault(require("./model/PoolNameType"));
var _Pools = _interopRequireDefault(require("./model/Pools"));
var _RatingMetadata = _interopRequireDefault(require("./model/RatingMetadata"));
var _RatingMetadataList = _interopRequireDefault(require("./model/RatingMetadataList"));
var _RatingSpec = _interopRequireDefault(require("./model/RatingSpec"));
var _RatingSpecs = _interopRequireDefault(require("./model/RatingSpecs"));
var _RatingTemplate = _interopRequireDefault(require("./model/RatingTemplate"));
var _RatingTemplates = _interopRequireDefault(require("./model/RatingTemplates"));
var _SeasonalValueBean = _interopRequireDefault(require("./model/SeasonalValueBean"));
var _SpecifiedLevel = _interopRequireDefault(require("./model/SpecifiedLevel"));
var _State = _interopRequireDefault(require("./model/State"));
var _StoreRule = _interopRequireDefault(require("./model/StoreRule"));
var _Stream = _interopRequireDefault(require("./model/Stream"));
var _StreamLocation = _interopRequireDefault(require("./model/StreamLocation"));
var _StreamReach = _interopRequireDefault(require("./model/StreamReach"));
var _TabV1Office = _interopRequireDefault(require("./model/TabV1Office"));
var _TableRating = _interopRequireDefault(require("./model/TableRating"));
var _TableRatingAllOf = _interopRequireDefault(require("./model/TableRatingAllOf"));
var _TimeSeries = _interopRequireDefault(require("./model/TimeSeries"));
var _TimeSeriesCategory = _interopRequireDefault(require("./model/TimeSeriesCategory"));
var _TimeSeriesColumn = _interopRequireDefault(require("./model/TimeSeriesColumn"));
var _TimeSeriesExtents = _interopRequireDefault(require("./model/TimeSeriesExtents"));
var _TimeSeriesGroup = _interopRequireDefault(require("./model/TimeSeriesGroup"));
var _TimeSeriesIdentifierDescriptor = _interopRequireDefault(require("./model/TimeSeriesIdentifierDescriptor"));
var _TimeSeriesIdentifierDescriptors = _interopRequireDefault(require("./model/TimeSeriesIdentifierDescriptors"));
var _TimeSeriesInterval = _interopRequireDefault(require("./model/TimeSeriesInterval"));
var _TimeSeriesIntervalUnitsInner = _interopRequireDefault(require("./model/TimeSeriesIntervalUnitsInner"));
var _TimeSeriesIntervalUnitsInnerDuration = _interopRequireDefault(require("./model/TimeSeriesIntervalUnitsInnerDuration"));
var _TimeSeriesRecord = _interopRequireDefault(require("./model/TimeSeriesRecord"));
var _TimeSeriesValuesInnerInner = _interopRequireDefault(require("./model/TimeSeriesValuesInnerInner"));
var _TimeseriesCatalogEntry = _interopRequireDefault(require("./model/TimeseriesCatalogEntry"));
var _TransitionalRating = _interopRequireDefault(require("./model/TransitionalRating"));
var _TransitionalRatingAllOf = _interopRequireDefault(require("./model/TransitionalRatingAllOf"));
var _UnitSystem = _interopRequireDefault(require("./model/UnitSystem"));
var _UsgsStreamRating = _interopRequireDefault(require("./model/UsgsStreamRating"));
var _VerticalDatumInfo = _interopRequireDefault(require("./model/VerticalDatumInfo"));
var _VirtualRating = _interopRequireDefault(require("./model/VirtualRating"));
var _VirtualRatingAllOf = _interopRequireDefault(require("./model/VirtualRatingAllOf"));
var _AuthorizationApi = _interopRequireDefault(require("./api/AuthorizationApi"));
var _BasinsApi = _interopRequireDefault(require("./api/BasinsApi"));
var _BlobApi = _interopRequireDefault(require("./api/BlobApi"));
var _CatalogApi = _interopRequireDefault(require("./api/CatalogApi"));
var _ClobApi = _interopRequireDefault(require("./api/ClobApi"));
var _CountiesApi = _interopRequireDefault(require("./api/CountiesApi"));
var _DefaultApi = _interopRequireDefault(require("./api/DefaultApi"));
var _LevelsApi = _interopRequireDefault(require("./api/LevelsApi"));
var _LocationCategoriesApi = _interopRequireDefault(require("./api/LocationCategoriesApi"));
var _LocationGroupsApi = _interopRequireDefault(require("./api/LocationGroupsApi"));
var _LocationsApi = _interopRequireDefault(require("./api/LocationsApi"));
var _OfficesApi = _interopRequireDefault(require("./api/OfficesApi"));
var _ParametersApi = _interopRequireDefault(require("./api/ParametersApi"));
var _PoolsApi = _interopRequireDefault(require("./api/PoolsApi"));
var _RatingsApi = _interopRequireDefault(require("./api/RatingsApi"));
var _StatesApi = _interopRequireDefault(require("./api/StatesApi"));
var _TimeSeriesApi = _interopRequireDefault(require("./api/TimeSeriesApi"));
var _TimeSeriesCategoriesApi = _interopRequireDefault(require("./api/TimeSeriesCategoriesApi"));
var _TimeSeriesIdentifierApi = _interopRequireDefault(require("./api/TimeSeriesIdentifierApi"));
var _TimeZonesApi = _interopRequireDefault(require("./api/TimeZonesApi"));
var _TimeseriesGroupsApi = _interopRequireDefault(require("./api/TimeseriesGroupsApi"));
var _UnitsApi = _interopRequireDefault(require("./api/UnitsApi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./ApiClient":16,"./api/AuthorizationApi":17,"./api/BasinsApi":18,"./api/BlobApi":19,"./api/CatalogApi":20,"./api/ClobApi":21,"./api/CountiesApi":22,"./api/DefaultApi":23,"./api/LevelsApi":24,"./api/LocationCategoriesApi":25,"./api/LocationGroupsApi":26,"./api/LocationsApi":27,"./api/OfficesApi":28,"./api/ParametersApi":29,"./api/PoolsApi":30,"./api/RatingsApi":31,"./api/StatesApi":32,"./api/TimeSeriesApi":33,"./api/TimeSeriesCategoriesApi":34,"./api/TimeSeriesIdentifierApi":35,"./api/TimeZonesApi":36,"./api/TimeseriesGroupsApi":37,"./api/UnitsApi":38,"./model/AbstractRatingMetadata":40,"./model/ApiKey":41,"./model/AssignedLocation":42,"./model/AssignedTimeSeries":43,"./model/Basin":44,"./model/Blob":45,"./model/Blobs":46,"./model/Catalog":47,"./model/CatalogEntry":48,"./model/CatalogableEndpoint":49,"./model/CdaError":50,"./model/Clob":51,"./model/Clobs":52,"./model/County":53,"./model/CsvV1Office":54,"./model/DatabaseLoadMethod":55,"./model/DeleteMethod":56,"./model/ExpressionRating":57,"./model/ExpressionRatingAllOf":58,"./model/IndependentRoundingSpec":59,"./model/Location":60,"./model/LocationAlias":61,"./model/LocationCatalogEntry":62,"./model/LocationCategory":63,"./model/LocationGroup":64,"./model/LocationLevel":65,"./model/LocationLevels":66,"./model/Office":67,"./model/OfficeCSV":68,"./model/OfficeFormatV1":69,"./model/OfficeTabulation":70,"./model/OfficesFMT":71,"./model/Offset":72,"./model/ParameterSpec":73,"./model/Pool":74,"./model/PoolNameType":75,"./model/Pools":76,"./model/RatingMetadata":77,"./model/RatingMetadataList":78,"./model/RatingSpec":79,"./model/RatingSpecs":80,"./model/RatingTemplate":81,"./model/RatingTemplates":82,"./model/SeasonalValueBean":83,"./model/SpecifiedLevel":84,"./model/State":85,"./model/StoreRule":86,"./model/Stream":87,"./model/StreamLocation":88,"./model/StreamReach":89,"./model/TabV1Office":90,"./model/TableRating":91,"./model/TableRatingAllOf":92,"./model/TimeSeries":93,"./model/TimeSeriesCategory":94,"./model/TimeSeriesColumn":95,"./model/TimeSeriesExtents":96,"./model/TimeSeriesGroup":97,"./model/TimeSeriesIdentifierDescriptor":98,"./model/TimeSeriesIdentifierDescriptors":99,"./model/TimeSeriesInterval":100,"./model/TimeSeriesIntervalUnitsInner":101,"./model/TimeSeriesIntervalUnitsInnerDuration":102,"./model/TimeSeriesRecord":103,"./model/TimeSeriesValuesInnerInner":104,"./model/TimeseriesCatalogEntry":105,"./model/TransitionalRating":106,"./model/TransitionalRatingAllOf":107,"./model/UnitSystem":108,"./model/UsgsStreamRating":109,"./model/VerticalDatumInfo":110,"./model/VirtualRating":111,"./model/VirtualRatingAllOf":112}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ExpressionRating = _interopRequireDefault(require("./ExpressionRating"));
var _TableRating = _interopRequireDefault(require("./TableRating"));
var _TransitionalRating = _interopRequireDefault(require("./TransitionalRating"));
var _UsgsStreamRating = _interopRequireDefault(require("./UsgsStreamRating"));
var _VerticalDatumInfo = _interopRequireDefault(require("./VerticalDatumInfo"));
var _VirtualRating = _interopRequireDefault(require("./VirtualRating"));
var _AbstractRatingMetadata;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The AbstractRatingMetadata model module.
 * @module model/AbstractRatingMetadata
 * @version 3.0
 */
var AbstractRatingMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AbstractRatingMetadata</code>.
   * Rating Metadata
   * @alias module:model/AbstractRatingMetadata
   * @param {(module:model/ExpressionRating|module:model/TableRating|module:model/TransitionalRating|module:model/UsgsStreamRating|module:model/VirtualRating)} instance The actual instance to initialize AbstractRatingMetadata.
   */
  function AbstractRatingMetadata() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, AbstractRatingMetadata);
    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "TableRating") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _TableRating["default"].validateJSON(instance); // throw an exception if no match
        // create TableRating from JS object
        this.actualInstance = _TableRating["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TableRating
      errorMessages.push("Failed to construct TableRating: " + err);
    }
    try {
      if (typeof instance === "TransitionalRating") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _TransitionalRating["default"].validateJSON(instance); // throw an exception if no match
        // create TransitionalRating from JS object
        this.actualInstance = _TransitionalRating["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TransitionalRating
      errorMessages.push("Failed to construct TransitionalRating: " + err);
    }
    try {
      if (typeof instance === "VirtualRating") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _VirtualRating["default"].validateJSON(instance); // throw an exception if no match
        // create VirtualRating from JS object
        this.actualInstance = _VirtualRating["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into VirtualRating
      errorMessages.push("Failed to construct VirtualRating: " + err);
    }
    try {
      if (typeof instance === "ExpressionRating") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ExpressionRating["default"].validateJSON(instance); // throw an exception if no match
        // create ExpressionRating from JS object
        this.actualInstance = _ExpressionRating["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ExpressionRating
      errorMessages.push("Failed to construct ExpressionRating: " + err);
    }
    try {
      if (typeof instance === "UsgsStreamRating") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _UsgsStreamRating["default"].validateJSON(instance); // throw an exception if no match
        // create UsgsStreamRating from JS object
        this.actualInstance = _UsgsStreamRating["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into UsgsStreamRating
      errorMessages.push("Failed to construct UsgsStreamRating: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `AbstractRatingMetadata` with oneOf schemas ExpressionRating, TableRating, TransitionalRating, UsgsStreamRating, VirtualRating. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `AbstractRatingMetadata` with oneOf schemas ExpressionRating, TableRating, TransitionalRating, UsgsStreamRating, VirtualRating. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>AbstractRatingMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbstractRatingMetadata} obj Optional instance to populate.
   * @return {module:model/AbstractRatingMetadata} The populated <code>AbstractRatingMetadata</code> instance.
   */
  _createClass(AbstractRatingMetadata, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ExpressionRating</code>, <code>TableRating</code>, <code>TransitionalRating</code>, <code>UsgsStreamRating</code>, <code>VirtualRating</code>.
     * @return {(module:model/ExpressionRating|module:model/TableRating|module:model/TransitionalRating|module:model/UsgsStreamRating|module:model/VirtualRating)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ExpressionRating</code>, <code>TableRating</code>, <code>TransitionalRating</code>, <code>UsgsStreamRating</code>, <code>VirtualRating</code>.
     * @param {(module:model/ExpressionRating|module:model/TableRating|module:model/TransitionalRating|module:model/UsgsStreamRating|module:model/VirtualRating)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = AbstractRatingMetadata.constructFromObject(obj).getActualInstance();
    }
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new AbstractRatingMetadata(data);
    }
  }]);
  return AbstractRatingMetadata;
}();
/**
 * @member {String} office-id
 */
_AbstractRatingMetadata = AbstractRatingMetadata;
/**
 * Create an instance of AbstractRatingMetadata from a JSON string.
 * @param {string} json_string JSON string.
 * @return {module:model/AbstractRatingMetadata} An instance of AbstractRatingMetadata.
 */
_defineProperty(AbstractRatingMetadata, "fromJSON", function (json_string) {
  return _AbstractRatingMetadata.constructFromObject(JSON.parse(json_string));
});
AbstractRatingMetadata.prototype['office-id'] = undefined;

/**
 * @member {String} rating-spec-id
 */
AbstractRatingMetadata.prototype['rating-spec-id'] = undefined;

/**
 * @member {String} units-id
 */
AbstractRatingMetadata.prototype['units-id'] = undefined;

/**
 * @member {Boolean} active
 */
AbstractRatingMetadata.prototype['active'] = undefined;

/**
 * @member {Date} effective-date
 */
AbstractRatingMetadata.prototype['effective-date'] = undefined;

/**
 * @member {Date} create-date
 */
AbstractRatingMetadata.prototype['create-date'] = undefined;

/**
 * @member {Date} transition-date
 */
AbstractRatingMetadata.prototype['transition-date'] = undefined;

/**
 * @member {String} description
 */
AbstractRatingMetadata.prototype['description'] = undefined;

/**
 * @member {module:model/VerticalDatumInfo} vertical-datum-info
 */
AbstractRatingMetadata.prototype['vertical-datum-info'] = undefined;

/**
 * @member {String} rating-type
 */
AbstractRatingMetadata.prototype['rating-type'] = undefined;

/**
 * @member {String} in-range-method
 */
AbstractRatingMetadata.prototype['in-range-method'] = undefined;

/**
 * @member {String} out-range-low-method
 */
AbstractRatingMetadata.prototype['out-range-low-method'] = undefined;

/**
 * @member {String} out-range-high-method
 */
AbstractRatingMetadata.prototype['out-range-high-method'] = undefined;

/**
 * @member {Array.<Object>} source-ratings
 */
AbstractRatingMetadata.prototype['source-ratings'] = undefined;

/**
 * @member {String} connections
 */
AbstractRatingMetadata.prototype['connections'] = undefined;

/**
 * @member {String} expression
 */
AbstractRatingMetadata.prototype['expression'] = undefined;

/**
 * @member {Array.<String>} conditions
 */
AbstractRatingMetadata.prototype['conditions'] = undefined;

/**
 * @member {Array.<String>} evaluations
 */
AbstractRatingMetadata.prototype['evaluations'] = undefined;
AbstractRatingMetadata.OneOf = ["ExpressionRating", "TableRating", "TransitionalRating", "UsgsStreamRating", "VirtualRating"];
var _default = exports["default"] = AbstractRatingMetadata;

},{"../ApiClient":16,"./ExpressionRating":57,"./TableRating":91,"./TransitionalRating":106,"./UsgsStreamRating":109,"./VerticalDatumInfo":110,"./VirtualRating":111}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ApiKey model module.
 * @module model/ApiKey
 * @version 3.0
 */
var ApiKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiKey</code>.
   * @alias module:model/ApiKey
   * @param userId {String} 
   * @param keyName {String} 
   */
  function ApiKey(userId, keyName) {
    _classCallCheck(this, ApiKey);
    ApiKey.initialize(this, userId, keyName);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ApiKey, null, [{
    key: "initialize",
    value: function initialize(obj, userId, keyName) {
      obj['user-id'] = userId;
      obj['key-name'] = keyName;
    }

    /**
     * Constructs a <code>ApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKey} obj Optional instance to populate.
     * @return {module:model/ApiKey} The populated <code>ApiKey</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiKey();
        if (data.hasOwnProperty('user-id')) {
          obj['user-id'] = _ApiClient["default"].convertToType(data['user-id'], 'String');
        }
        if (data.hasOwnProperty('key-name')) {
          obj['key-name'] = _ApiClient["default"].convertToType(data['key-name'], 'String');
        }
        if (data.hasOwnProperty('api-key')) {
          obj['api-key'] = _ApiClient["default"].convertToType(data['api-key'], 'String');
        }
        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }
        if (data.hasOwnProperty('expires')) {
          obj['expires'] = _ApiClient["default"].convertToType(data['expires'], 'Date');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiKey</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ApiKey.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['user-id'] && !(typeof data['user-id'] === 'string' || data['user-id'] instanceof String)) {
        throw new Error("Expected the field `user-id` to be a primitive type in the JSON string but got " + data['user-id']);
      }
      // ensure the json data is a string
      if (data['key-name'] && !(typeof data['key-name'] === 'string' || data['key-name'] instanceof String)) {
        throw new Error("Expected the field `key-name` to be a primitive type in the JSON string but got " + data['key-name']);
      }
      // ensure the json data is a string
      if (data['api-key'] && !(typeof data['api-key'] === 'string' || data['api-key'] instanceof String)) {
        throw new Error("Expected the field `api-key` to be a primitive type in the JSON string but got " + data['api-key']);
      }
      return true;
    }
  }]);
  return ApiKey;
}();
ApiKey.RequiredProperties = ["user-id", "key-name"];

/**
 * @member {String} user-id
 */
ApiKey.prototype['user-id'] = undefined;

/**
 * @member {String} key-name
 */
ApiKey.prototype['key-name'] = undefined;

/**
 * @member {String} api-key
 */
ApiKey.prototype['api-key'] = undefined;

/**
 * The instant this Key was created, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
 * @member {Date} created
 */
ApiKey.prototype['created'] = undefined;

/**
 * When this key expires, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
 * @member {Date} expires
 */
ApiKey.prototype['expires'] = undefined;
var _default = exports["default"] = ApiKey;

},{"../ApiClient":16}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The AssignedLocation model module.
 * @module model/AssignedLocation
 * @version 3.0
 */
var AssignedLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AssignedLocation</code>.
   * @alias module:model/AssignedLocation
   */
  function AssignedLocation() {
    _classCallCheck(this, AssignedLocation);
    AssignedLocation.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AssignedLocation, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AssignedLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignedLocation} obj Optional instance to populate.
     * @return {module:model/AssignedLocation} The populated <code>AssignedLocation</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssignedLocation();
        if (data.hasOwnProperty('locationId')) {
          obj['locationId'] = _ApiClient["default"].convertToType(data['locationId'], 'String');
        }
        if (data.hasOwnProperty('officeId')) {
          obj['officeId'] = _ApiClient["default"].convertToType(data['officeId'], 'String');
        }
        if (data.hasOwnProperty('aliasId')) {
          obj['aliasId'] = _ApiClient["default"].convertToType(data['aliasId'], 'String');
        }
        if (data.hasOwnProperty('attribute')) {
          obj['attribute'] = _ApiClient["default"].convertToType(data['attribute'], 'Number');
        }
        if (data.hasOwnProperty('refLocationId')) {
          obj['refLocationId'] = _ApiClient["default"].convertToType(data['refLocationId'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssignedLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignedLocation</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['locationId'] && !(typeof data['locationId'] === 'string' || data['locationId'] instanceof String)) {
        throw new Error("Expected the field `locationId` to be a primitive type in the JSON string but got " + data['locationId']);
      }
      // ensure the json data is a string
      if (data['officeId'] && !(typeof data['officeId'] === 'string' || data['officeId'] instanceof String)) {
        throw new Error("Expected the field `officeId` to be a primitive type in the JSON string but got " + data['officeId']);
      }
      // ensure the json data is a string
      if (data['aliasId'] && !(typeof data['aliasId'] === 'string' || data['aliasId'] instanceof String)) {
        throw new Error("Expected the field `aliasId` to be a primitive type in the JSON string but got " + data['aliasId']);
      }
      // ensure the json data is a string
      if (data['refLocationId'] && !(typeof data['refLocationId'] === 'string' || data['refLocationId'] instanceof String)) {
        throw new Error("Expected the field `refLocationId` to be a primitive type in the JSON string but got " + data['refLocationId']);
      }
      return true;
    }
  }]);
  return AssignedLocation;
}();
/**
 * @member {String} locationId
 */
AssignedLocation.prototype['locationId'] = undefined;

/**
 * @member {String} officeId
 */
AssignedLocation.prototype['officeId'] = undefined;

/**
 * @member {String} aliasId
 */
AssignedLocation.prototype['aliasId'] = undefined;

/**
 * @member {Number} attribute
 */
AssignedLocation.prototype['attribute'] = undefined;

/**
 * @member {String} refLocationId
 */
AssignedLocation.prototype['refLocationId'] = undefined;
var _default = exports["default"] = AssignedLocation;

},{"../ApiClient":16}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The AssignedTimeSeries model module.
 * @module model/AssignedTimeSeries
 * @version 3.0
 */
var AssignedTimeSeries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AssignedTimeSeries</code>.
   * @alias module:model/AssignedTimeSeries
   */
  function AssignedTimeSeries() {
    _classCallCheck(this, AssignedTimeSeries);
    AssignedTimeSeries.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AssignedTimeSeries, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AssignedTimeSeries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignedTimeSeries} obj Optional instance to populate.
     * @return {module:model/AssignedTimeSeries} The populated <code>AssignedTimeSeries</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssignedTimeSeries();
        if (data.hasOwnProperty('officeId')) {
          obj['officeId'] = _ApiClient["default"].convertToType(data['officeId'], 'String');
        }
        if (data.hasOwnProperty('timeseriesId')) {
          obj['timeseriesId'] = _ApiClient["default"].convertToType(data['timeseriesId'], 'String');
        }
        if (data.hasOwnProperty('tsCode')) {
          obj['tsCode'] = _ApiClient["default"].convertToType(data['tsCode'], 'Number');
        }
        if (data.hasOwnProperty('aliasId')) {
          obj['aliasId'] = _ApiClient["default"].convertToType(data['aliasId'], 'String');
        }
        if (data.hasOwnProperty('refTsId')) {
          obj['refTsId'] = _ApiClient["default"].convertToType(data['refTsId'], 'String');
        }
        if (data.hasOwnProperty('attribute')) {
          obj['attribute'] = _ApiClient["default"].convertToType(data['attribute'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssignedTimeSeries</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignedTimeSeries</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['officeId'] && !(typeof data['officeId'] === 'string' || data['officeId'] instanceof String)) {
        throw new Error("Expected the field `officeId` to be a primitive type in the JSON string but got " + data['officeId']);
      }
      // ensure the json data is a string
      if (data['timeseriesId'] && !(typeof data['timeseriesId'] === 'string' || data['timeseriesId'] instanceof String)) {
        throw new Error("Expected the field `timeseriesId` to be a primitive type in the JSON string but got " + data['timeseriesId']);
      }
      // ensure the json data is a string
      if (data['aliasId'] && !(typeof data['aliasId'] === 'string' || data['aliasId'] instanceof String)) {
        throw new Error("Expected the field `aliasId` to be a primitive type in the JSON string but got " + data['aliasId']);
      }
      // ensure the json data is a string
      if (data['refTsId'] && !(typeof data['refTsId'] === 'string' || data['refTsId'] instanceof String)) {
        throw new Error("Expected the field `refTsId` to be a primitive type in the JSON string but got " + data['refTsId']);
      }
      return true;
    }
  }]);
  return AssignedTimeSeries;
}();
/**
 * @member {String} officeId
 */
AssignedTimeSeries.prototype['officeId'] = undefined;

/**
 * @member {String} timeseriesId
 */
AssignedTimeSeries.prototype['timeseriesId'] = undefined;

/**
 * @member {Number} tsCode
 */
AssignedTimeSeries.prototype['tsCode'] = undefined;

/**
 * @member {String} aliasId
 */
AssignedTimeSeries.prototype['aliasId'] = undefined;

/**
 * @member {String} refTsId
 */
AssignedTimeSeries.prototype['refTsId'] = undefined;

/**
 * @member {Number} attribute
 */
AssignedTimeSeries.prototype['attribute'] = undefined;
var _default = exports["default"] = AssignedTimeSeries;

},{"../ApiClient":16}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Stream = _interopRequireDefault(require("./Stream"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Basin model module.
 * @module model/Basin
 * @version 3.0
 */
var Basin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Basin</code>.
   * @alias module:model/Basin
   * @param officeId {String} Owning office of object.
   */
  function Basin(officeId) {
    _classCallCheck(this, Basin);
    Basin.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Basin, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>Basin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Basin} obj Optional instance to populate.
     * @return {module:model/Basin} The populated <code>Basin</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Basin();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('basin-name')) {
          obj['basin-name'] = _ApiClient["default"].convertToType(data['basin-name'], 'String');
        }
        if (data.hasOwnProperty('primary-stream')) {
          obj['primary-stream'] = _Stream["default"].constructFromObject(data['primary-stream']);
        }
        if (data.hasOwnProperty('sort-order')) {
          obj['sort-order'] = _ApiClient["default"].convertToType(data['sort-order'], 'Number');
        }
        if (data.hasOwnProperty('basin-area')) {
          obj['basin-area'] = _ApiClient["default"].convertToType(data['basin-area'], 'Number');
        }
        if (data.hasOwnProperty('contributing-area')) {
          obj['contributing-area'] = _ApiClient["default"].convertToType(data['contributing-area'], 'Number');
        }
        if (data.hasOwnProperty('parent-basin-id')) {
          obj['parent-basin-id'] = _ApiClient["default"].convertToType(data['parent-basin-id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Basin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Basin</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Basin.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['basin-name'] && !(typeof data['basin-name'] === 'string' || data['basin-name'] instanceof String)) {
        throw new Error("Expected the field `basin-name` to be a primitive type in the JSON string but got " + data['basin-name']);
      }
      // validate the optional field `primary-stream`
      if (data['primary-stream']) {
        // data not null
        _Stream["default"].validateJSON(data['primary-stream']);
      }
      // ensure the json data is a string
      if (data['parent-basin-id'] && !(typeof data['parent-basin-id'] === 'string' || data['parent-basin-id'] instanceof String)) {
        throw new Error("Expected the field `parent-basin-id` to be a primitive type in the JSON string but got " + data['parent-basin-id']);
      }
      return true;
    }
  }]);
  return Basin;
}();
Basin.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Basin.prototype['office-id'] = undefined;

/**
 * @member {String} basin-name
 */
Basin.prototype['basin-name'] = undefined;

/**
 * @member {module:model/Stream} primary-stream
 */
Basin.prototype['primary-stream'] = undefined;

/**
 * @member {Number} sort-order
 */
Basin.prototype['sort-order'] = undefined;

/**
 * @member {Number} basin-area
 */
Basin.prototype['basin-area'] = undefined;

/**
 * @member {Number} contributing-area
 */
Basin.prototype['contributing-area'] = undefined;

/**
 * @member {String} parent-basin-id
 */
Basin.prototype['parent-basin-id'] = undefined;
var _default = exports["default"] = Basin;

},{"../ApiClient":16,"./Stream":87}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Blob model module.
 * @module model/Blob
 * @version 3.0
 */
var Blob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Blob</code>.
   * List of retrieved blobs
   * @alias module:model/Blob
   * @param officeId {String} Owning office of object.
   * @param id {String} 
   */
  function Blob(officeId, id) {
    _classCallCheck(this, Blob);
    Blob.initialize(this, officeId, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Blob, null, [{
    key: "initialize",
    value: function initialize(obj, officeId, id) {
      obj['office-id'] = officeId;
      obj['id'] = id;
    }

    /**
     * Constructs a <code>Blob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Blob} obj Optional instance to populate.
     * @return {module:model/Blob} The populated <code>Blob</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Blob();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('media-type-id')) {
          obj['media-type-id'] = _ApiClient["default"].convertToType(data['media-type-id'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], ['Blob']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Blob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Blob</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Blob.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['media-type-id'] && !(typeof data['media-type-id'] === 'string' || data['media-type-id'] instanceof String)) {
        throw new Error("Expected the field `media-type-id` to be a primitive type in the JSON string but got " + data['media-type-id']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['value'])) {
        throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
      }
      return true;
    }
  }]);
  return Blob;
}();
Blob.RequiredProperties = ["office-id", "id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Blob.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
Blob.prototype['id'] = undefined;

/**
 * @member {String} description
 */
Blob.prototype['description'] = undefined;

/**
 * @member {String} media-type-id
 */
Blob.prototype['media-type-id'] = undefined;

/**
 * @member {Array.<Blob>} value
 */
Blob.prototype['value'] = undefined;
var _default = exports["default"] = Blob;

},{"../ApiClient":16}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Blobs model module.
 * @module model/Blobs
 * @version 3.0
 */
var Blobs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Blobs</code>.
   * @alias module:model/Blobs
   */
  function Blobs() {
    _classCallCheck(this, Blobs);
    Blobs.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Blobs, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Blobs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Blobs} obj Optional instance to populate.
     * @return {module:model/Blobs} The populated <code>Blobs</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Blobs();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('blobs')) {
          obj['blobs'] = _ApiClient["default"].convertToType(data['blobs'], ['Blob']);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Blobs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Blobs</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['blobs']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['blobs'])) {
          throw new Error("Expected the field `blobs` to be an array in the JSON data but got " + data['blobs']);
        }
        // validate the optional field `blobs` (array)
        var _iterator = _createForOfIteratorHelper(data['blobs']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            Blob.validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return Blobs;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
Blobs.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
Blobs.prototype['total'] = undefined;

/**
 * List of retrieved blobs
 * @member {Array.<Blob>} blobs
 */
Blobs.prototype['blobs'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
Blobs.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
Blobs.prototype['page-size'] = undefined;
var _default = exports["default"] = Blobs;

},{"../ApiClient":16}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CatalogEntry = _interopRequireDefault(require("./CatalogEntry"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Catalog model module.
 * @module model/Catalog
 * @version 3.0
 */
var Catalog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Catalog</code>.
   * @alias module:model/Catalog
   */
  function Catalog() {
    _classCallCheck(this, Catalog);
    Catalog.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Catalog, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Catalog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Catalog} obj Optional instance to populate.
     * @return {module:model/Catalog} The populated <code>Catalog</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Catalog();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('entries')) {
          obj['entries'] = _ApiClient["default"].convertToType(data['entries'], [_CatalogEntry["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Catalog</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Catalog</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['entries']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['entries'])) {
          throw new Error("Expected the field `entries` to be an array in the JSON data but got " + data['entries']);
        }
        // validate the optional field `entries` (array)
        var _iterator = _createForOfIteratorHelper(data['entries']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _CatalogEntry["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return Catalog;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
Catalog.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
Catalog.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/CatalogEntry>} entries
 */
Catalog.prototype['entries'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
Catalog.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
Catalog.prototype['page-size'] = undefined;
var _default = exports["default"] = Catalog;

},{"../ApiClient":16,"./CatalogEntry":48}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _LocationAlias = _interopRequireDefault(require("./LocationAlias"));
var _LocationCatalogEntry = _interopRequireDefault(require("./LocationCatalogEntry"));
var _TimeSeriesExtents = _interopRequireDefault(require("./TimeSeriesExtents"));
var _TimeseriesCatalogEntry = _interopRequireDefault(require("./TimeseriesCatalogEntry"));
var _CatalogEntry;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The CatalogEntry model module.
 * @module model/CatalogEntry
 * @version 3.0
 */
var CatalogEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogEntry</code>.
   * @alias module:model/CatalogEntry
   * @param {(module:model/LocationCatalogEntry|module:model/TimeseriesCatalogEntry)} instance The actual instance to initialize CatalogEntry.
   */
  function CatalogEntry() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, CatalogEntry);
    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "LocationCatalogEntry") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _LocationCatalogEntry["default"].validateJSON(instance); // throw an exception if no match
        // create LocationCatalogEntry from JS object
        this.actualInstance = _LocationCatalogEntry["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into LocationCatalogEntry
      errorMessages.push("Failed to construct LocationCatalogEntry: " + err);
    }
    try {
      if (typeof instance === "TimeseriesCatalogEntry") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _TimeseriesCatalogEntry["default"].validateJSON(instance); // throw an exception if no match
        // create TimeseriesCatalogEntry from JS object
        this.actualInstance = _TimeseriesCatalogEntry["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TimeseriesCatalogEntry
      errorMessages.push("Failed to construct TimeseriesCatalogEntry: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `CatalogEntry` with oneOf schemas LocationCatalogEntry, TimeseriesCatalogEntry. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `CatalogEntry` with oneOf schemas LocationCatalogEntry, TimeseriesCatalogEntry. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>CatalogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogEntry} obj Optional instance to populate.
   * @return {module:model/CatalogEntry} The populated <code>CatalogEntry</code> instance.
   */
  _createClass(CatalogEntry, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>LocationCatalogEntry</code>, <code>TimeseriesCatalogEntry</code>.
     * @return {(module:model/LocationCatalogEntry|module:model/TimeseriesCatalogEntry)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>LocationCatalogEntry</code>, <code>TimeseriesCatalogEntry</code>.
     * @param {(module:model/LocationCatalogEntry|module:model/TimeseriesCatalogEntry)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = CatalogEntry.constructFromObject(obj).getActualInstance();
    }
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new CatalogEntry(data);
    }
  }]);
  return CatalogEntry;
}();
/**
 * @member {String} office
 */
_CatalogEntry = CatalogEntry;
/**
 * Create an instance of CatalogEntry from a JSON string.
 * @param {string} json_string JSON string.
 * @return {module:model/CatalogEntry} An instance of CatalogEntry.
 */
_defineProperty(CatalogEntry, "fromJSON", function (json_string) {
  return _CatalogEntry.constructFromObject(JSON.parse(json_string));
});
CatalogEntry.prototype['office'] = undefined;

/**
 * @member {String} name
 */
CatalogEntry.prototype['name'] = undefined;

/**
 * @member {String} nearestCity
 */
CatalogEntry.prototype['nearestCity'] = undefined;

/**
 * @member {String} publicName
 */
CatalogEntry.prototype['publicName'] = undefined;

/**
 * @member {String} longName
 */
CatalogEntry.prototype['longName'] = undefined;

/**
 * @member {String} description
 */
CatalogEntry.prototype['description'] = undefined;

/**
 * @member {String} kind
 */
CatalogEntry.prototype['kind'] = undefined;

/**
 * @member {String} type
 */
CatalogEntry.prototype['type'] = undefined;

/**
 * Only on 21.1.1 Database. The timezone the Interval Offset is from.
 * @member {String} timeZone
 */
CatalogEntry.prototype['timeZone'] = undefined;

/**
 * @member {Number} latitude
 */
CatalogEntry.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
CatalogEntry.prototype['longitude'] = undefined;

/**
 * @member {Number} publishedLatitude
 */
CatalogEntry.prototype['publishedLatitude'] = undefined;

/**
 * @member {Number} publishedLongitude
 */
CatalogEntry.prototype['publishedLongitude'] = undefined;

/**
 * @member {String} horizontalDatum
 */
CatalogEntry.prototype['horizontalDatum'] = undefined;

/**
 * @member {Number} elevation
 */
CatalogEntry.prototype['elevation'] = undefined;

/**
 * @member {String} unit
 */
CatalogEntry.prototype['unit'] = undefined;

/**
 * @member {String} verticalDatum
 */
CatalogEntry.prototype['verticalDatum'] = undefined;

/**
 * @member {String} nation
 */
CatalogEntry.prototype['nation'] = undefined;

/**
 * @member {String} state
 */
CatalogEntry.prototype['state'] = undefined;

/**
 * @member {String} county
 */
CatalogEntry.prototype['county'] = undefined;

/**
 * @member {String} boundingOffice
 */
CatalogEntry.prototype['boundingOffice'] = undefined;

/**
 * @member {String} mapLabel
 */
CatalogEntry.prototype['mapLabel'] = undefined;

/**
 * @member {Boolean} active
 */
CatalogEntry.prototype['active'] = undefined;

/**
 * @member {Array.<module:model/LocationAlias>} aliases
 */
CatalogEntry.prototype['aliases'] = undefined;

/**
 * @member {String} units
 */
CatalogEntry.prototype['units'] = undefined;

/**
 * @member {String} interval
 */
CatalogEntry.prototype['interval'] = undefined;

/**
 * Offset from top of interval
 * @member {Number} intervalOffset
 */
CatalogEntry.prototype['intervalOffset'] = undefined;

/**
 * @member {Array.<module:model/TimeSeriesExtents>} extents
 */
CatalogEntry.prototype['extents'] = undefined;
CatalogEntry.OneOf = ["LocationCatalogEntry", "TimeseriesCatalogEntry"];
var _default = exports["default"] = CatalogEntry;

},{"../ApiClient":16,"./LocationAlias":61,"./LocationCatalogEntry":62,"./TimeSeriesExtents":96,"./TimeseriesCatalogEntry":105}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Enum class CatalogableEndpoint.
* @enum {}
* @readonly
*/
var CatalogableEndpoint = exports["default"] = /*#__PURE__*/function () {
  function CatalogableEndpoint() {
    _classCallCheck(this, CatalogableEndpoint);
    /**
     * value: "TIMESERIES"
     * @const
     */
    _defineProperty(this, "TIMESERIES", "TIMESERIES");
    /**
     * value: "LOCATIONS"
     * @const
     */
    _defineProperty(this, "LOCATIONS", "LOCATIONS");
  }
  _createClass(CatalogableEndpoint, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>CatalogableEndpoint</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CatalogableEndpoint} The enum <code>CatalogableEndpoint</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return CatalogableEndpoint;
}();

},{"../ApiClient":16}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The CdaError model module.
 * @module model/CdaError
 * @version 3.0
 */
var CdaError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CdaError</code>.
   * @alias module:model/CdaError
   */
  function CdaError() {
    _classCallCheck(this, CdaError);
    CdaError.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CdaError, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CdaError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CdaError} obj Optional instance to populate.
     * @return {module:model/CdaError} The populated <code>CdaError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CdaError();
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
        if (data.hasOwnProperty('incidentIdentifier')) {
          obj['incidentIdentifier'] = _ApiClient["default"].convertToType(data['incidentIdentifier'], 'String');
        }
        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], {
            'String': Object
          });
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CdaError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CdaError</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
        throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
      }
      // ensure the json data is a string
      if (data['incidentIdentifier'] && !(typeof data['incidentIdentifier'] === 'string' || data['incidentIdentifier'] instanceof String)) {
        throw new Error("Expected the field `incidentIdentifier` to be a primitive type in the JSON string but got " + data['incidentIdentifier']);
      }
      return true;
    }
  }]);
  return CdaError;
}();
/**
 * @member {String} message
 */
CdaError.prototype['message'] = undefined;

/**
 * A randomly generated number to help identify your request in the logs for analysis..
 * @member {String} incidentIdentifier
 */
CdaError.prototype['incidentIdentifier'] = undefined;

/**
 * @member {Object.<String, Object>} details
 */
CdaError.prototype['details'] = undefined;
var _default = exports["default"] = CdaError;

},{"../ApiClient":16}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Clob model module.
 * @module model/Clob
 * @version 3.0
 */
var Clob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Clob</code>.
   * @alias module:model/Clob
   * @param officeId {String} Owning office of object.
   * @param id {String} 
   */
  function Clob(officeId, id) {
    _classCallCheck(this, Clob);
    Clob.initialize(this, officeId, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Clob, null, [{
    key: "initialize",
    value: function initialize(obj, officeId, id) {
      obj['office-id'] = officeId;
      obj['id'] = id;
    }

    /**
     * Constructs a <code>Clob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Clob} obj Optional instance to populate.
     * @return {module:model/Clob} The populated <code>Clob</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Clob();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Clob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Clob</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Clob.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
        throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
      }
      return true;
    }
  }]);
  return Clob;
}();
Clob.RequiredProperties = ["office-id", "id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Clob.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
Clob.prototype['id'] = undefined;

/**
 * @member {String} description
 */
Clob.prototype['description'] = undefined;

/**
 * @member {String} value
 */
Clob.prototype['value'] = undefined;
var _default = exports["default"] = Clob;

},{"../ApiClient":16}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Clob = _interopRequireDefault(require("./Clob"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Clobs model module.
 * @module model/Clobs
 * @version 3.0
 */
var Clobs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Clobs</code>.
   * @alias module:model/Clobs
   */
  function Clobs() {
    _classCallCheck(this, Clobs);
    Clobs.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Clobs, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Clobs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Clobs} obj Optional instance to populate.
     * @return {module:model/Clobs} The populated <code>Clobs</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Clobs();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('clobs')) {
          obj['clobs'] = _ApiClient["default"].convertToType(data['clobs'], [_Clob["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Clobs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Clobs</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['clobs']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['clobs'])) {
          throw new Error("Expected the field `clobs` to be an array in the JSON data but got " + data['clobs']);
        }
        // validate the optional field `clobs` (array)
        var _iterator = _createForOfIteratorHelper(data['clobs']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _Clob["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return Clobs;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
Clobs.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
Clobs.prototype['total'] = undefined;

/**
 * List of retrieved clobs
 * @member {Array.<module:model/Clob>} clobs
 */
Clobs.prototype['clobs'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
Clobs.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
Clobs.prototype['page-size'] = undefined;
var _default = exports["default"] = Clobs;

},{"../ApiClient":16,"./Clob":51}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The County model module.
 * @module model/County
 * @version 3.0
 */
var County = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>County</code>.
   * A representation of a county
   * @alias module:model/County
   */
  function County() {
    _classCallCheck(this, County);
    County.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(County, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>County</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/County} obj Optional instance to populate.
     * @return {module:model/County} The populated <code>County</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new County();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('countyId')) {
          obj['countyId'] = _ApiClient["default"].convertToType(data['countyId'], 'String');
        }
        if (data.hasOwnProperty('stateInitial')) {
          obj['stateInitial'] = _ApiClient["default"].convertToType(data['stateInitial'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>County</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>County</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['countyId'] && !(typeof data['countyId'] === 'string' || data['countyId'] instanceof String)) {
        throw new Error("Expected the field `countyId` to be a primitive type in the JSON string but got " + data['countyId']);
      }
      // ensure the json data is a string
      if (data['stateInitial'] && !(typeof data['stateInitial'] === 'string' || data['stateInitial'] instanceof String)) {
        throw new Error("Expected the field `stateInitial` to be a primitive type in the JSON string but got " + data['stateInitial']);
      }
      return true;
    }
  }]);
  return County;
}();
/**
 * @member {String} name
 */
County.prototype['name'] = undefined;

/**
 * @member {String} countyId
 */
County.prototype['countyId'] = undefined;

/**
 * @member {String} stateInitial
 */
County.prototype['stateInitial'] = undefined;
var _default = exports["default"] = County;

},{"../ApiClient":16}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The CsvV1Office model module.
 * @module model/CsvV1Office
 * @version 3.0
 */
var CsvV1Office = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CsvV1Office</code>.
   * Single Office or List of Offices in comma separated format
   * @alias module:model/CsvV1Office
   */
  function CsvV1Office() {
    _classCallCheck(this, CsvV1Office);
    CsvV1Office.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CsvV1Office, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CsvV1Office</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CsvV1Office} obj Optional instance to populate.
     * @return {module:model/CsvV1Office} The populated <code>CsvV1Office</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CsvV1Office();
        if (data.hasOwnProperty('Office')) {
          obj['Office'] = _ApiClient["default"].convertToType(data['Office'], 'String');
        }
        if (data.hasOwnProperty('longName')) {
          obj['longName'] = _ApiClient["default"].convertToType(data['longName'], 'String');
        }
        if (data.hasOwnProperty('officeType')) {
          obj['officeType'] = _ApiClient["default"].convertToType(data['officeType'], 'String');
        }
        if (data.hasOwnProperty('reportsToOffice')) {
          obj['reportsToOffice'] = _ApiClient["default"].convertToType(data['reportsToOffice'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CsvV1Office</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CsvV1Office</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['Office'] && !(typeof data['Office'] === 'string' || data['Office'] instanceof String)) {
        throw new Error("Expected the field `Office` to be a primitive type in the JSON string but got " + data['Office']);
      }
      // ensure the json data is a string
      if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
        throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
      }
      // ensure the json data is a string
      if (data['officeType'] && !(typeof data['officeType'] === 'string' || data['officeType'] instanceof String)) {
        throw new Error("Expected the field `officeType` to be a primitive type in the JSON string but got " + data['officeType']);
      }
      // ensure the json data is a string
      if (data['reportsToOffice'] && !(typeof data['reportsToOffice'] === 'string' || data['reportsToOffice'] instanceof String)) {
        throw new Error("Expected the field `reportsToOffice` to be a primitive type in the JSON string but got " + data['reportsToOffice']);
      }
      return true;
    }
  }]);
  return CsvV1Office;
}();
/**
 * @member {String} Office
 */
CsvV1Office.prototype['Office'] = undefined;

/**
 * @member {String} longName
 */
CsvV1Office.prototype['longName'] = undefined;

/**
 * @member {String} officeType
 */
CsvV1Office.prototype['officeType'] = undefined;

/**
 * @member {String} reportsToOffice
 */
CsvV1Office.prototype['reportsToOffice'] = undefined;
var _default = exports["default"] = CsvV1Office;

},{"../ApiClient":16}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Enum class DatabaseLoadMethod.
* @enum {}
* @readonly
*/
var DatabaseLoadMethod = exports["default"] = /*#__PURE__*/function () {
  function DatabaseLoadMethod() {
    _classCallCheck(this, DatabaseLoadMethod);
    /**
     * value: "EAGER"
     * @const
     */
    _defineProperty(this, "EAGER", "EAGER");
    /**
     * value: "LAZY"
     * @const
     */
    _defineProperty(this, "LAZY", "LAZY");
    /**
     * value: "REFERENCE"
     * @const
     */
    _defineProperty(this, "REFERENCE", "REFERENCE");
  }
  _createClass(DatabaseLoadMethod, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>DatabaseLoadMethod</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DatabaseLoadMethod} The enum <code>DatabaseLoadMethod</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return DatabaseLoadMethod;
}();

},{"../ApiClient":16}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Enum class DeleteMethod.
* @enum {}
* @readonly
*/
var DeleteMethod = exports["default"] = /*#__PURE__*/function () {
  function DeleteMethod() {
    _classCallCheck(this, DeleteMethod);
    /**
     * value: "DELETE_ALL"
     * @const
     */
    _defineProperty(this, "ALL", "DELETE_ALL");
    /**
     * value: "DELETE_KEY"
     * @const
     */
    _defineProperty(this, "KEY", "DELETE_KEY");
    /**
     * value: "DELETE_DATA"
     * @const
     */
    _defineProperty(this, "DATA", "DELETE_DATA");
  }
  _createClass(DeleteMethod, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>DeleteMethod</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DeleteMethod} The enum <code>DeleteMethod</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return DeleteMethod;
}();

},{"../ApiClient":16}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AbstractRatingMetadata = _interopRequireDefault(require("./AbstractRatingMetadata"));
var _ExpressionRatingAllOf = _interopRequireDefault(require("./ExpressionRatingAllOf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ExpressionRating model module.
 * @module model/ExpressionRating
 * @version 3.0
 */
var ExpressionRating = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpressionRating</code>.
   * @alias module:model/ExpressionRating
   * @extends module:model/AbstractRatingMetadata
   * @implements module:model/AbstractRatingMetadata
   * @implements module:model/ExpressionRatingAllOf
   */
  function ExpressionRating() {
    _classCallCheck(this, ExpressionRating);
    _AbstractRatingMetadata["default"].initialize(this);
    _ExpressionRatingAllOf["default"].initialize(this);
    ExpressionRating.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ExpressionRating, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ExpressionRating</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpressionRating} obj Optional instance to populate.
     * @return {module:model/ExpressionRating} The populated <code>ExpressionRating</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpressionRating();
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _ExpressionRatingAllOf["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('expression')) {
          obj['expression'] = _ApiClient["default"].convertToType(data['expression'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExpressionRating</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExpressionRating</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['expression'] && !(typeof data['expression'] === 'string' || data['expression'] instanceof String)) {
        throw new Error("Expected the field `expression` to be a primitive type in the JSON string but got " + data['expression']);
      }
      return true;
    }
  }]);
  return ExpressionRating;
}();
/**
 * @member {String} expression
 */
ExpressionRating.prototype['expression'] = undefined;

// Implement AbstractRatingMetadata interface:
/**
 * @member {Array.<Object>} source-ratings
 */
_AbstractRatingMetadata["default"].prototype['source-ratings'] = undefined;
/**
 * @member {Array.<String>} conditions
 */
_AbstractRatingMetadata["default"].prototype['conditions'] = undefined;
/**
 * @member {Array.<String>} evaluations
 */
_AbstractRatingMetadata["default"].prototype['evaluations'] = undefined;
/**
 * @member {String} connections
 */
_AbstractRatingMetadata["default"].prototype['connections'] = undefined;
/**
 * @member {String} expression
 */
_AbstractRatingMetadata["default"].prototype['expression'] = undefined;
/**
 * @member {String} in-range-method
 */
_AbstractRatingMetadata["default"].prototype['in-range-method'] = undefined;
/**
 * @member {String} out-range-low-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-low-method'] = undefined;
/**
 * @member {String} out-range-high-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-high-method'] = undefined;
// Implement ExpressionRatingAllOf interface:
/**
 * @member {String} expression
 */
_ExpressionRatingAllOf["default"].prototype['expression'] = undefined;
var _default = exports["default"] = ExpressionRating;

},{"../ApiClient":16,"./AbstractRatingMetadata":40,"./ExpressionRatingAllOf":58}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ExpressionRatingAllOf model module.
 * @module model/ExpressionRatingAllOf
 * @version 3.0
 */
var ExpressionRatingAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExpressionRatingAllOf</code>.
   * @alias module:model/ExpressionRatingAllOf
   */
  function ExpressionRatingAllOf() {
    _classCallCheck(this, ExpressionRatingAllOf);
    ExpressionRatingAllOf.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ExpressionRatingAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ExpressionRatingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpressionRatingAllOf} obj Optional instance to populate.
     * @return {module:model/ExpressionRatingAllOf} The populated <code>ExpressionRatingAllOf</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExpressionRatingAllOf();
        if (data.hasOwnProperty('expression')) {
          obj['expression'] = _ApiClient["default"].convertToType(data['expression'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExpressionRatingAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExpressionRatingAllOf</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['expression'] && !(typeof data['expression'] === 'string' || data['expression'] instanceof String)) {
        throw new Error("Expected the field `expression` to be a primitive type in the JSON string but got " + data['expression']);
      }
      return true;
    }
  }]);
  return ExpressionRatingAllOf;
}();
/**
 * @member {String} expression
 */
ExpressionRatingAllOf.prototype['expression'] = undefined;
var _default = exports["default"] = ExpressionRatingAllOf;

},{"../ApiClient":16}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The IndependentRoundingSpec model module.
 * @module model/IndependentRoundingSpec
 * @version 3.0
 */
var IndependentRoundingSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndependentRoundingSpec</code>.
   * @alias module:model/IndependentRoundingSpec
   */
  function IndependentRoundingSpec() {
    _classCallCheck(this, IndependentRoundingSpec);
    IndependentRoundingSpec.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(IndependentRoundingSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>IndependentRoundingSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndependentRoundingSpec} obj Optional instance to populate.
     * @return {module:model/IndependentRoundingSpec} The populated <code>IndependentRoundingSpec</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndependentRoundingSpec();
        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IndependentRoundingSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IndependentRoundingSpec</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
        throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
      }
      return true;
    }
  }]);
  return IndependentRoundingSpec;
}();
/**
 * @member {Number} position
 */
IndependentRoundingSpec.prototype['position'] = undefined;

/**
 * @member {String} value
 */
IndependentRoundingSpec.prototype['value'] = undefined;
var _default = exports["default"] = IndependentRoundingSpec;

},{"../ApiClient":16}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Location model module.
 * @module model/Location
 * @version 3.0
 */
var Location = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   * @param officeId {String} Owning office of object.
   * @param name {String} 
   */
  function Location(officeId, name) {
    _classCallCheck(this, Location);
    Location.initialize(this, officeId, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Location, null, [{
    key: "initialize",
    value: function initialize(obj, officeId, name) {
      obj['office-id'] = officeId;
      obj['name'] = name;
    }

    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Location} obj Optional instance to populate.
     * @return {module:model/Location} The populated <code>Location</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Location();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }
        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
        if (data.hasOwnProperty('public-name')) {
          obj['public-name'] = _ApiClient["default"].convertToType(data['public-name'], 'String');
        }
        if (data.hasOwnProperty('long-name')) {
          obj['long-name'] = _ApiClient["default"].convertToType(data['long-name'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('timezone-name')) {
          obj['timezone-name'] = _ApiClient["default"].convertToType(data['timezone-name'], 'String');
        }
        if (data.hasOwnProperty('location-type')) {
          obj['location-type'] = _ApiClient["default"].convertToType(data['location-type'], 'String');
        }
        if (data.hasOwnProperty('location-kind')) {
          obj['location-kind'] = _ApiClient["default"].convertToType(data['location-kind'], 'String');
        }
        if (data.hasOwnProperty('nation')) {
          obj['nation'] = _ApiClient["default"].convertToType(data['nation'], 'String');
        }
        if (data.hasOwnProperty('state-initial')) {
          obj['state-initial'] = _ApiClient["default"].convertToType(data['state-initial'], 'String');
        }
        if (data.hasOwnProperty('county-name')) {
          obj['county-name'] = _ApiClient["default"].convertToType(data['county-name'], 'String');
        }
        if (data.hasOwnProperty('nearest-city')) {
          obj['nearest-city'] = _ApiClient["default"].convertToType(data['nearest-city'], 'String');
        }
        if (data.hasOwnProperty('horizontal-datum')) {
          obj['horizontal-datum'] = _ApiClient["default"].convertToType(data['horizontal-datum'], 'String');
        }
        if (data.hasOwnProperty('published-longitude')) {
          obj['published-longitude'] = _ApiClient["default"].convertToType(data['published-longitude'], 'Number');
        }
        if (data.hasOwnProperty('published-latitude')) {
          obj['published-latitude'] = _ApiClient["default"].convertToType(data['published-latitude'], 'Number');
        }
        if (data.hasOwnProperty('vertical-datum')) {
          obj['vertical-datum'] = _ApiClient["default"].convertToType(data['vertical-datum'], 'String');
        }
        if (data.hasOwnProperty('elevation')) {
          obj['elevation'] = _ApiClient["default"].convertToType(data['elevation'], 'Number');
        }
        if (data.hasOwnProperty('map-label')) {
          obj['map-label'] = _ApiClient["default"].convertToType(data['map-label'], 'String');
        }
        if (data.hasOwnProperty('bounding-office-id')) {
          obj['bounding-office-id'] = _ApiClient["default"].convertToType(data['bounding-office-id'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Location</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Location</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Location.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['public-name'] && !(typeof data['public-name'] === 'string' || data['public-name'] instanceof String)) {
        throw new Error("Expected the field `public-name` to be a primitive type in the JSON string but got " + data['public-name']);
      }
      // ensure the json data is a string
      if (data['long-name'] && !(typeof data['long-name'] === 'string' || data['long-name'] instanceof String)) {
        throw new Error("Expected the field `long-name` to be a primitive type in the JSON string but got " + data['long-name']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['timezone-name'] && !(typeof data['timezone-name'] === 'string' || data['timezone-name'] instanceof String)) {
        throw new Error("Expected the field `timezone-name` to be a primitive type in the JSON string but got " + data['timezone-name']);
      }
      // ensure the json data is a string
      if (data['location-type'] && !(typeof data['location-type'] === 'string' || data['location-type'] instanceof String)) {
        throw new Error("Expected the field `location-type` to be a primitive type in the JSON string but got " + data['location-type']);
      }
      // ensure the json data is a string
      if (data['location-kind'] && !(typeof data['location-kind'] === 'string' || data['location-kind'] instanceof String)) {
        throw new Error("Expected the field `location-kind` to be a primitive type in the JSON string but got " + data['location-kind']);
      }
      // ensure the json data is a string
      if (data['nation'] && !(typeof data['nation'] === 'string' || data['nation'] instanceof String)) {
        throw new Error("Expected the field `nation` to be a primitive type in the JSON string but got " + data['nation']);
      }
      // ensure the json data is a string
      if (data['state-initial'] && !(typeof data['state-initial'] === 'string' || data['state-initial'] instanceof String)) {
        throw new Error("Expected the field `state-initial` to be a primitive type in the JSON string but got " + data['state-initial']);
      }
      // ensure the json data is a string
      if (data['county-name'] && !(typeof data['county-name'] === 'string' || data['county-name'] instanceof String)) {
        throw new Error("Expected the field `county-name` to be a primitive type in the JSON string but got " + data['county-name']);
      }
      // ensure the json data is a string
      if (data['nearest-city'] && !(typeof data['nearest-city'] === 'string' || data['nearest-city'] instanceof String)) {
        throw new Error("Expected the field `nearest-city` to be a primitive type in the JSON string but got " + data['nearest-city']);
      }
      // ensure the json data is a string
      if (data['horizontal-datum'] && !(typeof data['horizontal-datum'] === 'string' || data['horizontal-datum'] instanceof String)) {
        throw new Error("Expected the field `horizontal-datum` to be a primitive type in the JSON string but got " + data['horizontal-datum']);
      }
      // ensure the json data is a string
      if (data['vertical-datum'] && !(typeof data['vertical-datum'] === 'string' || data['vertical-datum'] instanceof String)) {
        throw new Error("Expected the field `vertical-datum` to be a primitive type in the JSON string but got " + data['vertical-datum']);
      }
      // ensure the json data is a string
      if (data['map-label'] && !(typeof data['map-label'] === 'string' || data['map-label'] instanceof String)) {
        throw new Error("Expected the field `map-label` to be a primitive type in the JSON string but got " + data['map-label']);
      }
      // ensure the json data is a string
      if (data['bounding-office-id'] && !(typeof data['bounding-office-id'] === 'string' || data['bounding-office-id'] instanceof String)) {
        throw new Error("Expected the field `bounding-office-id` to be a primitive type in the JSON string but got " + data['bounding-office-id']);
      }
      return true;
    }
  }]);
  return Location;
}();
Location.RequiredProperties = ["office-id", "name"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Location.prototype['office-id'] = undefined;

/**
 * @member {String} name
 */
Location.prototype['name'] = undefined;

/**
 * @member {Number} latitude
 */
Location.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
Location.prototype['longitude'] = undefined;

/**
 * @member {Boolean} active
 */
Location.prototype['active'] = undefined;

/**
 * @member {String} public-name
 */
Location.prototype['public-name'] = undefined;

/**
 * @member {String} long-name
 */
Location.prototype['long-name'] = undefined;

/**
 * @member {String} description
 */
Location.prototype['description'] = undefined;

/**
 * @member {String} timezone-name
 */
Location.prototype['timezone-name'] = undefined;

/**
 * @member {String} location-type
 */
Location.prototype['location-type'] = undefined;

/**
 * @member {String} location-kind
 */
Location.prototype['location-kind'] = undefined;

/**
 * @member {module:model/Location.NationEnum} nation
 */
Location.prototype['nation'] = undefined;

/**
 * @member {String} state-initial
 */
Location.prototype['state-initial'] = undefined;

/**
 * @member {String} county-name
 */
Location.prototype['county-name'] = undefined;

/**
 * @member {String} nearest-city
 */
Location.prototype['nearest-city'] = undefined;

/**
 * @member {String} horizontal-datum
 */
Location.prototype['horizontal-datum'] = undefined;

/**
 * @member {Number} published-longitude
 */
Location.prototype['published-longitude'] = undefined;

/**
 * @member {Number} published-latitude
 */
Location.prototype['published-latitude'] = undefined;

/**
 * @member {String} vertical-datum
 */
Location.prototype['vertical-datum'] = undefined;

/**
 * @member {Number} elevation
 */
Location.prototype['elevation'] = undefined;

/**
 * @member {String} map-label
 */
Location.prototype['map-label'] = undefined;

/**
 * @member {String} bounding-office-id
 */
Location.prototype['bounding-office-id'] = undefined;

/**
 * Allowed values for the <code>nation</code> property.
 * @enum {String}
 * @readonly
 */
Location['NationEnum'] = {
  /**
   * value: "US"
   * @const
   */
  "US": "US",
  /**
   * value: "CANADA"
   * @const
   */
  "CANADA": "CANADA",
  /**
   * value: "MEXICO"
   * @const
   */
  "MEXICO": "MEXICO"
};
var _default = exports["default"] = Location;

},{"../ApiClient":16}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The LocationAlias model module.
 * @module model/LocationAlias
 * @version 3.0
 */
var LocationAlias = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationAlias</code>.
   * @alias module:model/LocationAlias
   */
  function LocationAlias() {
    _classCallCheck(this, LocationAlias);
    LocationAlias.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(LocationAlias, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>LocationAlias</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationAlias} obj Optional instance to populate.
     * @return {module:model/LocationAlias} The populated <code>LocationAlias</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationAlias();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationAlias</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationAlias</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
        throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
      }
      return true;
    }
  }]);
  return LocationAlias;
}();
/**
 * @member {String} name
 */
LocationAlias.prototype['name'] = undefined;

/**
 * @member {String} value
 */
LocationAlias.prototype['value'] = undefined;
var _default = exports["default"] = LocationAlias;

},{"../ApiClient":16}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _LocationAlias = _interopRequireDefault(require("./LocationAlias"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The LocationCatalogEntry model module.
 * @module model/LocationCatalogEntry
 * @version 3.0
 */
var LocationCatalogEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationCatalogEntry</code>.
   * @alias module:model/LocationCatalogEntry
   */
  function LocationCatalogEntry() {
    _classCallCheck(this, LocationCatalogEntry);
    LocationCatalogEntry.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(LocationCatalogEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>LocationCatalogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationCatalogEntry} obj Optional instance to populate.
     * @return {module:model/LocationCatalogEntry} The populated <code>LocationCatalogEntry</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationCatalogEntry();
        if (data.hasOwnProperty('office')) {
          obj['office'] = _ApiClient["default"].convertToType(data['office'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('nearestCity')) {
          obj['nearestCity'] = _ApiClient["default"].convertToType(data['nearestCity'], 'String');
        }
        if (data.hasOwnProperty('publicName')) {
          obj['publicName'] = _ApiClient["default"].convertToType(data['publicName'], 'String');
        }
        if (data.hasOwnProperty('longName')) {
          obj['longName'] = _ApiClient["default"].convertToType(data['longName'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('timeZone')) {
          obj['timeZone'] = _ApiClient["default"].convertToType(data['timeZone'], 'String');
        }
        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }
        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
        if (data.hasOwnProperty('publishedLatitude')) {
          obj['publishedLatitude'] = _ApiClient["default"].convertToType(data['publishedLatitude'], 'Number');
        }
        if (data.hasOwnProperty('publishedLongitude')) {
          obj['publishedLongitude'] = _ApiClient["default"].convertToType(data['publishedLongitude'], 'Number');
        }
        if (data.hasOwnProperty('horizontalDatum')) {
          obj['horizontalDatum'] = _ApiClient["default"].convertToType(data['horizontalDatum'], 'String');
        }
        if (data.hasOwnProperty('elevation')) {
          obj['elevation'] = _ApiClient["default"].convertToType(data['elevation'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('verticalDatum')) {
          obj['verticalDatum'] = _ApiClient["default"].convertToType(data['verticalDatum'], 'String');
        }
        if (data.hasOwnProperty('nation')) {
          obj['nation'] = _ApiClient["default"].convertToType(data['nation'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('county')) {
          obj['county'] = _ApiClient["default"].convertToType(data['county'], 'String');
        }
        if (data.hasOwnProperty('boundingOffice')) {
          obj['boundingOffice'] = _ApiClient["default"].convertToType(data['boundingOffice'], 'String');
        }
        if (data.hasOwnProperty('mapLabel')) {
          obj['mapLabel'] = _ApiClient["default"].convertToType(data['mapLabel'], 'String');
        }
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
        if (data.hasOwnProperty('aliases')) {
          obj['aliases'] = _ApiClient["default"].convertToType(data['aliases'], [_LocationAlias["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationCatalogEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationCatalogEntry</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['office'] && !(typeof data['office'] === 'string' || data['office'] instanceof String)) {
        throw new Error("Expected the field `office` to be a primitive type in the JSON string but got " + data['office']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['nearestCity'] && !(typeof data['nearestCity'] === 'string' || data['nearestCity'] instanceof String)) {
        throw new Error("Expected the field `nearestCity` to be a primitive type in the JSON string but got " + data['nearestCity']);
      }
      // ensure the json data is a string
      if (data['publicName'] && !(typeof data['publicName'] === 'string' || data['publicName'] instanceof String)) {
        throw new Error("Expected the field `publicName` to be a primitive type in the JSON string but got " + data['publicName']);
      }
      // ensure the json data is a string
      if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
        throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
        throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // ensure the json data is a string
      if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
        throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
      }
      // ensure the json data is a string
      if (data['horizontalDatum'] && !(typeof data['horizontalDatum'] === 'string' || data['horizontalDatum'] instanceof String)) {
        throw new Error("Expected the field `horizontalDatum` to be a primitive type in the JSON string but got " + data['horizontalDatum']);
      }
      // ensure the json data is a string
      if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
        throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
      }
      // ensure the json data is a string
      if (data['verticalDatum'] && !(typeof data['verticalDatum'] === 'string' || data['verticalDatum'] instanceof String)) {
        throw new Error("Expected the field `verticalDatum` to be a primitive type in the JSON string but got " + data['verticalDatum']);
      }
      // ensure the json data is a string
      if (data['nation'] && !(typeof data['nation'] === 'string' || data['nation'] instanceof String)) {
        throw new Error("Expected the field `nation` to be a primitive type in the JSON string but got " + data['nation']);
      }
      // ensure the json data is a string
      if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
        throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
      }
      // ensure the json data is a string
      if (data['county'] && !(typeof data['county'] === 'string' || data['county'] instanceof String)) {
        throw new Error("Expected the field `county` to be a primitive type in the JSON string but got " + data['county']);
      }
      // ensure the json data is a string
      if (data['boundingOffice'] && !(typeof data['boundingOffice'] === 'string' || data['boundingOffice'] instanceof String)) {
        throw new Error("Expected the field `boundingOffice` to be a primitive type in the JSON string but got " + data['boundingOffice']);
      }
      // ensure the json data is a string
      if (data['mapLabel'] && !(typeof data['mapLabel'] === 'string' || data['mapLabel'] instanceof String)) {
        throw new Error("Expected the field `mapLabel` to be a primitive type in the JSON string but got " + data['mapLabel']);
      }
      if (data['aliases']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['aliases'])) {
          throw new Error("Expected the field `aliases` to be an array in the JSON data but got " + data['aliases']);
        }
        // validate the optional field `aliases` (array)
        var _iterator = _createForOfIteratorHelper(data['aliases']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _LocationAlias["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return LocationCatalogEntry;
}();
/**
 * @member {String} office
 */
LocationCatalogEntry.prototype['office'] = undefined;

/**
 * @member {String} name
 */
LocationCatalogEntry.prototype['name'] = undefined;

/**
 * @member {String} nearestCity
 */
LocationCatalogEntry.prototype['nearestCity'] = undefined;

/**
 * @member {String} publicName
 */
LocationCatalogEntry.prototype['publicName'] = undefined;

/**
 * @member {String} longName
 */
LocationCatalogEntry.prototype['longName'] = undefined;

/**
 * @member {String} description
 */
LocationCatalogEntry.prototype['description'] = undefined;

/**
 * @member {String} kind
 */
LocationCatalogEntry.prototype['kind'] = undefined;

/**
 * @member {String} type
 */
LocationCatalogEntry.prototype['type'] = undefined;

/**
 * @member {String} timeZone
 */
LocationCatalogEntry.prototype['timeZone'] = undefined;

/**
 * @member {Number} latitude
 */
LocationCatalogEntry.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
LocationCatalogEntry.prototype['longitude'] = undefined;

/**
 * @member {Number} publishedLatitude
 */
LocationCatalogEntry.prototype['publishedLatitude'] = undefined;

/**
 * @member {Number} publishedLongitude
 */
LocationCatalogEntry.prototype['publishedLongitude'] = undefined;

/**
 * @member {String} horizontalDatum
 */
LocationCatalogEntry.prototype['horizontalDatum'] = undefined;

/**
 * @member {Number} elevation
 */
LocationCatalogEntry.prototype['elevation'] = undefined;

/**
 * @member {String} unit
 */
LocationCatalogEntry.prototype['unit'] = undefined;

/**
 * @member {String} verticalDatum
 */
LocationCatalogEntry.prototype['verticalDatum'] = undefined;

/**
 * @member {String} nation
 */
LocationCatalogEntry.prototype['nation'] = undefined;

/**
 * @member {String} state
 */
LocationCatalogEntry.prototype['state'] = undefined;

/**
 * @member {String} county
 */
LocationCatalogEntry.prototype['county'] = undefined;

/**
 * @member {String} boundingOffice
 */
LocationCatalogEntry.prototype['boundingOffice'] = undefined;

/**
 * @member {String} mapLabel
 */
LocationCatalogEntry.prototype['mapLabel'] = undefined;

/**
 * @member {Boolean} active
 */
LocationCatalogEntry.prototype['active'] = undefined;

/**
 * @member {Array.<module:model/LocationAlias>} aliases
 */
LocationCatalogEntry.prototype['aliases'] = undefined;
var _default = exports["default"] = LocationCatalogEntry;

},{"../ApiClient":16,"./LocationAlias":61}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The LocationCategory model module.
 * @module model/LocationCategory
 * @version 3.0
 */
var LocationCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationCategory</code>.
   * A representation of a location category
   * @alias module:model/LocationCategory
   * @param officeId {String} Owning office of object.
   */
  function LocationCategory(officeId) {
    _classCallCheck(this, LocationCategory);
    LocationCategory.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(LocationCategory, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>LocationCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationCategory} obj Optional instance to populate.
     * @return {module:model/LocationCategory} The populated <code>LocationCategory</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationCategory();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationCategory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationCategory</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(LocationCategory.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      return true;
    }
  }]);
  return LocationCategory;
}();
LocationCategory.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
LocationCategory.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
LocationCategory.prototype['id'] = undefined;

/**
 * @member {String} description
 */
LocationCategory.prototype['description'] = undefined;
var _default = exports["default"] = LocationCategory;

},{"../ApiClient":16}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AssignedLocation = _interopRequireDefault(require("./AssignedLocation"));
var _LocationCategory = _interopRequireDefault(require("./LocationCategory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The LocationGroup model module.
 * @module model/LocationGroup
 * @version 3.0
 */
var LocationGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationGroup</code>.
   * A representation of a location group
   * @alias module:model/LocationGroup
   * @param officeId {String} Owning office of object.
   */
  function LocationGroup(officeId) {
    _classCallCheck(this, LocationGroup);
    LocationGroup.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(LocationGroup, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>LocationGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationGroup} obj Optional instance to populate.
     * @return {module:model/LocationGroup} The populated <code>LocationGroup</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationGroup();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('location-category')) {
          obj['location-category'] = _LocationCategory["default"].constructFromObject(data['location-category']);
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('shared-loc-alias-id')) {
          obj['shared-loc-alias-id'] = _ApiClient["default"].convertToType(data['shared-loc-alias-id'], 'String');
        }
        if (data.hasOwnProperty('shared-ref-location-id')) {
          obj['shared-ref-location-id'] = _ApiClient["default"].convertToType(data['shared-ref-location-id'], 'String');
        }
        if (data.hasOwnProperty('loc-group-attribute')) {
          obj['loc-group-attribute'] = _ApiClient["default"].convertToType(data['loc-group-attribute'], 'Number');
        }
        if (data.hasOwnProperty('assigned-locations')) {
          obj['assigned-locations'] = _ApiClient["default"].convertToType(data['assigned-locations'], [_AssignedLocation["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationGroup</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(LocationGroup.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // validate the optional field `location-category`
      if (data['location-category']) {
        // data not null
        _LocationCategory["default"].validateJSON(data['location-category']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['shared-loc-alias-id'] && !(typeof data['shared-loc-alias-id'] === 'string' || data['shared-loc-alias-id'] instanceof String)) {
        throw new Error("Expected the field `shared-loc-alias-id` to be a primitive type in the JSON string but got " + data['shared-loc-alias-id']);
      }
      // ensure the json data is a string
      if (data['shared-ref-location-id'] && !(typeof data['shared-ref-location-id'] === 'string' || data['shared-ref-location-id'] instanceof String)) {
        throw new Error("Expected the field `shared-ref-location-id` to be a primitive type in the JSON string but got " + data['shared-ref-location-id']);
      }
      if (data['assigned-locations']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['assigned-locations'])) {
          throw new Error("Expected the field `assigned-locations` to be an array in the JSON data but got " + data['assigned-locations']);
        }
        // validate the optional field `assigned-locations` (array)
        var _iterator2 = _createForOfIteratorHelper(data['assigned-locations']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _AssignedLocation["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
  return LocationGroup;
}();
LocationGroup.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
LocationGroup.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
LocationGroup.prototype['id'] = undefined;

/**
 * @member {module:model/LocationCategory} location-category
 */
LocationGroup.prototype['location-category'] = undefined;

/**
 * @member {String} description
 */
LocationGroup.prototype['description'] = undefined;

/**
 * @member {String} shared-loc-alias-id
 */
LocationGroup.prototype['shared-loc-alias-id'] = undefined;

/**
 * @member {String} shared-ref-location-id
 */
LocationGroup.prototype['shared-ref-location-id'] = undefined;

/**
 * @member {Number} loc-group-attribute
 */
LocationGroup.prototype['loc-group-attribute'] = undefined;

/**
 * @member {Array.<module:model/AssignedLocation>} assigned-locations
 */
LocationGroup.prototype['assigned-locations'] = undefined;
var _default = exports["default"] = LocationGroup;

},{"../ApiClient":16,"./AssignedLocation":42,"./LocationCategory":63}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SeasonalValueBean = _interopRequireDefault(require("./SeasonalValueBean"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The LocationLevel model module.
 * @module model/LocationLevel
 * @version 3.0
 */
var LocationLevel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationLevel</code>.
   * @alias module:model/LocationLevel
   * @param officeId {String} Owning office of object.
   * @param locationLevelId {String} Name of the location level
   */
  function LocationLevel(officeId, locationLevelId) {
    _classCallCheck(this, LocationLevel);
    LocationLevel.initialize(this, officeId, locationLevelId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(LocationLevel, null, [{
    key: "initialize",
    value: function initialize(obj, officeId, locationLevelId) {
      obj['office-id'] = officeId;
      obj['location-level-id'] = locationLevelId;
    }

    /**
     * Constructs a <code>LocationLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationLevel} obj Optional instance to populate.
     * @return {module:model/LocationLevel} The populated <code>LocationLevel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationLevel();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('location-level-id')) {
          obj['location-level-id'] = _ApiClient["default"].convertToType(data['location-level-id'], 'String');
        }
        if (data.hasOwnProperty('seasonal-time-series-id')) {
          obj['seasonal-time-series-id'] = _ApiClient["default"].convertToType(data['seasonal-time-series-id'], 'String');
        }
        if (data.hasOwnProperty('seasonal-values')) {
          obj['seasonal-values'] = _ApiClient["default"].convertToType(data['seasonal-values'], [_SeasonalValueBean["default"]]);
        }
        if (data.hasOwnProperty('specified-level-id')) {
          obj['specified-level-id'] = _ApiClient["default"].convertToType(data['specified-level-id'], 'String');
        }
        if (data.hasOwnProperty('parameter-type-id')) {
          obj['parameter-type-id'] = _ApiClient["default"].convertToType(data['parameter-type-id'], 'String');
        }
        if (data.hasOwnProperty('parameter-id')) {
          obj['parameter-id'] = _ApiClient["default"].convertToType(data['parameter-id'], 'String');
        }
        if (data.hasOwnProperty('constant-value')) {
          obj['constant-value'] = _ApiClient["default"].convertToType(data['constant-value'], 'Number');
        }
        if (data.hasOwnProperty('level-units-id')) {
          obj['level-units-id'] = _ApiClient["default"].convertToType(data['level-units-id'], 'String');
        }
        if (data.hasOwnProperty('level-date')) {
          obj['level-date'] = _ApiClient["default"].convertToType(data['level-date'], 'Date');
        }
        if (data.hasOwnProperty('level-comment')) {
          obj['level-comment'] = _ApiClient["default"].convertToType(data['level-comment'], 'String');
        }
        if (data.hasOwnProperty('interval-origin')) {
          obj['interval-origin'] = _ApiClient["default"].convertToType(data['interval-origin'], 'Date');
        }
        if (data.hasOwnProperty('interval-months')) {
          obj['interval-months'] = _ApiClient["default"].convertToType(data['interval-months'], 'Number');
        }
        if (data.hasOwnProperty('interval-minutes')) {
          obj['interval-minutes'] = _ApiClient["default"].convertToType(data['interval-minutes'], 'Number');
        }
        if (data.hasOwnProperty('interpolate-string')) {
          obj['interpolate-string'] = _ApiClient["default"].convertToType(data['interpolate-string'], 'String');
        }
        if (data.hasOwnProperty('duration-id')) {
          obj['duration-id'] = _ApiClient["default"].convertToType(data['duration-id'], 'String');
        }
        if (data.hasOwnProperty('attribute-value')) {
          obj['attribute-value'] = _ApiClient["default"].convertToType(data['attribute-value'], 'Number');
        }
        if (data.hasOwnProperty('attribute-units-id')) {
          obj['attribute-units-id'] = _ApiClient["default"].convertToType(data['attribute-units-id'], 'String');
        }
        if (data.hasOwnProperty('attribute-parameter-type-id')) {
          obj['attribute-parameter-type-id'] = _ApiClient["default"].convertToType(data['attribute-parameter-type-id'], 'String');
        }
        if (data.hasOwnProperty('attribute-parameter-id')) {
          obj['attribute-parameter-id'] = _ApiClient["default"].convertToType(data['attribute-parameter-id'], 'String');
        }
        if (data.hasOwnProperty('attribute-duration-id')) {
          obj['attribute-duration-id'] = _ApiClient["default"].convertToType(data['attribute-duration-id'], 'String');
        }
        if (data.hasOwnProperty('attribute-comment')) {
          obj['attribute-comment'] = _ApiClient["default"].convertToType(data['attribute-comment'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationLevel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationLevel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(LocationLevel.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['location-level-id'] && !(typeof data['location-level-id'] === 'string' || data['location-level-id'] instanceof String)) {
        throw new Error("Expected the field `location-level-id` to be a primitive type in the JSON string but got " + data['location-level-id']);
      }
      // ensure the json data is a string
      if (data['seasonal-time-series-id'] && !(typeof data['seasonal-time-series-id'] === 'string' || data['seasonal-time-series-id'] instanceof String)) {
        throw new Error("Expected the field `seasonal-time-series-id` to be a primitive type in the JSON string but got " + data['seasonal-time-series-id']);
      }
      if (data['seasonal-values']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['seasonal-values'])) {
          throw new Error("Expected the field `seasonal-values` to be an array in the JSON data but got " + data['seasonal-values']);
        }
        // validate the optional field `seasonal-values` (array)
        var _iterator2 = _createForOfIteratorHelper(data['seasonal-values']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _SeasonalValueBean["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['specified-level-id'] && !(typeof data['specified-level-id'] === 'string' || data['specified-level-id'] instanceof String)) {
        throw new Error("Expected the field `specified-level-id` to be a primitive type in the JSON string but got " + data['specified-level-id']);
      }
      // ensure the json data is a string
      if (data['parameter-type-id'] && !(typeof data['parameter-type-id'] === 'string' || data['parameter-type-id'] instanceof String)) {
        throw new Error("Expected the field `parameter-type-id` to be a primitive type in the JSON string but got " + data['parameter-type-id']);
      }
      // ensure the json data is a string
      if (data['parameter-id'] && !(typeof data['parameter-id'] === 'string' || data['parameter-id'] instanceof String)) {
        throw new Error("Expected the field `parameter-id` to be a primitive type in the JSON string but got " + data['parameter-id']);
      }
      // ensure the json data is a string
      if (data['level-units-id'] && !(typeof data['level-units-id'] === 'string' || data['level-units-id'] instanceof String)) {
        throw new Error("Expected the field `level-units-id` to be a primitive type in the JSON string but got " + data['level-units-id']);
      }
      // ensure the json data is a string
      if (data['level-comment'] && !(typeof data['level-comment'] === 'string' || data['level-comment'] instanceof String)) {
        throw new Error("Expected the field `level-comment` to be a primitive type in the JSON string but got " + data['level-comment']);
      }
      // ensure the json data is a string
      if (data['interpolate-string'] && !(typeof data['interpolate-string'] === 'string' || data['interpolate-string'] instanceof String)) {
        throw new Error("Expected the field `interpolate-string` to be a primitive type in the JSON string but got " + data['interpolate-string']);
      }
      // ensure the json data is a string
      if (data['duration-id'] && !(typeof data['duration-id'] === 'string' || data['duration-id'] instanceof String)) {
        throw new Error("Expected the field `duration-id` to be a primitive type in the JSON string but got " + data['duration-id']);
      }
      // ensure the json data is a string
      if (data['attribute-units-id'] && !(typeof data['attribute-units-id'] === 'string' || data['attribute-units-id'] instanceof String)) {
        throw new Error("Expected the field `attribute-units-id` to be a primitive type in the JSON string but got " + data['attribute-units-id']);
      }
      // ensure the json data is a string
      if (data['attribute-parameter-type-id'] && !(typeof data['attribute-parameter-type-id'] === 'string' || data['attribute-parameter-type-id'] instanceof String)) {
        throw new Error("Expected the field `attribute-parameter-type-id` to be a primitive type in the JSON string but got " + data['attribute-parameter-type-id']);
      }
      // ensure the json data is a string
      if (data['attribute-parameter-id'] && !(typeof data['attribute-parameter-id'] === 'string' || data['attribute-parameter-id'] instanceof String)) {
        throw new Error("Expected the field `attribute-parameter-id` to be a primitive type in the JSON string but got " + data['attribute-parameter-id']);
      }
      // ensure the json data is a string
      if (data['attribute-duration-id'] && !(typeof data['attribute-duration-id'] === 'string' || data['attribute-duration-id'] instanceof String)) {
        throw new Error("Expected the field `attribute-duration-id` to be a primitive type in the JSON string but got " + data['attribute-duration-id']);
      }
      // ensure the json data is a string
      if (data['attribute-comment'] && !(typeof data['attribute-comment'] === 'string' || data['attribute-comment'] instanceof String)) {
        throw new Error("Expected the field `attribute-comment` to be a primitive type in the JSON string but got " + data['attribute-comment']);
      }
      return true;
    }
  }]);
  return LocationLevel;
}();
LocationLevel.RequiredProperties = ["office-id", "location-level-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
LocationLevel.prototype['office-id'] = undefined;

/**
 * Name of the location level
 * @member {String} location-level-id
 */
LocationLevel.prototype['location-level-id'] = undefined;

/**
 * Timeseries ID (e.g. from the times series catalog) to use as the location level. Mutually exclusive with seasonalValues and siParameterUnitsConstantValue
 * @member {String} seasonal-time-series-id
 */
LocationLevel.prototype['seasonal-time-series-id'] = undefined;

/**
 * List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue
 * @member {Array.<module:model/SeasonalValueBean>} seasonal-values
 */
LocationLevel.prototype['seasonal-values'] = undefined;

/**
 * Generic name of this location level. Common names are 'Top of Dam', 'Streambed', 'Bottom of Dam'.
 * @member {String} specified-level-id
 */
LocationLevel.prototype['specified-level-id'] = undefined;

/**
 * To indicate if single or aggregate value
 * @member {module:model/LocationLevel.ParameterTypeIdEnum} parameter-type-id
 */
LocationLevel.prototype['parameter-type-id'] = undefined;

/**
 * Data Type such as Stage, Elevation, or others.
 * @member {String} parameter-id
 */
LocationLevel.prototype['parameter-id'] = undefined;

/**
 * Single value for this location level. Mutually exclusive with seasonableTimeSeriesId and seasonValues.
 * @member {Number} constant-value
 */
LocationLevel.prototype['constant-value'] = undefined;

/**
 * Units the provided levels are in
 * @member {String} level-units-id
 */
LocationLevel.prototype['level-units-id'] = undefined;

/**
 * The date/time at which this location level configuration takes effect.
 * @member {Date} level-date
 */
LocationLevel.prototype['level-date'] = undefined;

/**
 * @member {String} level-comment
 */
LocationLevel.prototype['level-comment'] = undefined;

/**
 * The start point of provided seasonal values
 * @member {Date} interval-origin
 */
LocationLevel.prototype['interval-origin'] = undefined;

/**
 * @member {Number} interval-months
 */
LocationLevel.prototype['interval-months'] = undefined;

/**
 * @member {Number} interval-minutes
 */
LocationLevel.prototype['interval-minutes'] = undefined;

/**
 * Indicating whether or not to interpolate between seasonal values.
 * @member {module:model/LocationLevel.InterpolateStringEnum} interpolate-string
 */
LocationLevel.prototype['interpolate-string'] = undefined;

/**
 * 0 if parameterTypeId is Inst. Otherwise duration indicating the time window of the aggregate value.
 * @member {String} duration-id
 */
LocationLevel.prototype['duration-id'] = undefined;

/**
 * @member {Number} attribute-value
 */
LocationLevel.prototype['attribute-value'] = undefined;

/**
 * @member {String} attribute-units-id
 */
LocationLevel.prototype['attribute-units-id'] = undefined;

/**
 * @member {String} attribute-parameter-type-id
 */
LocationLevel.prototype['attribute-parameter-type-id'] = undefined;

/**
 * @member {String} attribute-parameter-id
 */
LocationLevel.prototype['attribute-parameter-id'] = undefined;

/**
 * @member {String} attribute-duration-id
 */
LocationLevel.prototype['attribute-duration-id'] = undefined;

/**
 * @member {String} attribute-comment
 */
LocationLevel.prototype['attribute-comment'] = undefined;

/**
 * Allowed values for the <code>parameter-type-id</code> property.
 * @enum {String}
 * @readonly
 */
LocationLevel['ParameterTypeIdEnum'] = {
  /**
   * value: "Inst"
   * @const
   */
  "Inst": "Inst",
  /**
   * value: "Ave"
   * @const
   */
  "Ave": "Ave",
  /**
   * value: "Min"
   * @const
   */
  "Min": "Min",
  /**
   * value: "Max"
   * @const
   */
  "Max": "Max",
  /**
   * value: "Total"
   * @const
   */
  "Total": "Total"
};

/**
 * Allowed values for the <code>interpolate-string</code> property.
 * @enum {String}
 * @readonly
 */
LocationLevel['InterpolateStringEnum'] = {
  /**
   * value: "T"
   * @const
   */
  "T": "T",
  /**
   * value: "F"
   * @const
   */
  "F": "F"
};
var _default = exports["default"] = LocationLevel;

},{"../ApiClient":16,"./SeasonalValueBean":83}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _LocationLevel = _interopRequireDefault(require("./LocationLevel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The LocationLevels model module.
 * @module model/LocationLevels
 * @version 3.0
 */
var LocationLevels = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocationLevels</code>.
   * @alias module:model/LocationLevels
   */
  function LocationLevels() {
    _classCallCheck(this, LocationLevels);
    LocationLevels.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(LocationLevels, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>LocationLevels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationLevels} obj Optional instance to populate.
     * @return {module:model/LocationLevels} The populated <code>LocationLevels</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocationLevels();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('levels')) {
          obj['levels'] = _ApiClient["default"].convertToType(data['levels'], [_LocationLevel["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationLevels</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationLevels</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['levels']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['levels'])) {
          throw new Error("Expected the field `levels` to be an array in the JSON data but got " + data['levels']);
        }
        // validate the optional field `levels` (array)
        var _iterator = _createForOfIteratorHelper(data['levels']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _LocationLevel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return LocationLevels;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
LocationLevels.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
LocationLevels.prototype['total'] = undefined;

/**
 * List of retrieved location levels
 * @member {Array.<module:model/LocationLevel>} levels
 */
LocationLevels.prototype['levels'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
LocationLevels.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
LocationLevels.prototype['page-size'] = undefined;
var _default = exports["default"] = LocationLevels;

},{"../ApiClient":16,"./LocationLevel":65}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Office model module.
 * @module model/Office
 * @version 3.0
 */
var Office = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Office</code>.
   * A representation of a CWMS office
   * @alias module:model/Office
   */
  function Office() {
    _classCallCheck(this, Office);
    Office.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Office, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Office</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Office} obj Optional instance to populate.
     * @return {module:model/Office} The populated <code>Office</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Office();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('longName')) {
          obj['longName'] = _ApiClient["default"].convertToType(data['longName'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('reportsTo')) {
          obj['reportsTo'] = _ApiClient["default"].convertToType(data['reportsTo'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Office</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Office</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
        throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // ensure the json data is a string
      if (data['reportsTo'] && !(typeof data['reportsTo'] === 'string' || data['reportsTo'] instanceof String)) {
        throw new Error("Expected the field `reportsTo` to be a primitive type in the JSON string but got " + data['reportsTo']);
      }
      return true;
    }
  }]);
  return Office;
}();
/**
 * @member {String} name
 */
Office.prototype['name'] = undefined;

/**
 * @member {String} longName
 */
Office.prototype['longName'] = undefined;

/**
 * @member {module:model/Office.TypeEnum} type
 */
Office.prototype['type'] = undefined;

/**
 * Reference to another office, like a division, that this office reports to.
 * @member {String} reportsTo
 */
Office.prototype['reportsTo'] = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Office['TypeEnum'] = {
  /**
   * value: "unknown"
   * @const
   */
  "unknown": "unknown",
  /**
   * value: "corps headquarters"
   * @const
   */
  "corps headquarters": "corps headquarters",
  /**
   * value: "division headquarters"
   * @const
   */
  "division headquarters": "division headquarters",
  /**
   * value: "division regional"
   * @const
   */
  "division regional": "division regional",
  /**
   * value: "district"
   * @const
   */
  "district": "district",
  /**
   * value: "filed operating activity"
   * @const
   */
  "filed operating activity": "filed operating activity"
};
var _default = exports["default"] = Office;

},{"../ApiClient":16}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The OfficeCSV model module.
 * @module model/OfficeCSV
 * @version 3.0
 */
var OfficeCSV = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OfficeCSV</code>.
   * Single Office or List of Offices in comma separated format
   * @alias module:model/OfficeCSV
   */
  function OfficeCSV() {
    _classCallCheck(this, OfficeCSV);
    OfficeCSV.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OfficeCSV, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OfficeCSV</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfficeCSV} obj Optional instance to populate.
     * @return {module:model/OfficeCSV} The populated <code>OfficeCSV</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OfficeCSV();
        if (data.hasOwnProperty('Office')) {
          obj['Office'] = _ApiClient["default"].convertToType(data['Office'], 'String');
        }
        if (data.hasOwnProperty('longName')) {
          obj['longName'] = _ApiClient["default"].convertToType(data['longName'], 'String');
        }
        if (data.hasOwnProperty('officeType')) {
          obj['officeType'] = _ApiClient["default"].convertToType(data['officeType'], 'String');
        }
        if (data.hasOwnProperty('reportsToOffice')) {
          obj['reportsToOffice'] = _ApiClient["default"].convertToType(data['reportsToOffice'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OfficeCSV</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OfficeCSV</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['Office'] && !(typeof data['Office'] === 'string' || data['Office'] instanceof String)) {
        throw new Error("Expected the field `Office` to be a primitive type in the JSON string but got " + data['Office']);
      }
      // ensure the json data is a string
      if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
        throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
      }
      // ensure the json data is a string
      if (data['officeType'] && !(typeof data['officeType'] === 'string' || data['officeType'] instanceof String)) {
        throw new Error("Expected the field `officeType` to be a primitive type in the JSON string but got " + data['officeType']);
      }
      // ensure the json data is a string
      if (data['reportsToOffice'] && !(typeof data['reportsToOffice'] === 'string' || data['reportsToOffice'] instanceof String)) {
        throw new Error("Expected the field `reportsToOffice` to be a primitive type in the JSON string but got " + data['reportsToOffice']);
      }
      return true;
    }
  }]);
  return OfficeCSV;
}();
/**
 * @member {String} Office
 */
OfficeCSV.prototype['Office'] = undefined;

/**
 * @member {String} longName
 */
OfficeCSV.prototype['longName'] = undefined;

/**
 * @member {String} officeType
 */
OfficeCSV.prototype['officeType'] = undefined;

/**
 * @member {String} reportsToOffice
 */
OfficeCSV.prototype['reportsToOffice'] = undefined;
var _default = exports["default"] = OfficeCSV;

},{"../ApiClient":16}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OfficesFMT = _interopRequireDefault(require("./OfficesFMT"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The OfficeFormatV1 model module.
 * @module model/OfficeFormatV1
 * @version 3.0
 */
var OfficeFormatV1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OfficeFormatV1</code>.
   * @alias module:model/OfficeFormatV1
   */
  function OfficeFormatV1() {
    _classCallCheck(this, OfficeFormatV1);
    OfficeFormatV1.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OfficeFormatV1, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OfficeFormatV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfficeFormatV1} obj Optional instance to populate.
     * @return {module:model/OfficeFormatV1} The populated <code>OfficeFormatV1</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OfficeFormatV1();
        if (data.hasOwnProperty('offices')) {
          obj['offices'] = _OfficesFMT["default"].constructFromObject(data['offices']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OfficeFormatV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OfficeFormatV1</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `offices`
      if (data['offices']) {
        // data not null
        _OfficesFMT["default"].validateJSON(data['offices']);
      }
      return true;
    }
  }]);
  return OfficeFormatV1;
}();
/**
 * @member {module:model/OfficesFMT} offices
 */
OfficeFormatV1.prototype['offices'] = undefined;
var _default = exports["default"] = OfficeFormatV1;

},{"../ApiClient":16,"./OfficesFMT":71}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The OfficeTabulation model module.
 * @module model/OfficeTabulation
 * @version 3.0
 */
var OfficeTabulation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OfficeTabulation</code>.
   * Single Office or List of Offices in tab separated format
   * @alias module:model/OfficeTabulation
   */
  function OfficeTabulation() {
    _classCallCheck(this, OfficeTabulation);
    OfficeTabulation.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OfficeTabulation, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OfficeTabulation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfficeTabulation} obj Optional instance to populate.
     * @return {module:model/OfficeTabulation} The populated <code>OfficeTabulation</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OfficeTabulation();
        if (data.hasOwnProperty('Office')) {
          obj['Office'] = _ApiClient["default"].convertToType(data['Office'], 'String');
        }
        if (data.hasOwnProperty('longName')) {
          obj['longName'] = _ApiClient["default"].convertToType(data['longName'], 'String');
        }
        if (data.hasOwnProperty('officeType')) {
          obj['officeType'] = _ApiClient["default"].convertToType(data['officeType'], 'String');
        }
        if (data.hasOwnProperty('reportsToOffice')) {
          obj['reportsToOffice'] = _ApiClient["default"].convertToType(data['reportsToOffice'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OfficeTabulation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OfficeTabulation</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['Office'] && !(typeof data['Office'] === 'string' || data['Office'] instanceof String)) {
        throw new Error("Expected the field `Office` to be a primitive type in the JSON string but got " + data['Office']);
      }
      // ensure the json data is a string
      if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
        throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
      }
      // ensure the json data is a string
      if (data['officeType'] && !(typeof data['officeType'] === 'string' || data['officeType'] instanceof String)) {
        throw new Error("Expected the field `officeType` to be a primitive type in the JSON string but got " + data['officeType']);
      }
      // ensure the json data is a string
      if (data['reportsToOffice'] && !(typeof data['reportsToOffice'] === 'string' || data['reportsToOffice'] instanceof String)) {
        throw new Error("Expected the field `reportsToOffice` to be a primitive type in the JSON string but got " + data['reportsToOffice']);
      }
      return true;
    }
  }]);
  return OfficeTabulation;
}();
/**
 * @member {String} Office
 */
OfficeTabulation.prototype['Office'] = undefined;

/**
 * @member {String} longName
 */
OfficeTabulation.prototype['longName'] = undefined;

/**
 * @member {String} officeType
 */
OfficeTabulation.prototype['officeType'] = undefined;

/**
 * @member {String} reportsToOffice
 */
OfficeTabulation.prototype['reportsToOffice'] = undefined;
var _default = exports["default"] = OfficeTabulation;

},{"../ApiClient":16}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Office = _interopRequireDefault(require("./Office"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The OfficesFMT model module.
 * @module model/OfficesFMT
 * @version 3.0
 */
var OfficesFMT = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OfficesFMT</code>.
   * @alias module:model/OfficesFMT
   */
  function OfficesFMT() {
    _classCallCheck(this, OfficesFMT);
    OfficesFMT.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OfficesFMT, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OfficesFMT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfficesFMT} obj Optional instance to populate.
     * @return {module:model/OfficesFMT} The populated <code>OfficesFMT</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OfficesFMT();
        if (data.hasOwnProperty('offices')) {
          obj['offices'] = _ApiClient["default"].convertToType(data['offices'], [_Office["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OfficesFMT</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OfficesFMT</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['offices']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['offices'])) {
          throw new Error("Expected the field `offices` to be an array in the JSON data but got " + data['offices']);
        }
        // validate the optional field `offices` (array)
        var _iterator = _createForOfIteratorHelper(data['offices']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _Office["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return OfficesFMT;
}();
/**
 * @member {Array.<module:model/Office>} offices
 */
OfficesFMT.prototype['offices'] = undefined;
var _default = exports["default"] = OfficesFMT;

},{"../ApiClient":16,"./Office":67}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Offset model module.
 * @module model/Offset
 * @version 3.0
 */
var Offset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Offset</code>.
   * @alias module:model/Offset
   */
  function Offset() {
    _classCallCheck(this, Offset);
    Offset.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Offset, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Offset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Offset} obj Optional instance to populate.
     * @return {module:model/Offset} The populated <code>Offset</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Offset();
        if (data.hasOwnProperty('estimate')) {
          obj['estimate'] = _ApiClient["default"].convertToType(data['estimate'], 'Boolean');
        }
        if (data.hasOwnProperty('toDatum')) {
          obj['toDatum'] = _ApiClient["default"].convertToType(data['toDatum'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Offset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Offset</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['toDatum'] && !(typeof data['toDatum'] === 'string' || data['toDatum'] instanceof String)) {
        throw new Error("Expected the field `toDatum` to be a primitive type in the JSON string but got " + data['toDatum']);
      }
      return true;
    }
  }]);
  return Offset;
}();
/**
 * @member {Boolean} estimate
 */
Offset.prototype['estimate'] = undefined;

/**
 * @member {String} toDatum
 */
Offset.prototype['toDatum'] = undefined;

/**
 * @member {Number} value
 */
Offset.prototype['value'] = undefined;
var _default = exports["default"] = Offset;

},{"../ApiClient":16}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ParameterSpec model module.
 * @module model/ParameterSpec
 * @version 3.0
 */
var ParameterSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParameterSpec</code>.
   * @alias module:model/ParameterSpec
   */
  function ParameterSpec() {
    _classCallCheck(this, ParameterSpec);
    ParameterSpec.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ParameterSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ParameterSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterSpec} obj Optional instance to populate.
     * @return {module:model/ParameterSpec} The populated <code>ParameterSpec</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParameterSpec();
        if (data.hasOwnProperty('parameter')) {
          obj['parameter'] = _ApiClient["default"].convertToType(data['parameter'], 'String');
        }
        if (data.hasOwnProperty('in-range-method')) {
          obj['in-range-method'] = _ApiClient["default"].convertToType(data['in-range-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-low-method')) {
          obj['out-range-low-method'] = _ApiClient["default"].convertToType(data['out-range-low-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-high-method')) {
          obj['out-range-high-method'] = _ApiClient["default"].convertToType(data['out-range-high-method'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ParameterSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParameterSpec</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['parameter'] && !(typeof data['parameter'] === 'string' || data['parameter'] instanceof String)) {
        throw new Error("Expected the field `parameter` to be a primitive type in the JSON string but got " + data['parameter']);
      }
      // ensure the json data is a string
      if (data['in-range-method'] && !(typeof data['in-range-method'] === 'string' || data['in-range-method'] instanceof String)) {
        throw new Error("Expected the field `in-range-method` to be a primitive type in the JSON string but got " + data['in-range-method']);
      }
      // ensure the json data is a string
      if (data['out-range-low-method'] && !(typeof data['out-range-low-method'] === 'string' || data['out-range-low-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-low-method` to be a primitive type in the JSON string but got " + data['out-range-low-method']);
      }
      // ensure the json data is a string
      if (data['out-range-high-method'] && !(typeof data['out-range-high-method'] === 'string' || data['out-range-high-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-high-method` to be a primitive type in the JSON string but got " + data['out-range-high-method']);
      }
      return true;
    }
  }]);
  return ParameterSpec;
}();
/**
 * @member {String} parameter
 */
ParameterSpec.prototype['parameter'] = undefined;

/**
 * @member {String} in-range-method
 */
ParameterSpec.prototype['in-range-method'] = undefined;

/**
 * @member {String} out-range-low-method
 */
ParameterSpec.prototype['out-range-low-method'] = undefined;

/**
 * @member {String} out-range-high-method
 */
ParameterSpec.prototype['out-range-high-method'] = undefined;
var _default = exports["default"] = ParameterSpec;

},{"../ApiClient":16}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PoolNameType = _interopRequireDefault(require("./PoolNameType"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Pool model module.
 * @module model/Pool
 * @version 3.0
 */
var Pool = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Pool</code>.
   * List of retrieved pools
   * @alias module:model/Pool
   */
  function Pool() {
    _classCallCheck(this, Pool);
    Pool.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Pool, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Pool</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pool} obj Optional instance to populate.
     * @return {module:model/Pool} The populated <code>Pool</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pool();
        if (data.hasOwnProperty('attribute')) {
          obj['attribute'] = _ApiClient["default"].convertToType(data['attribute'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('clobText')) {
          obj['clobText'] = _ApiClient["default"].convertToType(data['clobText'], 'String');
        }
        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'String');
        }
        if (data.hasOwnProperty('topLevelId')) {
          obj['topLevelId'] = _ApiClient["default"].convertToType(data['topLevelId'], 'String');
        }
        if (data.hasOwnProperty('bottomLevelId')) {
          obj['bottomLevelId'] = _ApiClient["default"].convertToType(data['bottomLevelId'], 'String');
        }
        if (data.hasOwnProperty('poolName')) {
          obj['poolName'] = _PoolNameType["default"].constructFromObject(data['poolName']);
        }
        if (data.hasOwnProperty('implicit')) {
          obj['implicit'] = _ApiClient["default"].convertToType(data['implicit'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Pool</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Pool</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['clobText'] && !(typeof data['clobText'] === 'string' || data['clobText'] instanceof String)) {
        throw new Error("Expected the field `clobText` to be a primitive type in the JSON string but got " + data['clobText']);
      }
      // ensure the json data is a string
      if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
        throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
      }
      // ensure the json data is a string
      if (data['topLevelId'] && !(typeof data['topLevelId'] === 'string' || data['topLevelId'] instanceof String)) {
        throw new Error("Expected the field `topLevelId` to be a primitive type in the JSON string but got " + data['topLevelId']);
      }
      // ensure the json data is a string
      if (data['bottomLevelId'] && !(typeof data['bottomLevelId'] === 'string' || data['bottomLevelId'] instanceof String)) {
        throw new Error("Expected the field `bottomLevelId` to be a primitive type in the JSON string but got " + data['bottomLevelId']);
      }
      // validate the optional field `poolName`
      if (data['poolName']) {
        // data not null
        _PoolNameType["default"].validateJSON(data['poolName']);
      }
      return true;
    }
  }]);
  return Pool;
}();
/**
 * @member {Number} attribute
 */
Pool.prototype['attribute'] = undefined;

/**
 * @member {String} description
 */
Pool.prototype['description'] = undefined;

/**
 * @member {String} clobText
 */
Pool.prototype['clobText'] = undefined;

/**
 * @member {String} projectId
 */
Pool.prototype['projectId'] = undefined;

/**
 * @member {String} topLevelId
 */
Pool.prototype['topLevelId'] = undefined;

/**
 * @member {String} bottomLevelId
 */
Pool.prototype['bottomLevelId'] = undefined;

/**
 * @member {module:model/PoolNameType} poolName
 */
Pool.prototype['poolName'] = undefined;

/**
 * @member {Boolean} implicit
 */
Pool.prototype['implicit'] = undefined;
var _default = exports["default"] = Pool;

},{"../ApiClient":16,"./PoolNameType":75}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The PoolNameType model module.
 * @module model/PoolNameType
 * @version 3.0
 */
var PoolNameType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PoolNameType</code>.
   * @alias module:model/PoolNameType
   */
  function PoolNameType() {
    _classCallCheck(this, PoolNameType);
    PoolNameType.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PoolNameType, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>PoolNameType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolNameType} obj Optional instance to populate.
     * @return {module:model/PoolNameType} The populated <code>PoolNameType</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PoolNameType();
        if (data.hasOwnProperty('officeId')) {
          obj['officeId'] = _ApiClient["default"].convertToType(data['officeId'], 'String');
        }
        if (data.hasOwnProperty('poolName')) {
          obj['poolName'] = _ApiClient["default"].convertToType(data['poolName'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PoolNameType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PoolNameType</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['officeId'] && !(typeof data['officeId'] === 'string' || data['officeId'] instanceof String)) {
        throw new Error("Expected the field `officeId` to be a primitive type in the JSON string but got " + data['officeId']);
      }
      // ensure the json data is a string
      if (data['poolName'] && !(typeof data['poolName'] === 'string' || data['poolName'] instanceof String)) {
        throw new Error("Expected the field `poolName` to be a primitive type in the JSON string but got " + data['poolName']);
      }
      return true;
    }
  }]);
  return PoolNameType;
}();
/**
 * @member {String} officeId
 */
PoolNameType.prototype['officeId'] = undefined;

/**
 * @member {String} poolName
 */
PoolNameType.prototype['poolName'] = undefined;
var _default = exports["default"] = PoolNameType;

},{"../ApiClient":16}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Pool = _interopRequireDefault(require("./Pool"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Pools model module.
 * @module model/Pools
 * @version 3.0
 */
var Pools = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Pools</code>.
   * @alias module:model/Pools
   */
  function Pools() {
    _classCallCheck(this, Pools);
    Pools.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Pools, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Pools</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pools} obj Optional instance to populate.
     * @return {module:model/Pools} The populated <code>Pools</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pools();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('pools')) {
          obj['pools'] = _ApiClient["default"].convertToType(data['pools'], [_Pool["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Pools</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Pools</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['pools']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['pools'])) {
          throw new Error("Expected the field `pools` to be an array in the JSON data but got " + data['pools']);
        }
        // validate the optional field `pools` (array)
        var _iterator = _createForOfIteratorHelper(data['pools']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _Pool["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return Pools;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
Pools.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
Pools.prototype['total'] = undefined;

/**
 * List of retrieved pools
 * @member {Array.<module:model/Pool>} pools
 */
Pools.prototype['pools'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
Pools.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
Pools.prototype['page-size'] = undefined;
var _default = exports["default"] = Pools;

},{"../ApiClient":16,"./Pool":74}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AbstractRatingMetadata = _interopRequireDefault(require("./AbstractRatingMetadata"));
var _RatingSpec = _interopRequireDefault(require("./RatingSpec"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The RatingMetadata model module.
 * @module model/RatingMetadata
 * @version 3.0
 */
var RatingMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RatingMetadata</code>.
   * @alias module:model/RatingMetadata
   */
  function RatingMetadata() {
    _classCallCheck(this, RatingMetadata);
    RatingMetadata.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RatingMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RatingMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingMetadata} obj Optional instance to populate.
     * @return {module:model/RatingMetadata} The populated <code>RatingMetadata</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RatingMetadata();
        if (data.hasOwnProperty('rating-spec')) {
          obj['rating-spec'] = _RatingSpec["default"].constructFromObject(data['rating-spec']);
        }
        if (data.hasOwnProperty('ratings')) {
          obj['ratings'] = _ApiClient["default"].convertToType(data['ratings'], [_AbstractRatingMetadata["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingMetadata</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `rating-spec`
      if (data['rating-spec']) {
        // data not null
        _RatingSpec["default"].validateJSON(data['rating-spec']);
      }
      if (data['ratings']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['ratings'])) {
          throw new Error("Expected the field `ratings` to be an array in the JSON data but got " + data['ratings']);
        }
        // validate the optional field `ratings` (array)
        var _iterator = _createForOfIteratorHelper(data['ratings']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _AbstractRatingMetadata["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return RatingMetadata;
}();
/**
 * @member {module:model/RatingSpec} rating-spec
 */
RatingMetadata.prototype['rating-spec'] = undefined;

/**
 * @member {Array.<module:model/AbstractRatingMetadata>} ratings
 */
RatingMetadata.prototype['ratings'] = undefined;
var _default = exports["default"] = RatingMetadata;

},{"../ApiClient":16,"./AbstractRatingMetadata":40,"./RatingSpec":79}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _RatingMetadata = _interopRequireDefault(require("./RatingMetadata"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The RatingMetadataList model module.
 * @module model/RatingMetadataList
 * @version 3.0
 */
var RatingMetadataList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RatingMetadataList</code>.
   * @alias module:model/RatingMetadataList
   */
  function RatingMetadataList() {
    _classCallCheck(this, RatingMetadataList);
    RatingMetadataList.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RatingMetadataList, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RatingMetadataList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingMetadataList} obj Optional instance to populate.
     * @return {module:model/RatingMetadataList} The populated <code>RatingMetadataList</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RatingMetadataList();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('rating-metadata')) {
          obj['rating-metadata'] = _ApiClient["default"].convertToType(data['rating-metadata'], [_RatingMetadata["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingMetadataList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingMetadataList</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['rating-metadata']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['rating-metadata'])) {
          throw new Error("Expected the field `rating-metadata` to be an array in the JSON data but got " + data['rating-metadata']);
        }
        // validate the optional field `rating-metadata` (array)
        var _iterator = _createForOfIteratorHelper(data['rating-metadata']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _RatingMetadata["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return RatingMetadataList;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
RatingMetadataList.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
RatingMetadataList.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/RatingMetadata>} rating-metadata
 */
RatingMetadataList.prototype['rating-metadata'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
RatingMetadataList.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
RatingMetadataList.prototype['page-size'] = undefined;
var _default = exports["default"] = RatingMetadataList;

},{"../ApiClient":16,"./RatingMetadata":77}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _IndependentRoundingSpec = _interopRequireDefault(require("./IndependentRoundingSpec"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The RatingSpec model module.
 * @module model/RatingSpec
 * @version 3.0
 */
var RatingSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RatingSpec</code>.
   * @alias module:model/RatingSpec
   * @param officeId {String} Owning office of object.
   */
  function RatingSpec(officeId) {
    _classCallCheck(this, RatingSpec);
    RatingSpec.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RatingSpec, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>RatingSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingSpec} obj Optional instance to populate.
     * @return {module:model/RatingSpec} The populated <code>RatingSpec</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RatingSpec();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('rating-id')) {
          obj['rating-id'] = _ApiClient["default"].convertToType(data['rating-id'], 'String');
        }
        if (data.hasOwnProperty('template-id')) {
          obj['template-id'] = _ApiClient["default"].convertToType(data['template-id'], 'String');
        }
        if (data.hasOwnProperty('location-id')) {
          obj['location-id'] = _ApiClient["default"].convertToType(data['location-id'], 'String');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
        if (data.hasOwnProperty('source-agency')) {
          obj['source-agency'] = _ApiClient["default"].convertToType(data['source-agency'], 'String');
        }
        if (data.hasOwnProperty('in-range-method')) {
          obj['in-range-method'] = _ApiClient["default"].convertToType(data['in-range-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-low-method')) {
          obj['out-range-low-method'] = _ApiClient["default"].convertToType(data['out-range-low-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-high-method')) {
          obj['out-range-high-method'] = _ApiClient["default"].convertToType(data['out-range-high-method'], 'String');
        }
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
        if (data.hasOwnProperty('auto-update')) {
          obj['auto-update'] = _ApiClient["default"].convertToType(data['auto-update'], 'Boolean');
        }
        if (data.hasOwnProperty('auto-activate')) {
          obj['auto-activate'] = _ApiClient["default"].convertToType(data['auto-activate'], 'Boolean');
        }
        if (data.hasOwnProperty('auto-migrate-extension')) {
          obj['auto-migrate-extension'] = _ApiClient["default"].convertToType(data['auto-migrate-extension'], 'Boolean');
        }
        if (data.hasOwnProperty('independent-rounding-specs')) {
          obj['independent-rounding-specs'] = _ApiClient["default"].convertToType(data['independent-rounding-specs'], [_IndependentRoundingSpec["default"]]);
        }
        if (data.hasOwnProperty('dependent-rounding-spec')) {
          obj['dependent-rounding-spec'] = _ApiClient["default"].convertToType(data['dependent-rounding-spec'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('effective-dates')) {
          obj['effective-dates'] = _ApiClient["default"].convertToType(data['effective-dates'], ['Date']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingSpec</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(RatingSpec.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['rating-id'] && !(typeof data['rating-id'] === 'string' || data['rating-id'] instanceof String)) {
        throw new Error("Expected the field `rating-id` to be a primitive type in the JSON string but got " + data['rating-id']);
      }
      // ensure the json data is a string
      if (data['template-id'] && !(typeof data['template-id'] === 'string' || data['template-id'] instanceof String)) {
        throw new Error("Expected the field `template-id` to be a primitive type in the JSON string but got " + data['template-id']);
      }
      // ensure the json data is a string
      if (data['location-id'] && !(typeof data['location-id'] === 'string' || data['location-id'] instanceof String)) {
        throw new Error("Expected the field `location-id` to be a primitive type in the JSON string but got " + data['location-id']);
      }
      // ensure the json data is a string
      if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
        throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
      }
      // ensure the json data is a string
      if (data['source-agency'] && !(typeof data['source-agency'] === 'string' || data['source-agency'] instanceof String)) {
        throw new Error("Expected the field `source-agency` to be a primitive type in the JSON string but got " + data['source-agency']);
      }
      // ensure the json data is a string
      if (data['in-range-method'] && !(typeof data['in-range-method'] === 'string' || data['in-range-method'] instanceof String)) {
        throw new Error("Expected the field `in-range-method` to be a primitive type in the JSON string but got " + data['in-range-method']);
      }
      // ensure the json data is a string
      if (data['out-range-low-method'] && !(typeof data['out-range-low-method'] === 'string' || data['out-range-low-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-low-method` to be a primitive type in the JSON string but got " + data['out-range-low-method']);
      }
      // ensure the json data is a string
      if (data['out-range-high-method'] && !(typeof data['out-range-high-method'] === 'string' || data['out-range-high-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-high-method` to be a primitive type in the JSON string but got " + data['out-range-high-method']);
      }
      if (data['independent-rounding-specs']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['independent-rounding-specs'])) {
          throw new Error("Expected the field `independent-rounding-specs` to be an array in the JSON data but got " + data['independent-rounding-specs']);
        }
        // validate the optional field `independent-rounding-specs` (array)
        var _iterator2 = _createForOfIteratorHelper(data['independent-rounding-specs']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _IndependentRoundingSpec["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['dependent-rounding-spec'] && !(typeof data['dependent-rounding-spec'] === 'string' || data['dependent-rounding-spec'] instanceof String)) {
        throw new Error("Expected the field `dependent-rounding-spec` to be a primitive type in the JSON string but got " + data['dependent-rounding-spec']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['effective-dates'])) {
        throw new Error("Expected the field `effective-dates` to be an array in the JSON data but got " + data['effective-dates']);
      }
      return true;
    }
  }]);
  return RatingSpec;
}();
RatingSpec.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
RatingSpec.prototype['office-id'] = undefined;

/**
 * @member {String} rating-id
 */
RatingSpec.prototype['rating-id'] = undefined;

/**
 * @member {String} template-id
 */
RatingSpec.prototype['template-id'] = undefined;

/**
 * @member {String} location-id
 */
RatingSpec.prototype['location-id'] = undefined;

/**
 * @member {String} version
 */
RatingSpec.prototype['version'] = undefined;

/**
 * @member {String} source-agency
 */
RatingSpec.prototype['source-agency'] = undefined;

/**
 * @member {String} in-range-method
 */
RatingSpec.prototype['in-range-method'] = undefined;

/**
 * @member {String} out-range-low-method
 */
RatingSpec.prototype['out-range-low-method'] = undefined;

/**
 * @member {String} out-range-high-method
 */
RatingSpec.prototype['out-range-high-method'] = undefined;

/**
 * @member {Boolean} active
 */
RatingSpec.prototype['active'] = undefined;

/**
 * @member {Boolean} auto-update
 */
RatingSpec.prototype['auto-update'] = undefined;

/**
 * @member {Boolean} auto-activate
 */
RatingSpec.prototype['auto-activate'] = undefined;

/**
 * @member {Boolean} auto-migrate-extension
 */
RatingSpec.prototype['auto-migrate-extension'] = undefined;

/**
 * @member {Array.<module:model/IndependentRoundingSpec>} independent-rounding-specs
 */
RatingSpec.prototype['independent-rounding-specs'] = undefined;

/**
 * @member {String} dependent-rounding-spec
 */
RatingSpec.prototype['dependent-rounding-spec'] = undefined;

/**
 * @member {String} description
 */
RatingSpec.prototype['description'] = undefined;

/**
 * @member {Array.<Date>} effective-dates
 */
RatingSpec.prototype['effective-dates'] = undefined;
var _default = exports["default"] = RatingSpec;

},{"../ApiClient":16,"./IndependentRoundingSpec":59}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _RatingSpec = _interopRequireDefault(require("./RatingSpec"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The RatingSpecs model module.
 * @module model/RatingSpecs
 * @version 3.0
 */
var RatingSpecs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RatingSpecs</code>.
   * @alias module:model/RatingSpecs
   */
  function RatingSpecs() {
    _classCallCheck(this, RatingSpecs);
    RatingSpecs.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RatingSpecs, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RatingSpecs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingSpecs} obj Optional instance to populate.
     * @return {module:model/RatingSpecs} The populated <code>RatingSpecs</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RatingSpecs();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('specs')) {
          obj['specs'] = _ApiClient["default"].convertToType(data['specs'], [_RatingSpec["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingSpecs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingSpecs</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['specs']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['specs'])) {
          throw new Error("Expected the field `specs` to be an array in the JSON data but got " + data['specs']);
        }
        // validate the optional field `specs` (array)
        var _iterator = _createForOfIteratorHelper(data['specs']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _RatingSpec["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return RatingSpecs;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
RatingSpecs.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
RatingSpecs.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/RatingSpec>} specs
 */
RatingSpecs.prototype['specs'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
RatingSpecs.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
RatingSpecs.prototype['page-size'] = undefined;
var _default = exports["default"] = RatingSpecs;

},{"../ApiClient":16,"./RatingSpec":79}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ParameterSpec = _interopRequireDefault(require("./ParameterSpec"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The RatingTemplate model module.
 * @module model/RatingTemplate
 * @version 3.0
 */
var RatingTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RatingTemplate</code>.
   * @alias module:model/RatingTemplate
   * @param officeId {String} Owning office of object.
   */
  function RatingTemplate(officeId) {
    _classCallCheck(this, RatingTemplate);
    RatingTemplate.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RatingTemplate, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>RatingTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingTemplate} obj Optional instance to populate.
     * @return {module:model/RatingTemplate} The populated <code>RatingTemplate</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RatingTemplate();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('dependent-parameter')) {
          obj['dependent-parameter'] = _ApiClient["default"].convertToType(data['dependent-parameter'], 'String');
        }
        if (data.hasOwnProperty('independent-parameter-specs')) {
          obj['independent-parameter-specs'] = _ApiClient["default"].convertToType(data['independent-parameter-specs'], [_ParameterSpec["default"]]);
        }
        if (data.hasOwnProperty('rating-ids')) {
          obj['rating-ids'] = _ApiClient["default"].convertToType(data['rating-ids'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingTemplate</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(RatingTemplate.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
        throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['dependent-parameter'] && !(typeof data['dependent-parameter'] === 'string' || data['dependent-parameter'] instanceof String)) {
        throw new Error("Expected the field `dependent-parameter` to be a primitive type in the JSON string but got " + data['dependent-parameter']);
      }
      if (data['independent-parameter-specs']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['independent-parameter-specs'])) {
          throw new Error("Expected the field `independent-parameter-specs` to be an array in the JSON data but got " + data['independent-parameter-specs']);
        }
        // validate the optional field `independent-parameter-specs` (array)
        var _iterator2 = _createForOfIteratorHelper(data['independent-parameter-specs']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _ParameterSpec["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is an array
      if (!Array.isArray(data['rating-ids'])) {
        throw new Error("Expected the field `rating-ids` to be an array in the JSON data but got " + data['rating-ids']);
      }
      return true;
    }
  }]);
  return RatingTemplate;
}();
RatingTemplate.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
RatingTemplate.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
RatingTemplate.prototype['id'] = undefined;

/**
 * @member {String} version
 */
RatingTemplate.prototype['version'] = undefined;

/**
 * @member {String} description
 */
RatingTemplate.prototype['description'] = undefined;

/**
 * @member {String} dependent-parameter
 */
RatingTemplate.prototype['dependent-parameter'] = undefined;

/**
 * @member {Array.<module:model/ParameterSpec>} independent-parameter-specs
 */
RatingTemplate.prototype['independent-parameter-specs'] = undefined;

/**
 * @member {Array.<String>} rating-ids
 */
RatingTemplate.prototype['rating-ids'] = undefined;
var _default = exports["default"] = RatingTemplate;

},{"../ApiClient":16,"./ParameterSpec":73}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _RatingTemplate = _interopRequireDefault(require("./RatingTemplate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The RatingTemplates model module.
 * @module model/RatingTemplates
 * @version 3.0
 */
var RatingTemplates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RatingTemplates</code>.
   * @alias module:model/RatingTemplates
   */
  function RatingTemplates() {
    _classCallCheck(this, RatingTemplates);
    RatingTemplates.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RatingTemplates, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RatingTemplates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingTemplates} obj Optional instance to populate.
     * @return {module:model/RatingTemplates} The populated <code>RatingTemplates</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RatingTemplates();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('templates')) {
          obj['templates'] = _ApiClient["default"].convertToType(data['templates'], [_RatingTemplate["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingTemplates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingTemplates</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['templates']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['templates'])) {
          throw new Error("Expected the field `templates` to be an array in the JSON data but got " + data['templates']);
        }
        // validate the optional field `templates` (array)
        var _iterator = _createForOfIteratorHelper(data['templates']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _RatingTemplate["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return RatingTemplates;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
RatingTemplates.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
RatingTemplates.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/RatingTemplate>} templates
 */
RatingTemplates.prototype['templates'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
RatingTemplates.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
RatingTemplates.prototype['page-size'] = undefined;
var _default = exports["default"] = RatingTemplates;

},{"../ApiClient":16,"./RatingTemplate":81}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The SeasonalValueBean model module.
 * @module model/SeasonalValueBean
 * @version 3.0
 */
var SeasonalValueBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SeasonalValueBean</code>.
   * List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue
   * @alias module:model/SeasonalValueBean
   */
  function SeasonalValueBean() {
    _classCallCheck(this, SeasonalValueBean);
    SeasonalValueBean.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SeasonalValueBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SeasonalValueBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SeasonalValueBean} obj Optional instance to populate.
     * @return {module:model/SeasonalValueBean} The populated <code>SeasonalValueBean</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SeasonalValueBean();
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
        if (data.hasOwnProperty('offset-months')) {
          obj['offset-months'] = _ApiClient["default"].convertToType(data['offset-months'], 'Number');
        }
        if (data.hasOwnProperty('offset-minutes')) {
          obj['offset-minutes'] = _ApiClient["default"].convertToType(data['offset-minutes'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SeasonalValueBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SeasonalValueBean</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return SeasonalValueBean;
}();
/**
 * @member {Number} value
 */
SeasonalValueBean.prototype['value'] = undefined;

/**
 * @member {Number} offset-months
 */
SeasonalValueBean.prototype['offset-months'] = undefined;

/**
 * @member {Number} offset-minutes
 */
SeasonalValueBean.prototype['offset-minutes'] = undefined;
var _default = exports["default"] = SeasonalValueBean;

},{"../ApiClient":16}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The SpecifiedLevel model module.
 * @module model/SpecifiedLevel
 * @version 3.0
 */
var SpecifiedLevel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SpecifiedLevel</code>.
   * @alias module:model/SpecifiedLevel
   * @param officeId {String} Owning office of object.
   */
  function SpecifiedLevel(officeId) {
    _classCallCheck(this, SpecifiedLevel);
    SpecifiedLevel.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SpecifiedLevel, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>SpecifiedLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpecifiedLevel} obj Optional instance to populate.
     * @return {module:model/SpecifiedLevel} The populated <code>SpecifiedLevel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpecifiedLevel();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SpecifiedLevel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SpecifiedLevel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(SpecifiedLevel.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      return true;
    }
  }]);
  return SpecifiedLevel;
}();
SpecifiedLevel.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
SpecifiedLevel.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
SpecifiedLevel.prototype['id'] = undefined;

/**
 * @member {String} description
 */
SpecifiedLevel.prototype['description'] = undefined;
var _default = exports["default"] = SpecifiedLevel;

},{"../ApiClient":16}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The State model module.
 * @module model/State
 * @version 3.0
 */
var State = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>State</code>.
   * A representation of a state
   * @alias module:model/State
   */
  function State() {
    _classCallCheck(this, State);
    State.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(State, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>State</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/State} obj Optional instance to populate.
     * @return {module:model/State} The populated <code>State</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new State();
        if (data.hasOwnProperty('stateInitial')) {
          obj['stateInitial'] = _ApiClient["default"].convertToType(data['stateInitial'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>State</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>State</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['stateInitial'] && !(typeof data['stateInitial'] === 'string' || data['stateInitial'] instanceof String)) {
        throw new Error("Expected the field `stateInitial` to be a primitive type in the JSON string but got " + data['stateInitial']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      return true;
    }
  }]);
  return State;
}();
/**
 * @member {String} stateInitial
 */
State.prototype['stateInitial'] = undefined;

/**
 * @member {String} name
 */
State.prototype['name'] = undefined;
var _default = exports["default"] = State;

},{"../ApiClient":16}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Enum class StoreRule.
* @enum {}
* @readonly
*/
var StoreRule = exports["default"] = /*#__PURE__*/function () {
  function StoreRule() {
    _classCallCheck(this, StoreRule);
    /**
     * value: "REPLACE_ALL"
     * @const
     */
    _defineProperty(this, "REPLACE_ALL", "REPLACE_ALL");
    /**
     * value: "DO_NOT_REPLACE"
     * @const
     */
    _defineProperty(this, "DO_NOT_REPLACE", "DO_NOT_REPLACE");
    /**
     * value: "REPLACE_MISSING_VALUES_ONLY"
     * @const
     */
    _defineProperty(this, "REPLACE_MISSING_VALUES_ONLY", "REPLACE_MISSING_VALUES_ONLY");
    /**
     * value: "REPLACE_WITH_NON_MISSING"
     * @const
     */
    _defineProperty(this, "REPLACE_WITH_NON_MISSING", "REPLACE_WITH_NON_MISSING");
    /**
     * value: "DELETE_INSERT"
     * @const
     */
    _defineProperty(this, "DELETE_INSERT", "DELETE_INSERT");
  }
  _createClass(StoreRule, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>StoreRule</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StoreRule} The enum <code>StoreRule</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return StoreRule;
}();

},{"../ApiClient":16}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _StreamLocation = _interopRequireDefault(require("./StreamLocation"));
var _StreamReach = _interopRequireDefault(require("./StreamReach"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Stream model module.
 * @module model/Stream
 * @version 3.0
 */
var Stream = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Stream</code>.
   * @alias module:model/Stream
   * @param officeId {String} Owning office of object.
   */
  function Stream(officeId) {
    _classCallCheck(this, Stream);
    Stream.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Stream, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>Stream</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stream} obj Optional instance to populate.
     * @return {module:model/Stream} The populated <code>Stream</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Stream();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('stream-name')) {
          obj['stream-name'] = _ApiClient["default"].convertToType(data['stream-name'], 'String');
        }
        if (data.hasOwnProperty('tributaries')) {
          obj['tributaries'] = _ApiClient["default"].convertToType(data['tributaries'], [Stream]);
        }
        if (data.hasOwnProperty('stream-reaches')) {
          obj['stream-reaches'] = _ApiClient["default"].convertToType(data['stream-reaches'], [_StreamReach["default"]]);
        }
        if (data.hasOwnProperty('diverting-stream-id')) {
          obj['diverting-stream-id'] = _ApiClient["default"].convertToType(data['diverting-stream-id'], 'String');
        }
        if (data.hasOwnProperty('receiving-stream-id')) {
          obj['receiving-stream-id'] = _ApiClient["default"].convertToType(data['receiving-stream-id'], 'String');
        }
        if (data.hasOwnProperty('confluence-bank')) {
          obj['confluence-bank'] = _ApiClient["default"].convertToType(data['confluence-bank'], 'String');
        }
        if (data.hasOwnProperty('diversion-bank')) {
          obj['diversion-bank'] = _ApiClient["default"].convertToType(data['diversion-bank'], 'String');
        }
        if (data.hasOwnProperty('stream-length')) {
          obj['stream-length'] = _ApiClient["default"].convertToType(data['stream-length'], 'Number');
        }
        if (data.hasOwnProperty('confluence-station')) {
          obj['confluence-station'] = _ApiClient["default"].convertToType(data['confluence-station'], 'Number');
        }
        if (data.hasOwnProperty('diversion-station')) {
          obj['diversion-station'] = _ApiClient["default"].convertToType(data['diversion-station'], 'Number');
        }
        if (data.hasOwnProperty('stream-locations')) {
          obj['stream-locations'] = _ApiClient["default"].convertToType(data['stream-locations'], [_StreamLocation["default"]]);
        }
        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }
        if (data.hasOwnProperty('average-slope')) {
          obj['average-slope'] = _ApiClient["default"].convertToType(data['average-slope'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Stream</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Stream</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Stream.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['stream-name'] && !(typeof data['stream-name'] === 'string' || data['stream-name'] instanceof String)) {
        throw new Error("Expected the field `stream-name` to be a primitive type in the JSON string but got " + data['stream-name']);
      }
      if (data['tributaries']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['tributaries'])) {
          throw new Error("Expected the field `tributaries` to be an array in the JSON data but got " + data['tributaries']);
        }
        // validate the optional field `tributaries` (array)
        var _iterator2 = _createForOfIteratorHelper(data['tributaries']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            Stream.validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['stream-reaches']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['stream-reaches'])) {
          throw new Error("Expected the field `stream-reaches` to be an array in the JSON data but got " + data['stream-reaches']);
        }
        // validate the optional field `stream-reaches` (array)
        var _iterator3 = _createForOfIteratorHelper(data['stream-reaches']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _StreamReach["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['diverting-stream-id'] && !(typeof data['diverting-stream-id'] === 'string' || data['diverting-stream-id'] instanceof String)) {
        throw new Error("Expected the field `diverting-stream-id` to be a primitive type in the JSON string but got " + data['diverting-stream-id']);
      }
      // ensure the json data is a string
      if (data['receiving-stream-id'] && !(typeof data['receiving-stream-id'] === 'string' || data['receiving-stream-id'] instanceof String)) {
        throw new Error("Expected the field `receiving-stream-id` to be a primitive type in the JSON string but got " + data['receiving-stream-id']);
      }
      // ensure the json data is a string
      if (data['confluence-bank'] && !(typeof data['confluence-bank'] === 'string' || data['confluence-bank'] instanceof String)) {
        throw new Error("Expected the field `confluence-bank` to be a primitive type in the JSON string but got " + data['confluence-bank']);
      }
      // ensure the json data is a string
      if (data['diversion-bank'] && !(typeof data['diversion-bank'] === 'string' || data['diversion-bank'] instanceof String)) {
        throw new Error("Expected the field `diversion-bank` to be a primitive type in the JSON string but got " + data['diversion-bank']);
      }
      if (data['stream-locations']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['stream-locations'])) {
          throw new Error("Expected the field `stream-locations` to be an array in the JSON data but got " + data['stream-locations']);
        }
        // validate the optional field `stream-locations` (array)
        var _iterator4 = _createForOfIteratorHelper(data['stream-locations']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item2 = _step4.value;
            _StreamLocation["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
        throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
      }
      return true;
    }
  }]);
  return Stream;
}();
Stream.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Stream.prototype['office-id'] = undefined;

/**
 * @member {String} stream-name
 */
Stream.prototype['stream-name'] = undefined;

/**
 * @member {Array.<module:model/Stream>} tributaries
 */
Stream.prototype['tributaries'] = undefined;

/**
 * @member {Array.<module:model/StreamReach>} stream-reaches
 */
Stream.prototype['stream-reaches'] = undefined;

/**
 * @member {String} diverting-stream-id
 */
Stream.prototype['diverting-stream-id'] = undefined;

/**
 * @member {String} receiving-stream-id
 */
Stream.prototype['receiving-stream-id'] = undefined;

/**
 * @member {String} confluence-bank
 */
Stream.prototype['confluence-bank'] = undefined;

/**
 * @member {String} diversion-bank
 */
Stream.prototype['diversion-bank'] = undefined;

/**
 * @member {Number} stream-length
 */
Stream.prototype['stream-length'] = undefined;

/**
 * @member {Number} confluence-station
 */
Stream.prototype['confluence-station'] = undefined;

/**
 * @member {Number} diversion-station
 */
Stream.prototype['diversion-station'] = undefined;

/**
 * @member {Array.<module:model/StreamLocation>} stream-locations
 */
Stream.prototype['stream-locations'] = undefined;

/**
 * @member {String} comment
 */
Stream.prototype['comment'] = undefined;

/**
 * @member {Number} average-slope
 */
Stream.prototype['average-slope'] = undefined;
var _default = exports["default"] = Stream;

},{"../ApiClient":16,"./StreamLocation":88,"./StreamReach":89}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The StreamLocation model module.
 * @module model/StreamLocation
 * @version 3.0
 */
var StreamLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StreamLocation</code>.
   * @alias module:model/StreamLocation
   * @param officeId {String} Owning office of object.
   */
  function StreamLocation(officeId) {
    _classCallCheck(this, StreamLocation);
    StreamLocation.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(StreamLocation, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>StreamLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamLocation} obj Optional instance to populate.
     * @return {module:model/StreamLocation} The populated <code>StreamLocation</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StreamLocation();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('location-name')) {
          obj['location-name'] = _ApiClient["default"].convertToType(data['location-name'], 'String');
        }
        if (data.hasOwnProperty('stream-name')) {
          obj['stream-name'] = _ApiClient["default"].convertToType(data['stream-name'], 'String');
        }
        if (data.hasOwnProperty('station')) {
          obj['station'] = _ApiClient["default"].convertToType(data['station'], 'Number');
        }
        if (data.hasOwnProperty('bank')) {
          obj['bank'] = _ApiClient["default"].convertToType(data['bank'], 'String');
        }
        if (data.hasOwnProperty('published-station')) {
          obj['published-station'] = _ApiClient["default"].convertToType(data['published-station'], 'Number');
        }
        if (data.hasOwnProperty('lowest-measurable-stage')) {
          obj['lowest-measurable-stage'] = _ApiClient["default"].convertToType(data['lowest-measurable-stage'], 'Number');
        }
        if (data.hasOwnProperty('total-drainage-area')) {
          obj['total-drainage-area'] = _ApiClient["default"].convertToType(data['total-drainage-area'], 'Number');
        }
        if (data.hasOwnProperty('ungaged-drainage-area')) {
          obj['ungaged-drainage-area'] = _ApiClient["default"].convertToType(data['ungaged-drainage-area'], 'Number');
        }
        if (data.hasOwnProperty('nagivation-station')) {
          obj['nagivation-station'] = _ApiClient["default"].convertToType(data['nagivation-station'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreamLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamLocation</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(StreamLocation.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['location-name'] && !(typeof data['location-name'] === 'string' || data['location-name'] instanceof String)) {
        throw new Error("Expected the field `location-name` to be a primitive type in the JSON string but got " + data['location-name']);
      }
      // ensure the json data is a string
      if (data['stream-name'] && !(typeof data['stream-name'] === 'string' || data['stream-name'] instanceof String)) {
        throw new Error("Expected the field `stream-name` to be a primitive type in the JSON string but got " + data['stream-name']);
      }
      // ensure the json data is a string
      if (data['bank'] && !(typeof data['bank'] === 'string' || data['bank'] instanceof String)) {
        throw new Error("Expected the field `bank` to be a primitive type in the JSON string but got " + data['bank']);
      }
      return true;
    }
  }]);
  return StreamLocation;
}();
StreamLocation.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
StreamLocation.prototype['office-id'] = undefined;

/**
 * @member {String} location-name
 */
StreamLocation.prototype['location-name'] = undefined;

/**
 * @member {String} stream-name
 */
StreamLocation.prototype['stream-name'] = undefined;

/**
 * @member {Number} station
 */
StreamLocation.prototype['station'] = undefined;

/**
 * @member {String} bank
 */
StreamLocation.prototype['bank'] = undefined;

/**
 * @member {Number} published-station
 */
StreamLocation.prototype['published-station'] = undefined;

/**
 * @member {Number} lowest-measurable-stage
 */
StreamLocation.prototype['lowest-measurable-stage'] = undefined;

/**
 * @member {Number} total-drainage-area
 */
StreamLocation.prototype['total-drainage-area'] = undefined;

/**
 * @member {Number} ungaged-drainage-area
 */
StreamLocation.prototype['ungaged-drainage-area'] = undefined;

/**
 * @member {Number} nagivation-station
 */
StreamLocation.prototype['nagivation-station'] = undefined;
var _default = exports["default"] = StreamLocation;

},{"../ApiClient":16}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The StreamReach model module.
 * @module model/StreamReach
 * @version 3.0
 */
var StreamReach = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StreamReach</code>.
   * @alias module:model/StreamReach
   * @param officeId {String} Owning office of object.
   */
  function StreamReach(officeId) {
    _classCallCheck(this, StreamReach);
    StreamReach.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(StreamReach, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>StreamReach</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamReach} obj Optional instance to populate.
     * @return {module:model/StreamReach} The populated <code>StreamReach</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StreamReach();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('upstream-location-name')) {
          obj['upstream-location-name'] = _ApiClient["default"].convertToType(data['upstream-location-name'], 'String');
        }
        if (data.hasOwnProperty('downstream-location-name')) {
          obj['downstream-location-name'] = _ApiClient["default"].convertToType(data['downstream-location-name'], 'String');
        }
        if (data.hasOwnProperty('stream-name')) {
          obj['stream-name'] = _ApiClient["default"].convertToType(data['stream-name'], 'String');
        }
        if (data.hasOwnProperty('reach-name')) {
          obj['reach-name'] = _ApiClient["default"].convertToType(data['reach-name'], 'String');
        }
        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }
        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _ApiClient["default"].convertToType(data['configuration'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreamReach</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamReach</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(StreamReach.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['upstream-location-name'] && !(typeof data['upstream-location-name'] === 'string' || data['upstream-location-name'] instanceof String)) {
        throw new Error("Expected the field `upstream-location-name` to be a primitive type in the JSON string but got " + data['upstream-location-name']);
      }
      // ensure the json data is a string
      if (data['downstream-location-name'] && !(typeof data['downstream-location-name'] === 'string' || data['downstream-location-name'] instanceof String)) {
        throw new Error("Expected the field `downstream-location-name` to be a primitive type in the JSON string but got " + data['downstream-location-name']);
      }
      // ensure the json data is a string
      if (data['stream-name'] && !(typeof data['stream-name'] === 'string' || data['stream-name'] instanceof String)) {
        throw new Error("Expected the field `stream-name` to be a primitive type in the JSON string but got " + data['stream-name']);
      }
      // ensure the json data is a string
      if (data['reach-name'] && !(typeof data['reach-name'] === 'string' || data['reach-name'] instanceof String)) {
        throw new Error("Expected the field `reach-name` to be a primitive type in the JSON string but got " + data['reach-name']);
      }
      // ensure the json data is a string
      if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
        throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
      }
      // ensure the json data is a string
      if (data['configuration'] && !(typeof data['configuration'] === 'string' || data['configuration'] instanceof String)) {
        throw new Error("Expected the field `configuration` to be a primitive type in the JSON string but got " + data['configuration']);
      }
      return true;
    }
  }]);
  return StreamReach;
}();
StreamReach.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
StreamReach.prototype['office-id'] = undefined;

/**
 * @member {String} upstream-location-name
 */
StreamReach.prototype['upstream-location-name'] = undefined;

/**
 * @member {String} downstream-location-name
 */
StreamReach.prototype['downstream-location-name'] = undefined;

/**
 * @member {String} stream-name
 */
StreamReach.prototype['stream-name'] = undefined;

/**
 * @member {String} reach-name
 */
StreamReach.prototype['reach-name'] = undefined;

/**
 * @member {String} comment
 */
StreamReach.prototype['comment'] = undefined;

/**
 * @member {String} configuration
 */
StreamReach.prototype['configuration'] = undefined;
var _default = exports["default"] = StreamReach;

},{"../ApiClient":16}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TabV1Office model module.
 * @module model/TabV1Office
 * @version 3.0
 */
var TabV1Office = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TabV1Office</code>.
   * Single Office or List of Offices in tab separated format
   * @alias module:model/TabV1Office
   */
  function TabV1Office() {
    _classCallCheck(this, TabV1Office);
    TabV1Office.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TabV1Office, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TabV1Office</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TabV1Office} obj Optional instance to populate.
     * @return {module:model/TabV1Office} The populated <code>TabV1Office</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TabV1Office();
        if (data.hasOwnProperty('Office')) {
          obj['Office'] = _ApiClient["default"].convertToType(data['Office'], 'String');
        }
        if (data.hasOwnProperty('longName')) {
          obj['longName'] = _ApiClient["default"].convertToType(data['longName'], 'String');
        }
        if (data.hasOwnProperty('officeType')) {
          obj['officeType'] = _ApiClient["default"].convertToType(data['officeType'], 'String');
        }
        if (data.hasOwnProperty('reportsToOffice')) {
          obj['reportsToOffice'] = _ApiClient["default"].convertToType(data['reportsToOffice'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TabV1Office</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TabV1Office</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['Office'] && !(typeof data['Office'] === 'string' || data['Office'] instanceof String)) {
        throw new Error("Expected the field `Office` to be a primitive type in the JSON string but got " + data['Office']);
      }
      // ensure the json data is a string
      if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
        throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
      }
      // ensure the json data is a string
      if (data['officeType'] && !(typeof data['officeType'] === 'string' || data['officeType'] instanceof String)) {
        throw new Error("Expected the field `officeType` to be a primitive type in the JSON string but got " + data['officeType']);
      }
      // ensure the json data is a string
      if (data['reportsToOffice'] && !(typeof data['reportsToOffice'] === 'string' || data['reportsToOffice'] instanceof String)) {
        throw new Error("Expected the field `reportsToOffice` to be a primitive type in the JSON string but got " + data['reportsToOffice']);
      }
      return true;
    }
  }]);
  return TabV1Office;
}();
/**
 * @member {String} Office
 */
TabV1Office.prototype['Office'] = undefined;

/**
 * @member {String} longName
 */
TabV1Office.prototype['longName'] = undefined;

/**
 * @member {String} officeType
 */
TabV1Office.prototype['officeType'] = undefined;

/**
 * @member {String} reportsToOffice
 */
TabV1Office.prototype['reportsToOffice'] = undefined;
var _default = exports["default"] = TabV1Office;

},{"../ApiClient":16}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AbstractRatingMetadata = _interopRequireDefault(require("./AbstractRatingMetadata"));
var _TableRatingAllOf = _interopRequireDefault(require("./TableRatingAllOf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TableRating model module.
 * @module model/TableRating
 * @version 3.0
 */
var TableRating = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TableRating</code>.
   * @alias module:model/TableRating
   * @extends module:model/AbstractRatingMetadata
   * @implements module:model/AbstractRatingMetadata
   * @implements module:model/TableRatingAllOf
   */
  function TableRating() {
    _classCallCheck(this, TableRating);
    _AbstractRatingMetadata["default"].initialize(this);
    _TableRatingAllOf["default"].initialize(this);
    TableRating.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TableRating, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TableRating</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableRating} obj Optional instance to populate.
     * @return {module:model/TableRating} The populated <code>TableRating</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TableRating();
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _TableRatingAllOf["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('in-range-method')) {
          obj['in-range-method'] = _ApiClient["default"].convertToType(data['in-range-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-low-method')) {
          obj['out-range-low-method'] = _ApiClient["default"].convertToType(data['out-range-low-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-high-method')) {
          obj['out-range-high-method'] = _ApiClient["default"].convertToType(data['out-range-high-method'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TableRating</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TableRating</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['in-range-method'] && !(typeof data['in-range-method'] === 'string' || data['in-range-method'] instanceof String)) {
        throw new Error("Expected the field `in-range-method` to be a primitive type in the JSON string but got " + data['in-range-method']);
      }
      // ensure the json data is a string
      if (data['out-range-low-method'] && !(typeof data['out-range-low-method'] === 'string' || data['out-range-low-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-low-method` to be a primitive type in the JSON string but got " + data['out-range-low-method']);
      }
      // ensure the json data is a string
      if (data['out-range-high-method'] && !(typeof data['out-range-high-method'] === 'string' || data['out-range-high-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-high-method` to be a primitive type in the JSON string but got " + data['out-range-high-method']);
      }
      return true;
    }
  }]);
  return TableRating;
}();
/**
 * @member {String} in-range-method
 */
TableRating.prototype['in-range-method'] = undefined;

/**
 * @member {String} out-range-low-method
 */
TableRating.prototype['out-range-low-method'] = undefined;

/**
 * @member {String} out-range-high-method
 */
TableRating.prototype['out-range-high-method'] = undefined;

// Implement AbstractRatingMetadata interface:
/**
 * @member {Array.<Object>} source-ratings
 */
_AbstractRatingMetadata["default"].prototype['source-ratings'] = undefined;
/**
 * @member {Array.<String>} conditions
 */
_AbstractRatingMetadata["default"].prototype['conditions'] = undefined;
/**
 * @member {Array.<String>} evaluations
 */
_AbstractRatingMetadata["default"].prototype['evaluations'] = undefined;
/**
 * @member {String} connections
 */
_AbstractRatingMetadata["default"].prototype['connections'] = undefined;
/**
 * @member {String} expression
 */
_AbstractRatingMetadata["default"].prototype['expression'] = undefined;
/**
 * @member {String} in-range-method
 */
_AbstractRatingMetadata["default"].prototype['in-range-method'] = undefined;
/**
 * @member {String} out-range-low-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-low-method'] = undefined;
/**
 * @member {String} out-range-high-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-high-method'] = undefined;
// Implement TableRatingAllOf interface:
/**
 * @member {String} in-range-method
 */
_TableRatingAllOf["default"].prototype['in-range-method'] = undefined;
/**
 * @member {String} out-range-low-method
 */
_TableRatingAllOf["default"].prototype['out-range-low-method'] = undefined;
/**
 * @member {String} out-range-high-method
 */
_TableRatingAllOf["default"].prototype['out-range-high-method'] = undefined;
var _default = exports["default"] = TableRating;

},{"../ApiClient":16,"./AbstractRatingMetadata":40,"./TableRatingAllOf":92}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TableRatingAllOf model module.
 * @module model/TableRatingAllOf
 * @version 3.0
 */
var TableRatingAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TableRatingAllOf</code>.
   * @alias module:model/TableRatingAllOf
   */
  function TableRatingAllOf() {
    _classCallCheck(this, TableRatingAllOf);
    TableRatingAllOf.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TableRatingAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TableRatingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableRatingAllOf} obj Optional instance to populate.
     * @return {module:model/TableRatingAllOf} The populated <code>TableRatingAllOf</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TableRatingAllOf();
        if (data.hasOwnProperty('in-range-method')) {
          obj['in-range-method'] = _ApiClient["default"].convertToType(data['in-range-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-low-method')) {
          obj['out-range-low-method'] = _ApiClient["default"].convertToType(data['out-range-low-method'], 'String');
        }
        if (data.hasOwnProperty('out-range-high-method')) {
          obj['out-range-high-method'] = _ApiClient["default"].convertToType(data['out-range-high-method'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TableRatingAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TableRatingAllOf</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['in-range-method'] && !(typeof data['in-range-method'] === 'string' || data['in-range-method'] instanceof String)) {
        throw new Error("Expected the field `in-range-method` to be a primitive type in the JSON string but got " + data['in-range-method']);
      }
      // ensure the json data is a string
      if (data['out-range-low-method'] && !(typeof data['out-range-low-method'] === 'string' || data['out-range-low-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-low-method` to be a primitive type in the JSON string but got " + data['out-range-low-method']);
      }
      // ensure the json data is a string
      if (data['out-range-high-method'] && !(typeof data['out-range-high-method'] === 'string' || data['out-range-high-method'] instanceof String)) {
        throw new Error("Expected the field `out-range-high-method` to be a primitive type in the JSON string but got " + data['out-range-high-method']);
      }
      return true;
    }
  }]);
  return TableRatingAllOf;
}();
/**
 * @member {String} in-range-method
 */
TableRatingAllOf.prototype['in-range-method'] = undefined;

/**
 * @member {String} out-range-low-method
 */
TableRatingAllOf.prototype['out-range-low-method'] = undefined;

/**
 * @member {String} out-range-high-method
 */
TableRatingAllOf.prototype['out-range-high-method'] = undefined;
var _default = exports["default"] = TableRatingAllOf;

},{"../ApiClient":16}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TimeSeriesColumn = _interopRequireDefault(require("./TimeSeriesColumn"));
var _TimeSeriesInterval = _interopRequireDefault(require("./TimeSeriesInterval"));
var _TimeSeriesValuesInnerInner = _interopRequireDefault(require("./TimeSeriesValuesInnerInner"));
var _VerticalDatumInfo = _interopRequireDefault(require("./VerticalDatumInfo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeries model module.
 * @module model/TimeSeries
 * @version 3.0
 */
var TimeSeries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeries</code>.
   * @alias module:model/TimeSeries
   * @param units {String} The units of the time series data
   */
  function TimeSeries(units) {
    _classCallCheck(this, TimeSeries);
    TimeSeries.initialize(this, units);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeries, null, [{
    key: "initialize",
    value: function initialize(obj, units) {
      obj['units'] = units;
    }

    /**
     * Constructs a <code>TimeSeries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeries} obj Optional instance to populate.
     * @return {module:model/TimeSeries} The populated <code>TimeSeries</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeries();
        if (data.hasOwnProperty('begin')) {
          obj['begin'] = _ApiClient["default"].convertToType(data['begin'], 'Date');
        }
        if (data.hasOwnProperty('end')) {
          obj['end'] = _ApiClient["default"].convertToType(data['end'], 'Date');
        }
        if (data.hasOwnProperty('interval')) {
          obj['interval'] = _TimeSeriesInterval["default"].constructFromObject(data['interval']);
        }
        if (data.hasOwnProperty('interval-offset')) {
          obj['interval-offset'] = _ApiClient["default"].convertToType(data['interval-offset'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
        if (data.hasOwnProperty('time-zone')) {
          obj['time-zone'] = _ApiClient["default"].convertToType(data['time-zone'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], 'String');
        }
        if (data.hasOwnProperty('value-columns')) {
          obj['value-columns'] = _ApiClient["default"].convertToType(data['value-columns'], [_TimeSeriesColumn["default"]]);
        }
        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [[_TimeSeriesValuesInnerInner["default"]]]);
        }
        if (data.hasOwnProperty('vertical-datum-info')) {
          obj['vertical-datum-info'] = _VerticalDatumInfo["default"].constructFromObject(data['vertical-datum-info']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeries</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeries</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TimeSeries.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `interval`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['interval']) {
        // data not null
        _TimeSeriesInterval["default"].validateJSON(data['interval']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      // ensure the json data is a string
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      // ensure the json data is a string
      if (data['time-zone'] && !(typeof data['time-zone'] === 'string' || data['time-zone'] instanceof String)) {
        throw new Error("Expected the field `time-zone` to be a primitive type in the JSON string but got " + data['time-zone']);
      }
      // ensure the json data is a string
      if (data['units'] && !(typeof data['units'] === 'string' || data['units'] instanceof String)) {
        throw new Error("Expected the field `units` to be a primitive type in the JSON string but got " + data['units']);
      }
      if (data['value-columns']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['value-columns'])) {
          throw new Error("Expected the field `value-columns` to be an array in the JSON data but got " + data['value-columns']);
        }
        // validate the optional field `value-columns` (array)
        var _iterator2 = _createForOfIteratorHelper(data['value-columns']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _TimeSeriesColumn["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is an array
      if (!Array.isArray(data['values'])) {
        throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
      }
      // validate the optional field `vertical-datum-info`
      if (data['vertical-datum-info']) {
        // data not null
        _VerticalDatumInfo["default"].validateJSON(data['vertical-datum-info']);
      }
      return true;
    }
  }]);
  return TimeSeries;
}();
TimeSeries.RequiredProperties = ["units"];

/**
 * The requested start time of the data, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
 * @member {Date} begin
 */
TimeSeries.prototype['begin'] = undefined;

/**
 * The requested end time of the data, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
 * @member {Date} end
 */
TimeSeries.prototype['end'] = undefined;

/**
 * @member {module:model/TimeSeriesInterval} interval
 */
TimeSeries.prototype['interval'] = undefined;

/**
 * Offset from top of interval
 * @member {Number} interval-offset
 */
TimeSeries.prototype['interval-offset'] = undefined;

/**
 * Time-series name
 * @member {String} name
 */
TimeSeries.prototype['name'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
TimeSeries.prototype['next-page'] = undefined;

/**
 * Office ID that owns the time-series
 * @member {String} office-id
 */
TimeSeries.prototype['office-id'] = undefined;

/**
 * The cursor to the current page of data
 * @member {String} page
 */
TimeSeries.prototype['page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
TimeSeries.prototype['page-size'] = undefined;

/**
 * Only on 21.1.1 Database. The timezone the Interval Offset is from.
 * @member {String} time-zone
 */
TimeSeries.prototype['time-zone'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
TimeSeries.prototype['total'] = undefined;

/**
 * The units of the time series data
 * @member {String} units
 */
TimeSeries.prototype['units'] = undefined;

/**
 * @member {Array.<module:model/TimeSeriesColumn>} value-columns
 */
TimeSeries.prototype['value-columns'] = undefined;

/**
 * @member {Array.<Array.<module:model/TimeSeriesValuesInnerInner>>} values
 */
TimeSeries.prototype['values'] = undefined;

/**
 * @member {module:model/VerticalDatumInfo} vertical-datum-info
 */
TimeSeries.prototype['vertical-datum-info'] = undefined;
var _default = exports["default"] = TimeSeries;

},{"../ApiClient":16,"./TimeSeriesColumn":95,"./TimeSeriesInterval":100,"./TimeSeriesValuesInnerInner":104,"./VerticalDatumInfo":110}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesCategory model module.
 * @module model/TimeSeriesCategory
 * @version 3.0
 */
var TimeSeriesCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesCategory</code>.
   * A representation of a TimeSeries category
   * @alias module:model/TimeSeriesCategory
   * @param officeId {String} Owning office of object.
   */
  function TimeSeriesCategory(officeId) {
    _classCallCheck(this, TimeSeriesCategory);
    TimeSeriesCategory.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesCategory, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>TimeSeriesCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesCategory} obj Optional instance to populate.
     * @return {module:model/TimeSeriesCategory} The populated <code>TimeSeriesCategory</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesCategory();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesCategory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesCategory</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TimeSeriesCategory.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      return true;
    }
  }]);
  return TimeSeriesCategory;
}();
TimeSeriesCategory.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
TimeSeriesCategory.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
TimeSeriesCategory.prototype['id'] = undefined;

/**
 * @member {String} description
 */
TimeSeriesCategory.prototype['description'] = undefined;
var _default = exports["default"] = TimeSeriesCategory;

},{"../ApiClient":16}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesColumn model module.
 * @module model/TimeSeriesColumn
 * @version 3.0
 */
var TimeSeriesColumn = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesColumn</code>.
   * @alias module:model/TimeSeriesColumn
   */
  function TimeSeriesColumn() {
    _classCallCheck(this, TimeSeriesColumn);
    TimeSeriesColumn.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesColumn, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesColumn} obj Optional instance to populate.
     * @return {module:model/TimeSeriesColumn} The populated <code>TimeSeriesColumn</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesColumn();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('ordinal')) {
          obj['ordinal'] = _ApiClient["default"].convertToType(data['ordinal'], 'Number');
        }
        if (data.hasOwnProperty('datatype')) {
          obj['datatype'] = _ApiClient["default"].convertToType(data['datatype'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesColumn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesColumn</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['datatype'] && !(typeof data['datatype'] === 'string' || data['datatype'] instanceof String)) {
        throw new Error("Expected the field `datatype` to be a primitive type in the JSON string but got " + data['datatype']);
      }
      return true;
    }
  }]);
  return TimeSeriesColumn;
}();
/**
 * @member {String} name
 */
TimeSeriesColumn.prototype['name'] = undefined;

/**
 * @member {Number} ordinal
 */
TimeSeriesColumn.prototype['ordinal'] = undefined;

/**
 * @member {String} datatype
 */
TimeSeriesColumn.prototype['datatype'] = undefined;
var _default = exports["default"] = TimeSeriesColumn;

},{"../ApiClient":16}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesExtents model module.
 * @module model/TimeSeriesExtents
 * @version 3.0
 */
var TimeSeriesExtents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesExtents</code>.
   * TimeSeries extent information
   * @alias module:model/TimeSeriesExtents
   */
  function TimeSeriesExtents() {
    _classCallCheck(this, TimeSeriesExtents);
    TimeSeriesExtents.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesExtents, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesExtents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesExtents} obj Optional instance to populate.
     * @return {module:model/TimeSeriesExtents} The populated <code>TimeSeriesExtents</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesExtents();
        if (data.hasOwnProperty('earliest-time')) {
          obj['earliest-time'] = _ApiClient["default"].convertToType(data['earliest-time'], 'Date');
        }
        if (data.hasOwnProperty('last-update')) {
          obj['last-update'] = _ApiClient["default"].convertToType(data['last-update'], 'Date');
        }
        if (data.hasOwnProperty('latest-time')) {
          obj['latest-time'] = _ApiClient["default"].convertToType(data['latest-time'], 'Date');
        }
        if (data.hasOwnProperty('version-time')) {
          obj['version-time'] = _ApiClient["default"].convertToType(data['version-time'], 'Date');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesExtents</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesExtents</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return TimeSeriesExtents;
}();
/**
 * Earliest value in the timeseries
 * @member {Date} earliest-time
 */
TimeSeriesExtents.prototype['earliest-time'] = undefined;

/**
 * Last update in the timeseries
 * @member {Date} last-update
 */
TimeSeriesExtents.prototype['last-update'] = undefined;

/**
 * Latest value in the timeseries
 * @member {Date} latest-time
 */
TimeSeriesExtents.prototype['latest-time'] = undefined;

/**
 * TimeSeries version to which this extent information applies
 * @member {Date} version-time
 */
TimeSeriesExtents.prototype['version-time'] = undefined;
var _default = exports["default"] = TimeSeriesExtents;

},{"../ApiClient":16}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AssignedTimeSeries = _interopRequireDefault(require("./AssignedTimeSeries"));
var _TimeSeriesCategory = _interopRequireDefault(require("./TimeSeriesCategory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesGroup model module.
 * @module model/TimeSeriesGroup
 * @version 3.0
 */
var TimeSeriesGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesGroup</code>.
   * A representation of a timeseries group
   * @alias module:model/TimeSeriesGroup
   * @param officeId {String} Owning office of object.
   */
  function TimeSeriesGroup(officeId) {
    _classCallCheck(this, TimeSeriesGroup);
    TimeSeriesGroup.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesGroup, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>TimeSeriesGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesGroup} obj Optional instance to populate.
     * @return {module:model/TimeSeriesGroup} The populated <code>TimeSeriesGroup</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesGroup();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('time-series-category')) {
          obj['time-series-category'] = _TimeSeriesCategory["default"].constructFromObject(data['time-series-category']);
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('shared-alias-id')) {
          obj['shared-alias-id'] = _ApiClient["default"].convertToType(data['shared-alias-id'], 'String');
        }
        if (data.hasOwnProperty('shared-ref-ts-id')) {
          obj['shared-ref-ts-id'] = _ApiClient["default"].convertToType(data['shared-ref-ts-id'], 'String');
        }
        if (data.hasOwnProperty('assigned-time-series')) {
          obj['assigned-time-series'] = _ApiClient["default"].convertToType(data['assigned-time-series'], [_AssignedTimeSeries["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesGroup</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TimeSeriesGroup.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // validate the optional field `time-series-category`
      if (data['time-series-category']) {
        // data not null
        _TimeSeriesCategory["default"].validateJSON(data['time-series-category']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['shared-alias-id'] && !(typeof data['shared-alias-id'] === 'string' || data['shared-alias-id'] instanceof String)) {
        throw new Error("Expected the field `shared-alias-id` to be a primitive type in the JSON string but got " + data['shared-alias-id']);
      }
      // ensure the json data is a string
      if (data['shared-ref-ts-id'] && !(typeof data['shared-ref-ts-id'] === 'string' || data['shared-ref-ts-id'] instanceof String)) {
        throw new Error("Expected the field `shared-ref-ts-id` to be a primitive type in the JSON string but got " + data['shared-ref-ts-id']);
      }
      if (data['assigned-time-series']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['assigned-time-series'])) {
          throw new Error("Expected the field `assigned-time-series` to be an array in the JSON data but got " + data['assigned-time-series']);
        }
        // validate the optional field `assigned-time-series` (array)
        var _iterator2 = _createForOfIteratorHelper(data['assigned-time-series']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _AssignedTimeSeries["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
  return TimeSeriesGroup;
}();
TimeSeriesGroup.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
TimeSeriesGroup.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
TimeSeriesGroup.prototype['id'] = undefined;

/**
 * @member {module:model/TimeSeriesCategory} time-series-category
 */
TimeSeriesGroup.prototype['time-series-category'] = undefined;

/**
 * @member {String} description
 */
TimeSeriesGroup.prototype['description'] = undefined;

/**
 * @member {String} shared-alias-id
 */
TimeSeriesGroup.prototype['shared-alias-id'] = undefined;

/**
 * @member {String} shared-ref-ts-id
 */
TimeSeriesGroup.prototype['shared-ref-ts-id'] = undefined;

/**
 * @member {Array.<module:model/AssignedTimeSeries>} assigned-time-series
 */
TimeSeriesGroup.prototype['assigned-time-series'] = undefined;
var _default = exports["default"] = TimeSeriesGroup;

},{"../ApiClient":16,"./AssignedTimeSeries":43,"./TimeSeriesCategory":94}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesIdentifierDescriptor model module.
 * @module model/TimeSeriesIdentifierDescriptor
 * @version 3.0
 */
var TimeSeriesIdentifierDescriptor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesIdentifierDescriptor</code>.
   * @alias module:model/TimeSeriesIdentifierDescriptor
   * @param officeId {String} Owning office of object.
   */
  function TimeSeriesIdentifierDescriptor(officeId) {
    _classCallCheck(this, TimeSeriesIdentifierDescriptor);
    TimeSeriesIdentifierDescriptor.initialize(this, officeId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesIdentifierDescriptor, null, [{
    key: "initialize",
    value: function initialize(obj, officeId) {
      obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>TimeSeriesIdentifierDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesIdentifierDescriptor} obj Optional instance to populate.
     * @return {module:model/TimeSeriesIdentifierDescriptor} The populated <code>TimeSeriesIdentifierDescriptor</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesIdentifierDescriptor();
        if (data.hasOwnProperty('office-id')) {
          obj['office-id'] = _ApiClient["default"].convertToType(data['office-id'], 'String');
        }
        if (data.hasOwnProperty('time-series-id')) {
          obj['time-series-id'] = _ApiClient["default"].convertToType(data['time-series-id'], 'String');
        }
        if (data.hasOwnProperty('timezone-name')) {
          obj['timezone-name'] = _ApiClient["default"].convertToType(data['timezone-name'], 'String');
        }
        if (data.hasOwnProperty('interval-offset-minutes')) {
          obj['interval-offset-minutes'] = _ApiClient["default"].convertToType(data['interval-offset-minutes'], 'Number');
        }
        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesIdentifierDescriptor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesIdentifierDescriptor</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TimeSeriesIdentifierDescriptor.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
        throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
      }
      // ensure the json data is a string
      if (data['time-series-id'] && !(typeof data['time-series-id'] === 'string' || data['time-series-id'] instanceof String)) {
        throw new Error("Expected the field `time-series-id` to be a primitive type in the JSON string but got " + data['time-series-id']);
      }
      // ensure the json data is a string
      if (data['timezone-name'] && !(typeof data['timezone-name'] === 'string' || data['timezone-name'] instanceof String)) {
        throw new Error("Expected the field `timezone-name` to be a primitive type in the JSON string but got " + data['timezone-name']);
      }
      return true;
    }
  }]);
  return TimeSeriesIdentifierDescriptor;
}();
TimeSeriesIdentifierDescriptor.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
TimeSeriesIdentifierDescriptor.prototype['office-id'] = undefined;

/**
 * @member {String} time-series-id
 */
TimeSeriesIdentifierDescriptor.prototype['time-series-id'] = undefined;

/**
 * @member {String} timezone-name
 */
TimeSeriesIdentifierDescriptor.prototype['timezone-name'] = undefined;

/**
 * @member {Number} interval-offset-minutes
 */
TimeSeriesIdentifierDescriptor.prototype['interval-offset-minutes'] = undefined;

/**
 * @member {Boolean} active
 */
TimeSeriesIdentifierDescriptor.prototype['active'] = undefined;
var _default = exports["default"] = TimeSeriesIdentifierDescriptor;

},{"../ApiClient":16}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TimeSeriesIdentifierDescriptor = _interopRequireDefault(require("./TimeSeriesIdentifierDescriptor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesIdentifierDescriptors model module.
 * @module model/TimeSeriesIdentifierDescriptors
 * @version 3.0
 */
var TimeSeriesIdentifierDescriptors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesIdentifierDescriptors</code>.
   * @alias module:model/TimeSeriesIdentifierDescriptors
   */
  function TimeSeriesIdentifierDescriptors() {
    _classCallCheck(this, TimeSeriesIdentifierDescriptors);
    TimeSeriesIdentifierDescriptors.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesIdentifierDescriptors, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesIdentifierDescriptors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesIdentifierDescriptors} obj Optional instance to populate.
     * @return {module:model/TimeSeriesIdentifierDescriptors} The populated <code>TimeSeriesIdentifierDescriptors</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesIdentifierDescriptors();
        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'String');
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
        if (data.hasOwnProperty('descriptors')) {
          obj['descriptors'] = _ApiClient["default"].convertToType(data['descriptors'], [_TimeSeriesIdentifierDescriptor["default"]]);
        }
        if (data.hasOwnProperty('next-page')) {
          obj['next-page'] = _ApiClient["default"].convertToType(data['next-page'], 'String');
        }
        if (data.hasOwnProperty('page-size')) {
          obj['page-size'] = _ApiClient["default"].convertToType(data['page-size'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesIdentifierDescriptors</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesIdentifierDescriptors</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
        throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
      }
      if (data['descriptors']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['descriptors'])) {
          throw new Error("Expected the field `descriptors` to be an array in the JSON data but got " + data['descriptors']);
        }
        // validate the optional field `descriptors` (array)
        var _iterator = _createForOfIteratorHelper(data['descriptors']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _TimeSeriesIdentifierDescriptor["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
        throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
      }
      return true;
    }
  }]);
  return TimeSeriesIdentifierDescriptors;
}();
/**
 * The cursor to the current page of data
 * @member {String} page
 */
TimeSeriesIdentifierDescriptors.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
TimeSeriesIdentifierDescriptors.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/TimeSeriesIdentifierDescriptor>} descriptors
 */
TimeSeriesIdentifierDescriptors.prototype['descriptors'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
TimeSeriesIdentifierDescriptors.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
TimeSeriesIdentifierDescriptors.prototype['page-size'] = undefined;
var _default = exports["default"] = TimeSeriesIdentifierDescriptors;

},{"../ApiClient":16,"./TimeSeriesIdentifierDescriptor":98}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TimeSeriesIntervalUnitsInner = _interopRequireDefault(require("./TimeSeriesIntervalUnitsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesInterval model module.
 * @module model/TimeSeriesInterval
 * @version 3.0
 */
var TimeSeriesInterval = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesInterval</code>.
   * The interval of the time-series, in ISO-8601 duration format
   * @alias module:model/TimeSeriesInterval
   */
  function TimeSeriesInterval() {
    _classCallCheck(this, TimeSeriesInterval);
    TimeSeriesInterval.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesInterval, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesInterval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesInterval} obj Optional instance to populate.
     * @return {module:model/TimeSeriesInterval} The populated <code>TimeSeriesInterval</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesInterval();
        if (data.hasOwnProperty('seconds')) {
          obj['seconds'] = _ApiClient["default"].convertToType(data['seconds'], 'Number');
        }
        if (data.hasOwnProperty('nano')) {
          obj['nano'] = _ApiClient["default"].convertToType(data['nano'], 'Number');
        }
        if (data.hasOwnProperty('zero')) {
          obj['zero'] = _ApiClient["default"].convertToType(data['zero'], 'Boolean');
        }
        if (data.hasOwnProperty('negative')) {
          obj['negative'] = _ApiClient["default"].convertToType(data['negative'], 'Boolean');
        }
        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], [_TimeSeriesIntervalUnitsInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesInterval</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesInterval</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['units']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['units'])) {
          throw new Error("Expected the field `units` to be an array in the JSON data but got " + data['units']);
        }
        // validate the optional field `units` (array)
        var _iterator = _createForOfIteratorHelper(data['units']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _TimeSeriesIntervalUnitsInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return TimeSeriesInterval;
}();
/**
 * @member {Number} seconds
 */
TimeSeriesInterval.prototype['seconds'] = undefined;

/**
 * @member {Number} nano
 */
TimeSeriesInterval.prototype['nano'] = undefined;

/**
 * @member {Boolean} zero
 */
TimeSeriesInterval.prototype['zero'] = undefined;

/**
 * @member {Boolean} negative
 */
TimeSeriesInterval.prototype['negative'] = undefined;

/**
 * @member {Array.<module:model/TimeSeriesIntervalUnitsInner>} units
 */
TimeSeriesInterval.prototype['units'] = undefined;
var _default = exports["default"] = TimeSeriesInterval;

},{"../ApiClient":16,"./TimeSeriesIntervalUnitsInner":101}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TimeSeriesIntervalUnitsInnerDuration = _interopRequireDefault(require("./TimeSeriesIntervalUnitsInnerDuration"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesIntervalUnitsInner model module.
 * @module model/TimeSeriesIntervalUnitsInner
 * @version 3.0
 */
var TimeSeriesIntervalUnitsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesIntervalUnitsInner</code>.
   * @alias module:model/TimeSeriesIntervalUnitsInner
   */
  function TimeSeriesIntervalUnitsInner() {
    _classCallCheck(this, TimeSeriesIntervalUnitsInner);
    TimeSeriesIntervalUnitsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesIntervalUnitsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesIntervalUnitsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesIntervalUnitsInner} obj Optional instance to populate.
     * @return {module:model/TimeSeriesIntervalUnitsInner} The populated <code>TimeSeriesIntervalUnitsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesIntervalUnitsInner();
        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _TimeSeriesIntervalUnitsInnerDuration["default"].constructFromObject(data['duration']);
        }
        if (data.hasOwnProperty('durationEstimated')) {
          obj['durationEstimated'] = _ApiClient["default"].convertToType(data['durationEstimated'], 'Boolean');
        }
        if (data.hasOwnProperty('dateBased')) {
          obj['dateBased'] = _ApiClient["default"].convertToType(data['dateBased'], 'Boolean');
        }
        if (data.hasOwnProperty('timeBased')) {
          obj['timeBased'] = _ApiClient["default"].convertToType(data['timeBased'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesIntervalUnitsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesIntervalUnitsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `duration`
      if (data['duration']) {
        // data not null
        _TimeSeriesIntervalUnitsInnerDuration["default"].validateJSON(data['duration']);
      }
      return true;
    }
  }]);
  return TimeSeriesIntervalUnitsInner;
}();
/**
 * @member {module:model/TimeSeriesIntervalUnitsInnerDuration} duration
 */
TimeSeriesIntervalUnitsInner.prototype['duration'] = undefined;

/**
 * @member {Boolean} durationEstimated
 */
TimeSeriesIntervalUnitsInner.prototype['durationEstimated'] = undefined;

/**
 * @member {Boolean} dateBased
 */
TimeSeriesIntervalUnitsInner.prototype['dateBased'] = undefined;

/**
 * @member {Boolean} timeBased
 */
TimeSeriesIntervalUnitsInner.prototype['timeBased'] = undefined;
var _default = exports["default"] = TimeSeriesIntervalUnitsInner;

},{"../ApiClient":16,"./TimeSeriesIntervalUnitsInnerDuration":102}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesIntervalUnitsInnerDuration model module.
 * @module model/TimeSeriesIntervalUnitsInnerDuration
 * @version 3.0
 */
var TimeSeriesIntervalUnitsInnerDuration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesIntervalUnitsInnerDuration</code>.
   * @alias module:model/TimeSeriesIntervalUnitsInnerDuration
   */
  function TimeSeriesIntervalUnitsInnerDuration() {
    _classCallCheck(this, TimeSeriesIntervalUnitsInnerDuration);
    TimeSeriesIntervalUnitsInnerDuration.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesIntervalUnitsInnerDuration, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesIntervalUnitsInnerDuration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesIntervalUnitsInnerDuration} obj Optional instance to populate.
     * @return {module:model/TimeSeriesIntervalUnitsInnerDuration} The populated <code>TimeSeriesIntervalUnitsInnerDuration</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesIntervalUnitsInnerDuration();
        if (data.hasOwnProperty('seconds')) {
          obj['seconds'] = _ApiClient["default"].convertToType(data['seconds'], 'Number');
        }
        if (data.hasOwnProperty('nano')) {
          obj['nano'] = _ApiClient["default"].convertToType(data['nano'], 'Number');
        }
        if (data.hasOwnProperty('zero')) {
          obj['zero'] = _ApiClient["default"].convertToType(data['zero'], 'Boolean');
        }
        if (data.hasOwnProperty('negative')) {
          obj['negative'] = _ApiClient["default"].convertToType(data['negative'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesIntervalUnitsInnerDuration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesIntervalUnitsInnerDuration</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return TimeSeriesIntervalUnitsInnerDuration;
}();
/**
 * @member {Number} seconds
 */
TimeSeriesIntervalUnitsInnerDuration.prototype['seconds'] = undefined;

/**
 * @member {Number} nano
 */
TimeSeriesIntervalUnitsInnerDuration.prototype['nano'] = undefined;

/**
 * @member {Boolean} zero
 */
TimeSeriesIntervalUnitsInnerDuration.prototype['zero'] = undefined;

/**
 * @member {Boolean} negative
 */
TimeSeriesIntervalUnitsInnerDuration.prototype['negative'] = undefined;
var _default = exports["default"] = TimeSeriesIntervalUnitsInnerDuration;

},{"../ApiClient":16}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesRecord model module.
 * @module model/TimeSeriesRecord
 * @version 3.0
 */
var TimeSeriesRecord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesRecord</code>.
   * List of retrieved time-series values
   * @alias module:model/TimeSeriesRecord
   */
  function TimeSeriesRecord() {
    _classCallCheck(this, TimeSeriesRecord);
    TimeSeriesRecord.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesRecord, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesRecord} obj Optional instance to populate.
     * @return {module:model/TimeSeriesRecord} The populated <code>TimeSeriesRecord</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesRecord();
        if (data.hasOwnProperty('date-time')) {
          obj['date-time'] = _ApiClient["default"].convertToType(data['date-time'], 'Number');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
        if (data.hasOwnProperty('quality-code')) {
          obj['quality-code'] = _ApiClient["default"].convertToType(data['quality-code'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesRecord</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesRecord</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return TimeSeriesRecord;
}();
/**
 * Milliseconds since 1970-01-01 (Unix Epoch), always UTC
 * @member {Number} date-time
 */
TimeSeriesRecord.prototype['date-time'] = undefined;

/**
 * Requested time-series data value
 * @member {Number} value
 */
TimeSeriesRecord.prototype['value'] = undefined;

/**
 * @member {Number} quality-code
 */
TimeSeriesRecord.prototype['quality-code'] = undefined;
var _default = exports["default"] = TimeSeriesRecord;

},{"../ApiClient":16}],104:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeSeriesValuesInnerInner model module.
 * @module model/TimeSeriesValuesInnerInner
 * @version 3.0
 */
var TimeSeriesValuesInnerInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeSeriesValuesInnerInner</code>.
   * List of retrieved time-series values
   * @alias module:model/TimeSeriesValuesInnerInner
   */
  function TimeSeriesValuesInnerInner() {
    _classCallCheck(this, TimeSeriesValuesInnerInner);
    TimeSeriesValuesInnerInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeSeriesValuesInnerInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeSeriesValuesInnerInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesValuesInnerInner} obj Optional instance to populate.
     * @return {module:model/TimeSeriesValuesInnerInner} The populated <code>TimeSeriesValuesInnerInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeSeriesValuesInnerInner();
        if (data.hasOwnProperty('date-time')) {
          obj['date-time'] = _ApiClient["default"].convertToType(data['date-time'], 'Number');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
        if (data.hasOwnProperty('quality-code')) {
          obj['quality-code'] = _ApiClient["default"].convertToType(data['quality-code'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesValuesInnerInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesValuesInnerInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return TimeSeriesValuesInnerInner;
}();
/**
 * Milliseconds since 1970-01-01 (Unix Epoch), always UTC
 * @member {Number} date-time
 */
TimeSeriesValuesInnerInner.prototype['date-time'] = undefined;

/**
 * Requested time-series data value
 * @member {Number} value
 */
TimeSeriesValuesInnerInner.prototype['value'] = undefined;

/**
 * @member {Number} quality-code
 */
TimeSeriesValuesInnerInner.prototype['quality-code'] = undefined;
var _default = exports["default"] = TimeSeriesValuesInnerInner;

},{"../ApiClient":16}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TimeSeriesExtents = _interopRequireDefault(require("./TimeSeriesExtents"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TimeseriesCatalogEntry model module.
 * @module model/TimeseriesCatalogEntry
 * @version 3.0
 */
var TimeseriesCatalogEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeseriesCatalogEntry</code>.
   * @alias module:model/TimeseriesCatalogEntry
   */
  function TimeseriesCatalogEntry() {
    _classCallCheck(this, TimeseriesCatalogEntry);
    TimeseriesCatalogEntry.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TimeseriesCatalogEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TimeseriesCatalogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeseriesCatalogEntry} obj Optional instance to populate.
     * @return {module:model/TimeseriesCatalogEntry} The populated <code>TimeseriesCatalogEntry</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeseriesCatalogEntry();
        if (data.hasOwnProperty('office')) {
          obj['office'] = _ApiClient["default"].convertToType(data['office'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], 'String');
        }
        if (data.hasOwnProperty('interval')) {
          obj['interval'] = _ApiClient["default"].convertToType(data['interval'], 'String');
        }
        if (data.hasOwnProperty('intervalOffset')) {
          obj['intervalOffset'] = _ApiClient["default"].convertToType(data['intervalOffset'], 'Number');
        }
        if (data.hasOwnProperty('timeZone')) {
          obj['timeZone'] = _ApiClient["default"].convertToType(data['timeZone'], 'String');
        }
        if (data.hasOwnProperty('extents')) {
          obj['extents'] = _ApiClient["default"].convertToType(data['extents'], [_TimeSeriesExtents["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeseriesCatalogEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeseriesCatalogEntry</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['office'] && !(typeof data['office'] === 'string' || data['office'] instanceof String)) {
        throw new Error("Expected the field `office` to be a primitive type in the JSON string but got " + data['office']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['units'] && !(typeof data['units'] === 'string' || data['units'] instanceof String)) {
        throw new Error("Expected the field `units` to be a primitive type in the JSON string but got " + data['units']);
      }
      // ensure the json data is a string
      if (data['interval'] && !(typeof data['interval'] === 'string' || data['interval'] instanceof String)) {
        throw new Error("Expected the field `interval` to be a primitive type in the JSON string but got " + data['interval']);
      }
      // ensure the json data is a string
      if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
        throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
      }
      if (data['extents']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['extents'])) {
          throw new Error("Expected the field `extents` to be an array in the JSON data but got " + data['extents']);
        }
        // validate the optional field `extents` (array)
        var _iterator = _createForOfIteratorHelper(data['extents']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _TimeSeriesExtents["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return TimeseriesCatalogEntry;
}();
/**
 * @member {String} office
 */
TimeseriesCatalogEntry.prototype['office'] = undefined;

/**
 * @member {String} name
 */
TimeseriesCatalogEntry.prototype['name'] = undefined;

/**
 * @member {String} units
 */
TimeseriesCatalogEntry.prototype['units'] = undefined;

/**
 * @member {String} interval
 */
TimeseriesCatalogEntry.prototype['interval'] = undefined;

/**
 * Offset from top of interval
 * @member {Number} intervalOffset
 */
TimeseriesCatalogEntry.prototype['intervalOffset'] = undefined;

/**
 * Only on 21.1.1 Database. The timezone the Interval Offset is from.
 * @member {String} timeZone
 */
TimeseriesCatalogEntry.prototype['timeZone'] = undefined;

/**
 * @member {Array.<module:model/TimeSeriesExtents>} extents
 */
TimeseriesCatalogEntry.prototype['extents'] = undefined;
var _default = exports["default"] = TimeseriesCatalogEntry;

},{"../ApiClient":16,"./TimeSeriesExtents":96}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AbstractRatingMetadata = _interopRequireDefault(require("./AbstractRatingMetadata"));
var _TransitionalRatingAllOf = _interopRequireDefault(require("./TransitionalRatingAllOf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TransitionalRating model module.
 * @module model/TransitionalRating
 * @version 3.0
 */
var TransitionalRating = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransitionalRating</code>.
   * @alias module:model/TransitionalRating
   * @extends module:model/AbstractRatingMetadata
   * @implements module:model/AbstractRatingMetadata
   * @implements module:model/TransitionalRatingAllOf
   */
  function TransitionalRating() {
    _classCallCheck(this, TransitionalRating);
    _AbstractRatingMetadata["default"].initialize(this);
    _TransitionalRatingAllOf["default"].initialize(this);
    TransitionalRating.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TransitionalRating, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TransitionalRating</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitionalRating} obj Optional instance to populate.
     * @return {module:model/TransitionalRating} The populated <code>TransitionalRating</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitionalRating();
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _TransitionalRatingAllOf["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('source-ratings')) {
          obj['source-ratings'] = _ApiClient["default"].convertToType(data['source-ratings'], ['String']);
        }
        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], ['String']);
        }
        if (data.hasOwnProperty('evaluations')) {
          obj['evaluations'] = _ApiClient["default"].convertToType(data['evaluations'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransitionalRating</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransitionalRating</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is an array
      if (!Array.isArray(data['source-ratings'])) {
        throw new Error("Expected the field `source-ratings` to be an array in the JSON data but got " + data['source-ratings']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['conditions'])) {
        throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['evaluations'])) {
        throw new Error("Expected the field `evaluations` to be an array in the JSON data but got " + data['evaluations']);
      }
      return true;
    }
  }]);
  return TransitionalRating;
}();
/**
 * @member {Array.<String>} source-ratings
 */
TransitionalRating.prototype['source-ratings'] = undefined;

/**
 * @member {Array.<String>} conditions
 */
TransitionalRating.prototype['conditions'] = undefined;

/**
 * @member {Array.<String>} evaluations
 */
TransitionalRating.prototype['evaluations'] = undefined;

// Implement AbstractRatingMetadata interface:
/**
 * @member {Array.<Object>} source-ratings
 */
_AbstractRatingMetadata["default"].prototype['source-ratings'] = undefined;
/**
 * @member {Array.<String>} conditions
 */
_AbstractRatingMetadata["default"].prototype['conditions'] = undefined;
/**
 * @member {Array.<String>} evaluations
 */
_AbstractRatingMetadata["default"].prototype['evaluations'] = undefined;
/**
 * @member {String} connections
 */
_AbstractRatingMetadata["default"].prototype['connections'] = undefined;
/**
 * @member {String} expression
 */
_AbstractRatingMetadata["default"].prototype['expression'] = undefined;
/**
 * @member {String} in-range-method
 */
_AbstractRatingMetadata["default"].prototype['in-range-method'] = undefined;
/**
 * @member {String} out-range-low-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-low-method'] = undefined;
/**
 * @member {String} out-range-high-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-high-method'] = undefined;
// Implement TransitionalRatingAllOf interface:
/**
 * @member {Array.<String>} source-ratings
 */
_TransitionalRatingAllOf["default"].prototype['source-ratings'] = undefined;
/**
 * @member {Array.<String>} conditions
 */
_TransitionalRatingAllOf["default"].prototype['conditions'] = undefined;
/**
 * @member {Array.<String>} evaluations
 */
_TransitionalRatingAllOf["default"].prototype['evaluations'] = undefined;
var _default = exports["default"] = TransitionalRating;

},{"../ApiClient":16,"./AbstractRatingMetadata":40,"./TransitionalRatingAllOf":107}],107:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The TransitionalRatingAllOf model module.
 * @module model/TransitionalRatingAllOf
 * @version 3.0
 */
var TransitionalRatingAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransitionalRatingAllOf</code>.
   * @alias module:model/TransitionalRatingAllOf
   */
  function TransitionalRatingAllOf() {
    _classCallCheck(this, TransitionalRatingAllOf);
    TransitionalRatingAllOf.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TransitionalRatingAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>TransitionalRatingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitionalRatingAllOf} obj Optional instance to populate.
     * @return {module:model/TransitionalRatingAllOf} The populated <code>TransitionalRatingAllOf</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitionalRatingAllOf();
        if (data.hasOwnProperty('source-ratings')) {
          obj['source-ratings'] = _ApiClient["default"].convertToType(data['source-ratings'], ['String']);
        }
        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], ['String']);
        }
        if (data.hasOwnProperty('evaluations')) {
          obj['evaluations'] = _ApiClient["default"].convertToType(data['evaluations'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransitionalRatingAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransitionalRatingAllOf</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is an array
      if (!Array.isArray(data['source-ratings'])) {
        throw new Error("Expected the field `source-ratings` to be an array in the JSON data but got " + data['source-ratings']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['conditions'])) {
        throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['evaluations'])) {
        throw new Error("Expected the field `evaluations` to be an array in the JSON data but got " + data['evaluations']);
      }
      return true;
    }
  }]);
  return TransitionalRatingAllOf;
}();
/**
 * @member {Array.<String>} source-ratings
 */
TransitionalRatingAllOf.prototype['source-ratings'] = undefined;

/**
 * @member {Array.<String>} conditions
 */
TransitionalRatingAllOf.prototype['conditions'] = undefined;

/**
 * @member {Array.<String>} evaluations
 */
TransitionalRatingAllOf.prototype['evaluations'] = undefined;
var _default = exports["default"] = TransitionalRatingAllOf;

},{"../ApiClient":16}],108:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Enum class UnitSystem.
* @enum {}
* @readonly
*/
var UnitSystem = exports["default"] = /*#__PURE__*/function () {
  function UnitSystem() {
    _classCallCheck(this, UnitSystem);
    /**
     * value: "SI"
     * @const
     */
    _defineProperty(this, "SI", "SI");
    /**
     * value: "EN"
     * @const
     */
    _defineProperty(this, "EN", "EN");
  }
  _createClass(UnitSystem, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>UnitSystem</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/UnitSystem} The enum <code>UnitSystem</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return UnitSystem;
}();

},{"../ApiClient":16}],109:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TableRating = _interopRequireDefault(require("./TableRating"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The UsgsStreamRating model module.
 * @module model/UsgsStreamRating
 * @version 3.0
 */
var UsgsStreamRating = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsgsStreamRating</code>.
   * @alias module:model/UsgsStreamRating
   * @extends module:model/TableRating
   * @implements module:model/TableRating
   */
  function UsgsStreamRating() {
    _classCallCheck(this, UsgsStreamRating);
    _TableRating["default"].initialize(this);
    UsgsStreamRating.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UsgsStreamRating, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>UsgsStreamRating</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsgsStreamRating} obj Optional instance to populate.
     * @return {module:model/UsgsStreamRating} The populated <code>UsgsStreamRating</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsgsStreamRating();
        _TableRating["default"].constructFromObject(data, obj);
        _TableRating["default"].constructFromObject(data, obj);
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsgsStreamRating</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsgsStreamRating</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return UsgsStreamRating;
}(); // Implement TableRating interface:
/**
 * @member {String} in-range-method
 */
_TableRating["default"].prototype['in-range-method'] = undefined;
/**
 * @member {String} out-range-low-method
 */
_TableRating["default"].prototype['out-range-low-method'] = undefined;
/**
 * @member {String} out-range-high-method
 */
_TableRating["default"].prototype['out-range-high-method'] = undefined;
/**
 * @member {Array.<Object>} source-ratings
 */
_TableRating["default"].prototype['source-ratings'] = undefined;
/**
 * @member {Array.<String>} conditions
 */
_TableRating["default"].prototype['conditions'] = undefined;
/**
 * @member {Array.<String>} evaluations
 */
_TableRating["default"].prototype['evaluations'] = undefined;
/**
 * @member {String} connections
 */
_TableRating["default"].prototype['connections'] = undefined;
/**
 * @member {String} expression
 */
_TableRating["default"].prototype['expression'] = undefined;
var _default = exports["default"] = UsgsStreamRating;

},{"../ApiClient":16,"./TableRating":91}],110:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Offset = _interopRequireDefault(require("./Offset"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The VerticalDatumInfo model module.
 * @module model/VerticalDatumInfo
 * @version 3.0
 */
var VerticalDatumInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VerticalDatumInfo</code>.
   * @alias module:model/VerticalDatumInfo
   */
  function VerticalDatumInfo() {
    _classCallCheck(this, VerticalDatumInfo);
    VerticalDatumInfo.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VerticalDatumInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VerticalDatumInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerticalDatumInfo} obj Optional instance to populate.
     * @return {module:model/VerticalDatumInfo} The populated <code>VerticalDatumInfo</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VerticalDatumInfo();
        if (data.hasOwnProperty('office')) {
          obj['office'] = _ApiClient["default"].convertToType(data['office'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }
        if (data.hasOwnProperty('native-datum')) {
          obj['native-datum'] = _ApiClient["default"].convertToType(data['native-datum'], 'String');
        }
        if (data.hasOwnProperty('elevation')) {
          obj['elevation'] = _ApiClient["default"].convertToType(data['elevation'], 'Number');
        }
        if (data.hasOwnProperty('offsets')) {
          obj['offsets'] = _ApiClient["default"].convertToType(data['offsets'], [_Offset["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VerticalDatumInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VerticalDatumInfo</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['office'] && !(typeof data['office'] === 'string' || data['office'] instanceof String)) {
        throw new Error("Expected the field `office` to be a primitive type in the JSON string but got " + data['office']);
      }
      // ensure the json data is a string
      if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
        throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
      }
      // ensure the json data is a string
      if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
        throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
      }
      // ensure the json data is a string
      if (data['native-datum'] && !(typeof data['native-datum'] === 'string' || data['native-datum'] instanceof String)) {
        throw new Error("Expected the field `native-datum` to be a primitive type in the JSON string but got " + data['native-datum']);
      }
      if (data['offsets']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['offsets'])) {
          throw new Error("Expected the field `offsets` to be an array in the JSON data but got " + data['offsets']);
        }
        // validate the optional field `offsets` (array)
        var _iterator = _createForOfIteratorHelper(data['offsets']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _Offset["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return VerticalDatumInfo;
}();
/**
 * @member {String} office
 */
VerticalDatumInfo.prototype['office'] = undefined;

/**
 * @member {String} unit
 */
VerticalDatumInfo.prototype['unit'] = undefined;

/**
 * @member {String} location
 */
VerticalDatumInfo.prototype['location'] = undefined;

/**
 * @member {String} native-datum
 */
VerticalDatumInfo.prototype['native-datum'] = undefined;

/**
 * @member {Number} elevation
 */
VerticalDatumInfo.prototype['elevation'] = undefined;

/**
 * @member {Array.<module:model/Offset>} offsets
 */
VerticalDatumInfo.prototype['offsets'] = undefined;
var _default = exports["default"] = VerticalDatumInfo;

},{"../ApiClient":16,"./Offset":72}],111:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AbstractRatingMetadata = _interopRequireDefault(require("./AbstractRatingMetadata"));
var _VirtualRatingAllOf = _interopRequireDefault(require("./VirtualRatingAllOf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The VirtualRating model module.
 * @module model/VirtualRating
 * @version 3.0
 */
var VirtualRating = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VirtualRating</code>.
   * @alias module:model/VirtualRating
   * @extends module:model/AbstractRatingMetadata
   * @implements module:model/AbstractRatingMetadata
   * @implements module:model/VirtualRatingAllOf
   */
  function VirtualRating() {
    _classCallCheck(this, VirtualRating);
    _AbstractRatingMetadata["default"].initialize(this);
    _VirtualRatingAllOf["default"].initialize(this);
    VirtualRating.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VirtualRating, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VirtualRating</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualRating} obj Optional instance to populate.
     * @return {module:model/VirtualRating} The populated <code>VirtualRating</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VirtualRating();
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _AbstractRatingMetadata["default"].constructFromObject(data, obj);
        _VirtualRatingAllOf["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('source-ratings')) {
          obj['source-ratings'] = _ApiClient["default"].convertToType(data['source-ratings'], [Object]);
        }
        if (data.hasOwnProperty('connections')) {
          obj['connections'] = _ApiClient["default"].convertToType(data['connections'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VirtualRating</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VirtualRating</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is an array
      if (!Array.isArray(data['source-ratings'])) {
        throw new Error("Expected the field `source-ratings` to be an array in the JSON data but got " + data['source-ratings']);
      }
      // ensure the json data is a string
      if (data['connections'] && !(typeof data['connections'] === 'string' || data['connections'] instanceof String)) {
        throw new Error("Expected the field `connections` to be a primitive type in the JSON string but got " + data['connections']);
      }
      return true;
    }
  }]);
  return VirtualRating;
}();
/**
 * @member {Array.<Object>} source-ratings
 */
VirtualRating.prototype['source-ratings'] = undefined;

/**
 * @member {String} connections
 */
VirtualRating.prototype['connections'] = undefined;

// Implement AbstractRatingMetadata interface:
/**
 * @member {Array.<Object>} source-ratings
 */
_AbstractRatingMetadata["default"].prototype['source-ratings'] = undefined;
/**
 * @member {Array.<String>} conditions
 */
_AbstractRatingMetadata["default"].prototype['conditions'] = undefined;
/**
 * @member {Array.<String>} evaluations
 */
_AbstractRatingMetadata["default"].prototype['evaluations'] = undefined;
/**
 * @member {String} connections
 */
_AbstractRatingMetadata["default"].prototype['connections'] = undefined;
/**
 * @member {String} expression
 */
_AbstractRatingMetadata["default"].prototype['expression'] = undefined;
/**
 * @member {String} in-range-method
 */
_AbstractRatingMetadata["default"].prototype['in-range-method'] = undefined;
/**
 * @member {String} out-range-low-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-low-method'] = undefined;
/**
 * @member {String} out-range-high-method
 */
_AbstractRatingMetadata["default"].prototype['out-range-high-method'] = undefined;
// Implement VirtualRatingAllOf interface:
/**
 * @member {Array.<Object>} source-ratings
 */
_VirtualRatingAllOf["default"].prototype['source-ratings'] = undefined;
/**
 * @member {String} connections
 */
_VirtualRatingAllOf["default"].prototype['connections'] = undefined;
var _default = exports["default"] = VirtualRating;

},{"../ApiClient":16,"./AbstractRatingMetadata":40,"./VirtualRatingAllOf":112}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The VirtualRatingAllOf model module.
 * @module model/VirtualRatingAllOf
 * @version 3.0
 */
var VirtualRatingAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VirtualRatingAllOf</code>.
   * @alias module:model/VirtualRatingAllOf
   */
  function VirtualRatingAllOf() {
    _classCallCheck(this, VirtualRatingAllOf);
    VirtualRatingAllOf.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VirtualRatingAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VirtualRatingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualRatingAllOf} obj Optional instance to populate.
     * @return {module:model/VirtualRatingAllOf} The populated <code>VirtualRatingAllOf</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VirtualRatingAllOf();
        if (data.hasOwnProperty('source-ratings')) {
          obj['source-ratings'] = _ApiClient["default"].convertToType(data['source-ratings'], [Object]);
        }
        if (data.hasOwnProperty('connections')) {
          obj['connections'] = _ApiClient["default"].convertToType(data['connections'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VirtualRatingAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VirtualRatingAllOf</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is an array
      if (!Array.isArray(data['source-ratings'])) {
        throw new Error("Expected the field `source-ratings` to be an array in the JSON data but got " + data['source-ratings']);
      }
      // ensure the json data is a string
      if (data['connections'] && !(typeof data['connections'] === 'string' || data['connections'] instanceof String)) {
        throw new Error("Expected the field `connections` to be a primitive type in the JSON string but got " + data['connections']);
      }
      return true;
    }
  }]);
  return VirtualRatingAllOf;
}();
/**
 * @member {Array.<Object>} source-ratings
 */
VirtualRatingAllOf.prototype['source-ratings'] = undefined;

/**
 * @member {String} connections
 */
VirtualRatingAllOf.prototype['connections'] = undefined;
var _default = exports["default"] = VirtualRatingAllOf;

},{"../ApiClient":16}]},{},[39]);
