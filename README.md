# utf8-lite
Bare minimum isomorphic utf8 library

## Usage

```javascript
const utf8 = require('utf8-lite');

utf8.encode('hello 你好')
// hello \xE4\xBD\xA0\xE5\xA5\xBD

utf8.decode('hello \xE4\xBD\xA0\xE5\xA5\xBD')
// hello 你好
```
