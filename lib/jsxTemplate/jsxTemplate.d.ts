import { PluginHandler } from 'innet';
import { Children, Props } from '../types';
export interface JsxTemplate<P extends Props = Props, C extends Children = Children> {
    (props: P, children: C): any;
}
export declare function jsxTemplate(): PluginHandler;
