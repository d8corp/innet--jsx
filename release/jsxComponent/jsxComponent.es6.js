import innet, { useApp, NEXT, useHandler } from 'innet';
import '../utils/index.es6.js';
import { GenericComponent } from '../utils/GenericComponent/GenericComponent.es6.js';

const EMPTY_PROPS = Object.freeze({});
function jsxComponent() {
    return () => {
        const app = useApp();
        if (typeof app.type !== 'function')
            return NEXT;
        const handler = useHandler();
        const run = 'dev' in app ? app.dev : app.type;
        const result = run(app.props || EMPTY_PROPS);
        if (result &&
            typeof result === 'object' &&
            (Symbol.iterator in result || Symbol.asyncIterator in result) &&
            typeof result.next === 'function') {
            const data = result.next();
            innet(new GenericComponent(data, result), handler);
            return;
        }
        innet(result, handler);
    };
}

export { EMPTY_PROPS, jsxComponent };
