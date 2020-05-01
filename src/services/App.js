import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async signup (newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },
  async login (user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },
  async getAllEvents () {
    const url = '/events?'
    /*  if (date_start) {
       url += `date_start=${date}&`
     } */

    const response = await API.get(url)
    return response.data
  },
  async getOrganizerEvents () {
    const response = await API.get('/me/events/myevents', {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async createEvent (event) {
    const response = await API.post('/me/events', event, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async updateEvent (eventId, event) {
    const response = await API.put(`/me/events/${eventId}`, event, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async deleteEvent (eventId) {
    const response = await API.delete(`/me/events/${eventId}`, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async getTypes () {
    const response = await API.get('/categories')
    return response.data
  },
  async getInfo (event) {
    const response = await API.get('/events/' + event)
    return response.data
  },
  async editProfile (userUpdate) {
    const response = await API.put('/me', userUpdate, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async deleteProfile (userId) {
    const response = await API.delete('/me', {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async editProfileOrganizer (organizerUpdate) {
    const response = await API.put('/me', organizerUpdate, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  }
}
