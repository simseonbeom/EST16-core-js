
/**
 * @function DOM Element의 속성 값을 가져오는 함수
 * @param {HTMLElement | string} node  - Element 또는 css 선택자
 * @param {string} prop - 가져올 속성 이름
 * @throws {TypeError} prop이 문자 타입이 아닐 경우 
 * @returns {string | null} - 속성 값, 속성이 없으면 null
 */

function getAttr(node, prop){
  if(isString(node)) node = getNode(node);
  if(!isString(prop)) throw new TypeError('getAttr 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다.');
  return node.getAttribute(prop);
}


/**
 * @function DOM Element의 속성 값을 설정하는 함수
 * @param {HTMLElement | string} node - 요소 또는 CSS 선택자
 * @param {string} prop - 설정할 속성 이름
 * @param {string} value - 설정할 속성 값, 빈 문자열('')을 전달하면 속성을 제거
 * @throws {TypeError} prop이 문자 타입이 아닐 경우
 * @throws {Error} value가 undefined 또는 null일 경우
 * @returns {void}
 */

function setAttr(node, prop, value){
  
  if(isString(node)) node = getNode(node);
  if(!isString(prop)) throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  if(value === ''){
    node.removeAttribute(prop)
    return;
  }
  if(isUndefined(value) | isNull(value)) throw new Error('...');

  node.setAttribute(prop,value);
}


/**
 * @function 속성 값을 가져오거나 설정하는 함수 (getAttr/ setAttr 통합)
 * @param {HTMLElement | string} node 
 * @param {string} prop 
 * @param {string} value 
 * @returns {string | null | void}
 */

function attr(node, prop, value){
  if(isUndefined(value)){
    return getAttr(node,prop)
  }
  setAttr(node,prop,value);
}



const _attr = (node, prop, value) => isUndefined(value) ? getAttr(node,prop) : setAttr(node,prop,value);