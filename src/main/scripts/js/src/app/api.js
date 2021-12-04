import axios from 'axios'

export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const getUriEncodedPath = (path = []) => `/${path.map(s => encodeURIComponent(s)).join('/')}`

class Service {
  get (pathSegments = [], params = {}, config = {}, headers = defaultHeaders) {
    return axios.get(getUriEncodedPath(pathSegments), {
      headers,
      ...config,
      params: params
    })
  }

  post (pathSegments = [], body = {}, params = {}, config = {}, headers = defaultHeaders) {
    return axios.post(getUriEncodedPath(pathSegments), body, {
      headers,
      ...config,
      params
    })
  }

  patch (pathSegments = [], body = {}, params = {}, config = {}, headers = defaultHeaders) {
    return axios.patch(getUriEncodedPath(pathSegments), body, {
      headers,
      ...config,
      params: params
    })
  }

  put (pathSegments = [], body = {}, params = {}, config = {}, headers = defaultHeaders) {
    return axios.put(getUriEncodedPath(pathSegments), body, {
      headers,
      ...config,
      params: params
    })
  }

  delete (pathSegments = [], params = {}, config = {}, headers = defaultHeaders) {
    return axios.delete(getUriEncodedPath(pathSegments), {
      headers,
      ...config,
      params: params
    })
  }
}

const API = new Service()
export default API
