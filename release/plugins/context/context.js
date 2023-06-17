'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../hooks/index.js');
var useProps = require('../../hooks/useProps/useProps.js');
var useChildren = require('../../hooks/useChildren/useChildren.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function createContextHandler(handler, context, value) {
    const childrenHandler = Object.create(handler);
    childrenHandler[context.key] = value;
    return childrenHandler;
}
function context() {
    const props = useProps.useProps();
    innet__default["default"](useChildren.useChildren(), createContextHandler(innet.useHandler(), props.for, props.set));
}

exports.context = context;
exports.createContextHandler = createContextHandler;
