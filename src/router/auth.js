import Cookies from 'js-cookie'
import axios from 'axios'
const TokenKey = 'Authorization'

export function setToken(token) {
  Cookies.set(TokenKey, token)
	// 创建axios实例
	axios.defaults.headers.common['Authorization'] = token
}

export function getToken() {
    return {
        token: Cookies.get(TokenKey)
    }
}
