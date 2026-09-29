/* ---------------- */
/* For In Loop      */
/* ---------------- */



const JS = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2026,
  hasOwnProperty:function(){
    return '메롱'
  }

};




Object.prototype.nickName = 'tiger';

// Object.prototype.hasOwnProperty = 'tiger';

console.log( 'nickName' in JS );



// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 자바스크립트는 내가 가지고있는 빌트인 속성, 메서드를 보호해주지 않습니다.

// 객체 자신의 속성인지 확인하는 정확한 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


console.log(JS.hasOwnProperty('nickName'));

console.log(  Object.prototype.hasOwnProperty.call(JS,'nickName')    );


console.log(  Object.hasOwn(JS,'nickName') );





// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

console.clear();

// for..in문은 객체의 key,value를 반복 처리할 때 사용가능함  근데, 그냥 조회를 하면 
// 조상의 값까지 조회가 됩니다. => 위험
// for..in을 쓰지만 내부적으로 hasOwn 같이 써서 안전하게 정말 내가 가지고 있는 값만 조회가 될 수 있도록 한다.


for(const key in JS){
  
  // if(Object.prototype.hasOwnProperty.call(JS,key)){
  if(Object.hasOwn(JS,key)){

    const value = JS[key];
    // safe zone

    console.log(key, value);
    
  }
  
}






// - 배열 객체 순환에 사용할 경우?


// for..in은 객체, 배열 둘 다 순환이 가능합니다. 근데, 배열의 순환은 위험함
// 배열에서 가장 중요한건 순서(index)인데 for..in은 그 순서를 보장해주지 않음

console.clear();

const tens = [10,100,1000,10_000];



for(const key in tens){

  // Object.has
  console.log(tens[key]);
  
}



