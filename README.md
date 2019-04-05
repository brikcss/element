# Brikcss Element

<!-- Shields. -->
<p>
    <!-- NPM version. -->
    <a href="https://www.npmjs.com/package/@brikcss/element"><img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/element/latest.svg?style=flat-square"></a>
    <!-- NPM tag version. -->
    <a href="https://www.npmjs.com/package/@brikcss/element"><img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/element/next.svg?style=flat-square"></a>
    <!-- NPM downloads/month. -->
    <a href="https://www.npmjs.com/package/@brikcss/element"><img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/element.svg?style=flat-square"></a>
    <!-- Travis branch. -->
    <a href="https://github.com/brikcss/element/tree/master"><img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master"></a>
    <!-- Codacy. -->
    <!-- <a href="https://www.codacy.com/app/thezimmee/element"><img src="https://img.shields.io/codacy/grade/e6c03044c1e24c4c9a2f4f31e0c84e38/master.svg?style=flat-square"/></a> -->
    <!-- <a href="https://www.codacy.com/app/thezimmee/element"><img src="https://img.shields.io/codacy/coverage/e6c03044c1e24c4c9a2f4f31e0c84e38/master.svg?style=flat-square"/></a> -->
    <!-- Coveralls -->
    <!-- <a href='https://coveralls.io/github/brikcss/element?branch=master'><img src='https://img.shields.io/coveralls/github/brikcss/element/master.svg?style=flat-square' alt='Coverage Status' /></a> -->
    <!-- JS Standard style. -->
    <a href="https://standardjs.com"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square"></a>
    <!-- Prettier code style. -->
    <a href="https://prettier.io/"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
    <!-- Semantic release. -->
    <!-- <a href="https://github.com/semantic-release/semantic-release"><img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square"></a> -->
    <!-- Commitizen friendly. -->
    <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square"></a>
    <!-- Greenkeeper. -->
    <a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/brikcss/element.svg?style=flat-square" alt="Greenkeeper badge"></a>
    <!-- MIT License. -->
    <a href="LICENSE.md"><img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square"></a>
</p>

## About

<!-- @todo  Document "TTFC" time of 5 minutes or less. How to create your first meaningful component in 5 minutes or less. -->
<!-- @todo  Add images to demonstrate the awesomeness of Brikcss Element. -->

Web Components alone provide [many amazing benefits](https://codeburst.io/6-reasons-you-should-use-native-web-components-b45e18e069c2). Brikcss Element extends the awesomeness of Web Components.

At its core, Brikcss Element a **super** light-weight framework for using Web Components with two main goals:

1. To extend the power and features of Web Components in a way that allows developers and end users to easily implement only features they need.
2. To simplify where possible, _**but not replace or heavily abstract**_, commonly used features in Web Components. In other words, make _TTFC_ ("time to first component") quick and easy.

Brikcss Element prides itself on having a very small learning curve for newbies, while providing unlimited power and flexibility at the same time.

## Contributing

We ❤️❤️❤️ contributions of any kind, whether it's bug reports, questions or feature requests, pull requests, and especially spreading some love about this project to your friends and co-workers!

**[Read our contributing guidelines](./CONTRIBUTING.md) and get involved to support this project.**

## Browser Support\*

| Chrome | Firefox | Safari | Edge | IE     |
| ------ | ------- | ------ | ---- | ------ |
| ✓      | ✓       | ✓      | ✓    | 11\*\* |

\*_With custom elements polyfill._<br>
\*\*_IE11 can be supported with a transpiled build for legacy browsers._

## Install

**From NPM:**

```bash
npm install -D @brikcss/element
```

**From GitHub:**

Download the [latest release](releases/latest).

## Getting Started

_**Important:** If you wish to support browsers that don't natively support custom elements, you must include a [custom elements polyfill](https://www.npmjs.com/search?q=custom+elements+polyfill) before any other script. We recommend the [document-register-element](https://www.npmjs.com/package/document-register-element) polyfill for how light-weight it is._

-   **JS module:**

    _index.html:_

    ```html
    <!-- 1) Include app.js for modern browsers: -->
    <script type="module" src="app.js"></script>
    <!-- 2) To support legacy browsers, include a version of app.js transpiled
    specifically for legacy browsers and make sure to add the `nomodule`
    attribute (modern browsers will not load this): -->
    <script nomodule src="app.legacy.js"></script>
    ```

    _app.js:_

    ```js
    // 1) Import:
    //    Note: Browsers that support modules do not recognize node modules,
    //    so for direct use in browsers (i.e., no build/bundler step), you must
    //    import a full relative or absolute path.
    import { BrikElement } from "@brikcss/element";
    // 2) Extend BrikElement with your class/constructor and (optionally) mixins:
    class MyElement extends BrikElement().with(...mixins) {...}
    // 3) Define the custom element:
    MyElement.define('my-element')
    //    which is the same as:
    window.customElements.define('my-element', MyElement)
    ```

-   **Global variable (Browser-friendly UMD):**

    _index.html:_

    ```html
    <!-- 1) Include brik-element.js for modern browsers with type="module": -->
    <script type="module" src="node_modules/@brikcss/element/umd/brik-element.js"></script>
    <!-- 2) To support legacy browsers, include the legacy build of brik-element.js and add the `nomodule` attribute: -->
    <script nomodule src="node_modules/@brikcss/element/umd/brik-element.legacy.js"></script>
    <!-- 3) Include app.js with defer attribute to ensure it loads last: -->
    <script src="app.js" defer></script>
    ```

    _app.js:_

    ```js
    // 1) Grab global variable.
    const BrikElement = window.brikcss.BrikElement;
    // 2) Extend BrikElement with your class/constructor and (optionally) mixins:
    class MyElement extends BrikElement().with(...mixins) {...}
    // 3) Define the custom element:
    MyElement.define('my-element')
    //    which is the same as:
    window.customElements.define('my-element', MyElement)
    ```

## API

### Static methods

#### `BrikElement.define(tagName, options = {})`

A simple shortcut/alternative to `window.customElements.define()`.

-   `tagName` (_String_): Name of custom element to be defined. String must be hyphenated.
-   `options` (_Object_): Configuration options passed to `window.customElements.define`.

#### `BrikElement.with(...mixins)`

Mixins give BrikElement its power. To apply one or more mixins, simply pass them to the `BrikElement.with()` method:

```js
import BrikElement from '@brikcss/element'
import MyMixin from 'my-mixin.js'
class MyElement extends BrikElement.with(MyMixin) {...}
```

_Note: You can apply existing mixins or [create your own](#create-your-own-mixins)._

### Instance properties

#### `this.root`

Simple getter/setter which returns (or sets) the root element. By default, this will be `this.shadowRoot` or `this`, depending on whether `shadowRoot` has been attached.

## Create your own mixins

There are two simple rules for creating mixins:

1. A mixin must be a function that returns a subclass:

    ```js
    const MyMixin = (BaseClass) =>
        class extends BaseClass {
            // Define your subclass here...
        };
    ```

2. If the mixin has a `constructor()`, make sure to call `super()` so the base/super class constructor gets executed:

    ```js
    const MyMixin = (BaseClass) =>
        class extends BaseClass {
            constructor(...args) {
                super(args);
                // Your subclass constructor goes here...
            }
            // Define subclass methods/properties here...
        };
    ```

## Resources

### Web Components

-   [Web Components will replace your frontend framework](https://www.dannymoerkerke.com/blog/web-components-will-replace-your-frontend-framework)
-   [MDN web docs: Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
-   [Google Web Fundamentals: Building Components](https://developers.google.com/web/fundamentals/web-components/)

### JS Mixins

-   [JavaScript mixins with classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)
-   [Enhancing mixins with decorators](http://justinfagnani.com/2016/01/07/enhancing-mixins-with-decorator-functions/)

<!-- @todo  Add sections for Credits, Contributors, Resources, Projects using Birkcss Element. -->
