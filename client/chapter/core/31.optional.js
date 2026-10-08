/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.()

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.


// Browser API

// 자바스크립트 싱글 스레드 











// const timeout = setTimeout(()=>{

//   const tag = /* html */`
//     <button type="button" class="btn">동적 생성된 버튼</button>
//   `
//   document.body.insertAdjacentHTML('beforeend',tag);

//   const button = document.querySelector('.btn');

//   button.addEventListener('click',()=>{})

// },5000)


// console.log('1번');

// function fibonacci(n) {
//   if (n <= 0) return 0;
//   if (n <= 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// fibonacci(43)

// setTimeout(() => {
//   console.log('2번');
// }, 3000);


// console.log('3번');



let count = 0;

const h3 = document.querySelector('button');

// const interval = setInterval(()=>{
//   h3.style.transform = `translate(0px,${++count}px) rotate(${++count}deg)`
//   console.log(count);
//   if(count >= 200){
//     // clearInterval(interval)
//   }
// },1)


function animation(){

  
  h3.style.transform = `translate(0px,${++count}px) rotate(${++count}deg)`
  
  const id = requestAnimationFrame(animation)


  if(count >= 300){
    cancelAnimationFrame(id);
  }

}

















