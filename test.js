/*
 * Copyright (c) 2016 Eddie Antonio Santos <easantos@ualberta.ca>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import test from 'ava';

import {Url} from 'url';

import URL from './';


test('It returns a URL-like object', t => {
  const obj = URL`http://example.org/`;
  t.true(obj instanceof Url);
});

test(`It doesn't lie in the README`, t => {
  const myUrl = URL`http://example.org/a/b/c?foo=bar#baz`;

  t.is(myUrl.host, 'example.org');
  t.is(myUrl.pathname, '/a/b/c');
  t.deepEqual(myUrl.query, { foo : 'bar' });
  t.is(myUrl.hash, '#baz');
});
