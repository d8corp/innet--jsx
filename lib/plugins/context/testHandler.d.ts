import { ContextProps } from './context';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            context: ContextProps;
        }
    }
}
export declare const testHandler: import("innet").Handler;
