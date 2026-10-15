/**
 * 클래스 인수를 classList에 넣을 수 있는 배열로 정리합니다.
 * 객체는 값만 추출하고, 문자열은 공백과 쉼표를 기준으로 나눕니다.
 *
 * @param {string | string[] | object} className - 정리할 클래스 인수
 * @returns {string[]} 클래스 이름 배열
 *
 * @example
 * normalizeClass('a b');        // ['a', 'b']
 * normalizeClass('a, b');       // ['a', 'b']
 * normalizeClass({x:'a'});      // ['a']
 */

function normalizeClass(className) {
  if (isObject(className)) className = Object.values(className);

  if (isString(className)) {
    return className.split(/[\s,]+/).filter(Boolean);
  }

  if (isArray(className)) {
    return className.flatMap((c) => normalizeClass(c));
  }

  return [className];
}

/**
 * @function DOM Element에 클래스를 추가하는 함수
 * @author 범쌤
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string | string[] | object} className - 추가할 클래스.
 *   공백 구분 문자열, 쉼표 구분 문자열, 배열, 객체를 모두 지원합니다.
 * @return {void}
 *
 * @example
 * addClass('.card', 'is-active');
 * addClass('.card', 'is-active is-open');   // 공백 구분
 * addClass('.card', 'is-active, is-open');  // 쉼표 구분
 * addClass('.card', ['is-active', 'is-open']);
 * addClass('.card', { a: 'is-active', b: 'is-open' });
 */

function addClass(node, className) {
  if (isString(node)) node = getNode(node);

  normalizeClass(className).forEach((c) => node.classList.add(c));
}

/**
 * DOM Element에서 클래스를 제거하는 함수
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string | string[] | object} [className] - 제거할 클래스.
 *   addClass와 동일하게 공백/쉼표 구분 문자열, 배열, 객체를 지원합니다.
 *   생략하면 className 전체를 비웁니다.
 * @returns {void}
 *
 * @example
 * removeClass('.card', 'is-active');
 * removeClass('.card', 'is-active is-open'); // 여러 개 제거
 * removeClass('.card');                      // 모든 클래스 제거
 */

function removeClass(node, className) {
  if (isString(node)) node = getNode(node);

  if (!className) {
    node.className = "";
    return;
  }

  normalizeClass(className).forEach((c) => node.classList.remove(c));
}

/**
 * DOM Element의 클래스를 토글하는 함수
 *
 * @param {HTMLElement | string} node - 대상 요소 또는 CSS 선택자 문자열
 * @param {string} className - 토글할 클래스 이름 (한 개만 전달합니다.)
 * @returns {boolean} - 추가 true, 제거 false
 *
 * @example
 * const isActive = toggleClass('.card', 'is-active');
 */

function toggleClass(node, className) {
  if (isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}
