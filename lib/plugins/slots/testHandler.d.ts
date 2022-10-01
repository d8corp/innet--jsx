import { SlotProps, SlotsProps } from '.';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            slot: SlotProps;
            slots: SlotsProps;
        }
    }
}
export declare const testHandler: import("innet").Handler;
