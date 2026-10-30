
const template = document.createElement('template');

template.innerHTML = `
  <style> @import url('./components/Todo/TodoItem.css'); </style>
  <input type="checkbox" class="toggle"/>
  <span class="text"><slot></slot></span>
  <button type="button" class="remove" aria-label="삭제">x</button>
`


class TodoItem extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.append(template.content.cloneNode(true));

    this.checkbox = this.shadowRoot.querySelector('.toggle');
    this.removeBtn = this.shadowRoot.querySelector('.remove');

  }

  get done(){
    return this.getAttribute('done') === 'true';
  }

  get todoId(){
    return Number(this.getAttribute('todo-id'));
  }

  connectedCallback(){
    this.setAttribute('role','listItem');
  }

}


customElements.define('c-todo-item',TodoItem);





















