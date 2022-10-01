'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slots = require('./slots/slots.js');
var constants = require('./slots/constants.js');
var context = require('./context/context.js');



exports.getSlots = slots.getSlots;
exports.slot = slots.slot;
exports.slots = slots.slots;
exports.useSlots = slots.useSlots;
exports.slotsContext = constants.slotsContext;
exports.Context = context.Context;
exports.context = context.context;
exports.createContextHandler = context.createContextHandler;
exports.useContext = context.useContext;
