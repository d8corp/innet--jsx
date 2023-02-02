import { type Handler, type Next, type PluginHandler } from 'innet';
import { type Children, type JSXElement, type Props } from '../types';
export interface JSXPluginElement<P extends Props = Props, C extends Children = Children> extends JSXElement<string, P, C> {
}
export interface JSXPlugin<A extends JSXPluginElement = JSXPluginElement<any>, H extends Handler = Handler> {
    (app: A, handler: H, next: Next): any;
}
export declare function jsxPlugins(plugins: Record<string, JSXPlugin>): (handler: Handler) => PluginHandler;
declare global {
    namespace JSX {
        type IntrinsicElements = Record<string, any>;
    }
}
