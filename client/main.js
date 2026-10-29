




class CustomButton extends HTMLElement{

  constructor(){
    super();
  }

  connectedCallback(){
    console.log('connected');
    this.attachEvent();
    
  }

  disconnectedCallback(){
    console.log('disconnected');
  }

  static get observedAttributes(){
    return ['data-value'];
  }

  attributeChangedCallback(name, oldValue, newValue){
    console.log( name, oldValue, newValue );
    this.render();
  }

  // 내가 맘대로 정한 메서드 

  handleClick(){
    console.log('clicked');
    this.dataset.value = 10;
    
  }

  attachEvent(){
    this.addEventListener('click',this.handleClick);
  }


  render(){
    this.innerHTML = this.dataset.value;
  }


}


customElements.define('my-button',CustomButton);








