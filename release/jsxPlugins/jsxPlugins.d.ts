import { type HandlerPlugin, type Plugin } from 'innet';
import { type Children, type JSXElement, type Props } from '../types';
export interface JSXPluginElement<P extends Props = Props, C extends Children = Children> extends JSXElement<string, P, C> {
}
export declare const JSX_PLUGINS: unique symbol;
export declare function jsxPlugins(plugins: Record<string, HandlerPlugin>): Plugin;
