'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function useChildren() {
    var _a;
    return (_a = innet.useApp().props) === null || _a === void 0 ? void 0 : _a.children;
}

exports.useChildren = useChildren;
