import { type JsxComponent } from '../../jsxComponent';
import { type Props } from '../../types';
export declare function createElement(type: JsxComponent, props: Props, children: any): {
    type: JsxComponent;
    props?: undefined;
} | {
    type: JsxComponent;
    props: Props;
};
