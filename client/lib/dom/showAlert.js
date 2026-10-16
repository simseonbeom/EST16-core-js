import { isString } from "../utils/type.js";
import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";




export function showAlert(node, message, timeout = 1000){
  if(isString(node)) node = getNode(node);

  // gsap.to(node,{
  //   x:220,
  //   duration:1.3,
  //   onComplete(){
  //     gsap.to(node,{
  //       x:-100
  //     })
  //   }
  // })

  addClass(node,'is-active');

  node.textContent = message;

  setTimeout(() => {
    removeClass(node,'is-active');
  }, timeout);
    
}

