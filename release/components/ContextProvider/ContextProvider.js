'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../jsxComponent/index.js');
require('../../utils/index.js');
var Context = require('../../utils/Context/Context.js');
var jsxComponent = require('../../jsxComponent/jsxComponent.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function ContextProvider(props) {
    let handler = innet.useHandler();
    if (Array.isArray(props.for)) {
        if (props.for.some((context, index) => context.get(handler) !== props.set[index])) {
            handler = Object.create(handler);
            props.for.forEach((context, index) => {
                context.set(handler, (props.set)[index]);
            });
        }
    }
    else if (props.for instanceof Context.Context) {
        if (props.for.get(handler) !== props.set) {
            handler = Object.create(handler);
            props.for.set(handler, props.set);
        }
    }
    innet__default["default"](props.children, handler);
    return jsxComponent.EMPTY;
}

exports.ContextProvider = ContextProvider;
