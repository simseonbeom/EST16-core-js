


function earth(){

  let water = true;
  let gravity = 10;


  return function (data){
    gravity = data;
    return gravity
  }

}

const UFO = earth();


UFO(100)



// o_k 이해는 함 근데, 어디다씀?


const button = document.querySelector('button');





const handleClick = (() => {

  let isClicked = false;

  return  () => {
    if(!isClicked){
      document.body.style.background = 'orange';
    }else{
      document.body.style.background = '';
    }

    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick);









function useState(init){
  let value = init;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }
  return [read,write];
}

// const value = state('hello')[0];
// const setValue = state()[1];

const [value,setValue] = useState('hello');


value() // 값을 읽기
setValue() // 값 쓰기 


























































