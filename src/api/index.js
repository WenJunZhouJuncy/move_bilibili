import http from '@/assets/js/request.js'
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
  user: (data) => {
    return http.request({
      url: '/user',
      method: 'post',
      data
    })
  }
}
export default apiObj