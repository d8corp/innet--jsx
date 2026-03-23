'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../jsxComponent/index.js');
require('../../utils/index.js');
var Context = require('../../utils/Context/Context.js');
var jsxComponent = require('../../jsxComponent/jsxComponent.js');

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
    innet.innet(props.children, handler);
    return jsxComponent.EMPTY;
}

exports.ContextProvider = ContextProvider;
