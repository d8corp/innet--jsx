<a href="https://www.npmjs.com/package/innet">
  <img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">
</a>

# &nbsp; @innet/jsx

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/jsx.svg)](https://www.npmjs.com/package/@innet/jsx)
[![downloads](https://img.shields.io/npm/dm/@innet/jsx.svg)](https://www.npmtrends.com/@innet/jsx)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@innet/jsx)
[![license](https://img.shields.io/npm/l/@innet/jsx)](https://github.com/d8corp/innet--jsx/blob/main/LICENSE)

## Abstract
JSX is one of the main features you can use with innet.
JSX makes possible to use XML-ish syntax in JavaScript.

If you want to use JSX with [innet](https://www.npmjs.com/package/innet) you can check
- [@innet/dom](https://www.npmjs.com/package/@innetjs/dom) to use it on client side
- [@innet/server](https://www.npmjs.com/package/@innetjs/server) to use it on server side
- [innetjs](https://www.npmjs.com/package/innetjs) if you want to try innet ecosystem
- [innet-jsx](https://www.npmjs.com/package/innet-jsx) converts `jsx`/`tsx` into `js`/`ts`
- [rollup-plugin-innet-jsx](https://www.npmjs.com/package/rollup-plugin-innet-jsx) to use it with rollup

This package contains plugins that handle jsx components.

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

## TS Setup

#### preserve

Setup with [innet-jsx](https://github.com/d8corp/innet-jsx)

`tsconfig.json`
```
{
  "compilerOptions": {
    ...
    "jsx": "preserve"
  },
  ...
}
```

#### react-jsx

Or setup without [innet-jsx](https://github.com/d8corp/innet-jsx)

```
{
  "compilerOptions": {
    ...
    "jsx": "react-jsx",
    "jsxImportSource": "@innet/jsx"
  },
  ...
}
```

#### react-jsxdev

To get more error details use `react-jsxdev`

```
{
  "compilerOptions": {
    ...
    "jsx": "react-jsxdev",
    "jsxImportSource": "@innet/jsx"
  },
  ...
}
```

## JSX Component
JSX Component is a function that get `props` argument
```typescript
function Test (props) {
  console.log(props.id)
}
```

Create a handler to handle JSX Component
```typescript
import innet, { createHandler } from 'innet'
import { object } from '@innet/utils'
import { jsxComponent } from '@innet/jsx'

const handler = createHandler([
  object([
    jsxComponent,
  ]),
])
```
Here we say: an object should be handled as `jsxComponent`

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
import { object, nullish } from '@innet/utils'
import { jsxComponent } from '@innet/jsx'

const handler = createHandler([
  nullish([]),
  object([
    jsxComponent,
  ]),
])

function Test ({ children }) {
  console.log(children)
}

innet(<Test>{null}</Test>, handler)
// null
```

## JSX Plugin

`jsxPlugins` is a plugin which adds default jsx elements by jsx plugins.

```typescript jsx
import innet, { createHandler } from 'innet'
import { object, nullish } from '@innet/utils'
import { jsxPlugins, useProps } from '@innet/jsx'

// JSX Plugin
const sum = () => {
  const { a, b } = useProps()
  console.log(a + b)
}

const handler = createHandler([
  nullish([]),
  object([
    jsxPlugins({
      sum,
    }),
  ])
])

innet(<sum a={1} b={2} />, handler)
// 3
```

[innet-jsx](https://www.npmjs.com/package/innet-jsx) converts jsx:
```typescript
innet({
  type: 'sum',
  props: {
    a: 1,
    b: 2,
  }
}, handler)
```

## context

This package includes `context` JSX Plugin.
`context` provides a context into children.

```typescript jsx
import innet, { createHandler } from 'innet'
import { object, nullish, arraySync } from '@innet/utils'
import {
  jsxPlugins,
  jsxComponent,
  context,
  Context,
  useProps,
  useContext
} from '@innet/jsx'

const handler = createHandler([
  nullish([]),
  arraySync,
  object([
    jsxComponent,
    jsxPlugins({
      context,
    }),
  ]),
])

const color = new Context('blue')

function Content () {
  const currentColor = useContext(color)
  console.log(`color: ${currentColor}`)
}

innet((
  <>
    <Content />
    <context for={color} set='red'>
      <Content />
    </context>
  </>
), handler)

//color: blue
//color: red
```

## slots

This package includes `slots` and `slot` JSX Plugins.

```typescript jsx
import innet, { createHandler } from 'innet'
import { object, nullish, arraySync } from '@innet/utils'
import {
  jsxPlugins,
  jsxComponent,
  slots,
  slot,
  useProps
} from '@innet/jsx'

const handler = createHandler([
  nullish([]),
  arraySync,
  object([
    jsxComponent,
    jsxPlugins({
      slots,
      slot,
    }),
  ]),
  () => () => {
    console.log(useApp())
  }
])

const Content = (props: any) => (
  <slots from={props.children}>
    <slot name='header' />
    <slot />
    <slot name='footer' />
  </slots>
)

innet(
  <Content>
    <slot name='footer'>
      footer
    </slot>
    custom
    <slot name='header'>
      header
    </slot>
    content
  </Content>,
  handler,
)

// header
// custom
// content
// footer
```

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet--jsx/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet--jsx)](https://github.com/d8corp/innet--jsx/issues)
