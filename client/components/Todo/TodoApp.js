import {} from './TodoItem.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>@import url('./components/Todo/TodoApp.css');</style>
  <section class="todo">
    <h2>할 일 목록</h2>
    <form class="form">
      <label class="a11y-hidden" for="input">할 일 입력</label>
      <input type="text" class="input" id="input" placeholder="무엇을 할까요?" autocomplete="off"/>
      <button type="submit" class="add">추가</button>
    </form>
    
    <ul class="list"></ul>
  </section>
`


class TodoApp extends HTMLElement {
  
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    this.state = {
      todos:[
        {id:1, text: '웹 컴포넌트 공부하기', done: false},
        {id:2, text: 'MW4하기', done: true},
      ],
      nextId: 3
    }

    this.list = this.shadowRoot.querySelector('.list');
    this.form = this.shadowRoot.querySelector('.form');
    this.input = this.shadowRoot.querySelector('.input');

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleEvent = this.handleToggleEvent.bind(this);
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);

  }
  connectedCallback(){
    this.form.addEventListener('submit',this.handleSubmit);
    this.shadowRoot.addEventListener('todo-toggle',this.handleToggleEvent)
    this.shadowRoot.addEventListener('todo-remove',this.handleRemoveEvent)
    this.render();
  }
  // 데이터 업데이트
  setState(nextState){
    this.state = {...this.state, ...nextState};
    this.render();
  }
  // todo를 추가 
  addTodo(text){
    
    const { todos, nextId } = this.state;

    this.setState({
      todos:[...todos, {id: nextId, text, done:false }],
      nextId: nextId + 1
    });
  }

  handleSubmit(e){
    e.preventDefault();

    const text = this.input.value.trim();

    if(!text) return; 

    this.addTodo(text);
    this.input.value = '';
    this.input.focus();
  }

  toggleTodo(id){
    const todos = this.state.todos.map((todo)=>
      todo.id === id ? {...todo, done: !todo.done} : todo
    )

    this.setState({todos});
  }

  removeTodo(id){
    this.setState({ todos : this.state.todos.filter((todo)=> todo.id !== id)})
    
  }

  handleToggleEvent(e){ this.toggleTodo(e.detail.id)}
  handleRemoveEvent(e){ this.removeTodo(e.detail.id)}


  render(){

    const { todos } = this.state;

    this.list.replaceChildren(
      ...todos.map(({id, text, done})=> {
        const item = document.createElement('c-todo-item');

        item.setAttribute('todo-id',id);
        item.setAttribute('done',done);
        item.textContent = text; // slot으로 들어갈 light DOM

        return item
      })
    )

  }
}

customElements.define('c-todo-app',TodoApp);









