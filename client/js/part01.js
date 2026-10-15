/* eslint-disable no-undef */



const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]




// 1. navigation을 선택 후 이벤트 위임을 걸어주세요.
//      - addEventListener
//      - e.preventDefault()

// 2. li들을 수집
//      - e.target
//      - closest()

// 3. target에게 is-active 클래스 넣기
//      - elem.classList.add()
//      - addClass()

// 4. target을 제외한 나머지 li들에게는 is-active를 제거해야함
//      - elem.classList.remove()
//      - removeClass()

// 5. data-index값 수집
//      - dataset
//      - attr()

// 6. li클릭시 이미지 교체 
//      - 이미지 가져오기
//      - src 속성 접근하기
//      - src값 변경하기 




const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');



const split = new SplitText('h3',{type:'chars'});


console.log( split );



function handleClick(e){
  e.preventDefault();
  const target = e.target.closest('li');
  const children = [...navigation.children];
  

  if(!target) return;
  
  const index = target.dataset.index;
  

  // visualImage.src = `./assets/part01/visual${index}.jpg`
  visualImage.src = `./assets/part01/${data[index-1].src}`
  visualImage.alt = data[index-1].alt;

  // for(const li of navigation.children) {
  //   removeClass(li,'is-active')
  // }

  // forEach를 사용해서 
  
  children.forEach((li)=>removeClass(li,'is-active'));
  

  addClass(target,'is-active');

  

  gsap.from(split.chars,{
    opacity:0,
    y:30,
    immediateRender:false,
    ease:'power3.inOut',
    stagger:0.03,
    onComplete(){
      console.log('애니메이션 종료 시점');
      
    }
  })
  

  
  

}



navigation.addEventListener('click',handleClick)




















































