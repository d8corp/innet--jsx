import { Handler } from 'innet';
import { JSXPluginElement } from '../jsxPlugins';
export declare type Fallback = (e: Error) => void;
export interface CatchProps {
    fallback?: Fallback;
}
export declare function Catch({ children, type, props }: JSXPluginElement<CatchProps>, handler: Handler): any;
