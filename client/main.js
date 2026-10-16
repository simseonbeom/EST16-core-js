// module을 적극적으로 사용하여 만들어주세요

import data from './data/data.js';
import {
  shake,
  addClass,
  getRandom,
  showAlert,
  insertLast,
  removeClass,
  clearContent,
  getNode as $,
  copyClipboard,
} from './lib/index.js';

// 1. 주접 떨기 버튼을 클릭하는 함수
//      - 주접 떨기 버튼 가져오기
//      - 클릭 이벤트 연결

// 2. input값 가져오기
//      - 콘솔에 출력

// 3. data 함수에서 주접 1개를 꺼내기
//      - n번째 random 주접을 꺼내기
//      - Math.random()

// 4. result에 랜더링하기
//      - insertLast()

// 5. 예외 처리
//      - 이름이 없을 경우 에러 처리
//      - 숫자만 들어올 경우 에러 처리

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replaceAll(' ', '') === '') {
    showAlert('.alert-error', '공백은 허용되지 않습니다.');
    shake(nameField);
    return;
  }

  if (!isNaN(Number(name))) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요.');
    shake(nameField);
    return;
  }

  clearContent(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;
  copyClipboard.then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
