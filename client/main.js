const template = document.createElement('template');

template.innerHTML = `
  <style> h2{color:red;font-weight:bold;}</style>
  <h2>hello world</h2>
  <p>웹 컴포넌트에 대해 학습합니다.</p>
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
