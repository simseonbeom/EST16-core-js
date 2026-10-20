


const STORAGE_KEY = 'auth-user';


export function saveAuthUser(user){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(user));
}




export function removeAuthUser(){
  localStorage.removeItem(STORAGE_KEY);
}





































