import innet, { useHandler } from 'innet';
import '../../jsxComponent/index.es6.js';
import '../../utils/index.es6.js';
import { Context } from '../../utils/Context/Context.es6.js';
import { EMPTY } from '../../jsxComponent/jsxComponent.es6.js';

function ContextProvider(props) {
    const handler = Object.create(useHandler());
    if (Array.isArray(props.for)) {
        props.for.forEach((context, index) => {
            context.set(handler, (props.set)[index]);
        });
    }
    else if (props.for instanceof Context) {
        props.for.set(handler, props.set);
    }
    innet(props.children, handler);
    return EMPTY;
}

export { ContextProvider };
