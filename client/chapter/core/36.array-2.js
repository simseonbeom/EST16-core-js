/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray




const people = [
  {
    id: 0,
    name: '이유정',
    age: 16,
    job: '중학생',
    imgSrc:'https://randomuser.me/api/portraits/med/women/75.jpg',
    imgAlt:'대체 텍스트...'
  },
  {
    id: 1,
    name: '이소망',
    age: 34,
    job: '이야기꾼',
    imgSrc:'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt:'대체 텍스트...'
  },
  {
    id: 2,
    name: '조민지',
    age: 25,
    job: '억만장자',
    imgSrc:'https://randomuser.me/api/portraits/med/women/60.jpg',
    imgAlt:'대체 텍스트...'
  },
  {
    id: 3,
    name: '신재훈',
    age: 20,
    job: '닭강정킬러',
    imgSrc:'https://randomuser.me/api/portraits/med/men/50.jpg',
    imgAlt:'대체 텍스트...'
  },
  {
    id: 4,
    name: '안경찬',
    age: 30,
    job: '중소기업 대표님',
    imgSrc:'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt:'대체 텍스트...'
  },
  {
    id: 5,
    name: '김효경',
    age: 22,
    job: '플라워리스트',
    imgSrc:'https://randomuser.me/api/portraits/med/women/10.jpg',
    imgAlt:'대체 텍스트...'
  },
  {
    id: 6,
    name: '박소연',
    age: 28,
    job: '카페 사장',
    imgSrc:'https://randomuser.me/api/portraits/med/women/5.jpg',
    imgAlt:'대체 텍스트...'
  },
]

/* 요소 순환 ---------------------------- */

// forEach


people.forEach((user)=>{
  // console.log( user );
  
  
})


const spans = document.querySelectorAll('span');

console.log(spans);


spans.forEach((span,index)=>{
  span.addEventListener('click',function(){
    
    this.style.color = 'orange'
 
    
  })
})

// 아하! 그럼 중복되는 모든 이벤트 처리는 forEach로 하는구나!! 가 아닙니다.
// 이벤트 위임 (event delegation)

// 이벤트 바인딩 


/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// toReversed
const reverse = people.toReversed();


function compare(a,b){
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}


// toSorted
// 
// const sort = people.toSorted(compare)



// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat [...arr,...arr2]

// slice


// toSpliced

console.clear();

// ⭐️ map ⭐️  새로운 배열을 반환 
// 사람들의 이름만을 모아놓은 새로운 배열 

const names = people.map((user,index) => `나의 이름은 : ${user.name}`)


// 현재 나이에서 전부 +2살을한 새로운 배열을 만들어주세요.

const ages = people.map((user)=>{
  return user.age + 2
})


const tags = people.map(({imgSrc, imgAlt, name, age, job})=>{
  
  // const {imgSrc, imgAlt, name, age, job} = user;

  const template = `
    <li>
      <figure>
        <img src="${imgSrc}">
        <figcaption>${imgAlt}</figcaption>
      </figure>  
      <ul>
        <li>이름 : ${name}</li>
        <li>나이 : ${age}</li>
        <li>직업 : ${job}</li>
      </ul>
    </li>
  `
  return template;

}).join('');

// tags.forEach()


document.querySelector('ul').insertAdjacentHTML('beforeend',tags)








/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const az = people.find((user)=>{
  return user.age > 20
})





// findIndex

/* 요소 걸러내기 --------------------------- */

// 새로운 배열을 반환하기 때문에 return은 필수 = map

const mz = people.filter(user => user.age > 20);





// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const total = people.reduce((acc,cur) => acc + cur.age,0)

console.log( total );


const template = people.reduce((htmlCode,user)=>{
  return htmlCode + `<li>${user.name}, ${user.age}, ${user.job}</li>`
},'')


document.querySelector('ul').insertAdjacentHTML('beforeend',template);

// reduceRight

/* string ←→ array 변환 ------------------ */



const _arr = '안/녕/하/세/요'

// split
const stringToArray = _arr.split('/');


// join
const arrayToString = stringToArray.join('-');





// forEach  배열을 순환 값을 반환하지 않음 
// map      배열을 순환 값을 반환 (새로운 배열)
// filter   배열을 순환 값을 반환 (새로운 배열)
// reduce   배열을 순환 값을 반환 (any)


const product = [
  {name:'냉동 만두', price: 12000, brand:'비비고'},
  {name:'냉동 피자', price: 15000, brand:'오뚜기'},
  {name:'냉동 새우', price: 13500, brand:'곰곰'},
  {name:'냉동 치킨', price: 11000, brand:'하림'},
]


const forEach = (f,i) => {

  for(const a of i){
    f(a)
  }

}

// const forEach = (f,i) => {
//   for(const a of i) f(a)
// }


forEach((item)=> console.log(item.price) ,product)


const map = (f,i) => {
  const arr = [];

  for(const a of i){
    arr.push(f(a))
  }
  return arr;
}


const newData = map((item)=> item.brand , product) // 브랜드의 목록들을 담은 새로운 배열



const filter = (f,i) => {
  const arr = [];
  for(const a of i){
    if(f(a)){
      arr.push(a)
    }
  }
  return arr;
}


const newFilter = filter(item => item.price < 12000, product);


const reduce = (arr, f, initialValue) => {
  let acc = initialValue;
  
  for(const [index, currentValue] of arr.entries()){
    acc = f(acc, currentValue, index, arr);
  }

  return acc;
}



reduce( product,(acc,cur) => acc + cur.price,0 )



console.clear();



const curry = (f) => (a, ...args) => 
  args.length ? f(a, ...args) : (...rest) => f(a,...rest);

const curryN = (f, arity = f.length) => {
  const curried = (...args) =>
    args.length >= arity
      ? f(...args)
      : (...rest) => curried(...args, ...rest);

  return curried;
};

const _forEach = curry((f,i)=>{
  for(const item of i) f (item)
})

const _map = curry((f,i) => {
  const arr = [];

  for(const a of i){
    arr.push(f(a))
  }
  return arr;
})



const _filter = curry((f,i) => {
  const arr = [];
  for(const a of i){
    if(f(a)){
      arr.push(a)
    }
  }
  return arr;
})


const _reduce = curryN((f, initialValue, iterable) => {
  let acc = initialValue;

  for (const item of iterable) {
    acc = f(acc, item);
  }

  return acc;
});


// pipe, flat, flatMap

const go = (value, ...functions) => {
  for(const f of functions) value = f(value);
  return value;
}


const add = (a,b) => a + b ;
const log = console.log;

// 어떻게 순환하고 계산할 것인지
// 어떤 변환을 어떤 순서로 수행할 것인지. 

go(
  product,
  _filter( p => p.price >= 13000),
  _map(p => p.price),
  _reduce(add, 0),
  log
)


// take .........
// Lazy function










