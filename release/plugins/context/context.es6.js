import innet, { useHandler } from 'innet';
import '../../hooks/index.es6.js';
import { useProps } from '../../hooks/useProps/useProps.es6.js';
import { useChildren } from '../../hooks/useChildren/useChildren.es6.js';

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
function context() {
    const props = useProps();
    innet(useChildren(), createContextHandler(useHandler(), props.for, props.set));
}

export { Context, context, createContextHandler, useContext };
