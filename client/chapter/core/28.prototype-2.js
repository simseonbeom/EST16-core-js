/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.



class Animal {

  legs = 4;
  stomach = [];
  tail = true;
  
  static defaultOptions = {
    version: '0.1.1',
    company: '8b-studio',
    ceo: '심선범'
  }

    // private field
  #nickName = 'unknown';

  constructor(name){
    this.name = name
    console.log( this.#nickName );
  }

  get eat(){
    return this.stomach;
  }

  set eat(food){
    this.stomach.push(food);
  }

}


const animal = new Animal('몽실이');


class Tiger extends Animal{

  pattern = '호랑이 무늬';

  constructor(name,pattern = '호랑이 무늬'){
    super(name);

    this.pattern = pattern;
    
  }

  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  static bark(sound){
    return sound;
  }

}


const tiger = new Tiger('호돌이');




class Object {










  
}



class Array extends Object{

  forEach(f){
    f()
  }
  reduce(f,initValue){
    f()
  }

  static from(){
  }

  static isArray(){
  }
}


[1,2,3].forEach(()=>{})
[1,2,3].reduce(()=>{},0)

// Array.from()
// Array.isArray()


// Array -> Object















