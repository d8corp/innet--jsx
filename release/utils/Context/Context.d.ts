import { type Handler } from 'innet';
export declare class Context<D = any, Def = D> {
    readonly defaultValue?: Def | undefined;
    readonly key: string;
    constructor(defaultValue?: Def | undefined, name?: string);
    get(handler: Handler): D | Def;
    set(handler: Handler, value: D | Def): void;
}
