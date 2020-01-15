'use strict';

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: !0,
});

var rxios = require('rxios'),
  BaseService = (function() {
    function b(u, c) {
      (this.http = new rxios.Rxios(c)), (this.baseUrl = u);
    }

    return (
      (b.prototype.constructPayload = function(d, c) {
        return {
          data: d,
          context: c || {},
        };
      }),
      (b.prototype.GET = function(t, q) {
        if (_typeof(q) !== 'undefined') {
          return this.http.get('' + this.baseUrl + t, q);
        }
        return this.http.get('' + this.baseUrl + t);
      }),
      (b.prototype.POST = function(t, d, c) {
        var o = this.constructPayload(d, c);
        return this.http.post('' + this.baseUrl + t, o);
      }),
      (b.prototype.DELETE = function(t, q) {
        if (_typeof(q) !== 'undefined') {
          return this.http.delete('' + this.baseUrl + t, q);
        }

        return this.http.delete('' + this.baseUrl + t);
      }),
      (b.prototype.PUT = function(t, d, c) {
        var o = this.constructPayload(d, c);
        return this.http.put('' + this.baseUrl + t, o);
      }),
      b
    );
  })();

exports.BaseService = BaseService;
