'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function jsxTemplate() {
    return function (app, next, handler) {
        if (typeof app.type === 'function') {
            var children = app.children, props = app.props, type = app.type;
            return innet__default["default"](type(props, children, handler), handler);
        }
        return next();
    };
}

exports.jsxTemplate = jsxTemplate;
