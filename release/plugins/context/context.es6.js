import innet from 'innet';
import '../../jsxComponent/index.es6.js';
import { useHandler } from '../../jsxComponent/jsxComponent.es6.js';

function useContext(context) {
    return context.get(useHandler());
}
class Context {
    constructor(defaultValue, name) {
        this.defaultValue = defaultValue;
        this.key = Symbol(name);
    }
    get(handler) {
        return this.key in handler ? handler[this.key] : this.defaultValue;
    }
}
function createContextHandler(handler, context, value) {
    const childrenHandler = Object.create(handler);
    childrenHandler[context.key] = value;
    return childrenHandler;
}
function context({ props, children }, handler) {
    return innet(children, createContextHandler(handler, props.for, props.set));
}

export { Context, context, createContextHandler, useContext };
