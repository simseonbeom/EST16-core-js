import { getNode } from '../dom/index.js';
import { isNumber, isObject } from './type.js';

function delay(callback, timeout = 500) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

delay(() => {
  second.style.top = '-100px';
  delay(() => {
    second.style.transform = 'rotate(360deg)';
    delay(() => {
      second.style.top = '0px';
    });
  });
});



const shouldRejected = false;

const p = new Promise((resolve, reject) => {
  if (!shouldRejected) {
    resolve('성공입니다!');
  } else {
    reject({ message: '알 수 없는 오류' });
  }
});

p.then((res)=>{
  console.log( res );
  
})
.then((res)=>{
  console.log( res );
  
})
 // promise object



console.log(  );




const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000
}


function delayP(options) {

  let config =  {...defaultOptions};

  if(isNumber(options)){
    config.timeout = options;
  }
  if(isObject(options)){
    config = {...defaultOptions,...options};
  }

  const {shouldReacted, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) resolve(data);
      else reject(errorMessage);
    }, timeout);
  });
}


// delayP({
//   shouldRejected:true,
//   timeout: 3000
// })

// delayP(1000)





// Promise를 사용하는 이유?
// - 콜백의 한계
// - 콜백 지옥 탈출
// - 가독성
// - 비동기 작업 (순차적으로 일을 처리하는) .then


delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP();
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP();
})
.then(()=>{
  first.style.top = '0';
  
})
