import { type Children } from '../../types';
import { Context } from '../../utils';
export declare const genericAppContext: Context<any, any>;
export declare function useGenericApp<C extends Children = Children>(): C;
