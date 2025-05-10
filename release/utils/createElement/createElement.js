'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createElement(type, props, children) {
    if (!(children === null || children === void 0 ? void 0 : children.length) && !props)
        return { type };
    props = props !== null && props !== void 0 ? props : {};
    if (children === null || children === void 0 ? void 0 : children.length) {
        props.children = children;
    }
    return { type, props };
}

exports.createElement = createElement;
