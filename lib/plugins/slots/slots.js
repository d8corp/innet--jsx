'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var innet = require('innet');
var jsxComponent = require('../../jsxComponent/jsxComponent.js');
var context = require('../context/context.js');
var constants = require('./constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function getSlots(handler, from) {
    var _a;
    var result = {};
    if (Array.isArray(from)) {
        for (var i = 0; i < from.length; i++) {
            var child = from[i];
            if (child && typeof child === 'object' && !Array.isArray(child)) {
                var type = child.type, props = child.props, children = child.children;
                if (typeof type === 'string' && handler[type] === slot) {
                    var name_1 = (props === null || props === void 0 ? void 0 : props.name) || '';
                    if (name_1 in result) {
                        (_a = result[name_1]).push.apply(_a, _tslib.__spreadArray([], _tslib.__read(children), false));
                    }
                    else {
                        result[name_1] = children;
                    }
                    continue;
                }
            }
            if ('' in result) {
                result[''].push(child);
            }
            else {
                result[''] = [child];
            }
        }
    }
    return result;
}
function useSlots() {
    return getSlots(jsxComponent.useHandler(), jsxComponent.useChildren());
}
function slot(_a, handler) {
    var props = _a.props, children = _a.children;
    var slots = constants.slotsContext.get(handler);
    var name = (props === null || props === void 0 ? void 0 : props.name) || '';
    return innet__default["default"](name in slots ? slots[name] : children, handler);
}
function slots(_a, handler) {
    var from = _a.props.from, children = _a.children;
    return innet__default["default"](children, context.createContextHandler(handler, constants.slotsContext, getSlots(handler, from)));
}

exports.getSlots = getSlots;
exports.slot = slot;
exports.slots = slots;
exports.useSlots = useSlots;
