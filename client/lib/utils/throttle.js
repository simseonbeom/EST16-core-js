


export function throttle (f, limit = 1000){
  
  let wait = false;

  return function (...args){
    if(!wait){
      f.apply(this,args)
      wait = true;
      setTimeout(() => wait = false, limit);
    }
  }
}

