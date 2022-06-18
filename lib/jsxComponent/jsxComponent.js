'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

var _handler;
function useHandler() {
    return _handler;
}
function setHandler(handler) {
    _handler = handler;
}
function jsxComponent() {
    return function (app, next, handler) {
        if (typeof app.type === 'function') {
            _handler = handler;
            return innet__default["default"](app.type(app.props, app.children), handler);
        }
        return next();
    };
}

exports.jsxComponent = jsxComponent;
exports.setHandler = setHandler;
exports.useHandler = useHandler;
