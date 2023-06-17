'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../utils/index.js');
var GenericComponent = require('../utils/GenericComponent/GenericComponent.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function jsxComponent() {
    return () => {
        const app = innet.useApp();
        if (typeof app.type !== 'function')
            return innet.NEXT;
        const handler = innet.useHandler();
        const result = app.type(app.props);
        if (result &&
            typeof result === 'object' &&
            (Symbol.iterator in result || Symbol.asyncIterator in result) &&
            typeof result.next === 'function') {
            const data = result.next();
            innet__default["default"](new GenericComponent.GenericComponent(data, result), handler);
            return;
        }
        innet__default["default"](result, handler);
    };
}

exports.jsxComponent = jsxComponent;
