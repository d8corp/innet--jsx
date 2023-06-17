import '../../utils/index.es6.js';
import '../useContext/index.es6.js';
import { Context } from '../../utils/Context/Context.es6.js';
import { useContext } from '../useContext/useContext.es6.js';

const genericAppContext = new Context();
function useGenericApp() {
    return useContext(genericAppContext);
}

export { genericAppContext, useGenericApp };
