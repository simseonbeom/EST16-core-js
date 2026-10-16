


// 1. input 선택하기
// 2. input 이벤트 바인딩
//    -addEventListener('input')
// 3. input value값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기




function phase1(){

    const first = getNode('#firstNumber');
    const second = getNode('#secondNumber');
    const result = getNode('.result');
    const clear = getNode('#clear');

    function handleInput(){
      const firstValue = Number(first.value);
      const secondValue = +second.value;
      const total = firstValue + secondValue;

      result.textContent = ''
      insertLast(result,total);
    }

    function handleClear(e){
      e.preventDefault();
      first.value = ''
      second.value = ''
      result.textContent = '-'
      first.focus();
    }

    first.addEventListener('input',handleInput)
    second.addEventListener('input',handleInput)
    clear.addEventListener('click',handleClear)
}

phase1();



function phase2(){
  // const first = getNode('#firstNumber');
  // const second = getNode('#secondNumber');
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput(){
    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0);
    
    result.textContent = ''
    insertLast(result,total);

  }

  function handleClear(e){
    e.preventDefault();
    console.log( numberInputs );
    
    numberInputs.forEach((elem)=> elem.value = '')
    result.textContent = '-'
  }


  calculator.addEventListener('input',handleInput)
  clear.addEventListener('click',handleClear)

}











