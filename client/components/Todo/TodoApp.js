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
        {id:2, text: 'MW4하기', done: false},
      ],
      nextId: 3
    }

    this.list = this.shadowRoot.querySelector('.list');

  }

  connectedCallback(){

    this.render();
  }

  render(){
    // 리스트 렌더링  <li> {{ text }} </li> 반복 배열, 배열의 메서드 

    const { todos } = this.state
    this.list.innerHTML = todos.map(({text})=> `<li> ${text} </li>`).join('')

  }
}


customElements.define('c-todo-app',TodoApp);









