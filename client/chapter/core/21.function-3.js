/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식

const arr = [1,2,3];

// 전개 연산자
[...arr] 


              // rest parameter
let calcAllMoney = (...args) => {

  // const _4000 = args[2]
  // const first = args[0];

  // for of 문을 사용해 모든 값의 합을 구하시오.

  let total = 0;

  // for(const value of args) total += value;


  // forEach
  args.forEach((value) => total += value)



  // reduce

  return args.reduce((acc,cur) => acc + cur ,0)

  

  // return total

  // return a + b;

};



calcAllMoney(1000,2000,3000,4000,5000,6000,7000);





let _calcAllMoney = (...args) => args.reduce((acc,cur) => acc + cur ,0);



// 화살표 함수와 this



// 자바스크립트 세상에서 this는 어디에나 존재한다.


console.log(this); // window

// 일반 함수: 나를 호출한 대상을 기준으로 this를 바인딩합니다.
function a(){
  console.log(this);
}

// 화살표 함수 : this자체를 바인딩하지 않는다. 상위 컨텍스트에서 가져올 뿐.
const _a = () => console.log(this)


console.clear();


// 함수 선언문, 함수 표현식, 화살표 함수 
// 다양한 함수들은 객체 안에서도 사용할 수 있다. (메서드 method)
// 메서드 => 다양한 방법을 만들 수 있다.


// 일반 함수
// this : 나를 호출한 대상을 this
// constructor : 내장  (concise method는 제외)


// 화살표 함수
// this : 바인딩 하지 않음 => 상위 컨텍스트에서 찾음
// constructor : 비내장 (성능 최적화)

 
// 객체의 메서드를 써야 하는 상황이 생긴다? 무조건 concise method  
// -> 그 메서드 안에서 함수를 또 써야 하는 일이 생긴다?
// 화살표 함수 쓰세요. (왜? this 때문에)



const obj = {
  name:'tiger',
  age:30,
  sayHi:function(){           // 일반 함수 메서드


  },
  _sayHi:()=>{                // 화살표 함수 메서드


  },
  __sayHi(){                  // concise method
    

    // const sayBye = () => {
    //   console.log(this);
    // }

    const self = this;

    function sayBye(){
      
      self.name
      
    }

    sayBye();
    
  }

}





const user = {
  name: '이소망',
  total: 0,
  grades: [30,50,90],
  totalGrades(){
    // this = user

    // this.grades.forEach((grade) => this.total += grade)


    this.grades.forEach(function(){
      this
    },this)

  }
}



user.totalGrades() // 모든 점수 합





// prototype => constructor



// 자바스크립트의 함수 양면의 얼굴 
// 1. normal function (일반 함수) => 리턴값을 명시
// 2. constructor function (생성자 함수) => 무조건 객체를 리턴함. 

function Sum(a,b){
  return a + b
}

// Sum()


const result = new Sum(1,2);



function createUser (){

  return {
    name:'tiger',
    age:30
  }
}



const arrow = (a,b) => {
  return a + b
}


// new arrow(1,2) //3








/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {

  let total = 1;

  for(let i = 0; i < powerCount; i++){
    total = total * numeric
  }

  return total
}



let _pow = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric,1)


let __pow = (numeric, powerCount) => {
  
  return Array(powerCount).fill(null).reduce((acc) => {
    return acc * numeric
  },1)
}




// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {

  let result = '';

  for(let i = 0; i < repeatCount; i++){
    result += text;
  }

  return result;

}




let _repeat = (text,repeatCount) =>  Array(repeatCount).fill(null).reduce(acc=> acc + text,'') 



















