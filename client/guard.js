import { getAuthUser, getNode, insertLast, removeAuthUser } from "./lib/index.js";




// 지금 하는 가드 처리는 프론트엔드에서만 막는 행위입니다. 주소창에 직접 index.html을 치거나,
// localStorage를 강제로 푸시 하면 뚫림, 진짜 보호는 서버가 해야 합니다.
// (json-server-auth, pocketbase, supabase, firebase... 처럼 토큰을 검사하는 서버가 필요하다.)


const user = getAuthUser();


if(!user){
  location.replace('./login.html'); // 뒤로가기 기록을 남기지 않는다.
  // location.href = './login.html';
  
}

if(user){
  const authBar = getNode('.auth-bar');
  insertLast(authBar,`
    <span><strong>${user.username}</strong>님 반갑습니다 😄</span>
    <button type="button" class="logout">로그아웃</button>
  `)

  getNode('.logout').addEventListener('click',()=>{
    removeAuthUser();
    location.replace('./login.html');
  })
}









