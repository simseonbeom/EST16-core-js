/**
 * 대상 요소의 바로 앞(형제 위치)에 HTML 문자열을 삽입합니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} text - 삽입할 HTML 문자열
 * @returns {void}
 *
 * @example
 * insertBefore('.card', '<p>앞에 추가</p>');
 */

function insertBefore(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML("beforebegin", text);
}

/**
 * 대상 요소의 내부 첫 번째 자식으로 HTML 문자열을 삽입합니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} text - 삽입할 HTML 문자열
 * @returns {void}
 *
 * @example
 * insertFirst('.list', '<li>첫 번째 항목</li>');
 */

function insertFirst(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML("afterbegin", text);
}

/**
 * 대상 요소의 내부 마지막 자식으로 HTML 문자열을 삽입합니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} text - 삽입할 HTML 문자열
 * @returns {void}
 *
 * @example
 * insertLast('.list', '<li>마지막 항목</li>');
 */

function insertLast(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML("beforeend", text);
}

/**
 * 대상 요소의 바로 뒤(형제 위치)에 HTML 문자열을 삽입합니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} text - 삽입할 HTML 문자열
 * @returns {void}
 *
 * @example
 * insertAfter('.card', '<p>뒤에 추가</p>');
 */

function insertAfter(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML("afterend", text);
}
