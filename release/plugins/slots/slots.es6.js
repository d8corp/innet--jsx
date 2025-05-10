import innet, { useHandler } from 'innet';
import '../../hooks/index.es6.js';
import '../../jsxPlugins/index.es6.js';
import '../context/index.es6.js';
import { slotsContext } from './constants.es6.js';
import { JSX_PLUGINS } from '../../jsxPlugins/jsxPlugins.es6.js';
import { useChildren } from '../../hooks/useChildren/useChildren.es6.js';
import { useProps } from '../../hooks/useProps/useProps.es6.js';
import { useContext } from '../../hooks/useContext/useContext.es6.js';
import { createContextHandler } from '../context/context.es6.js';

function getSlots(handler, from) {
    const result = {};
    if (from === undefined) {
        return result;
    }
    from = Array.isArray(from) ? from : [from];
    for (let i = 0; i < from.length; i++) {
        const child = from[i];
        if (child && typeof child === 'object' && !Array.isArray(child)) {
            const { type, props } = child;
            if (typeof type === 'string' && handler[JSX_PLUGINS][type] === slot) {
                const name = (props === null || props === void 0 ? void 0 : props.name) || '';
                if (name in result) {
                    const children = (props === null || props === void 0 ? void 0 : props.children) === undefined
                        ? []
                        : Array.isArray(props.children)
                            ? props.children
                            : [props.children];
                    if (Array.isArray(result[name])) {
                        result[name].push(...children);
                    }
                    else {
                        result[name] = [result[name], ...children];
                    }
                }
                else {
                    result[name] = props.children;
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
    return result;
}
function useSlots() {
    return getSlots(useHandler(), useChildren());
}
function slot() {
    const handler = useHandler();
    const props = useProps();
    const children = useChildren();
    const slots = useContext(slotsContext);
    const name = (props === null || props === void 0 ? void 0 : props.name) || '';
    innet(name in slots ? slots[name] : children, handler);
}
function slots() {
    const handler = useHandler();
    const { from, children } = useProps();
    innet(children, createContextHandler(handler, slotsContext, Object.assign({}, slotsContext.get(handler), getSlots(handler, from))));
}

export { getSlots, slot, slots, useSlots };
