
export function isLogin({userId, userPw}) {
  if (userId === 'koy321' && userPw === '123456') {
    return {
      access_token: 'jx84e3kjew1njej3al2q9w',
      refresh_token: 'g2rjfd7452bjfgn;a&*(jkehj',
    };
  } else {
    return undefined;
  }
}

export function logout() {
  console.log('localStorage set logout!');
  window.localStorage.setItem('logout', Date.now());
}