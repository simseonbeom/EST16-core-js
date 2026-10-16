






import {
  attr,
  isString,
  addClass,
  insertLast,
  removeClass,
  getNode as $,
  clearContent,
} from "./lib/index.js";


// import {useState} from 'react/index.js'



// import clearContent from "./lib/dom/clearContent.js";
// import { getNode as $, getNodes } from "./lib/dom/getNode.js";
// import { insertLast } from "./lib/dom/insert.js";
// import { attr } from "./lib/dom/attr.js";
// import { addClass,removeClass } from "./lib/dom/css.js";
// import { debounce } from "./lib/utils/debounce.js";


//  named export    => import { 함수이름/변수이름 as $ } from '경로설정'
//  default export  => import 함수이름/변수이름, { 함수이름 }  from '경로설정'




// 1. input 선택하기
// 2. input 이벤트 바인딩
//    -addEventListener('input')
// 3. input value값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기

function phase1(){

    const first = $('#firstNumber');
    const second = $('#secondNumber');
    const result = $('.result');
    const clear = $('#clear');

    function handleInput(){
      const firstValue = Number(first.value);
      const secondValue = +second.value;
      const total = firstValue + secondValue;

      clearContent(result)
      insertLast(result,total);
    }

    function handleClear(e){
      e.preventDefault();
      clearContent(first)
      clearContent(second)
      clearContent(result)
      
      first.focus();
    }

    first.addEventListener('input',handleInput)
    second.addEventListener('input',handleInput)
    clear.addEventListener('click',handleClear)
}

phase1();



function phase2(){
  // const first = getNode('#firstNumber');
  // const second = getNode('#secondNumber');
  const calculator = $('.calculator');
  const result = $('.result');
  const clear = $('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput(){
    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0);
    
    result.textContent = ''
    insertLast(result,total);

  }

  function handleClear(e){
    e.preventDefault();
    console.log( numberInputs );
    
    numberInputs.forEach((elem)=> elem.value = '')
    result.textContent = '-'
  }


  calculator.addEventListener('input',handleInput)
  clear.addEventListener('click',handleClear)

}











