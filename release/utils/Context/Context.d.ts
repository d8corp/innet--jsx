import { type Handler } from 'innet';
export declare class Context<D = any, Def = D | undefined> {
    readonly key: string;
    readonly defaultValue: Def;
    constructor(defaultValue?: Def, name?: string);
    get(handler: Handler): D | Def;
    set(handler: Handler, value: D | Def): void;
    reset(handler: Handler): void;
}
