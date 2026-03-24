'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function enrichErrorStack(error) {
    function format(err, indent = '') {
        let result = err.stack || String(err);
        if (err.cause instanceof Error) {
            const causeString = format(err.cause, indent + '  ');
            result += ` {\n${indent}  [cause]: ${causeString.replace(/\n/g, '\n' + indent + '  ')}\n${indent}}`;
        }
        return result;
    }
    Object.defineProperty(error, 'stack', {
        value: format(error),
        configurable: true,
        enumerable: false,
    });
    return error;
}

exports.enrichErrorStack = enrichErrorStack;
