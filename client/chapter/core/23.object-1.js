/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

const template = /* html */ `
  <li>item01</li>
  <li>item02</li>
  <li>item03</li>
`;

const position = {
  x: 3.3333,
  y: 313.3123,
};

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;

const dialog = {
  position: 'fixed',
  ['z-index']: 10000,
  top: 50,
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  transform: `translate(-${position.x}px,-${position.y}px)`,
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication
// authorization

let authUser = {
  uuid: crypto.randomUUID(),
  name: 'tiger',
  email: 'seonbeom@gmail.com',
  isSignIn: true,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

const keys = Object.keys(authUser);

function getKeys(obj, excludes) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key) && !excludes.includes(key)) {
      arr.push(key);
    }
  }

  return arr;
}

// 객체의 value들을 모아서 배열로 반환하는 함수

function getValues(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj[key]);
    }
  }

  return arr;
}

// Object.entries

function getEntries(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push([key, obj[key]]);
    }
  }

  return arr;
}

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 제거(remove)  vs 삭제(delete)
//    비워두기          메모리 없음

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  } else {
    throw new Error(
      'removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.'
    );
  }
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// 기존 데이터를 가지고 새로운 객체를 만들자! 


const student = { name, email, authorization, isLogin }

const { user1, user2 } = { name:'tiger', age:30 };


function createUser(nickName,age){


  return { name, age }
}


createUser('tiger',30)

const userA = {
  name:'tiger',
  age:30
}



// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}


/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */


const arr = [10,100,1000,10_000,100_000]


// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[3];

// 순서(order)를 바꿀 수 없음. 변수명은 내 마음대로

const [a1, _, a3, a4, a5, a6 = 999] = arr;

const [first,second,third] = document.querySelectorAll('span');

second.addEventListener('click',function(){
  this.style.color = 'orange'
})





/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */



const salaries = {
  이소망: 330,
  박소연: 550,
  이유정: 130,
  김효경: 60,
  안경찬: 400,
  조민지: 400
}


// const 소망 = salaries.이소망;


const 박소연 = 10;

// salaries.이소망
// salaries.박소연
// salaries.이유정

// 네이밍 마음대로 지을 수 없습니다. 순서 상관 x 
// 별칭 alias 등록 가능 

const { 박소연:카페알바생, 이유정:아픈사람 = 10, 이소망:투머치토커 = 10, 김효경:쌘언니, 신재훈:닭강정킬러 = 30, ...나머지 } = salaries;





// console.log( ...닭강정킬러 );


function f(...rest){

}




const {log:g}  = console
const {alert:message} = window



function createUserObject( obj ){

  const age = 99;

  const { name, age:나이 = age, address, phone, job, gender } = obj;

  
  return { name, age:나이, address, phone, job, gender }

}

const user = {
  age:30,
  phone:'010-7169-0262',
  name:'tiger',
  address:'남양주시',
  job:'강사',
  gender:'male'
}

createUserObject(user)


























