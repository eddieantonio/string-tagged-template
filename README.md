URL tagged template
===================

[![Build Status](https://travis-ci.org/eddieantonio/url-tagged-template.svg?branch=master)](https://travis-ci.org/eddieantonio/url-tagged-template)

ES6 URL [tagged template][] for use with Node.JS.

Returns the string as a Node [URL][node-url] object. This is the same as
calling `url.parse('...', true)`, except far more concise.


[tagged template]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals
[node-url]: https://nodejs.org/api/url.html#url_url_strings_and_url_objects


Usage
=====

```javascript
const URL = require('url-tagged-template');

const myUrl = URL`http://example.org/a/b/c?foo=bar#baz`;

myUrl.host
// 'example.org'

myUrl.pathname
// '/a/b/c'

myUrl.query
// { foo : 'bar' }

myUrl.hash
// '#baz'
```


License
=======

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
