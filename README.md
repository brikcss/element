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

**<mark>\[ IMPORTANT \]: Brikcss Element follows semantic versioning. Since it is currently at major version zero, ["anything may change at any time", and it "should not be considered stable"](https://semver.org/#spec-item-4).</mark>**

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

\*_With the [proper polyfills](#getting-started)._<br>
\*\*_IE11 can be supported with a transpiled build for legacy browsers._

## Install

**From NPM:**

```bash
npm install -D @brikcss/element
```

**From GitHub:**

Download the [latest release](releases/latest).

## Getting Started

1. Include Web Components polyfills. We recommend [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs), included with Brikcss Elements.

    ```html
    <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    ```

    _See [webcomponentsjs docs](https://github.com/webcomponents/webcomponentsjs) for other ways of inclusion and other useful information._

2. [Decide which Brikcss Element build you will use](./docs/including-brikcss-modules.md). _For simple prototypes/demos, feel free to use the Browser Module. For production applications we strongly encourage the Vanilla Module._ [Why?](./docs/including-brikcss-modules.md)

3. Include it and extend it:

    ```js
    // app.js
    // ------
    // 1) Include it:
    //    Vanilla module:
    import BrikElement from '@brikcss/element';
    //    Browser module:
    import BrikElement from 'node_modules/@brikcss/element/dist/esm/brik-element.browser.js';
    //    Universal module:
    const BrikElement = brikcss.default;

    // 2) Extend it:
    class MyElement extends BrikElement {
        constructor(...args) {
            // If you have a constructor, always call super first.
            super(args);
            // Your constructor code...
        }
        // Define class methods/properties here...
    }
    ```

    _Note: The default export automatically extends `HTMLElement`. If you want to extend a different built-in element (i.e., `HTMLAnchorElement`), [use the `BrikElement` named export](#brikelement)._

4. Define your custom element:

    ```js
    MyElement.define('my-tag', options);
    // which is equivalent to:
    window.customElements.define('my-tag', options);
    ```

5. Finally, use your custom element:

    ```html
    <my-tag>...</my-tag>
    ```

## API

### Module Exports

#### `default`

The default export returns a class that extends `HTMLElement`. Use as follows:

```js
// ES module (use relative path for Browser module):
import BrikElement from '@brikcss/element'
// or Universal module:
const BrikElement = brikcss.default
// and then:
class MyElement extends BrikElement {...}
```

_Note: The default export is equivalent to calling the `BrikElement` named export as follows: `BrikElement(HTMLElement)`._

#### `BrikElement`

The only named export is `BrikElement`, which allows you to extend built-in HTML Elements (such as `HTMLAnchorElement`):

```js
// ES module (use relative path for Browser module):
import { BrikElement } from '@brikcss/element'
// or Universal module:
const BrikElement = brikcss.BrikElement
// and then:
class MyElement extends BrikElement(HTMLAnchorElement) {...}
```

Now your element will inherit all the properties of a built-in anchor tag element! _Note: You may need to use a [polyfill for extending built-in elements](https://github.com/ungap/custom-elements-builtin) for this to work in some browsers._

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

_Note: You can apply existing mixins or [create your own](./docs/creating-mixins.md)._

### Instance properties

#### `this.root`

Simple getter/setter which returns (or sets) the root element. By default, this will be `this.shadowRoot` or `this`, depending on whether `shadowRoot` has been attached.

## Resources

### Web Components

-   [Web Components will replace your frontend framework](https://www.dannymoerkerke.com/blog/web-components-will-replace-your-frontend-framework)
-   [MDN web docs: Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
-   [Google Web Fundamentals: Building Components](https://developers.google.com/web/fundamentals/web-components/)

<!-- @todo  Add sections for Credits, Contributors, Resources, Projects using Birkcss Element. -->
