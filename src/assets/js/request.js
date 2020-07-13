import axios from 'axios';

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';

const http = axios.create({ //创建拦截器
  baseURL: BASEURL, //   地址/devApi   == "http://www.web-jshtml.cn/productapi"
  timeout: 15000, //请求过程15秒超时
});

// 添加请求拦截器
http.interceptors.request.use( // 在发送请求之前做些什么
  function (config) {
    // 添加头部信息
    // config.headers.Tokey = getToken();
    // config.headers.UserName = getUsername();
    // console.log(config.headers);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use((response) => {
  // console.log(response);
  // 对响应数据做点什么  response请求成功返回的数据
    if (response.status !== 200) {
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  }, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default http