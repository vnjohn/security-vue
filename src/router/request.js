import axios from 'axios'
import {getToken} from '@/router/auth.js'
// 创建axios实例
axios.defaults.headers.common['Authorization'] = Cookies.get('Authorization')
