'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../utils/index.js');
var GenericComponent = require('../utils/GenericComponent/GenericComponent.js');

const EMPTY_PROPS = Object.freeze({});
const EMPTY = Symbol('EMPTY');
function jsxComponent() {
    return () => {
        const app = innet.useApp();
        if (typeof app.type !== 'function')
            return innet.NEXT;
        const handler = innet.useHandler();
        const run = 'dev' in app ? app.dev : app.type;
        const result = run(app.props || EMPTY_PROPS);
        if (result === innet.NEXT) {
            return innet.NEXT;
        }
        if (result === EMPTY) {
            return;
        }
        if (result &&
            typeof result === 'object' &&
            (Symbol.iterator in result || Symbol.asyncIterator in result) &&
            typeof result.next === 'function') {
            const data = result.next();
            innet.innet(new GenericComponent.GenericComponent(data, result), handler, 0, true);
            return;
        }
        innet.innet(result, handler, 0, true);
    };
}

exports.EMPTY = EMPTY;
exports.EMPTY_PROPS = EMPTY_PROPS;
exports.jsxComponent = jsxComponent;
