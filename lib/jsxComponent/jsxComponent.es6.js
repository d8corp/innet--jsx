import innet from 'innet';

let _handler;
let _children;
let _props;
function useHandler() {
    return _handler;
}
function useChildren() {
    return _children;
}
function useProps() {
    return _props;
}
function jsxComponent() {
    return (app, next, handler) => {
        if (typeof app.type === 'function') {
            _handler = handler;
            _children = app.children;
            _props = app.props;
            return innet(app.type(_props), handler);
        }
        return next();
    };
}

export { jsxComponent, useChildren, useHandler, useProps };
