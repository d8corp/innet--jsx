import innet, { useApp, NEXT, useHandler } from 'innet';

function jsxComponent() {
    return () => {
        const app = useApp();
        if (typeof app.type !== 'function')
            return NEXT;
        innet(app.type(app.props), useHandler());
    };
}

export { jsxComponent };
