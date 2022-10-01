'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxComponent = require('./jsxComponent/jsxComponent.js');
var jsxPlugins = require('./jsxPlugins/jsxPlugins.js');
var slots = require('./plugins/slots/slots.js');
var constants = require('./plugins/slots/constants.js');
var context = require('./plugins/context/context.js');



exports.jsxComponent = jsxComponent.jsxComponent;
exports.useChildren = jsxComponent.useChildren;
exports.useHandler = jsxComponent.useHandler;
exports.useProps = jsxComponent.useProps;
exports.jsxPlugins = jsxPlugins.jsxPlugins;
exports.getSlots = slots.getSlots;
exports.slot = slots.slot;
exports.slots = slots.slots;
exports.useSlots = slots.useSlots;
exports.slotsContext = constants.slotsContext;
exports.Context = context.Context;
exports.context = context.context;
exports.createContextHandler = context.createContextHandler;
exports.useContext = context.useContext;
