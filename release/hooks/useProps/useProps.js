'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function useProps() {
    return innet.useApp().props;
}

exports.useProps = useProps;
