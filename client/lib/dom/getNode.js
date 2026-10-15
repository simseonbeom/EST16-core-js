/**
 * 입력한 선택자에 해당하는 DOM 요소를 반환합니다.
 *
 * @param {string} node - CSS 선택자 문자열 ex) '.class', '#id', 'div'
 * @param {Document | HTMLElement | string} context 부무가될 컨텍스트 노드 (기본값은 document입니다.)
 * @returns {HTMLElement | null} 매칭된 첫 번째 요소 또는 null일수 있습니다.
 *
 * @example
 * const btn = getNode('#button');
 * const li = getNode('li','.navigation');
 */

function getNode(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelector(node);
}

/**
 * 입력한 선택자에 해당하는 모든 DOM 요소를 반환합니다.
 *
 * @param {string} node - CSS 선택자 문자열 ex) '.class', 'li', 'div'
 * @param {Document | HTMLElement | string} context 부모가 될 컨텍스트 노드 (기본값은 document입니다.)
 * @returns {NodeListOf<HTMLElement>} 매칭된 요소들의 NodeList (없으면 빈 NodeList)
 *
 * @example
 * const items = getNodes('.list li');
 * const links = getNodes('a','.navigation');
 */

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelectorAll(node);
}
