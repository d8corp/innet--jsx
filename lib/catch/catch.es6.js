import innet from 'innet';

function Catch({ children, type, props }, handler) {
    let result;
    try {
        result = innet(children, handler);
        if (result instanceof Promise && (props === null || props === void 0 ? void 0 : props.fallback)) {
            result = result.catch(props.fallback);
        }
    }
    catch (e) {
        result = props === null || props === void 0 ? void 0 : props.fallback(e);
    }
    return result;
}

export { Catch };
