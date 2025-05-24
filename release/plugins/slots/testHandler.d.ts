import { type NEXT } from 'innet';
import { type EMPTY } from '../../jsxComponent';
import type { JSXElement } from '../../types';
import type { ContextProps } from '../context';
import { type SlotProps, type SlotsProps } from '.';
declare global {
    namespace JSX {
        type Element = ArrayElement | FunctionElement | JSXElement | boolean | null | number | string | undefined | typeof EMPTY | typeof NEXT | void;
        interface ArrayElement extends Array<Element> {
        }
        type FunctionElement = () => Element;
        interface ElementChildrenAttribute {
            children: {};
        }
        interface IntrinsicElements {
            slots: SlotsProps;
            slot: SlotProps;
            context: ContextProps;
        }
    }
}
export declare const testHandler: import("innet").Handler;
