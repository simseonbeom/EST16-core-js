/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기


// while


let j = 0;

while( j < 10){
  
  j++
  // if( j % 2 !== 0) continue;
  // console.log(j);

}




for(let p = 0; p < 10; ){
  p++

}




// 문자 -> 배열 
// 배열 -> 문자

const frontEndDev = 'HTML/CSS/SVG/JavaScript/jQuery/React/Redux'.split('/');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for(let i = 0; i < l; i++){

  const value = frontEndDev[i];
  const toLower = value.toLowerCase();

  // if( toLower.includes('jquery') || toLower.includes('svg') ) continue; // Goood
  // if( frontEndDev[i].toLowerCase().includes('jquery') ) continue; //Bad

  
  
  if(toLower.includes('jquery')) break;
  
  console.log( value );

  
}

// while 문 → for 문 (순환)


//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)



console.clear();





// shift(), pop()    => 원본 훼손

const arr = [...frontEndDev];


for (let i = 0; i < l; i++) {

  console.log(arr.pop());
  
}


console.log(frontEndDev);















