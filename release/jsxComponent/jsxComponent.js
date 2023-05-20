'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function jsxComponent() {
    return () => {
        const app = innet.useApp();
        if (typeof app.type !== 'function')
            return innet.NEXT;
        innet__default["default"](app.type(app.props), innet.useHandler());
    };
}

exports.jsxComponent = jsxComponent;
