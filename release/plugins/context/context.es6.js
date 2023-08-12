import innet, { useHandler } from 'innet';
import '../../hooks/index.es6.js';
import { useProps } from '../../hooks/useProps/useProps.es6.js';
import { useChildren } from '../../hooks/useChildren/useChildren.es6.js';

function createContextHandler(handler, context, value) {
    const childrenHandler = Object.create(handler);
    context.set(childrenHandler, value);
    return childrenHandler;
}
function context() {
    const props = useProps();
    innet(useChildren(), createContextHandler(useHandler(), props.for, props.set));
}

export { context, createContextHandler };
