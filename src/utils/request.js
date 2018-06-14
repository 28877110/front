import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = store.getters
  }
  return config
}, error => {
  console.log(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log('request,res' + res)
    return response.data
  },
  error => {
    console.log('request,err' + error)
  }
)
export default service
