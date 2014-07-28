lockedpath
===========

Join path with locked (keep) root path.

[![Build Status](https://travis-ci.org/kumatch/lockedpath.png?branch=master)](https://travis-ci.org/kumatch/lockedpath)


Install
--------

    $ npm install lockedpath


Example
--------

```javascript
var lockedpath = require("lockedpath");

var filename1 = lockedpath("/path/to").join("foo", "bar");           // /path/to/foo/bar
var filename2 = lockedpath("/path/to").join("..");                   // /path/to
var filename3 = lockedpath("/path/to").join("foo", "../..", "bar");  // /path/to/bar
```

This case will be written a JSON value to file `$HOME/.config/myapp/samples.json`.


Methods
-------

### var locked = lockedpath(filename)

Create lockedpath instance. `filename` is a locked root path. (will keep a root path after joins.)



### locked.join([path1], [path2])

Join all arguments together and normalize the resulting root path + joins paths.





License
--------

Licensed under the MIT License.

Copyright (c) 2014 Yosuke Kumakura

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
