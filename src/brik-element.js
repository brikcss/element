/* globals HTMLElement */

function BrikElement (Base = HTMLElement) {
  return class extends Base {
    /**
     * Extend with other mixins.
     * @param  {Function} mixins  Mixin subclass or constructor.
     * @return {Class}  Base class.
     */
    static with (...mixins) {
      mixins.unshift(BrikElement)
      return mixins.reduce((context, mixin) => mixin(context), Base)
    }

    /**
     * Define custom element in customElementRegistry.
     * @param  {string}  tagName  Name of element tag.
     * @param  {Object}  config  Configuration passed to customElements.define().
     */
    static define (tagName, config = {}) {
      const self = this
      window.customElements.define(tagName.toLowerCase(), self, config)
    }

    /**
     *  Get root element, which is shadowRoot or root element.
     *  @return  {Object}  Root element.
     */
    get root () {
      return this._root || (this._root = this.shadowRoot || this)
    }
    /**
     * Set root element.
     * @param  {HTMLElement} value  Root element.
     */
    set root (value) {
      Object.defineProperty(this, '_root', {
        configurable: true,
        value
      })
    }
  }
}

export default BrikElement()
export { BrikElement }
