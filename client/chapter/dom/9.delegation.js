/* ------------------------ */
/* Event delegation         */
/* ------------------------ */





const nav = getNode('.navigation');


getNode('form').addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(e);
  
})


nav.addEventListener('click',(e)=>{

  e.preventDefault();

  const target = e.target.closest('li');

  if(!target) return;
  
  /* 클래스를 사용한 위임 ---------------- */
  // if(target.classList.contains('home')){
  //   console.log('home 클릭!');
    
  // }
  // if(target.classList.contains('about')){
  //   console.log('about 클릭!');
    
  // }
  // if(target.classList.contains('contact')){
  //   console.log('contact 클릭!');
    
  // }


  /* 속성(attribute)을 사용한 위임 ------------------ */

  // getAttribute


  // if(target.getAttribute('data-name') === 'home'){
  //   console.log( 'home click' );
  // }

  // if(target.getAttribute('data-name') === 'about'){
  //   console.log( 'about click' );
  // }

  // if(target.getAttribute('data-name') === 'contact'){
  //   console.log( 'contact click' );
  // }
  

  if(target.dataset.name === 'home'){
    console.log( 'home click' );
  }

  if(target.dataset.name === 'about'){
    console.log( 'about click' );
  }

  if(target.dataset.name === 'contact'){
    console.log( 'contact click' );
  }
  
  
  
  // elem.dataset

  
  
})
















 



/* 노드를 사용한 위임 ------------------ */