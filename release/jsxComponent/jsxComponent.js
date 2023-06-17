'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../hooks/index.js');
require('../plugins/index.js');
var context = require('../plugins/context/context.js');
var useGenericApp = require('../hooks/useGenericApp/useGenericApp.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function jsxComponent() {
    return () => {
        const app = innet.useApp();
        if (typeof app.type !== 'function')
            return innet.NEXT;
        const handler = innet.useHandler();
        const result = app.type(app.props);
        if (result && (Symbol.iterator in result || Symbol.asyncIterator in result) && typeof result.next === 'function') {
            innet__default["default"](result, context.createContextHandler(handler, useGenericApp.genericAppContext, app));
            return;
        }
        innet__default["default"](result, handler);
    };
}

exports.jsxComponent = jsxComponent;
