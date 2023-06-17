'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Context {
    constructor(defaultValue, name) {
        this.defaultValue = defaultValue;
        this.key = Symbol(name);
    }
    get(handler) {
        return this.key in handler ? handler[this.key] : this.defaultValue;
    }
}

exports.Context = Context;
