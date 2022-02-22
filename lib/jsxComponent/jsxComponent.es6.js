import innet from 'innet';

function jsxComponent() {
    return (target, next, handler) => {
        if (typeof target.type === 'function' &&
            target.type.prototype &&
            typeof target.type.prototype.init === 'function') {
            const { children, props, type } = target;
            const component = new type(props, children, handler);
            return innet(component.init(props, children, handler), handler);
        }
        return next();
    };
}

export { jsxComponent };
