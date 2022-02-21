<a href="https://www.npmjs.com/package/innet">
  <img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">
</a>

# &nbsp; @innet/jsx

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/jsx.svg)](https://github.com/d8corp/innet--jsx/blob/main/CHANGELOG.md)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@innet/jsx)](https://bundlephobia.com/result?p=@innet/jsx)
[![downloads](https://img.shields.io/npm/dm/@innet/jsx.svg)](https://www.npmjs.com/package/@innet/jsx)
[![license](https://img.shields.io/npm/l/@innet/jsx)](https://github.com/d8corp/innet--jsx/blob/main/LICENSE)

## Abstract
JSX is one of the main features you can use with innet.
JSX makes possible to use XML-ish syntax in JavaScript.

If you want to use JSX with innet you can check
- [innetjs](https://www.npmjs.com/package/innetjs) if you want to try innet ecosystem
- [innet-jsx](https://www.npmjs.com/package/innet-jsx) converts `jsx`/`tsx` into `js`/`ts`
- [rollup-plugin-innet-jsx](https://www.npmjs.com/package/rollup-plugin-innet-jsx) to use it with rollup

This package contains plugins that handle jsx components and templates.

[![stars](https://img.shields.io/github/stars/d8corp/innet--jsx?style=social)](https://github.com/d8corp/innet--jsx/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet--jsx?style=social)](https://github.com/d8corp/innet--jsx/watchers)

## Install
npm
```bash
npm i @innet/jsx
```
yarn
```bash
yarn add @innet/jsx
```

## JSX Template
JSX Template is a function that get props and children arguments
```typescript
function Test (props) {
  return props?.id
}
```

Create a handler to handle JSX Template
```typescript
import innet, { createHandler } from 'innet'
import { object } from '@innet/utils'
import { jsxTemplate } from '@innet/jsx'

const handler = createHandler([
  object([
    jsxTemplate,
  ]),
])
```
Here we say: an object should be handled as `jsxTemplate`

Then we can use it as wall
```typescript jsx
innet(<Test id='test' />, handler)
// 'test'

innet(<Test />, handler)
// undefined
```

If you try to use `null`, you can get an error, because of `null` is an object. To prevent this, use `nullish`
```typescript jsx
import innet, { createHandler } from 'innet'
import { object, nullish, stop } from '@innet/utils'
import { jsxTemplate } from '@innet/jsx'

const handler = createHandler([
  nullish([
    stop,
  ]),
  object([
    jsxTemplate,
  ]),
])

function Test (props, children) {
  return children
}

innet(<Test>{null}</Test>, handler)
// [ null ]
```

## jsxComponent
JSX Component is a class that contains method of `init`
```typescript
class Test {
  init (props, children) {
    return children
  }
}
```

It works the same as JSX Template, but you can get an instance of the component by `this`

## jsxPlugins

The las feature of this package is `jsxPlugins`.
This is a plugin which adds default jsx components by jsx plugins.
```typescript jsx
import innet, { createHandler } from 'innet'
import { object, nullish, stop } from '@innet/utils'
import { jsxPlugins } from '@innet/jsx'

// JSX Plugin
const sum = ({ a, b }) => a + b

const handler = createHandler([
  nullish([stop]),
  object([
    jsxPlugins({
      sum,
    }),
  ])
])

innet(<sum a={1} b={2} />, handler)
// 3
```

JSX Plugin gets app and handler as arguments.
App is JSX Element which can contain type, props and children fields.

[innet-jsx](https://www.npmjs.com/package/innet-jsx) converts this code to:
```typescript
innet({
  type: 'sum',
  props: {
    a: 1,
    b: 2,
  }
}, handler)
```

Check [@innet/html](https://www.npmjs.com/package/@innet/html)
or [@innet/swith](https://www.npmjs.com/package/@innet/swith) as example of JSX Plugin.

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet--jsx/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet--jsx)](https://github.com/d8corp/innet--jsx/issues)
