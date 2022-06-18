import innet from 'innet';

let _handler;
let _children;
function useHandler() {
    return _handler;
}
function useChildren() {
    return _children;
}
function jsxComponent() {
    return (app, next, handler) => {
        if (typeof app.type === 'function') {
            _handler = handler;
            _children = app.children;
            return innet(app.type(app.props), handler);
        }
        return next();
    };
}

export { jsxComponent, useChildren, useHandler };
