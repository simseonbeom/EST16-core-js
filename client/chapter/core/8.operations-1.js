/* ---------------- */
/* Operators        */
/* ---------------- */



// const first = prompt('첫 번째 값') * 1;
// const second = prompt('두 번째 값') / 1;

// console.log( `total : ${ first + second }`  );


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상


let a = '10';
let b = '30';


// 단항 연산자
let unary = +a;


// 이항 연산자
let binary = (a * 1) + (b * 1)

// 삼항 연산자
let ternary = a > 5 ? '네 사실입니다' : '아니오 거짓입니다';


// 산술 연산자: 덧셈
let addition = a + b

// 산술 연산자: 뺄셈
let subtraction = a - b

// 산술 연산자: 곱셈
let multiplication;

// 산술 연산자: 나눗셈
let division;

// 산술 연산자: 나머지
let remainder = 5;

console.log( remainder % 2 === 0 ? '짝수' : '홀수' );


// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];


const first = [1,2,3];
const second = [4,5,6];


// console.log( first.concat(second) );

// 전개 구문 spread syntax
// 전개 연산자 spread operator
console.log( [...first,...second] );


// rest parameter
function sum(...rest){

  console.log(rest);
  
}


sum()





// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;

let total = count % 4;

 count = count / 2;

 let pow = count ** 3;
 
 total = total * count + pow;

 console.log( total );
 