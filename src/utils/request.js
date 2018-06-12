import axios from 'axios'
import store from '../store'
import {getToken} from './auth'

const service = axios.create({
  baseURL: '127.0.0.1：4000',
  timeout: 5000
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = getToken()
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
