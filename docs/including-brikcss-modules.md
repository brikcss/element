# How to include a Brikcss module in your project

## TLDR

-   _For any production application_, use the [ESM vanilla bundle](#esm-vanilla-bundle) with a module bundler. We recommend [Rollup.js](https://rollupjs.org).

-   _For a quick prototypes or demo_, or for a quick setup during the _initial development phase_, use the [ESM browser bundle](#esm-browser-bundle). You can easily swap it out later for the [ESM vanilla bundle](#esm-vanilla-bundle) when you're ready for production.

-   If you want to support legacy browsers, [see how Brikcss does it](./supporting-legacy-browsers.md).

-   _If, for some reason, you can't/won't use a module bundler_, Brikcss also provides a [universal bundle (UMD)](#universal-bundle) -- one for modern browsers and one for legacy browsers.

## Brikcss modules and bundles

Brikcss packages offer different bundle types in order to meet the needs of any project environment. Use the following table to determine which bundle you should use:

### **Brikcss bundle types:**

| Name                                          | Strengths                                                                      | Weaknesses                                                                                                                           | Recommended use                                                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| [**ESM Vanilla bundle**](#esm-vanilla-bundle) | - Best performing.<br>- Best browser support.<br>- Most flexible/customizable. | - Slight up-front learning curve, if you have never used a module bundler.                                                           | All production applications.                                                                                              |
| [**ESM Browser bundle**](#esm-browser-bundle) | - Easiest/quickest set up.<br>- Most flexible/customizable.                    | - Worst browser support.<br>- Worst performing (lots of requests, unoptimized code).                                                 | Quick prototyping or demos. Or for a quick development setup. Just swap out for Vanilla Module when ready for production. |
| [**UMD/Universal bundle**](#universal-bundle) | - Easy/quick set up.<br>- Great browser support.                               | - Least flexible.<br>- Subpar performance (unless you concatenate and minify, in which case you may as well use the Vanilla Module). | When you can/will not use a module bundler.                                                                               |

## Why use a module bundler?

**Brikcss encourages using the [ESM vanilla bundle](#esm-vanilla-bundle) with a module bundler for all production applications.** A reasonable question: Why add the overhead of a module bundler?

Too many reasons to list. [Here's what Rollup.js, our favorite bundler, says](https://rollupjs.org/guide/en#the-why). One of the reasons Brikcss loves bundlers (with [Babel](https://babeljs.io/)) is that _bundlers can automagically polyfill code to target specific browsers, all while optimizing it for production._ For example, Brikcss uses [Rollup.js](https://rollupjs.org) and Babel to output one bundle for modern browsers and a different bundle for legacy browsers ([see how](./supporting-legacy-browsers.md)).

So while there is some up front overhead to learn how to use bundlers, once you get past the initial learning curve, it's a breeze.

### Which bundler should I use?

We recommend [Rollup.js](https://rollupjs.org) for its ease of use, wonderful performance, small file size, and widespread use. But there's also:

-   [Webpack](https://webpack.js.org)
-   [Parcel](https://parceljs.org)
-   [Gulp](https://gulpjs.com)
-   [Broccoli](https://broccoli.build)
-   and a whole plethora of others.

_Note: Make sure to add [Babel](https://babeljs.io/) to your bundler if you want to [support older browsers](./supporting-legacy-browsers.md)._

## ESM vanilla bundle

<table class="data-table">
    <tr>
        <th align="left"><strong>Module path</strong></th>
        <td><code>dist/esm/{module name}.js</code></td>
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

The ESM vanilla bundle, for use with a [module bundler](#why-use-a-module-bundler), offers the most flexibility, best browser support, and greatest performance. _Note: Using this directly in a browser will throw an error, because browsers do not support node import syntax (i.e., `import BrikElement from '@brikcss/element'`). The [ESM browser bundle](#esm-browser-bundle) is the same bundle with relative import paths for browsers._

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

## ESM browser bundle

<table class="data-table">
    <tr>
        <th align="left"><strong>Module path</strong></th>
        <td><code>dist/esm/{module name}<strong>.browser</strong>.js</code></td>
    </tr>
    <tr>
        <th align="left"><strong>Recommended use</strong></th>
        <td>- For a quick prototype or demo.<br>
        - For quick setup during initial development (to later swap out for <a href="#esm-vanilla-bundle">ESM vanilla</a>).<br>
        - If you only care about <a href="https://caniuse.com/#feat=es6-module">modern browsers</a><div class=""></div></td>
    </tr>
    <tr>
        <th align="left"><strong>Example</strong></th>
        <td><a href="../examples/esm">/examples/esm</a></td>
    </tr>
</table>

ESM Browser is identical to [ESM Vanilla](#esm-vanilla-bundle) except that import paths are converted to relative paths (browsers only support relative and absolute import paths). This can be used directly in browsers without error. Because it is identical to ESM Vanilla, you can use this bundle for a quick setup during initial development; once it's ready for production, simply swap it out for [ESM Vanilla](#esm-vanilla-bundle).

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

## Universal/UMD bundle

<table class="data-table">
    <tr>
        <th align="left"><strong>Module path</strong></th>
        <td>- <code>dist/umd/{module name}.js</code> for modern browsers;<br>- <code>dist/umd/{module name}<strong>.legacy</strong>.js</code> for legacy browsers.</td>
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
