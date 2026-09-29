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
| 18 | Loop (5) | [18.loop-5.js](client/chapter/core/18.loop-5.js) | `for ~ of` 문, iterable / enumerable 개념, 유사 배열(array-like), `Object.keys` / `values` / `entries` |

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
<script defer src="./chapter/core/18.loop-5.js"></script>
```

브라우저 개발자 도구(F12)의 **Console** 탭에서 실행 결과를 확인합니다.

## 개발 도구

- [live-server](https://www.npmjs.com/package/live-server) — 로컬 개발 서버 / 자동 새로고침
- [nodemon](https://www.npmjs.com/package/nodemon) — Node.js 파일 변경 감지 실행
- [ESLint](https://eslint.org/) — 코드 품질 검사
- [Prettier](https://prettier.io/) — 코드 포맷팅

## License

MIT © 범쌤
