var assert = require('power-assert');
var lockedpath = require("../");

var path = require('path');

describe('lockedpath', function() {
    var basedir = __dirname;

    it('should join a single path', function(){
        assert.equal(lockedpath(basedir).join("foo.txt"), path.join(basedir, "foo.txt"));
    });

    it('should join multiple paths', function(){
        assert.equal(lockedpath(basedir).join("foo", "bar", "baz"), path.join(basedir, "foo/bar/baz"));
    });

    it('should join a single parent target path', function(){
        assert.equal(lockedpath(basedir).join("../"), basedir);
    });

    it('should join multiple parent target paths', function(){
        assert.equal(lockedpath(basedir).join("..", "../../"), basedir);
    });

    it('should join multiple paths with parent target paths', function(){
        assert.equal(lockedpath(basedir).join("foo", "../bar", "..", "baz/.."), basedir);
        assert.equal(lockedpath(basedir).join("foo", "../..", "bar"), path.join(basedir, "bar"));
        assert.equal(lockedpath(basedir).join("foo", "../bar", "..", "baz"), path.join(basedir, "baz"));
    });

    it('should return root path if arguments is none.', function(){
        assert.equal(lockedpath(basedir).join(), basedir);
    });
});