import { Context } from '../../utils';
type GetArray<T extends ReadonlyArray<Context>> = {
    [K in keyof T]: T[K] extends Context<any, infer D> ? D : never;
};
export interface ContextProviderProps<C extends Context | ReadonlyArray<Context>> {
    for: C;
    set: C extends ReadonlyArray<Context> ? GetArray<C> : C extends Context<any, infer D> ? D : never;
    children: any;
}
export declare function ContextProvider<C extends Context | ReadonlyArray<Context>>(props: ContextProviderProps<C>): any;
export {};
