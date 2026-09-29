



let i = 0;

do{

  console.log(i);
  
  if( i === 3){
    break;
  }

  i++


}while( i < 5 );



/* -------------------- */
/* Do While Loop        */
/* -------------------- */


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정





const first = document.querySelector('.first');



function next(node){
  
  // node로 넘어온 값이 문자인가? 
  
  // type guard => validation
  if(typeof node === 'string'){
    node = document.querySelector(node)
  }

  do{

    node = node.nextSibling;

  }while(node.nodeType !== 1)

  return node;
}



function prev(node){
    if(typeof node === 'string'){
    node = document.querySelector(node)
  }

  do{

    node = node.previousSibling;

  }while(node.nodeType !== 1)

  return node;
}
































