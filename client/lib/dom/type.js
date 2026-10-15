

/**
 * 전달된 데이터의 실제 타입을 소문자 문자열로 반환합니다.
 * Object.prototype.toString을 이용하므로 null, array 등도 정확히 구분합니다.
 *
 * @param {*} data - 타입을 확인할 값
 * @returns {string} 소문자 타입 이름 ex) 'object', 'array', 'null', 'string'
 *
 * @example
 * typeOf([]);   // 'array'
 * typeOf(null); // 'null'
 */

const typeOf = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()


/**
 * 값이 순수 객체(plain object)인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} 객체이면 true
 */
const isObject = data => typeOf(data) === 'object';

/**
 * 값이 배열인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} 배열이면 true
 */
const isArray = data => typeOf(data) === 'array';

/**
 * 값이 불리언인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} 불리언이면 true
 */
const isBoolean = data => typeOf(data) === 'boolean';

/**
 * 값이 null인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} null이면 true
 */
const isNull = data => typeOf(data) === 'null';

/**
 * 값이 undefined인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} undefined이면 true
 */
const isUndefined = data => typeOf(data) === 'undefined';

/**
 * 값이 함수인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} 함수이면 true
 */
const isFunction = data => typeOf(data) === 'function';

/**
 * 값이 심볼인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} 심볼이면 true
 */
const isSymbol = data => typeOf(data) === 'symbol';

/**
 * 값이 문자열인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} 문자열이면 true
 */
const isString = data => typeOf(data) === 'string';

/**
 * 값이 숫자인지 확인합니다. (NaN도 number 타입이므로 true)
 * @param {*} data - 확인할 값
 * @returns {boolean} 숫자이면 true
 */
const isNumber = data => typeOf(data) === 'number';

/**
 * 값이 Math 객체인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} Math 객체이면 true
 */
const isMath = data => typeOf(data) === 'math';

/**
 * 값이 BigInt인지 확인합니다.
 * @param {*} data - 확인할 값
 * @returns {boolean} BigInt이면 true
 */
const isBigInt = data => typeOf(data) === 'bigint';

/**
 * 값을 숫자로 변환할 수 없는지 확인합니다.
 *
 * 주의: 이름과 달리 "숫자로 변환 가능하면 true"가 아니라
 * isNaN(Number(data))의 결과를 그대로 반환하므로,
 * '123' 같은 숫자 문자열에는 false, 'abc'에는 true가 반환됩니다.
 *
 * @param {*} data - 확인할 값
 * @returns {boolean} 숫자로 변환할 수 없으면 true
 *
 * @example
 * isNumericString('123'); // false
 * isNumericString('abc'); // true
 */
const isNumericString = data => isNaN(Number(data))



