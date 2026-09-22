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
<script src="./chapter/core/7.typeConversion.js"></script>
```

브라우저 개발자 도구(F12)의 **Console** 탭에서 실행 결과를 확인합니다.

## 개발 도구

- [live-server](https://www.npmjs.com/package/live-server) — 로컬 개발 서버 / 자동 새로고침
- [nodemon](https://www.npmjs.com/package/nodemon) — Node.js 파일 변경 감지 실행
- [ESLint](https://eslint.org/) — 코드 품질 검사
- [Prettier](https://prettier.io/) — 코드 포맷팅

## License

MIT © 범쌤
