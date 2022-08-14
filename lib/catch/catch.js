'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function Catch(_a, handler) {
    var children = _a.children; _a.type; var props = _a.props;
    var result;
    try {
        result = innet__default["default"](children, handler);
        if (result instanceof Promise && (props === null || props === void 0 ? void 0 : props.fallback)) {
            result = result.catch(props.fallback);
        }
    }
    catch (e) {
        result = props === null || props === void 0 ? void 0 : props.fallback(e);
    }
    return result;
}

exports.Catch = Catch;
