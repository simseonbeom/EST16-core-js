
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

    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  static get observedAttributes(){
    return ['done'];
  }

  attributeChangedCallback(name, oldValue, newValue){
    if(name === 'done' && oldValue !== newValue){
      this.render();
    }
  }

  emit(type){
    this.dispatchEvent(new CustomEvent(type,{
      detail:{ id: this.todoId },
      bubbles: true,
      composed: true // shadow 경계를 넘어 부모까지 
    }))
  }

  handleToggle(){ this.emit('todo-toggle') }
  handleRemove(){ this.emit('todo-remove') }
  

  get done(){
    return this.getAttribute('done') === 'true';
  }

  get todoId(){
    return Number(this.getAttribute('todo-id'));
  }

  connectedCallback(){
    this.setAttribute('role','listItem');
    this.checkbox.addEventListener('change',this.handleToggle);
    this.removeBtn.addEventListener('click',this.handleRemove);
    this.render();
  }
  
  disconnectedCallback(){
    // clean up

    this.checkbox.removeEventListener('change',this.handleToggle);
    this.removeBtn.removeEventListener('click',this.handleRemove);
  }

  render(){
    const { done } = this;

    this.checkbox.checked = done;
    this.checkbox.setAttribute('aria-label', done ? '완료 취소' : '완료 처리');
    this.shadowRoot.querySelector('.text').classList.toggle('done',done);

  }

}


customElements.define('c-todo-item',TodoItem);





















