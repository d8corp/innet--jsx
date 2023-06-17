import innet, { useApp, NEXT, useHandler } from 'innet';
import '../hooks/index.es6.js';
import '../plugins/index.es6.js';
import { createContextHandler } from '../plugins/context/context.es6.js';
import { genericAppContext } from '../hooks/useGenericApp/useGenericApp.es6.js';

function jsxComponent() {
    return () => {
        const app = useApp();
        if (typeof app.type !== 'function')
            return NEXT;
        const handler = useHandler();
        const result = app.type(app.props);
        if (result && (Symbol.iterator in result || Symbol.asyncIterator in result) && typeof result.next === 'function') {
            innet(result, createContextHandler(handler, genericAppContext, app));
            return;
        }
        innet(result, handler);
    };
}

export { jsxComponent };
