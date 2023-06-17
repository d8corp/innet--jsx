'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function useContext(context) {
    return context.get(innet.useHandler());
}

exports.useContext = useContext;
