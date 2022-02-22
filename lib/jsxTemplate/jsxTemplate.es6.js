import innet from 'innet';

function jsxTemplate() {
    return (app, next, handler) => {
        if (typeof app.type === 'function') {
            const { children, props, type } = app;
            return innet(type(props, children, handler), handler);
        }
        return next();
    };
}

export { jsxTemplate };
