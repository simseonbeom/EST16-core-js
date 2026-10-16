import { isObject, isString } from "../utils/type.js";
import { getNode } from "./getNode.js";


/**
 * @function DOM Element에 클래스를 추가하는 함수
 * @param {HTMLElement | string} node
 * @param {string | string[] | object} className
 * @returns {void}
 */


export function addClass(node, className){
  
  if(isString(node)) node = getNode(node);
  
  if(className.includes?.(',')){
    className = className.replace(/\s*/g,'').split(',')
  }
  
  if(isObject(className)){
    className = Object.values(className);
  }
  

  if(Array.isArray(className)){

    className.forEach((c)=> node.classList.add(c) );
    
  }else{
    
    node.classList.add(className)
  }
  
}

/**
 * @function DOM Element에 클래스를 제거하는 함수
 * @param {HTMLElement | string} node
 * @param {string} className 빈문자('') 입력시 모든 클래스 제거
 * @returns {void}
 */

export function removeClass(node, className){
  if(isString(node)) node = getNode(node);
  if(!className) {
    // node.className = ''
    node.removeAttribute('class')
    return;
  }
  node.classList.remove(className);
}

/**
 * @function DOM Element에 클래스를 토글하는 함수
 * @param {HTMLElement | string} node
 * @param {string} className 
 * @returns {boolean} - 추가 true / 제거 false
 */
export function toggleClass(node, className){
  if(isString(node)) node = getNode(node);
  return node.classList.toggle(className)
}

























