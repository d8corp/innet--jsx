import { type HandlerPlugin } from 'innet';
import { type JSXElement, type Props } from '../types';
export type JsxComponent<P extends Props = Props> = (props: P) => any;
export type JsxComponentElement<P extends Props = Props> = JSXElement<JsxComponent<P>, P>;
export declare const EMPTY_PROPS: Readonly<{}>;
export declare const EMPTY: unique symbol;
export declare function jsxComponent(): HandlerPlugin;
