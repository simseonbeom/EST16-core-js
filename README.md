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
<script defer src="./chapter/core/34.string.js"></script>
```

브라우저 개발자 도구(F12)의 **Console** 탭에서 실행 결과를 확인합니다.

## 개발 도구

- [live-server](https://www.npmjs.com/package/live-server) — 로컬 개발 서버 / 자동 새로고침
- [nodemon](https://www.npmjs.com/package/nodemon) — Node.js 파일 변경 감지 실행
- [ESLint](https://eslint.org/) — 코드 품질 검사
- [Prettier](https://prettier.io/) — 코드 포맷팅

## License

MIT © 범쌤
