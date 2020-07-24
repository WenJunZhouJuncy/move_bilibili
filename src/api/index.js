import http from '@/assets/js/request.js'
import $COOKIES from '@/assets/js/common/token.js'
var apiObj = {
  register: (data) => {
    return http.request({
      url: '/register',
      method: 'post',
      data
    })
  },
  login: (data) => {
    return http.request({
      url: '/login',
      method: 'post',
      data
    })
  },
  user: () => {
    return http.request({
      url: '/user/' + $COOKIES.getUserId('id'),
      method: 'get',
    })
  },
  uploaderHeaderImg: (data) => {
    return http.request({
      url: '/upload/',
      method: 'post',
      data
    })
  },
  editUserInfo: (data) => {
    return http.request({
      url: '/update/' + $COOKIES.getUserId('id'),
      method: 'post',
      data
    })
  },
  category: () => {
    return http.request({
      url: '/category',
      method: 'get',
    })
  }
}
export default apiObj