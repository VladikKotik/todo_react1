import axios from 'axios'
import TokenService, {ID_TOKEN_HEADER_KEY} from './token.service'

class ApiService {

  init() {
    axios.defaults.baseURL = 'http://localhost:3000/api'
  }

  setHeader() {
    axios.defaults.headers.common[ID_TOKEN_HEADER_KEY] = TokenService.getToken()
  }

  clearHeader() {
    axios.defaults.headers.common[ID_TOKEN_HEADER_KEY] = ''
  }

  post(resource, params) {
    return axios.post(resource, params)
  }

  get(resource, params) {
    return axios.get(resource, params)
  }
}

export default new ApiService()