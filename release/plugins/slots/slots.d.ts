import { type Handler } from 'innet';
import { type Children } from '../../types';
export interface SlotsProps {
    from: any;
}
export interface SlotProps {
    name?: string;
}
export declare function getSlots(handler: Handler, from: Children): Record<string, any>;
export declare function useSlots(): Record<string, any>;
export declare function slot(): void;
export declare function slots(): void;
