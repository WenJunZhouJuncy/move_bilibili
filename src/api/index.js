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
  }
}
export default apiObj