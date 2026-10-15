/* eslint-disable no-useless-assignment */




const content = document.querySelector('.contents');
const textField = document.querySelector('#comment37');



function handleClick (e) {
  e.preventDefault();

  let target = e.target;

  
  while(!target.getAttribute('data-name')){
    
    target = target.parentElement;

    if(target.tagName === 'BODY'){
      target = null;
      return;
    }
  }
  
  if(target.dataset.name === 'like'){
    // target.classList.toggle()
    toggleClass(target,'active');
  }

  if(target.dataset.name === 'comment'){
    textField.focus();
  }

  if(target.dataset.name === 'more'){
    toggleClass(target,'active');
  }

  if(target.dataset.name === 'delete'){
    if(confirm('정말 우리의 추억을 없앨거야...?')){
      this.remove();
    }
  }

  // 1. send 버튼을 눌렀을 때 조건처리 
  if(target.dataset.name === 'send'){

    if(textField.value === '') return;

      // 2. 붙여넣을 태그를 만듦 
      // 3. 태그 안에 input에 작성된 value를 삽입
    const template = `
      <div class="id">
        <div class="profile_img border_over">
          <img src="./assets/part04/tigerr.png" alt="호랑이 프로필" />
        </div>
        <div class="comment_field">
          <div class="text_container">
            <div class="name"><a href="#">심심</a></div>
            <div class="text_field">${textField.value}</div>
          </div>
        </div>
      </div>
    `
    
    const comment_container = getNode('.comment_container');


    insertLast(comment_container,template);
    
    textField.value = '';

    comment_container.scrollTop = comment_container.scrollHeight




  }



  // 4. 원하는 곳에 붙인다.

  


  

}


content.addEventListener('click',handleClick);























