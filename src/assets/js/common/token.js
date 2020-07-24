import Cookies from 'js-cookie';

const $COOKIES = {
  getToken(key) {
    return Cookies.get(key)
  },
  getHeaderImg(key) {
    return Cookies.get(key)
  },
  getUserId(key) {
    return Cookies.get(key)
  },
  setToken(key,val) {
    Cookies.set(key,val)
  },
  setUserId(key, val) {
    Cookies.set(key,val)
  },
  setHeaderImg(key, val) {
    Cookies.set(key,val)
  },
  removeToken(key) {
    Cookies.remove(key)
  }
}


export default $COOKIES