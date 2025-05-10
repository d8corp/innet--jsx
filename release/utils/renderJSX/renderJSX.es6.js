function renderJSX(type, props, key) {
    if (type === undefined) {
        return props.children;
    }
    if (key !== undefined) {
        props.key = key;
    }
    return { type, props };
}

export { renderJSX };
