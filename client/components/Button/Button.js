class CustomButton extends HTMLElement {
  count = 0;

  constructor() {
    super();
  }

  connectedCallback() {
    console.log('connected');
    this.attachEvent();
    this.render();
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  static get observedAttributes() {
    return ['data-value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    this.render();
  }

  // 내가 맘대로 정한 메서드

  handleClick() {
    console.log('clicked');
    this.dataset.value = ++this.count;
  }

  attachEvent() {
    this.addEventListener('click', this.handleClick);
  }

  render() {
    this.innerHTML = this.dataset.value;
  }
}

customElements.define('my-button', CustomButton);

// customElements.define(
//   'user-info',
//   class extends HTMLElement {
//     connectedCallback() {
//       alert(`${this.id} connected.`);
//       setTimeout(() => alert(`${this.id} initialized.`));
//     }
//   }
// );

class HelloButton extends HTMLButtonElement {
  /* 사용자 정의 엘리먼트 메서드 */
}

customElements.define('hello-button', HelloButton, { extends: 'button' });
