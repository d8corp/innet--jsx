import { type HandlerPlugin, type Plugin } from 'innet';
import { type JSXElement, type Props } from '../types';
export type JSXPluginElement<P extends Props = Props> = JSXElement<string, P>;
export declare const JSX_PLUGINS: unique symbol;
export declare function jsxPlugins(plugins: Record<string, HandlerPlugin>): Plugin;
