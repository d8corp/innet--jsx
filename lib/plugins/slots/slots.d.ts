import { Handler } from 'innet';
import { JSXPluginElement } from '../../jsxPlugins';
export interface SlotsProps {
    from: any;
}
export interface SlotProps {
    name?: string;
}
export declare function getSlots(handler: Handler, from: any): Record<string, any>;
export declare function useSlots(): Record<string, any>;
export declare function slot({ props, children }: JSXPluginElement<SlotProps>, handler: any): any;
export declare function slots({ props: { from }, children }: JSXPluginElement<SlotsProps>, handler: any): any;
