


/**
 * 입력한 선택자에 해당하는 DOM 요소를 반환합니다.
 *
 * 런타임에서는 매칭되는 요소가 없으면 null이 반환되지만,
 * 타입은 non-null로 선언해 변수에 담은 뒤에도 인텔리센스가 동작하도록 했습니다.
 * 요소가 없을 가능성이 있는 곳에서는 호출한 쪽에서 직접 체크하세요.
 *
 * @template {Element} [T=HTMLElement]
 * @param {string} node - CSS 선택자 문자열 ex) '.class', '#id', 'div'
 * @param {Document | Element | string} [context=document] 부모가 될 컨텍스트 노드 또는 선택자 (기본값은 document입니다.)
 * @returns {T} 매칭된 첫 번째 요소
 *
 * @example
 * const btn = getNode('#button');          // HTMLElement
 * const li = getNode('li','.navigation');
 *
 * @example
 * // 더 구체적인 타입이 필요할 때
 * const input = /** @type {HTMLInputElement} *\/ (getNode('#search'));
 * input.value;
 */

function getNode(node,context = document){

  if(context.nodeType !== 9) context = getNode(context);

  return context.querySelector(node);
}







/**
 * 입력한 선택자에 해당하는 DOM 요소를 반환합니다.
 * @param {string} node - CSS 선택자 문자열 ex) .class, #id, div
 * @param {Document | HTMLElement} context  부모가 될 컨텍스트 노드 (기본값은 document)
 * @returns {NodeList | null} 매칭된 첫 번째 요소 또는 null일수 있습니다.
 * 
 * @example
 * const btn = getNodes('button');
 * const li = getNodes('li');
 */

function getNodes(node,context = document){
  if(context.nodeType !== 9) context = getNode(context);
  return context.querySelectorAll(node);
}