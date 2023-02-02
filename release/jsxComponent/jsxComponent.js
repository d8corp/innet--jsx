'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

let _handler;
let _children;
let _props;
function useHandler() {
    return _handler;
}
function useChildren() {
    return _children;
}
function useProps() {
    return _props;
}
function jsxComponent() {
    return (app, next, handler) => {
        if (typeof app.type === 'function') {
            _handler = handler;
            _children = app.children;
            _props = app.props;
            return innet__default["default"](app.type(_props), handler);
        }
        return next();
    };
}

exports.jsxComponent = jsxComponent;
exports.useChildren = useChildren;
exports.useHandler = useHandler;
exports.useProps = useProps;
