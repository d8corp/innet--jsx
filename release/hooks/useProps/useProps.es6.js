import { useApp } from 'innet';
import '../../jsxComponent/index.es6.js';
import { EMPTY_PROPS } from '../../jsxComponent/jsxComponent.es6.js';

function useProps() {
    return useApp().props || EMPTY_PROPS;
}

export { useProps };
