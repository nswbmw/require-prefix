var assert = require('assert');

describe('Test require-prefix', function () {
  it('should return `test`', function (done) {
    var _require = require('..')();
    assert.equal(_require('test/test'), 'test');
    assert.equal(_require('./test/test'), 'test');

    var _require = require('..')('test');
    assert.equal(_require('test'), 'test');
    assert.equal(_require('./test'), 'test');

    var _require = require('..')('./test');
    assert.equal(_require('test'), 'test');
    assert.equal(_require('./test'), 'test');

    done();
  });

  it('should return `hi`', function (done) {
    var _require = require('..')();
    assert.equal(_require('test/posts/sayHi'), 'hi');
    assert.equal(_require('./test/posts/sayHi'), 'hi');

    var _require = require('..')('./test');
    assert.equal(_require('posts/sayHi'), 'hi');
    assert.equal(_require('./posts/sayHi'), 'hi');

    var _require = require('..')('test');
    assert.equal(_require('posts/sayHi'), 'hi');
    assert.equal(_require('./posts/sayHi'), 'hi');

    var _require = require('..')('./test/posts');
    assert.equal(_require('sayHi'), 'hi');
    assert.equal(_require('./sayHi'), 'hi');

    var _require = require('..')('test/posts');
    assert.equal(_require('sayHi'), 'hi');
    assert.equal(_require('./sayHi'), 'hi');

    done();
  });
});

module.exports = 'test';
