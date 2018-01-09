const assert = require('assert')
const utf8 = require('.')

assert.equal(utf8.fromUtf8(utf8.toUtf8('hello 你好')), 'hello 你好')
assert.equal(utf8.toUtf8('hello 你好'), 'hello \xE4\xBD\xA0\xE5\xA5\xBD')
assert.equal(utf8.fromUtf8('hello \xE4\xBD\xA0\xE5\xA5\xBD'), 'hello 你好')

console.log('✅ Success!')
