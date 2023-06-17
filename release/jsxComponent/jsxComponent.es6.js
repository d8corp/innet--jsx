import innet, { useApp, NEXT, useHandler } from 'innet';

function jsxComponent() {
    return () => {
        const app = useApp();
        if (typeof app.type !== 'function')
            return NEXT;
        const handler = useHandler();
        const result = app.type(app.props);
        if (result && (Symbol.iterator in result || Symbol.asyncIterator in result)) {
            innet(result.next().value, handler);
        }
        innet(result, handler);
    };
}

export { jsxComponent };
