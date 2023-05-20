import innet, { useHandler } from 'innet';
import '../../hooks/index.es6.js';
import '../../jsxPlugins/index.es6.js';
import '../context/index.es6.js';
import { slotsContext } from './constants.es6.js';
import { JSX_PLUGINS } from '../../jsxPlugins/jsxPlugins.es6.js';
import { useChildren } from '../../hooks/useChildren/useChildren.es6.js';
import { useProps } from '../../hooks/useProps/useProps.es6.js';
import { createContextHandler } from '../context/context.es6.js';

function getSlots(handler, from) {
    const result = {};
    if (Array.isArray(from)) {
        for (let i = 0; i < from.length; i++) {
            const child = from[i];
            if (child && typeof child === 'object' && !Array.isArray(child)) {
                const { type, props, children } = child;
                if (typeof type === 'string' && handler[JSX_PLUGINS][type] === slot) {
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
function slot() {
    const handler = useHandler();
    const props = useProps();
    const children = useChildren();
    const slots = slotsContext.get(handler);
    const name = (props === null || props === void 0 ? void 0 : props.name) || '';
    innet(name in slots ? slots[name] : children, handler);
}
function slots() {
    const handler = useHandler();
    const children = useChildren();
    const { from } = useProps();
    innet(children, createContextHandler(handler, slotsContext, Object.assign({}, slotsContext.get(handler), getSlots(handler, from))));
}

export { getSlots, slot, slots, useSlots };
