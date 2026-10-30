# EST16 Core JS

> **EST-오르미 프론트엔드 부트캠프** 자바스크립트(ECMAScript) 코어 학습 문서입니다.

자바스크립트의 기본 문법과 핵심 개념을 챕터별 예제 코드로 정리합니다.

## 학습 목차

| No. | 챕터 | 파일 | 주요 내용 |
| --- | --- | --- | --- |
| 1 | Code Structure | [1.codeStructure.js](client/chapter/core/1.codeStructure.js) | 문(statement), 세미콜론, 주석, `alert` / `confirm` / `prompt` |
| 2 | Variables | [2.variables.js](client/chapter/core/2.variables.js) | `let` / `const` 선언, 변수·상수 네이밍 규칙 |
| 3 | Strict Mode | [3.strictMode.js](client/chapter/core/3.strictMode.js) | 엄격 모드(`'use strict'`) 사용 여부 비교 |
| 4 | globalThis | [4.globalThis.js](client/chapter/core/4.globalThis.js) | 전역 객체, 객체 환경 변수와 선언적 환경 변수의 차이 |
| 5 | Legacy var | [5.legacyVar.js](client/chapter/core/5.legacyVar.js) | `var`의 함수 스코프, 중복 선언, 블록 스코프와 비교 |
| 6 | Data Types | [6.dataTypes.js](client/chapter/core/6.dataTypes.js) | 8가지 데이터 타입, `typeof` 연산자 |
| 7 | Type Conversion | [7.typeConversion.js](client/chapter/core/7.typeConversion.js) | 문자·숫자·불리언 형 변환 (명시적 / 암시적) |
| 8 | Operators (1) | [8.operations-1.js](client/chapter/core/8.operations-1.js) | 단항·이항·삼항 연산자, 산술 연산자, 연산자 우선순위, 전개 구문 / 나머지 매개변수 |
| 9 | Operators (2) | [9.operations-2.js](client/chapter/core/9.operations-2.js) | 비교 연산자, 동등(`==`) vs 일치(`===`), 사전편집(lexicographical) 순 문자 비교 |
| 10 | Condition (1) | [10.condition-1.js](client/chapter/core/10.condition-1.js) | `if` / `else if` / `else`, 중첩 조건문, 조건부(삼항) 연산자와 멀티 조건식 |
| 11 | Condition (2) | [11.condition-2.js](client/chapter/core/11.condition-2.js) | 논리 연산자(`&&`, `\|\|`, `!`), Truthy / Falsy 탐색, 논리 할당 연산자, 로그인 조건 처리 실습 |
| 12 | Condition (3) | [12.condition-3.js](client/chapter/core/12.condition-3.js) | `switch` 문, `case` 묶음 처리와 `break`, `if` 문 변환, 함수로 분리한 요일 판별 실습 |
| 13 | Condition (4) | [13.condition-4.js](client/chapter/core/13.condition-4.js) | 널 병합 연산자(`??`), `??` vs `\|\|` 비교, 논리 할당 연산자(`&&=`, `\|\|=`, `??=`) |
| 14 | Loop (1) | [14.loop-1.js](client/chapter/core/14.loop-1.js) | `while` 문, 배열 순방향 / 역방향 순환, `console.time`으로 성능 비교 |
| 15 | Loop (2) | [15.loop-2.js](client/chapter/core/15.loop-2.js) | `do ~ while` 문, `break`, 타입 가드(validation), 형제 노드 탐색 함수(`next` / `prev`) |
| 16 | Loop (3) | [16.loop-3.js](client/chapter/core/16.loop-3.js) | `for` 문, `continue` / `break`, `while` → `for` 변환, `split()`, 원본 훼손(`pop`) 주의 |
| 17 | Loop (4) | [17.loop-4.js](client/chapter/core/17.loop-4.js) | `for ~ in` 문, 프로토타입 오염과 `in` 연산자, `Object.hasOwn` / `hasOwnProperty.call`, 배열 순환 시 주의점 |
| 18 | Loop (5) | [18.loop-5.js](client/chapter/core/18.loop-5.js) | `for ~ of` 문, iterable / enumerable 개념, 유사 배열(array-like), `Object.keys` / `values` / `entries`, 구조 분해 할당, 중첩 객체 순환(`for ~ in` + `Object.hasOwn` / `for ~ of` + `Object.entries`) |
| 19 | Function (1) | [19.function-1.js](client/chapter/core/19.function-1.js) | 함수 선언 / 호출, 매개변수 기본값, 필수 인수 검증(`throw new Error`), `rem` 함수, `getComputedStyle`, IIFE로 캡슐화한 `css` getter / setter 실습 |
| 20 | Function (2) | [20.function-2.js](client/chapter/core/20.function-2.js) | 함수 표현식(익명 / 기명), `arguments` 유사 배열 → 배열 변환(`Array.from`, 전개 구문), `forEach` / `reduce`, 콜백 함수, IIFE와 클로저 캡슐화 |
| 21 | Function (3) | [21.function-3.js](client/chapter/core/21.function-3.js) | 화살표 함수, 나머지 매개변수(`...args`)와 `for ~ of` / `forEach` / `reduce` 합계, 화살표 함수와 `this` 바인딩, 메서드 정의 방식(일반 / 화살표 / concise method), 생성자 함수(`new`), `pow` / `repeat` 함수 실습 |
| 22 | Function (4) | [22.function-4.js](client/chapter/core/22.function-4.js) | 재귀(recursion) 기반·단계·깊이, 재귀 `pow` / `factorial` / `fibonacci`, 실행 컨텍스트 스택, 반복문 vs 재귀 비교, 메모이제이션(`memoFibo.cache`), 중첩 객체 월급 합계(`sumSalaries`) 실습 |
| 23 | Object (1) | [23.object-1.js](client/chapter/core/23.object-1.js) | 객체 리터럴(key:value), 점 / 대괄호 표기법, 계산된 프로퍼티, 단축 프로퍼티, `getKeys` / `getValues` / `getEntries` 유틸 함수, 프로퍼티 제거(`null`) vs 삭제(`delete`), 배열·객체 구조 분해 할당(기본값, 별칭, 나머지), 타입 검사 유틸(`typeOf` / `isObject`) 활용 |
| 24 | Object (2) | [24.object-2.js](client/chapter/core/24.object-2.js) | 복사(copy) vs 참조(reference), 객체 복사(`for ~ in` / `Object.assign` / 전개 구문), 객체 병합(mixin), 얕은 복사 vs 깊은 복사, 재귀 `cloneDeep` 유틸 함수, Lodash `_.cloneDeep` |
| 25 | Object (3) | [25.object-3.js](client/chapter/core/25.object-3.js) | 가비지 컬렉션, 도달 가능성(reachability) 기준 메모리 관리, 함수 종료 시 내부 변수 해제 |
| 26 | Object (4) | [26.object-4.js](client/chapter/core/26.object-4.js) | 객체 메서드와 `this`, 런타임에 결정되는 `this` 참조, 메서드 단축 구문, 일반 함수 vs 화살표 함수의 `this`, 단계별 접근 / `forEach` / `reduce`로 구현한 주문 총액(`totalPrice`) 메서드 실습, 화살표 함수 메서드(`addItem`)를 단축 구문으로 수정 |
| 27 | Prototype (1) | [27.prototype-1.js](client/chapter/core/27.prototype-1.js) | 프로토타입 상속(`__proto__`) 체인, 접근자 프로퍼티(getter / setter), `Object.defineProperty`, 생성자 함수 상속(`Animal.call(this)`), 정적 메서드, `call` / `apply` / `bind`와 `this` 지정, 메서드 빌려쓰기, 이벤트 리스너(`addEventListener`)의 `this` |
| 28 | Prototype (2) | [28.prototype-2.js](client/chapter/core/28.prototype-2.js) | `class` 문법으로 재정의, 클래스 필드, `constructor`, getter / setter, `static` 필드·메서드, private 필드(`#`), `extends` / `super` 상속, 내장 클래스 구조(`Array` → `Object`)로 보는 인스턴스 메서드 vs 정적 메서드 |
| 29 | Closure (1) | [29.closure-1.js](client/chapter/core/29.closure-1.js) | 클로저 개념(함수가 선언된 환경 기억), 커링 함수(`first` → `second`), 독립된 상태를 갖는 `counter`, `multi`로 만든 `double` / `triple`, 화살표 함수 커링, 실행 컨텍스트와 어휘 환경(Lexical Environment), 스코프 체인, 실행 컨텍스트 스택(LIFO)과 단일 스레드 |
| 30 | Closure (2) | [30.closure-2.js](client/chapter/core/30.closure-2.js) | 클로저로 외부 함수 변수 변경(`earth` / `UFO`), 클로저 활용 사례, IIFE로 상태(`isClicked`)를 은닉한 클릭 토글 핸들러(`addEventListener`), `[read, write]`를 반환하는 `useState` 구현과 배열 구조 분해 할당 |
| 31 | Optional Chaining | [31.optional.js](client/chapter/core/31.optional.js) | 없는 프로퍼티 접근 시 런타임 오류, `in` 연산자 / 논리곱(`&&`) 방어 코드, 옵셔널 체이닝(`?.`, `?.()`), Browser API와 싱글 스레드, `setTimeout` / `setInterval` 실행 순서, `requestAnimationFrame` / `cancelAnimationFrame` 애니메이션 |
| 32 | Primitive | [32.primitive.js](client/chapter/core/32.primitive.js) | 원시 값의 메서드 사용 원리, 임시 래퍼 객체(`String` / `Number` / `Boolean` / `Symbol`), 래퍼 객체가 없는 `null` / `undefined` |
| 33 | Number | [33.number.js](client/chapter/core/33.number.js) | 숫자 구분자(`100_000_000`), 지수 표기법(`1e8`, `1e-6`), 어림수(`Math.floor` / `round` / `ceil` / `trunc`), `Math.random` / `max` / `min` / `pow` / `abs` / `PI`, 범위 난수 함수(`getRandomMinMax`), 진법 표기(`0x` / `0o` / `0b`)와 `parseInt` / `toString(base)` |
| 34 | String | [34.string.js](client/chapter/core/34.string.js) | `length`, `charAt`, 문자열 불변성(새 문자열 생성), 부분 문자열 추출(`slice` / `substring`), 포함 여부 확인(`includes` / `startsWith` / `endsWith`), `trim`, `repeat` |
| 35 | Array (1) | [35.array-1.js](client/chapter/core/35.array-1.js) | 객체(키:값 집합) vs 배열(순서가 있는 값 집합), `split`으로 배열 선언, `length`, 요소 추가 / 제거(`unshift` / `push` / `shift` / `pop`), 큐(FIFO) vs 스택(LIFO), 배열 복사(`Array.from` / `slice` / 전개 구문), 다차원 배열(행렬) |
| 36 | Array (2) | [36.array-2.js](client/chapter/core/36.array-2.js) | 배열 메서드 분류(요소 순환 / 원형 파괴 / 새로운 배열 반환), `forEach`와 이벤트 바인딩, `toReversed` / `toSorted`, `map`(템플릿 리터럴 문자열 가공, 구조 분해 할당 매개변수)으로 만든 HTML 템플릿과 `insertAdjacentHTML` 렌더링, `find` / `filter` / `reduce`, `split` / `join`, `forEach` / `map` / `filter` / `reduce` 직접 구현, 커링(`curry` / `curryN`)과 `go` 함수 파이프라인 실습 |
| 37 | Try Catch | [37.tryCatch.js](client/chapter/core/37.tryCatch.js) | `try ... catch` 동작 알고리즘, 런타임 오류(예외), 동기적 동작과 비동기 처리 시 주의점, 오류 객체(`name` / `message` / `stack`), `throw`로 오류 생성(`Error` / `TypeError` / `SyntaxError` / `ReferenceError`), `finally` 절, `JSON.stringify` / `JSON.parse` 검증과 `catch({message})` 구조 분해 실습 |
| DOM 1 | BOM | [1.BOM.js](client/chapter/dom/1.BOM.js) | 호스트 환경과 브라우저 객체 모델(BOM), `window` / `location` / `navigator` / `screen` / `history` 객체 구조 분해, URL 구성 요소(`href` / `protocol` / `host` / `search` / `hash` / `pathname`), `URLSearchParams` 순환, 콜백으로 감싼 `geolocation.getCurrentPosition`, `mediaDevices.getUserMedia`로 `<video>`에 카메라 스트림 연결 |
| DOM 2 | DOM Traversal | [2.DOM.js](client/chapter/dom/2.DOM.js) | DOM 트리 탐색: 모든 노드용(`parentNode` / `childNodes` / `firstChild` / `lastChild` / `previousSibling` / `nextSibling`) vs 요소 노드 전용(`parentElement` / `children` / `firstElementChild` / `lastElementChild` / `previousElementSibling` / `nextElementSibling`), 문서 대상 찾기(`getElementById` / `getElementsByTagName` / `getElementsByClassName` / `querySelector` / `querySelectorAll` / `closest`)와 확인(`matches` / `contains`), 속성 선택자(`li[data-name="contact"]`)로 `nav` 메뉴 탐색 실습, `getNode` / `getNodes` 유틸 함수(`lib/dom/getNode.js`) |
| DOM 3 | Node Class | [3.nodeClass.js](client/chapter/dom/3.nodeClass.js) | DOM 노드 클래스 상속 구조(`EventTarget` → `Node` → `Element` → `HTMLElement` → `HTMLDivElement` 등), 노드 정보(`nodeType`, `nodeName` vs `tagName`), 노드 콘텐츠 읽기 / 쓰기(`innerHTML` getter / setter와 XSS 주의, `textContent`), `hidden` 프로퍼티(`display:none`과 동일), GSAP(`gsap.from`)의 `stagger` / `repeat` / `yoyo` 등장 애니메이션 |
| DOM 4 | Attribute | [4.attribute.js](client/chapter/dom/4.attribute.js) | HTML 속성(항상 문자열, 표준 속성만 DOM 프로퍼티로 매핑) vs DOM 프로퍼티(JS 객체, 대·소문자 구분), `hasAttribute` / `getAttribute` / `setAttribute` / `removeAttribute`, `attributes` 순환, 비표준 `data-*` 속성과 `dataset`, `getAttr` / `setAttr`를 통합한 `attr` 유틸 함수(`lib/dom/attr.js`, 빈 문자열 전달 시 속성 제거) |
| DOM 5 | Manipulation | [5.manipulation.js](client/chapter/dom/5.manipulation.js) | 노드 생성(`createElement` / `createTextNode` / `cloneNode`), 삽입 / 삭제(`append` / `prepend` / `before` / `after` / `replaceWith` / `remove`), 오래된 메서드(`appendChild` / `insertBefore` / `removeChild` / `replaceChild`), `insertAdjacentHTML` 위치(`beforebegin` / `afterbegin` / `beforeend` / `afterend`)와 HTML 템플릿 삽입, `insertBefore` / `insertFirst` / `insertLast` / `insertAfter` 유틸 함수(`lib/dom/insert.js`) |
| DOM 6 | Style | [6.style.js](client/chapter/dom/6.style.js) | 클래스 관리 프로퍼티(`className` 문자열 전체 vs `classList` 개별 조작), `classList.add` / `remove` / `toggle`, `style.cssText`로 스타일 전체 지정, 계산된 스타일 읽기(`getComputedStyle`, 읽기 전용), `addClass` / `removeClass` / `toggleClass` 유틸 함수(`lib/dom/css.js`, 쉼표 문자열·배열·객체로 다중 클래스 추가) |
| DOM 7 | Event | [7.event.js](client/chapter/dom/7.event.js) | 이벤트 핸들링 3가지 방법(HTML 속성 `onclick` / DOM 프로퍼티 `element.onclick` / `addEventListener`), `addEventListener` / `removeEventListener`, 마우스 좌표(`offsetX` / `offsetY`)와 `offsetWidth` / `offsetHeight`로 공 이동(`transform: translate`) 실습, `mousemove` / `resize` 이벤트 과다 호출 제어를 위한 `throttle` / `debounce` 유틸 함수(`lib/utils/throttle.js` / `debounce.js`) |
| DOM 8 | Bubbling & Capturing | [8.bubble.js](client/chapter/dom/8.bubble.js) | 이벤트 버블링(`section` → `article` → `p` 중첩 구조), `e.target` vs `e.currentTarget`, `stopPropagation`으로 전파 중단, 버블링되지 않는 `mouseenter` / `mouseleave`, 캡처링 |
| DOM 9 | Delegation | [9.delegation.js](client/chapter/dom/9.delegation.js) | 이벤트 위임(부모 `nav`에 핸들러 하나로 `li` 클릭 처리), `e.target.closest('li')`로 대상 탐색과 가드, `submit` 이벤트 `preventDefault`, 클래스(`classList.contains`) / 속성(`getAttribute('data-name')`) / `dataset` 기반 분기 처리 |
| 실습 1 | Random Dice | [main.js](client/main.js) · [cube.js](client/lib/animation/cube.js) | ES 모듈(`<script type="module">`) 진입점 `main.js`와 배럴 모듈(`lib/index.js` → `dom` / `math` / `utils` / `error` / `animation`) `import`, `getNodes` 결과 배열 구조 분해로 버튼 3개 선택, `isClicked` 플래그와 `setInterval` / `clearInterval`로 주사위 굴리기 ↔ 멈춤 토글, `diceAnimation` 유틸(`lib/animation/cube.js`): `gsap.utils.random`으로 눈 선택 → 눈별 `rotationX` / `rotationY` 테이블 → `gsap.to`의 `onComplete`에서 `attr(cube, 'dice', n)`로 결과 저장, CSS 3D 큐브(`perspective` / `transform-style: preserve-3d` / 6면 `rotateX` · `rotateY` + `translateZ`)와 `@keyframes` 배경 · 별 애니메이션, 기록 / 초기화 버튼 `disabled`와 레코드 테이블 `hidden` 상태(다음 단계 예정) |
| 실습 2 | Ajax · Promise · async / await | [xhr.js](client/lib/utils/xhr.js) · [delay.js](client/lib/utils/delay.js) | `XMLHttpRequest` 래퍼 `xhr` 유틸(`lib/utils/xhr.js`): `readyState` 진행 단계(0 uninitialized ~ 4 complete), `open` / `setRequestHeader`(`Object.entries` 순환, `DELETE` 제외) / `send(JSON.stringify(body))`, `readystatechange`에서 `readyState === 4`와 `status` 200 ~ 399 기준 `success(JSON.parse(response))` / `fail` 콜백 분기, 옵션 객체 매개변수 기본값 구조 분해(`{ method, url, success, fail, body, headers } = {}`), 함수 프로퍼티로 정의한 `xhr.get` / `post(url, body, success, fail)` / `put` / `delete` 단축 메서드, 콜백 대신 `new Promise`를 반환하는 `xhrPromise`(`defaultOptions`와 옵션 객체 · `headers` 중첩 병합(mixin), `resolve(JSON.parse(response))` / `reject({ message })`)와 `xhrPromise.get` / `post` / `put` / `delete`, `.then` / `.catch` 체이닝으로 JSONPlaceholder 유저 `website` 렌더링 / `delay` 유틸(`lib/utils/delay.js`): `setTimeout` 콜백 중첩(콜백 지옥)으로 `span` 이동 → 회전 → 복귀 애니메이션, `new Promise((resolve, reject))` 생성과 `.then` 체이닝, `isNumber` / `isObject` 타입 가드로 숫자(timeout) · 객체 옵션을 `defaultOptions`와 병합해 Promise를 반환하는 `delayP`(`export`), `return delayP()`로 이어 붙인 순차 `.then` 애니메이션, Promise를 사용하는 이유(콜백의 한계 · 가독성 · 순차 비동기 처리), `async` 함수는 항상 Promise 반환 · `await`로 Promise 결과 꺼내기와 실행 흐름 제어, `await xhrPromise.get`으로 PokéAPI 이미지를 `insertLast`하는 `getData` 실습 |
| 실습 3 | User List CRUD · 로그인 | [main.js](client/main.js) · [tiger.js](client/lib/utils/tiger.js) · [userList.js](client/lib/dom/userList.js) · [login.js](client/login.js) · [auth.js](client/lib/utils/auth.js) · [guard.js](client/guard.js) | `fetch` 래퍼 `tiger` 유틸(`lib/utils/tiger.js`): `async` 화살표 함수, `defaultOptions` · 옵션 객체 · `headers` 중첩 병합 후 `{ url, ...rest }` 구조 분해 → `await fetch(url, rest)`, `response.ok`일 때 `await response.json()` 결과를 `response.data`에 담아 반환, `tiger.get` / `post(url, body)` / `put` / `delete` 단축 메서드(`body`는 `JSON.stringify`) / MockAPI `users` 엔드포인트 유저 목록 CRUD(`main.js`): `async` 함수 `renderUserList`에서 `await tiger.get` → `await delayP(1000)` 순차 처리와 `try ... catch`로 통신 실패 시 빈 카드 렌더링, 템플릿 리터럴 + `insertLast` 기반 `renderSpinner` / `renderUserCard`(매개변수 기본값 구조 분해) / `renderEmptyCard` 렌더링 함수(`lib/dom/userList.js`), 색상 테이블을 `gsap.set`으로 순환 적용하는 `changeColor`(`lib/dom/color.js`), `gsap.to`의 `onComplete`로 스피너 제거와 `gsap.from` `stagger` 등장 애니메이션, 이벤트 위임(`closest('button')`)과 `dataset.index.slice(5)`로 id 추출 후 `tiger.delete` → `clearContent` → 재렌더링, `gsap.to(autoAlpha)` 팝업 폼 토글(`stopPropagation` / `preventDefault`)과 `tiger.post`로 유저 생성, ESLint `globals`에 `gsap: 'readonly'` 등록 / 로그인 · 회원가입 페이지(`login.html` / `login.js`): 탭 UI, 입력값 `trim` 검증과 `gsap.fromTo` 메시지 표시, `URLSearchParams`로 이메일 중복 조회(`check.ok`), `tiger.post` 회원가입 후 `saveAuthUser` → `confirm` → `location.href` 이동, `async` 함수 `handleLogin`: 입력값 `trim` 검증, `URLSearchParams({ email, password })` 쿼리로 `tiger.get` 조회(`&` / `=` 문자 인코딩), `response.ok` 실패 시 메시지 표시, `const [user] = response.data` 배열 구조 분해 후 `saveAuthUser` / 인증 유틸(`lib/utils/auth.js`): `STORAGE_KEY`로 `localStorage`에 사용자 저장 · 조회 · 삭제(`saveAuthUser` / `getAuthUser` / `removeAuthUser`), `JSON.parse` 실패 시 `try ... catch`로 저장값 제거 후 `null` 반환 / 페이지 가드(`guard.js`, `index.html`에서 `main.js`보다 먼저 로드): `getAuthUser()`가 `null`이면 `location.replace('./login.html')`로 이동(뒤로가기 기록 미생성, `location.href`와 비교), 로그인 상태면 `.auth-bar`에 `insertLast`로 환영 메시지 · 로그아웃 버튼 렌더링 후 `removeAuthUser` → 로그인 페이지 이동, 프론트엔드 가드의 한계(주소 직접 입력 · `localStorage` 조작으로 우회 가능, 토큰 검증은 서버 책임) |
| 실습 4 | Web Component | [main.js](client/main.js) · [Button.js](client/components/Button/Button.js) · [Card.js](client/components/Card/Card.js) · [practice.js](client/practice.js) | Custom Elements API: `HTMLElement` 상속 클래스와 `customElements.define`, 생명주기 콜백(`constructor` / `connectedCallback` / `disconnectedCallback` / `attributeChangedCallback`)과 `static get observedAttributes`, `my-button`(`addEventListener`로 클릭 시 `dataset.value` 증가 → 속성 변경 감지 후 `render`), 내장 요소 확장(`HTMLButtonElement` + `{ extends: 'button' }` → `<button is="hello-button">`) / Shadow DOM: `attachShadow({ mode: 'open' })`와 `shadowRoot`, `<template>` 요소의 `content.cloneNode(true)`로 내용 복제, 캡슐화된 `<style>`, 기본 `<slot>` vs 이름 있는 슬롯(`slot="birthday"`)으로 외부 콘텐츠 주입 / `c-card` 컴포넌트(`components/Card/Card.js`): 속성(`showImage` / `title`)을 `getAttribute` + 기본값으로 `state`에 저장, `render`에서 구조 분해 후 조건부 `<figure>` 렌더링, Shadow DOM 안 `@import`로 `Card.css` 적용, `a11y-hidden` 캡션, `<slot>`으로 부제목 주입, `main.js`에서 `import`로 컴포넌트 등록 |
| 실습 5 | Todo List (Web Component) | [main.js](client/main.js) · [TodoApp.js](client/components/Todo/TodoApp.js) · [TodoItem.js](client/components/Todo/TodoItem.js) | 부모 · 자식 컴포넌트 구조(`c-todo-app` → `c-todo-item`), `TodoApp.js`에서 `TodoItem.js`를 `import`해 등록 / `c-todo-app`(`components/Todo/TodoApp.js`): `<template>` + Shadow DOM, `state`(`todos` / `nextId`)와 전개 구문 병합 후 `render`를 호출하는 `setState`, 불변성을 지킨 추가 · 토글 · 삭제(`[...todos, item]` / `map` / `filter`), `submit` 이벤트 `preventDefault`와 입력값 `trim` 검증 · `focus`, `bind(this)`로 고정한 핸들러, `replaceChildren`과 `createElement` · `setAttribute`(`todo-id` / `done`) · `textContent`(slot으로 들어갈 light DOM)로 목록 렌더링 / `c-todo-item`(`components/Todo/TodoItem.js`): `observedAttributes`(`done`)와 `attributeChangedCallback`, `getAttribute` 기반 getter(`done` / `todoId`), `CustomEvent`(`todo-toggle` / `todo-remove`)를 `bubbles` · `composed: true`로 Shadow 경계 밖 부모에 전달 → 부모 `shadowRoot`에서 `e.detail.id`로 수신, `disconnectedCallback`에서 `removeEventListener` 정리, `checked` · `aria-label` · `classList.toggle('done')` 상태 반영, `a11y-hidden` 레이블 · `@import`로 `TodoApp.css` / `TodoItem.css` 적용 |

## 폴더 구조

```
EST16-core-js
├── client
│   ├── chapter
│   │   └── core          # 챕터별 학습 코드
│   ├── index.html        # 학습 코드를 불러오는 HTML
│   └── index.js
├── server
│   └── index.js          # Node.js 환경 실습
├── eslint.config.mjs
├── .prettierrc.cjs
└── package.json
```

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5500)
npm run dev
```

학습할 챕터는 [client/index.html](client/index.html)의 `<script>` 경로를 바꿔서 불러옵니다.

```html
<script defer src="./chapter/dom/9.delegation.js"></script>
```

브라우저 개발자 도구(F12)의 **Console** 탭에서 실행 결과를 확인합니다.

## 개발 도구

- [live-server](https://www.npmjs.com/package/live-server) — 로컬 개발 서버 / 자동 새로고침
- [nodemon](https://www.npmjs.com/package/nodemon) — Node.js 파일 변경 감지 실행
- [ESLint](https://eslint.org/) — 코드 품질 검사
- [Prettier](https://prettier.io/) — 코드 포맷팅

## License

MIT © 범쌤
