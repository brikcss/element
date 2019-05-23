# How to include a Brikcss module in your project

## TLDR

-   _For any production application_, use the [Vanilla ESM](#vanilla-esm) with a module bundler. We recommend [Rollup.js](https://rollupjs.org). Try our [Rollup configuration generator](https://www.npmjs.com/package/@brikcss/rollup-config-generator) to make complex rollup configs easy.

-   _For rapid prototypes, demos, or if you only care about modern browsers_, use the [Browser ESM](#browser-esm). You can easily swap it out later for the [Vanilla ESM](#vanilla-esm) when you're ready for production.

-   If you want to support legacy browsers, [see how Brikcss does it](./supporting-legacy-browsers.md).

-   _If, for some reason, you can't/won't use a module bundler_, Brikcss also provides a [browser-friendly UMD bundle](#browser-umd) -- one for modern browsers and one for legacy browsers.

## Brikcss modules and bundles

Brikcss packages offer different bundle types in order to meet the needs of any project environment. Use the following table to determine which bundle you should use:

### **Brikcss bundle types:**

| Name                            | Strengths                                                                      | Weaknesses                                                                                                                        | Recommended use                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [**Vanilla ESM**](#vanilla-esm) | - Best performing.<br>- Best browser support.<br>- Most flexible/customizable. | - Slight up-front learning curve, if you have never used a module bundler.                                                        | All production applications.                                                                             |
| [**Browser ESM**](#browser-esm) | - Easiest/quickest set up.<br>- Most flexible/customizable.                    | - Worst browser support.<br>- Worst performing (lots of requests, unoptimized code).                                              | Rapid prototyping and/or the development phase. Just swap out for Vanilla ESM when ready for production. |
| [**Browser UMD**](#browser-umd) | - Easy/quick set up.<br>- Great browser support.                               | - Least flexible.<br>- Subpar performance (unless you concatenate and minify, in which case you may as well use the Vanilla ESM). | When you can/will not use a module bundler.                                                              |

## Why use a module bundler?

**Brikcss encourages using the [Vanilla ESM](#vanilla-esm) with a module bundler for all production applications.** _So why spend extra effort to add a module bundler to your workflow?_

Too many reasons to list. [Here's what Rollup.js, our favorite bundler, says](https://rollupjs.org/guide/en#the-why), and [here's what Webpack, the most popular bundler, says](https://webpack.js.org/concepts/why-webpack/).

Brikcss loves how these tools allow us to break up apps or libraries into smaller, resuable pieces; while the tools automatically put it all together into an efficient, performant app, optimized for production. For example, our use of [Rollup](https://rollupjs.org) and [Babel](https://babeljs.io)) _allow us to automagically polyfill code in order to target specific browsers._ We use these tools to automatically output one set of code for modern browsers and another for legacy browsers ([see how](./supporting-legacy-browsers.md)).

So while there may be some up front overhead to learning how to use bundlers, it is a breeze after the initial learning curve. And we think the [potential](https://duckduckgo.com/?q=why+webpack+or+rollupjs) [benefits](https://duckduckgo.com/?q=why+module+bundler) of taking this approach far outweigh any up front learning curve, because it will save you a whole lot of time and effort in the long run.

### Which bundler should I use?

We recommend [Rollup.js](https://rollupjs.org) for its ease of use, wonderful performance, small file size, and widespread use. But there's also:

-   [Webpack](https://webpack.js.org)
-   [Parcel](https://parceljs.org)
-   [Gulp](https://gulpjs.com)
-   [Broccoli](https://broccoli.build)
-   and a whole plethora of others.

_Note: Make sure to add [Babel](https://babeljs.io/) to your bundler if you want to [support older browsers](./supporting-legacy-browsers.md)._

## Vanilla ESM

<table class="data-table">
    <tr>
        <th align="left"><strong>Module path</strong></th>
        <td><code>dist/esm/${moduleName}.js</code></td>
    </tr>
    <tr>
        <th align="left"><strong>Recommended use</strong></th>
        <td>Any production application.</td>
    </tr>
    <tr>
        <th align="left"><strong>See also</strong></th>
        <td><a href="#supporting-legacy-browsers">How to support legacy browsers</a></td>
    </tr>
</table>

The Vanilla ESM, for use with a [module bundler](#why-use-a-module-bundler), offers the most flexibility, best browser support, and greatest performance. _Note: Using this directly in a browser will throw an error, because browsers do not support node import syntax (i.e., `import BrikElement from '@brikcss/element'`). The [Browser ESM](#browser-esm) is the same bundle with relative import paths for browsers._

**How to include:**

_app.js:_

```js
import { BrikElement } from '@brikcss/element';
```

_index.html:_

```html
<!-- Compiled for modern browsers: -->
<script type="module" src="app.js"></script>
<!-- Compiled for legacy browsers: -->
<script nomodule src="app.legacy.js"></script>
```

## Browser ESM

<table class="data-table">
    <tr>
        <th align="left"><strong>Module path</strong></th>
        <td><code>dist/esm/${moduleName}<strong>.browser</strong>.js</code></td>
    </tr>
    <tr>
        <th align="left"><strong>Recommended use</strong></th>
        <td>- For a quick prototype or demo.<br>
        - For quick setup during initial development (to later swap out for <a href="#vanilla-esm">Vanilla ESM</a>).<br>
        - If you only care about <a href="https://caniuse.com/#feat=es6-module">modern browsers</a><div class=""></div></td>
    </tr>
    <tr>
        <th align="left"><strong>Example</strong></th>
        <td><a href="../examples/esm">/examples/esm</a></td>
    </tr>
</table>

Browser ESM is identical to [Vanilla ESM](#vanilla-esm) except that import paths are converted to relative paths (browsers only support relative and absolute import paths). This can be used directly in browsers without error. Because it is identical to Vanilla ESM, you can use this bundle for a quick setup during initial development; once it's ready for production, simply swap it out for [Vanilla ESM](#vanilla-esm).

_Caution: Use this bundle with care, since your code will not work in [browsers that do not support modules](https://caniuse.com/#feat=es6-module)._

**How to include:**

_app.js:_

```js
import { BrikElement } from 'node_modules/@brikcss/element/dist/esm/brik-element.browser.js';
```

_index.html:_

```html
<script type="module" src="app.js"></script>
```

## Browser UMD

<table class="data-table">
    <tr>
        <th align="left"><strong>Module path</strong></th>
        <td>- <code>dist/umd/${moduleName}.js</code> for modern browsers;<br>- <code>dist/umd/${moduleName}<strong>.legacy</strong>.js</code> for legacy browsers.</td>
    </tr>
    <tr>
        <th align="left"><strong>Recommended use</strong></th>
        <td>When you can't/won't use a module bundler.</td>
    </tr>
    <tr>
        <th align="left"><strong>Example</strong></th>
        <td><a href="../examples/umd">/examples/umd</a></td>
    </tr>
    <tr>
        <th align="left"><strong>See also</strong></th>
        <td><a href="#supporting-legacy-browsers">How to support legacy browsers</a></td>
    </tr>
</table>

The UMD bundle follows the [Universal Module Definition](https://github.com/umdjs/umd) pattern, which provides global access to the underlying module. Brikcss uses `brikcss` as a global namespace, so in the browser Brikcss modules can be accessed at `window.brikcss[moduleName]` (or `brikcss[moduleName]`). See module documentation for that module's location.

**How to include:**

_app.js:_

```js
const BrikElement = window.brikcss.BrikElement;
```

_index.html:_

```html
<!-- Compiled for modern browsers: -->
<script
    type="module"
    src="node_modules/@brikcss/element/dist/umd/brik-element.js"
></script>
<!-- Compiled for legacy browsers: -->
<script
    nomodule
    src="node_modules/@brikcss/element/dist/umd/brik-element.legacy.js"
></script>
<!-- app.js with defer attribute to ensure it loads last: -->
<script src="app.js" defer></script>
```
