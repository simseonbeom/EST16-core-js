import { getNode, tiger } from "./lib/index.js";




const END_POINT = 'https://6ad6fa09f71f154ac4878f25.mockapi.io/users';


function showMessage (message){
  authMessage.textContent = message;
  gsap.fromTo(authMessage,{opacity:0,y:-6},{opacity:1,y:0});
}


const loginForm = getNode('.login-form');
const signupForm = getNode('.signup-form');
const authMessage = getNode('.auth-message');


async function handleSignup(e){
  e.preventDefault();

  const username = getNode('#signupName').value.trim();
  const email = getNode('#signupEmail').value.trim();
  const website = getNode('#signupSite').value.trim();
  const password = getNode('#signupPassword').value.trim();
  

  // validation
  if(!username || !email || !website || !password){
    showMessage('모든 항목을 입력해주세요.');
    return;
  }

  // 중복 처리 / 같은 이메일이 이미 있는지 조회 / 있으면 200 => 중복

  const check = await tiger.get(`${END_POINT}?${new URLSearchParams({email})}`);
  
  if(check.ok){
    showMessage('이미 가입된 이메일입니다.');
    return;
  }

  const response = await tiger.post(END_POINT,{username, email, website, password});
  
  if(!response.ok){
    showMessage('회원가입에 실패했습니다!');
    return;
  }


  if(confirm('회원가입이 완료되었습니다. 자동 로그인 후 메인 페이지로 넘어갑니다.')){
    location.href = './index.html';
  }
  



}



signupForm.addEventListener('submit',handleSignup);


















