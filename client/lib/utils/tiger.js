


const END_POINT = 'https://jsonplaceholder.typicode.com/users'



const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export const tiger = async (options) => {

  const {url,...rest} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url,rest);

  if(response.ok){
    // 통신 성공
    response.data = await response.json()
  }

  return response;
}



tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url,body,options) => {
  return tiger({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


tiger.put = (url,body,options) => {
  return tiger({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


tiger.delete = (url,options) => {
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}





























