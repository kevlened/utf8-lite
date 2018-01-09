# utf8-lite [![NPM](https://img.shields.io/npm/v/utf8-lite.svg)](https://npmjs.com/package/utf8-lite) [![Build](https://travis-ci.org/kevlened/utf8-lite.svg?branch=master)](https://travis-ci.org/kevlened/utf8-lite)
isomorphic utf8 library in 113 bytes

## Install

```npm install utf8-lite```

## Usage

```javascript
const utf8 = require('utf8-lite')

utf8.toUtf8('hello 你好')
// hello \xE4\xBD\xA0\xE5\xA5\xBD

utf8.fromUtf8('hello \xE4\xBD\xA0\xE5\xA5\xBD')
// hello 你好
```

## Can it be smaller?

If you use ES6 imports with a bundler that supports tree-shaking, yes!

```javascript
import { toUtf8 } from 'utf8-lite'
```

## License

MIT
