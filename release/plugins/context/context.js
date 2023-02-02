'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../jsxComponent/index.js');
var jsxComponent = require('../../jsxComponent/jsxComponent.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function useContext(context) {
    return context.get(jsxComponent.useHandler());
}
class Context {
    constructor(defaultValue, name) {
        this.defaultValue = defaultValue;
        this.key = Symbol(name);
    }
    get(handler) {
        return this.key in handler ? handler[this.key] : this.defaultValue;
    }
}
function createContextHandler(handler, context, value) {
    const childrenHandler = Object.create(handler);
    childrenHandler[context.key] = value;
    return childrenHandler;
}
function context({ props, children }, handler) {
    return innet__default["default"](children, createContextHandler(handler, props.for, props.set));
}

exports.Context = Context;
exports.context = context;
exports.createContextHandler = createContextHandler;
exports.useContext = useContext;
