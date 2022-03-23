export declare type Props = Record<string, any>;
export declare type Children = any[];
export declare type RequiredKeys<T> = Exclude<{
    [K in keyof T]-?: T extends {
        [K1 in K]: any;
    } ? K : never;
}[keyof T], symbol>;
export declare type GetProps<T, R extends RequiredKeys<T> = RequiredKeys<T>, O extends Exclude<keyof T, R | symbol> = Exclude<keyof T, R | symbol>> = (Pick<T, R> | Record<`get:${R}`, T[R]>) & (Partial<Pick<T, O>> | Partial<Record<`get:${O}`, T[O]>>);
