export type Props = Record<string, any>;
export interface JSXSource {
    fileName: string;
    lineNumber: number;
    columnNumber: number;
}
export interface JSXProdElement<T = any, P extends Props | void = Props> {
    type: T;
    props?: P;
}
export interface JSXDevElement<T = any, P extends Props | void = Props> extends JSXProdElement<T, P> {
    dev: T;
    source: JSXSource;
    parent: unknown;
}
export type JSXElement<T = any, P extends Props | void = Props> = JSXDevElement<T, P> | JSXProdElement<T, P>;
export type RequiredKeys<T> = Exclude<{
    [K in keyof T]-?: T extends {
        [K1 in K]: any;
    } ? K : never;
}[keyof T], symbol>;
export type GetProps<T, R extends RequiredKeys<T> = RequiredKeys<T>, O extends Exclude<keyof T, R | symbol> = Exclude<keyof T, R | symbol>> = (Pick<T, R> | Record<`get:${R}`, T[R]>) & (Partial<Pick<T, O>> | Partial<Record<`get:${O}`, T[O]>>);
