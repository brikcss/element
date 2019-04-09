# Creating Mixins

## What is a mixin?

> A mixin is an abstract subclass; i.e. a subclass definition that may be applied to different superclasses to create a related family of modified classes.
>
> Gilad Bracha and William Cook, [Mixin-based Inheritance](http://www.bracha.org/oopsla90.pdf)

In the context of Brikcss Elements, a mixin is a subclass of the main Brikcss Element.

## How to create a mixin

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

-   [JavaScript mixins with classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)
-   [Enhancing mixins with decorators](http://justinfagnani.com/2016/01/07/enhancing-mixins-with-decorator-functions/)
