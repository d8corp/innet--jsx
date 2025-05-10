import { type Handler } from 'innet';
export interface SlotsProps {
    from: any;
    children: any;
}
export interface SlotProps {
    name?: string;
    children?: any;
}
export declare function getSlots(handler: Handler, from: any): Record<string, any>;
export declare function useSlots(): Record<string, any>;
export declare function slot(): void;
export declare function slots(): void;
