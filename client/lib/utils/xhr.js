



// [readyState] 진행상황 
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  성공 / 실패



function xhr({
  method = 'GET', 
  url = '', 
  success = null, 
  fail = null,
  body = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
  }
} = {}){


  // const {method = 'GET', url = '', success, fail} = obj

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  if(!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.addEventListener('readystatechange',()=>{
    
    if(xhr.readyState === 4){

      if(xhr.status >= 200 && xhr.status < 400){
        success(xhr.response)
      }else{
        fail({message:'알 수 없는 오류가 발생했습니다.'})
      }
    }
  })

  xhr.send(JSON.stringify(body));

}



// xhr({
//   url:'https://jsonplaceholder.typicode.com/users',
//   success:() => {},
//   fail: () => {},

// })
// xhr('GET','https://jsonplaceholder.typicode.com/user',(data)=>console.log(data),(err)=> console.log(err))
// xhr('POST','https://jsonplaceholder.typicode.com/users',{name:'tiger'})





xhr.get = (url,success,fail) => {
  xhr({url,success,fail})
}


xhr.post = (url,success,fail,body) => {
  xhr({
    method:'POST',
    url,
    success,
    fail,
    body
  })
}



xhr.put = (url,success,fail,body) => {
  xhr({
    method:'PUT',
    url,
    success,
    fail,
    body
  })
}



xhr.delete = (url,success,fail) => {
  xhr({
    method:'DELETE',
    url,
    success,
    fail,
  })
}



xhr.post('https://jsonplaceholder.typicode.com/users',
  (res)=>{
    // console.log( res );
  },
  ()=>{

  },
  {name:'tiger'}
)


// console.dir(xhr);



































