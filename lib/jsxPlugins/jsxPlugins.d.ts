import { Handler, Next, PluginHandler } from 'innet';
import { Children, JSXElement, Props } from '../types';
export interface JSXPluginElement<P extends Props = Props, C extends Children = Children> extends JSXElement<string, P, C> {
}
export interface JSXPlugin<A extends JSXPluginElement = JSXPluginElement, H extends Handler = Handler> {
    (app: A, handler: H, next: Next): any;
}
export declare function jsxPlugins(plugins: Record<string, JSXPlugin>): (handler: any) => PluginHandler;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}
