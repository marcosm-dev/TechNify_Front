import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async signup(newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },
  async login(user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },
  async getAllEvents() {
    let url = '/events?'
    /*  if (date_start) {
       url += `date_start=${date}&`
     } */

    // if (minWidth && maxWidth) {
    //   url += `minWidth=${minWidth}&maxWidth=${maxWidth}&`
    // }
    const response = await API.get(url)
    return response.data
  }
}