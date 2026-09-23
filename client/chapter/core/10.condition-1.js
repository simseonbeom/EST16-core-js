/* ---------------- */
/* Condition        */
/* ---------------- */



// const result = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?");


// if(result === 'ECMAScript'){
//   console.log('정답입니다!');
  
// }else{
//   console.log('모르셨나요? 정답은 ECMAScript입니다!!!');
// }



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

function watchingMovie(){
  let didWatchMovie = confirm('너 디지몬 극장판 봤니??');


  if(didWatchMovie){
    console.log('너 좀치네?');
    
  }else{
    
    let goingToWatchMovie = confirm('오메가몬 진화하는거 볼래?');  

    if(goingToWatchMovie){

      let withWho = prompt('누구랑 볼거야?');
      
      if(withWho === '너'){

        console.log('사랑해');
        
      }else if(withWho === '철수'){

        console.log('잘가.');
        
      }else{
        console.log('넌 항상 그런식이야.');
      }

    }else{
      console.log('넌 후회할거야');
      
    }

  }

}




// 영화 볼거니?


// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식


let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';


// 간단한 삼항식 

const message = didWatchMovie.includes('no') ? '영화 재밌더라! 한번 봐바!' : 
                goingToWatchMovie.includes('yes') ? '언제 볼까? 재밌겠다!' : '그래 잘가 ㅂ_ㅇ'





