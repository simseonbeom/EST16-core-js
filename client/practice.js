const template = document.createElement('template');

template.innerHTML = `
  <div class="menu">
    <slot name="title"></slot>
    <ul>
	    <slot name="item"></slot>
    </ul>
  </div>
`;

class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    // this.shadowRoot.innerHTML = `
    // <style> p { color: orange; } </style>
    // <p>
    //   Hello
    //    ${this.getAttribute('name')}
    // </p>`;
  }
}

customElements.define('my-element', MyElement);

customElements.define(
  'user-card',
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <div>Name:
        <slot></slot>
      </div>
      <div>Birthday:
        <slot name="birthday"></slot>
      </div>
    `;
    }
  }
);
