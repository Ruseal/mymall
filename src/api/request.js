import axios from 'axios'

export function request(config) {
  const instence = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instence.interceptors.request.use(config => {
    console.log('请求发送服务器成功');
    return config
  }, err => { })
  instence.interceptors.response.use(res => {
    console.log('服务器响应成功')
    return res.data
  }, err => console.log('服务器响应失败'))

  return instence(config)
}
