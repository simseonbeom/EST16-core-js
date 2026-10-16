
import { getNode } from "./getNode.js";
import { isString } from "../utils/type.js";


/**
 * 대상 요소의 바로 앞(형제 위치)에 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'beforebegin' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */

export function insertBefore(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforebegin',text);
}

/**
 * 대상 요소의 첫 번째 자식으로 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'afterbegin' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */
export function insertFirst(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterbegin',text);
}

/**
 * 대상 요소의 마지막 자식으로 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'beforeend' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */

export function insertLast(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforeend',text);
}


/**
 * 대상 요소의 형제의 마지막 요소 HTML 문자열을 삽입합니다.
 * 
 * insertAdjacentHTML의 'afterend' 위치에 해당합니다.
 * 
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} text - 삽입할 HTML 문자열
 * @return {void}
 */
export function insertAfter(node,text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterend',text);
}





