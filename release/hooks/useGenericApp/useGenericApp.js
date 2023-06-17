'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index.js');
require('../useContext/index.js');
var Context = require('../../utils/Context/Context.js');
var useContext = require('../useContext/useContext.js');

const genericAppContext = new Context.Context();
function useGenericApp() {
    return useContext.useContext(genericAppContext);
}

exports.genericAppContext = genericAppContext;
exports.useGenericApp = useGenericApp;
