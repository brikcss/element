const BrikElement = window.brikcss.BrikElement

// -------------------------------------------------------------------------------------------------
// Custom Element code.
//

const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host([hidden]) {
      display: none;
    }
    :host() {
      display: block;
    }
    h1 {
      color: gray;
    }
  </style>
  <slot></slot>
`

const StatusMixin = (superclass) => class extends superclass {
  updateStatus (value) {
    var el = document.getElementById('status')
    el.innerHTML = value
    el.style.color = 'green'
  }
}

const RenderMixin = (superclass) => class extends superclass {
  render () {
    if (!this.el) this.el = document.createElement(this.type)
    this.root.appendChild(template.content.cloneNode(true))
    var slot = this.root.querySelector('slot')
    this.el.appendChild(slot)
    this.root.appendChild(this.el)
  }
}

class MyElement extends BrikElement().with(RenderMixin, StatusMixin) {
  static get observedAttributes () {
    return ['type']
  }

  attributeChangedCallback (name, old, value) {
    if (old === value) return
    this[name] = value
    if (this._initialized) this.render()
  }

  connectedCallback () {
    this.attachShadow({ mode: 'open' })
    this.type = this.getAttribute('type')
    this.render()
    this.updateStatus('Nailed it!!')
    this._initialized = true
  }
}

// Register new <web-alias/> element.
MyElement.define('my-element')
