import { useApp, NEXT, useHandler } from 'innet';

const JSX_PLUGINS = Symbol('JSX_PLUGINS');
function jsxPlugins(plugins) {
    return handler => {
        handler[JSX_PLUGINS] = plugins;
        return () => {
            const app = useApp();
            if (typeof app.type !== 'string')
                return NEXT;
            const jsxPlugin = useHandler()[JSX_PLUGINS][app.type];
            if (typeof jsxPlugin !== 'function')
                return NEXT;
            return jsxPlugin();
        };
    };
}

export { JSX_PLUGINS, jsxPlugins };
