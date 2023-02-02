import { type Handler } from 'innet';
import { type JSXPluginElement } from '../../jsxPlugins';
import { type Children } from '../../types';
export interface SlotsProps {
    from: any;
}
export interface SlotProps {
    name?: string;
}
export declare function getSlots(handler: Handler, from: Children): Record<string, any>;
export declare function useSlots(): Record<string, any>;
export declare function slot({ props, children }: JSXPluginElement<SlotProps>, handler: Handler): any;
export declare function slots({ props: { from }, children }: JSXPluginElement<SlotsProps>, handler: Handler): any;
