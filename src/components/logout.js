import { useEffect, dispatch, useEffect} from 'react'


function reducer(state, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.token, authenticated: action.result };
    case 'DELETE_TOKEN':
      return { ...state, token: null, authenticated: false };
    default:
      return state;
  }
}


const handleLogout = () => {
  dispatch({
    type: 'DELETE_TOKEN',
  });
  auth.logout();
};

useEffect(() => {
  window.addEventListener('storage', (e) => {
    if (e.key === 'logout') {
      console.log('로그아웃 감지');
      dispatch({
        type: 'DELETE_TOKEN',
      });
    }
  });
}, []);