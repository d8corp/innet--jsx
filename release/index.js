'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./jsxComponent/index.js');
require('./jsxPlugins/index.js');
require('./types.js');
require('./plugins/index.js');
require('./hooks/index.js');
require('./utils/index.js');
var jsxComponent = require('./jsxComponent/jsxComponent.js');
var jsxPlugins = require('./jsxPlugins/jsxPlugins.js');
var slots = require('./plugins/slots/slots.js');
var constants = require('./plugins/slots/constants.js');
var context = require('./plugins/context/context.js');
var useChildren = require('./hooks/useChildren/useChildren.js');
var useProps = require('./hooks/useProps/useProps.js');
var useGenericApp = require('./hooks/useGenericApp/useGenericApp.js');
var useContext = require('./hooks/useContext/useContext.js');
var Context = require('./utils/Context/Context.js');



exports.jsxComponent = jsxComponent.jsxComponent;
exports.JSX_PLUGINS = jsxPlugins.JSX_PLUGINS;
exports.jsxPlugins = jsxPlugins.jsxPlugins;
exports.getSlots = slots.getSlots;
exports.slot = slots.slot;
exports.slots = slots.slots;
exports.useSlots = slots.useSlots;
exports.slotsContext = constants.slotsContext;
exports.context = context.context;
exports.createContextHandler = context.createContextHandler;
exports.useChildren = useChildren.useChildren;
exports.useProps = useProps.useProps;
exports.genericAppContext = useGenericApp.genericAppContext;
exports.useGenericApp = useGenericApp.useGenericApp;
exports.useContext = useContext.useContext;
exports.Context = Context.Context;
