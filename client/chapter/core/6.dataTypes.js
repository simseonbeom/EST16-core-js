/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);


// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);
console.log(typeof (typeof undef));



// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let single = 'hello';
let double = "tiger";
let backtick = `hi ${double / 10}`;   // string literal


const str = new String('hello'); // string constructor function







console.log( `asdas"dsa"dsa 'asdasd' dsa` );

console.log(backtick);

console.clear();


// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 1.23; // number literal = 값


const num = new Number(123); // number constructor function 


console.log(typeof integer);
console.log(typeof floatingPointNumber);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

console.log(typeof bigInt);

const big = BigInt(123)


// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;

console.log( isActive);


const bool = new Boolean(false);

console.log( bool );



// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {};
console.log(typeof obj);

const newObj = new Object({});


console.log(newObj);



// 8. 고유한 식별자(unique identifier)

const key1 = Symbol('uuid');
const key2 = Symbol('uuid');


const a = 'hello';
const b = 'hello';






/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류



console.clear();

// 객체 안에 함수를 넣는다 => 메서드 

// Object

const user = {
  name:'tiger',
  age:30,
  sayHi:function(){
    return 'hellooooow'
  }
}



// Array
const arr = [function(){},{name:'tiger'},[1,2,3],4,'hello'];

const _arr = new Array()


// function


function c(a,b){

  return (a + b * 3);

}


const result = c(1, 2);


const func = new Function();

// document.write(result)


// 함수를 만드는 이유 : 재사용성을 높이기 위해 


function 붕어빵틀(재료){
  return `따끈하고 맛있는 ${재료}붕어빵 완성됐습니다~~`;
}









// this


