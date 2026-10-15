/**
 * DOM 요소의 속성(attribute) 값을 가져옵니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} prop - 가져올 속성 이름 ex) 'src', 'class'
 * @returns {string | null} 속성 값 또는 속성이 없으면 null
 * @throws {TypeError} prop이 문자 타입이 아닌 경우
 *
 * @example
 * const src = getAttr('.thumbnail', 'src');
 */

function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);
  if (!isString(prop))
    throw new TypeError(
      "getAttr 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다."
    );
  return node.getAttribute(prop);
}

/**
 * DOM 요소의 속성(attribute) 값을 설정합니다.
 * value가 빈 문자열이면 해당 속성을 제거합니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} prop - 설정할 속성 이름
 * @param {string | number} value - 설정할 값, 빈 문자열이면 속성 제거
 * @returns {void}
 * @throws {TypeError} prop이 문자 타입이 아닌 경우
 * @throws {Error} value가 undefined 또는 null인 경우
 *
 * @example
 * setAttr('.thumbnail', 'src', '/images/cat.png');
 * setAttr('.thumbnail', 'alt', ''); // alt 속성 제거
 */

function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!isString(prop))
    throw new TypeError(
      "setAttr 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다."
    );

  if (value === "") {
    node.removeAttribute(prop);
    return;
  }

  if (isUndefined(value) || isNull(value))
    throw new Error(
      "setAttr 함수에 전달된 세 번째 인수는 undefined 또는 null 이어서는 안 됩니다."
    );

  node.setAttribute(prop, value);
}

/**
 * 속성 값을 읽거나 설정하는 getter/setter 겸용 함수입니다.
 * value를 생략하면 getAttr, 전달하면 setAttr로 동작합니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} prop - 속성 이름
 * @param {string | number} [value] - 생략하면 읽기, 전달하면 쓰기
 * @returns {string | null | void} 읽기 모드에서는 속성 값, 쓰기 모드에서는 undefined
 *
 * @example
 * attr('.thumbnail', 'src');                  // 읽기
 * attr('.thumbnail', 'src', '/cat.png');      // 쓰기
 */

function attr(node, prop, value) {
  if (isUndefined(value)) {
    return getAttr(node, prop);
  }
  setAttr(node, prop, value);
}

/**
 * attr 함수의 화살표 함수 버전입니다.
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} prop - 속성 이름
 * @param {string | number} [value] - 생략하면 읽기, 전달하면 쓰기
 * @returns {string | null | void} 읽기 모드에서는 속성 값, 쓰기 모드에서는 undefined
 */

const _attr = (node, prop, value) =>
  isUndefined(value) ? getAttr(node, prop) : setAttr(node, prop, value);
