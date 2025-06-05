import innet, { useHandler } from 'innet';
import '../../jsxComponent/index.es6.js';
import '../../utils/index.es6.js';
import { Context } from '../../utils/Context/Context.es6.js';
import { EMPTY } from '../../jsxComponent/jsxComponent.es6.js';

function ContextProvider(props) {
    let handler = useHandler();
    if (Array.isArray(props.for)) {
        if (props.for.some((context, index) => context.get(handler) !== props.set[index])) {
            handler = Object.create(handler);
            props.for.forEach((context, index) => {
                context.set(handler, (props.set)[index]);
            });
        }
    }
    else if (props.for instanceof Context) {
        if (props.for.get(handler) !== props.set) {
            handler = Object.create(handler);
            props.for.set(handler, props.set);
        }
    }
    innet(props.children, handler);
    return EMPTY;
}

export { ContextProvider };
