'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function renderJSX(type, props, key) {
    if (type === undefined) {
        return props.children;
    }
    if (key !== undefined) {
        props.key = key;
    }
    return { type, props };
}

exports.renderJSX = renderJSX;
