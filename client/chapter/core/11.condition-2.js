/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리곱 할당 연산자

// a &&= b;
// a = a && b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 논리합 할당 연산자

// a ||= b;

// 부정 연산자
let reverseValue = !!value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

/* 
1. 대소문자 구분 없이 받을 수 있게 
2. 공백 문자 처리
3. 콘솔창에 에러가 발생하면 안됩니다.



*/

console.clear();





function logIn(){

  const userName = prompt('누구십니까?');

  // if(userName === null || userName === undefined) return;
  if(!userName) return;

  if(userName.toLowerCase() === 'admin'){
    
    const password = prompt('비밀번호는?');

    if(password.toLowerCase() === 'themaster'){
      console.log('Welcome!');
      
    }else if(password === null){
      console.log('canceled');
      
    }else{
      console.log('Wrong password');
      logIn();
      
    }
    
  }else if(userName === null || userName.replace(/\s*/g,'') === ''){
    console.log('cancel');
    
  }else{
    console.log('아돈노');
    
  }

}


