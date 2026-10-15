

/**
 * DOM 요소에 이벤트 핸들러를 등록하고, 해제할 수 있는 함수를 반환합니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} type - 이벤트 타입 ex) 'click', 'keydown'
 * @param {(event: Event) => void} handler - 이벤트 핸들러 함수
 * @returns {() => void} 등록한 이벤트를 해제하는 함수(cleanup)
 *
 * @example
 * const off = bindEvent('.button', 'click', () => console.log('클릭!'));
 * off(); // 이벤트 해제
 */

function bindEvent(node,type,handler){
  
  if(isString(node)) node = getNode(node);

  node.addEventListener(type,handler);

  return () => node.removeEventListener(type,handler);

}



