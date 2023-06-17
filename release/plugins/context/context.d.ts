import { type Handler } from 'innet';
import { type Context } from '../../utils';
export interface ContextProps<D = any> {
    for: Context<D>;
    set?: D;
}
export declare function createContextHandler<D>(handler: Handler, context: Context<D>, value: D): Handler;
export declare function context(): void;
