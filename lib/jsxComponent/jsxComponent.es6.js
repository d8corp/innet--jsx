import innet from 'innet';

let _handler;
function useHandler() {
    return _handler;
}
function setHandler(handler) {
    _handler = handler;
}
function jsxComponent() {
    return (app, next, handler) => {
        if (typeof app.type === 'function') {
            _handler = handler;
            return innet(app.type(app.props, app.children), handler);
        }
        return next();
    };
}

export { jsxComponent, setHandler, useHandler };
