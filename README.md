URL tagged template
===================

[![Build Status](https://travis-ci.org/eddieantonio/url-tagged-template.svg?branch=master)](https://travis-ci.org/eddieantonio/url-tagged-template)

ES6 URL [tagged template][] for use with Node.JS.

Returns the string as a Node [URL][node-url] object.


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
