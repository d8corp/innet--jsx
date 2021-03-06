function jsxPlugins(plugins) {
    return (handler) => {
        Object.assign(handler, plugins);
        return (app, next, handler) => {
            if (typeof app.type === 'string' && typeof handler[app.type] === 'function') {
                return handler[app.type](app, handler, next);
            }
            return next();
        };
    };
}

export { jsxPlugins };
