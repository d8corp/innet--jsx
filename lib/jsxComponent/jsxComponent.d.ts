import { Handler, PluginHandler } from 'innet';
import { Children, JSXElement, Props } from '../types';
export interface JsxTemplateElement<P extends Props = Props, C extends Children = Children> extends JSXElement<JsxComponent<P, C>, P, C> {
}
export interface JsxComponent<P extends Props = Props, C extends Children = Children> {
    (props: P, children: C): any;
}
export declare function useHandler(): Handler;
export declare function setHandler(handler: Handler): void;
export declare function jsxComponent(): PluginHandler;
