'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../jsxPlugins/index.js');
var jsxPlugins = require('../../jsxPlugins/jsxPlugins.js');

function getAppName(app) {
    return typeof app === 'function' ? app.name : String(app);
}
function getStack(app, stack = '') {
    if (typeof app === 'object' && app !== null && app.source) {
        return `${stack}\n    at ${getAppName(app.type)} (${app.source.fileName}:${app.source.lineNumber}:${app.source.columnNumber})${getStack(app.parent)}`;
    }
    return stack;
}
function renderJSXDev(type, props, key, isStatic, source, self) {
    if (type === undefined) {
        return props.children;
    }
    if (key !== undefined) {
        props.key = key;
    }
    const parent = innet.useApp();
    const dev = typeof type === 'function'
        ? (props) => {
            try {
                return type(props);
            }
            catch (err) {
                const stack = getStack(app);
                const error = Error(`DEV Error: Render component <${getAppName(type)}> error${stack}`, { cause: err });
                error.stack = err.stack;
                throw error;
            }
        }
        : () => {
            try {
                const plugin = innet.useHandler()[jsxPlugins.JSX_PLUGINS][type];
                return plugin ? plugin() : innet.NEXT;
            }
            catch (err) {
                const stack = getStack(app);
                const error = Error(`DEV Error: Render plugin <${getAppName(type)}> error${stack}`, { cause: err });
                error.stack = err.stack;
                throw error;
            }
        };
    const app = {
        type,
        props,
        source,
        parent,
        dev,
    };
    return app;
}

exports.renderJSXDev = renderJSXDev;
