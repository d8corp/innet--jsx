'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function jsxComponent() {
    return function (target, next, handler) {
        if (typeof target.type === 'function' &&
            target.type.prototype &&
            typeof target.type.prototype.init === 'function') {
            var children = target.children, props = target.props, type = target.type;
            var component = new type(props, children, handler);
            return innet__default["default"](component.init(props, children, handler), handler);
        }
        return next();
    };
}

exports.jsxComponent = jsxComponent;
