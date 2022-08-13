import { Handler, PluginHandler } from 'innet';
import { Children, JSXElement, Props } from '../types';
export interface JsxTemplateElement<P extends Props = Props, C extends Children = Children> extends JSXElement<JsxComponent<P>, P, C> {
}
declare type RequiredKeys<T> = {
    [K in keyof T]-?: ({} extends {
        [P in K]: T[K];
    } ? never : K);
}[keyof T];
export interface JsxComponent<P extends Props = undefined> {
    (props: RequiredKeys<P> extends never ? undefined : P, ...rest: any[]): any;
    (props: P extends undefined ? {} : P, ...rest: any[]): any;
    (props: {} extends P ? undefined : P, ...rest: any[]): any;
}
export declare function useHandler<H extends Handler = Handler>(): H;
export declare function useChildren<C extends Children = Children>(): C;
export declare function useProps<C extends any = any>(): C;
export declare function jsxComponent(): PluginHandler;
export {};
