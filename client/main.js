/* eslint-disable no-undef */


import { renderUserCard, renderSpinner, renderEmptyCard } from './lib/dom/userList.js';
import { changeColor, clearContent, delayP, getNode, insertLast, tiger } from './lib/index.js';




const END_POINT = 'https://6ad6fa09f71f154ac4878f25.mockapi.io/users';

const userCardInner = getNode('.user-card-inner');

async function renderUserList(){

  renderSpinner(userCardInner);
  
  try{

    const response = await tiger.get(END_POINT);
    // const response = await fetch(END_POINT);

    const data = response.data;

    await delayP(1000);

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        this._targets[0].remove();
      }
    })




    // data를 가지고 유저의 목록을 article로 화면에(.userCardInner) 랜더링 
    data.forEach((user)=> renderUserCard(userCardInner,user))
    
    changeColor('.user-card');

    gsap.from('.user-card',{
      x:-100,
      opacity:0,
      stagger:{
        each:0.1,
        from:'start'
      }
    })
  }
  catch{

    renderEmptyCard(userCardInner)
    //

  }




}


renderUserList();


function handleDeleteCard(e){

  const button = e.target.closest('button');

  if(!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${index}`)
  .then(()=>{
    alert('삭제가 완료됐습니다.');

    clearContent(userCardInner);
    renderUserList();
    
  })
}

userCardInner.addEventListener('click',handleDeleteCard);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');
const nameField = getNode('#nameField');

function handleCreate(){
  gsap.to('.pop',{autoAlpha:1})
}

function handleCancel(e){
  e.stopPropagation();
  gsap.to('.pop',{autoAlpha:0})
}

function handleDone(e){
  e.preventDefault();

  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;


  tiger.post(END_POINT,{username,email,website})
  .then(()=>{
    gsap.to('.pop',{autoAlpha:0});
    clearContent(userCardInner);
    renderUserList();
    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  })
  
  
}




createButton.addEventListener('click',handleCreate);
cancelButton.addEventListener('click',handleCancel);
doneButton.addEventListener('click',handleDone);





















