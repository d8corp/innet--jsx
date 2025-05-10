'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

const JSX_PLUGINS = Symbol('JSX_PLUGINS');
function jsxPlugins(plugins) {
    return handler => {
        handler[JSX_PLUGINS] = plugins;
        return () => {
            const app = innet.useApp();
            if (typeof app.type !== 'string')
                return innet.NEXT;
            if (app.dev)
                return app.dev();
            const jsxPlugin = innet.useHandler()[JSX_PLUGINS][app.type];
            if (typeof jsxPlugin !== 'function')
                return innet.NEXT;
            return jsxPlugin();
        };
    };
}

exports.JSX_PLUGINS = JSX_PLUGINS;
exports.jsxPlugins = jsxPlugins;
