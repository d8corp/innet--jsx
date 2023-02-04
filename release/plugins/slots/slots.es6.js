import innet from 'innet';
import '../../jsxComponent/index.es6.js';
import '../context/index.es6.js';
import { slotsContext } from './constants.es6.js';
import { useHandler, useChildren } from '../../jsxComponent/jsxComponent.es6.js';
import { createContextHandler } from '../context/context.es6.js';

function getSlots(handler, from) {
    const result = {};
    if (Array.isArray(from)) {
        for (let i = 0; i < from.length; i++) {
            const child = from[i];
            if (child && typeof child === 'object' && !Array.isArray(child)) {
                const { type, props, children } = child;
                if (typeof type === 'string' && handler[type] === slot) {
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
    return getSlots(useHandler(), useChildren());
}
function slot({ props, children }, handler) {
    const slots = slotsContext.get(handler);
    const name = (props === null || props === void 0 ? void 0 : props.name) || '';
    return innet(name in slots ? slots[name] : children, handler);
}
function slots({ props: { from }, children }, handler) {
    return innet(children, createContextHandler(handler, slotsContext, Object.assign({}, slotsContext.get(handler), getSlots(handler, from))));
}

export { getSlots, slot, slots, useSlots };
