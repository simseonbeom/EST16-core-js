


const STORAGE_KEY = 'auth-user';

// 로그인 성공 -> 유저 정보를 로컬스토리지에 저장
export function saveAuthUser(user){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(user));
}


// 지금 로그인된 유저를 조회 / 로그인 안 됐으면 null
export function getAuthUser(){
  const data = localStorage.getItem(STORAGE_KEY);

  if(!data) return null;

  try{
    return JSON.parse(data);
  }
  catch{
    removeAuthUser();
    return null;
  }

}


// 로그아웃 -> 로컬스토리지에 저장해둔 유저의 정보를 삭제 
export function removeAuthUser(){
  localStorage.removeItem(STORAGE_KEY);
}





































