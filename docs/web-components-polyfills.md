# Web Component Polyfills

While [browser support for Web Components has come a long ways](https://caniuse.com/#search=web%20components), some browsers (ehem... Microsoft!) do not support Web Components out of the box. Thankfully they are easily polyfilled.

## WebComponentsJS

We have found [WebComponentsJS](https://github.com/webcomponents/webcomponentsjs) to be the easiest and most complete way to polyfill for Web Components. That's why we have included with Brikcss Elements (if you installed with NPM).

The simplest way to include:

```html
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```

This will use feature detection and "fill in the gaps" for browsers that need it, while leaving alone the browsers that don't. There are many other ways to interact with this polyfill; for example, you may decide you don't want to include the Shadow DOM polyfill. Read the [webcomponentsjs docs](https://github.com/webcomponents/webcomponentsjs) for more details, there is a bunch of useful information.

## Other Polyfills

When searching for polyfills for Web Components, there are three main Web Component specs to consider:

1. Custom Elements
2. Shadow DOM
3. HTML Templates

WebComponentsJS polyfills all three of these specs, while other polyfills only target one spec. So if you use other polyfills, it is important to implement a polyfill for each of these three specs. An exception would be if your components don't use Shadow DOM or HTML Templates, obviously you wouldn't need those. At bare minimum, since Brikcss Element uses the Custom Elements spec, you will need a polyfill for Custom Elements.

### Other polyfills to consider

-   [document-register-element](https://github.com/WebReflection/document-register-element): A really nice, lightweight polyfill for Custom Elements. Seems to have fairly widespread use.
-   [custom-elements-builtin](https://github.com/ungap/custom-elements-builtin): Polyfill for browsers that don't allow you to extend custom built-in elements (i.e., `HTMLAnchorElement`, etc.).
-   [attach-shadow](https://github.com/WebReflection/attachshadow): Iframe based polyfill ("poorlyfill") for Shadow DOM. _Note: This only polyfills the `attachShadow` method._
-   [shadow-dom](https://github.com/tuespetre/shadow-dom): Shadow DOM and Custom Elements.

_Note: This list is given as a courtesy; there is no guarantee as to the stability of these polyfills._
