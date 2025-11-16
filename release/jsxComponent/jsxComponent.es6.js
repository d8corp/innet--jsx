import innet, { useApp, NEXT, useHandler } from 'innet';
import '../utils/index.es6.js';
import { GenericComponent } from '../utils/GenericComponent/GenericComponent.es6.js';

const EMPTY_PROPS = Object.freeze({});
const EMPTY = Symbol('EMPTY');
function jsxComponent() {
    return () => {
        const app = useApp();
        if (typeof app.type !== 'function')
            return NEXT;
        const handler = useHandler();
        const run = 'dev' in app ? app.dev : app.type;
        const result = run(app.props || EMPTY_PROPS);
        if (result === NEXT) {
            return NEXT;
        }
        if (result === EMPTY) {
            return;
        }
        if (result &&
            typeof result === 'object' &&
            (Symbol.iterator in result || Symbol.asyncIterator in result) &&
            typeof result.next === 'function') {
            const data = result.next();
            innet(new GenericComponent(data, result), handler, 0, true);
            return;
        }
        innet(result, handler, 0, true);
    };
}

export { EMPTY, EMPTY_PROPS, jsxComponent };
