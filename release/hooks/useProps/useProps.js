'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
require('../../jsxComponent/index.js');
var jsxComponent = require('../../jsxComponent/jsxComponent.js');

function useProps() {
    return innet.useApp().props || jsxComponent.EMPTY_PROPS;
}

exports.useProps = useProps;
