

export function debounce(f,limit = 1000){
  let timeout;
  
  return function(e){
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      f.call(this,e);
    },limit)
  }
}

