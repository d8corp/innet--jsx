import { Handler, Next, PluginHandler } from 'innet';
export interface JSXPlugin {
    (app: any, handler: Handler, next: Next): any;
}
export declare function jsxPlugins(plugins: Record<string, JSXPlugin>): (handler: any) => PluginHandler;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}
