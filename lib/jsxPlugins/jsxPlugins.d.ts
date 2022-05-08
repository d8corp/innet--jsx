import { Handler, Next, PluginHandler } from 'innet';
import { Children, Props } from '../types';
export interface JSXElement<P extends Props = Props, C extends Children = Children> {
    type: string;
    props?: P;
    children?: C;
}
export interface JSXPlugin<A extends JSXElement = JSXElement, H extends Handler = Handler> {
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
