import { Handler, PluginHandler } from 'innet';
import { Children, Props } from '../types';
export declare function jsxComponent(): PluginHandler;
export interface Component<P extends Props = Props, C extends Children = Children> {
    init(props?: P, children?: C, handler?: Handler, ...other: any[]): any;
}
export interface ComponentConstructor<P extends Props = Props, C extends Children = Children> {
    new (props?: Props, children?: Children, handler?: Handler): Component<P, C>;
}
declare global {
    namespace JSX {
        type ElementClass = Component;
    }
}
