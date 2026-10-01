/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){


  // 함수 안에서만 접근 가능한 인수들의 집합 객체 
  
  let total = 0;
  
  // for문을 사용해서 모든 값의 합을 return 시켜주세요.
  // for(let i = 0; i < arguments.length; i++){
    
  //   // total = total + arguments[i];
  //   total += arguments[i];
    
  // }
  
  // return total;


  // for...of를 사용해 모든 값의 합을 return 시켜주세요.

  // for(const value of arguments) total += value;
  // return total;

  // 배열의 메서드  => forEach (값을 내보낼 수 없음), reduce (값을 내보냄), map, filter
  // 유사배열 -> 진짜 배열을 만들면 되지 않나?
  
  // const arr = Array.prototype.slice.call(arguments) // array instance method
  // const arr = Array.from(arguments) // array static method
  const arr = [...arguments]

  // function sum(value){
  //   total += value;
  // }

  //  arr.forEach(function(value,index){

  //      return value
      
  //   })

  

// reduce는 초깃값을 설정하지 않으면 배열의 첫 번째 값을 acc에 할당합니다.
  // return arr.reduce(function(acc,current){
    
  //   return acc + current;
    
  // },0)
  
  
  // prototype 변경하기  

  
  // console.log( arguments );
  
  
 
  // return total

          // 던더 프로토
  arguments.__proto__ = Array.prototype;


  arguments.forEach(function(v){
    // console.log( v );
  })

  // return a + b + c + d + e + f + g
};


const result = calculateTotal(10000,23500,38400,19900,18700,29800,9900)

// console.log( result );








// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function (){

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello (){

};


// 콜백 함수 (표현)식
let cb = function(condition, success, fail){

  // const success = function(){ console.log('성공입니다.'); }
  // const fail = function(){ console.log('실패입니다.'); }

  if(condition) {
    success()
  }
  else {
    fail()
  }

};


cb(
  false,
  function(){
    console.log('성공입니다.');
  },
  function(){
    console.log('실패입니다.');
  }
)


// 함수 선언문 vs. 함수 (표현)식






















// 그래서 콜백 함수를 왜 쓰는거야? 뭐가 좋은거지?


function movePage(url,success,fail){

  if(url.includes('https')){   // 제대로된 url
    success(url);
    
  }else{  // 이상한 url
    fail();
  }
}


// 동적으로 만들자! 

movePage( 
  'https://www.naver.com',
  글자 => console.log(`${글자} 다이나믹하게 움직이는 애니메이션 `),
  () => console.log('애니메이션 없애고 정적 페이지 로드 ')
 )




 function getGeolocation(success){
  

   navigator.geolocation.getCurrentPosition(function(so){
  
    const data = so.coords.latitude;

    success(data)
    
  })

 }
 

//  서비스 개발  너의집근처 '너뒤'

getGeolocation(function(data){

    // console.log( `이곳이 맛집입니다 : ${data} ` );
    
});



// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// encapsulation (캡슐화)
// 클로저 closure 폐쇄 

const master = (function(t){

  // var a = 10;
  var uuid = 'zjka!@#a989asdf!Jasdkj'

  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value;
    }
  }

}())

console.log( master );













