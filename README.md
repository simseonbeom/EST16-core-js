# EST16 Core JS — practice

> **EST-오르미 프론트엔드 부트캠프** 자바스크립트 실습 브랜치입니다.
>
> 챕터별 문법 학습(`main`)에서 익힌 내용을 **파트별 실습 과제**로 구현합니다.

## 브랜치 안내

이 저장소는 목적에 따라 브랜치를 나눠서 관리합니다. **브랜치마다 `client` 폴더의 구성이 다르므로**, 보려는 내용에 맞는 브랜치로 이동해야 합니다.

| 브랜치 | 내용 | `client` 구성 |
| --- | --- | --- |
| [`main`](../../tree/main) | 코어 문법 37챕터 + DOM 9챕터 학습 코드 | `chapter/core`, `chapter/dom`, `index.html` |
| [`dom`](../../tree/dom) | DOM 챕터 작업용 (현재 `main`과 동일) | `main`과 동일 |
| **`practice`** (현재) | **파트별 실습 과제 (part01 ~ part04)** | `js/`, `style/`, `assets/`, `part0*.html` |

```bash
# 챕터별 문법 학습 코드를 보고 싶다면
git switch main

# 파트별 실습 과제를 보고 싶다면
git switch practice
```

> ⚠️ `practice` 브랜치에는 `client/chapter` 학습 코드가 없습니다.
> 챕터 코드는 `main`에 그대로 남아 있으며, 두 브랜치는 **합치지 않고 따로 관리**합니다.
> 공용 유틸(`client/lib`)만 양쪽에서 함께 발전시킵니다.

## 실습 목차

| Part | 주제 | 파일 | 주요 내용 |
| --- | --- | --- | --- |
| 01 | Vanilla JS 갤러리 | [part01.html](client/part01.html) · [part01.js](client/js/part01.js) | 이벤트 위임(`addEventListener` + `closest`), `is-active` 클래스 토글, `dataset`으로 인덱스 수집, 데이터 배열 기반 `src` / `alt` 교체, GSAP `SplitText` 글자 등장 애니메이션 |
| 02 | jQuery 갤러리 | [part02.html](client/part02.html) · [part02.js](client/js/part02.js) | part01을 jQuery로 재구현, `.on('click', 'li', ...)` 이벤트 위임, `removeClass` / `addClass`, `attr()` 다중 설정, `stop(true,true)` + `fadeOut` / `fadeIn` 전환, jQuery의 한계(용량·SPA 미지원) 정리 |
| 03 | Swiper 슬라이드 | [part03.html](client/part03.html) · [part03.js](client/js/part03.js) | 외부 라이브러리(Swiper 12) CDN 연결, `new Swiper('.swiper', { loop: true })`, `swiper-wrapper` / `swiper-slide` 마크업 구조 |
| 04 | Facebook UI | [part04.html](client/part04.html) · [part04.js](client/js/part04.js) | 좋아요 / 댓글 / 더보기 메뉴 UI 마크업과 스타일 구성 (**스크립트는 작성 예정**) |

### 공용 DOM 유틸 (`client/lib/dom`)

모든 파트가 공유하는 유틸 함수입니다. 번들러 없이 `<script defer>`로 순서대로 불러와 전역 함수로 사용합니다.

| 파일 | 함수 | 설명 |
| --- | --- | --- |
| [type.js](client/lib/dom/type.js) | `typeOf`, `isString`, `isObject`, `isArray`, `isNull`, `isUndefined` 등 | `Object.prototype.toString` 기반 정확한 타입 검사 |
| [getNode.js](client/lib/dom/getNode.js) | `getNode`, `getNodes` | `querySelector` / `querySelectorAll` 래퍼, 컨텍스트 지정 가능 |
| [attr.js](client/lib/dom/attr.js) | `getAttr`, `setAttr`, `attr` | 속성 읽기·쓰기 통합, 빈 문자열 전달 시 속성 제거 |
| [css.js](client/lib/dom/css.js) | `addClass`, `removeClass`, `toggleClass` | 문자열(공백·쉼표) / 배열 / 객체로 다중 클래스 조작 |
| [insert.js](client/lib/dom/insert.js) | `insertBefore`, `insertFirst`, `insertLast`, `insertAfter` | `insertAdjacentHTML` 네 가지 위치 래퍼 |
| [bindEvent.js](client/lib/dom/bindEvent.js) | `bindEvent` | 이벤트 등록 후 **해제 함수(cleanup)를 반환** |

> `<script defer>` 로딩 순서는 `type.js` → `getNode.js` → 나머지 유틸 → 파트 스크립트입니다.
> `attr.js` / `css.js` / `insert.js`가 `isString`과 `getNode`에 의존하므로 순서를 바꾸면 동작하지 않습니다.

## 폴더 구조

```
EST16-core-js (practice)
├── client
│   ├── assets
│   │   ├── part01            # 갤러리 이미지 (visual1~4)
│   │   └── part04            # 프로필·배경 이미지
│   ├── js
│   │   ├── part01.js         # Vanilla JS 갤러리
│   │   ├── part02.js         # jQuery 갤러리
│   │   ├── part03.js         # Swiper 슬라이드
│   │   └── part04.js         # Facebook UI (작성 예정)
│   ├── lib
│   │   └── dom               # 공용 DOM 유틸 (전역 함수)
│   ├── style
│   │   ├── reset.css         # 공통 리셋
│   │   ├── part01.css        # part01 · part02 공용
│   │   ├── part03.css
│   │   └── part04.css
│   ├── part01.html
│   ├── part02.html
│   ├── part03.html
│   └── part04.html
├── server
│   └── index.js              # Node.js 환경 실습
├── eslint.config.mjs
├── .prettierrc.cjs
└── package.json
```

## 시작하기

```bash
# 저장소 복제 후 practice 브랜치로 이동
git switch practice

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

`live-server`의 루트가 `client`이므로, 브라우저에서 아래 주소로 각 파트를 확인합니다.

- http://localhost:5500/part01.html
- http://localhost:5500/part02.html
- http://localhost:5500/part03.html
- http://localhost:5500/part04.html

실행 결과와 로그는 개발자 도구(F12)의 **Console** 탭에서 확인합니다.

## 사용 라이브러리 (CDN)

| 라이브러리 | 사용 파트 | 용도 |
| --- | --- | --- |
| [GSAP 3.15 + SplitText](https://gsap.com/) | part01 | 제목 글자 단위 등장 애니메이션 |
| [jQuery 4.0](https://jquery.com/) | part02 | 셀렉터·이벤트 위임·fade 전환 |
| [Swiper 12](https://swiperjs.com/) | part03 | 슬라이드 UI |

## 개발 도구

- [live-server](https://www.npmjs.com/package/live-server) — 로컬 개발 서버 / 자동 새로고침
- [nodemon](https://www.npmjs.com/package/nodemon) — Node.js 파일 변경 감지 실행
- [ESLint](https://eslint.org/) — 코드 품질 검사 (`lib` 전역 함수는 `eslint.config.mjs`에 등록)
- [Prettier](https://prettier.io/) — 코드 포맷팅

## License

MIT © 범쌤
