'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../hooks/index.js');
require('../../jsxPlugins/index.js');
require('../context/index.js');
var constants = require('./constants.js');
var jsxPlugins = require('../../jsxPlugins/jsxPlugins.js');
var useChildren = require('../../hooks/useChildren/useChildren.js');
var useProps = require('../../hooks/useProps/useProps.js');
var context = require('../context/context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function getSlots(handler, from) {
    const result = {};
    if (Array.isArray(from)) {
        for (let i = 0; i < from.length; i++) {
            const child = from[i];
            if (child && typeof child === 'object' && !Array.isArray(child)) {
                const { type, props, children } = child;
                if (typeof type === 'string' && handler[jsxPlugins.JSX_PLUGINS][type] === slot) {
                    const name = (props === null || props === void 0 ? void 0 : props.name) || '';
                    if (name in result) {
                        result[name].push(...children);
                    }
                    else {
                        result[name] = children;
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
    return getSlots(innet.useHandler(), useChildren.useChildren());
}
function slot() {
    const handler = innet.useHandler();
    const props = useProps.useProps();
    const children = useChildren.useChildren();
    const slots = constants.slotsContext.get(handler);
    const name = (props === null || props === void 0 ? void 0 : props.name) || '';
    innet__default["default"](name in slots ? slots[name] : children, handler);
}
function slots() {
    const handler = innet.useHandler();
    const children = useChildren.useChildren();
    const { from } = useProps.useProps();
    innet__default["default"](children, context.createContextHandler(handler, constants.slotsContext, Object.assign({}, constants.slotsContext.get(handler), getSlots(handler, from))));
}

exports.getSlots = getSlots;
exports.slot = slot;
exports.slots = slots;
exports.useSlots = useSlots;
