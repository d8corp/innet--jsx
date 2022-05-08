import { Handler, PluginHandler } from 'innet';
import { Children, JSXElement, Props } from '../types';
export interface JsxTemplateElement<P extends Props = Props, C extends Children = Children> extends JSXElement<JsxTemplate<P, C>, P, C> {
}
export interface JsxTemplate<P extends Props = Props, C extends Children = Children> {
    (props: P, children: C, handler: Handler): any;
}
export declare function jsxTemplate(): PluginHandler;
