'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

var _handler;
var _children;
function useHandler() {
    return _handler;
}
function useChildren() {
    return _children;
}
function jsxComponent() {
    return function (app, next, handler) {
        if (typeof app.type === 'function') {
            _handler = handler;
            _children = app.children;
            return innet__default["default"](app.type(app.props), handler);
        }
        return next();
    };
}

exports.jsxComponent = jsxComponent;
exports.useChildren = useChildren;
exports.useHandler = useHandler;
