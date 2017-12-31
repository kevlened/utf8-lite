const assert = require('assert')
const utf8 = require('.')

assert.equal(utf8.decode(utf8.encode('hello 你好')), 'hello 你好')
assert.equal(utf8.encode('hello 你好'), 'hello \xE4\xBD\xA0\xE5\xA5\xBD')
assert.equal(utf8.decode('hello \xE4\xBD\xA0\xE5\xA5\xBD'), 'hello 你好')

console.log('✅ Success!')
