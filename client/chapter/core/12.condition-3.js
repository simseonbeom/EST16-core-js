/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = LATE_NIGHT;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */


switch (thisTime){
  case MORNING : console.log('아침 잠 먹기'); break;
  case LUNCH : console.log('해동 시켜놓고 자고 일어나서 먹기'); break;
  case DINNER : console.log('수업 내용 복습하기'); break;
  case LATE_NIGHT :
  case DAWN : console.log('꿈속에서 코딩하기'); break;
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */




if(thisTime === MORNING) console.log('디스코드를 켠다')
else if(thisTime === LUNCH) console.log('점심을 먹는다')
else if(thisTime === DINNER) console.log('점심을 먹는다')
else if(thisTime === NIGHT) console.log('점심을 먹는다')
else if(thisTime === LATE_NIGHT || thisTime === DAWN) console.log('꿈을 꾼다')
















/* switch vs. if -------------------------------------------------------- */






// prompt를 통해서 숫자를 입력받는다. ( 0 ~ 6 까지)
// 받은 숫자를 사용해서 switch case 사용해주세요.



// 함수는 하나의 기능만을 수행하는 것을 목표로 합니다.
// 함수는 재사용성이 좋아야 한다.

function getRandom(n){
  const value = Math.floor(Math.random() * n);
  return value
}



function getDay(){

  const value = getRandom(7);

  switch (value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }

}


// getDay 함수를 가지고
// 주말인지 평일인지 구분할 수 있는 함수 만들기. (weekend)

// weekend()  => '오늘은 토요일입니다. 그러므로 주말입니다.'
//               '오늘은 목요일입니다. 그러므로 평일입니다.'

function weekend(){
  
  const today = getDay();


  // if(today.includes('토') || today.includes('일')){
  //   return `오늘은 ${today}요일입니다. 그러므로 주말입니다.`
  // }
  // return `오늘은 ${today}요일입니다. 그러므로 평일입니다.`
  
  
  return today.includes('토') || today.includes('일') ? 
                `오늘은 ${today}요일입니다. 그러므로 주말입니다.` : 
                `오늘은 ${today}요일입니다. 그러므로 평말입니다.`

  // return value;
  
}






/* 

0 : 일
1 : 월
2 : 화
3 : 수
4 : 목
5 : 금
6 : 토

*/


// 함수로 만들어주세요 

// prompt말고 0~6까지 랜덤한 숫자를 받아서 로직 실행 





























