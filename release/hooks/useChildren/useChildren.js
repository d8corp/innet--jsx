'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function useChildren() {
    return innet.useApp().children;
}

exports.useChildren = useChildren;
