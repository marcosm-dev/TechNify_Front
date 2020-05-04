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
  async getUserInfo () {
    console.log('dentro')
    const response = await API.get('/me', {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async getAllEvents (eventType, dates) {
    let url = '/events?'
    if (eventType && dates) {
      url += `event_type=${eventType}&date_start=${dates}`
    } else if (dates) {
      url += `date_start=${dates}&`
    } else if (eventType) {
      url += `event_type=${eventType}&`
    }
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
  async getWishes () {
    const response = await API.get('/me/events/wishes', {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async createEvent (newEvent) {
    const response = await API.post('/me/events', newEvent, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async updatesEvent (eventId, event) {
    const response = await API.put(`/me/events/${eventId}`, event, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async deteleWishes (eventId) {
    const response = await API.delete(`/me/events/wishes/${eventId}`, {
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
  async updateProfile (userUpdates) {
    const response = await API.put('/me', userUpdates, {
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
  async addtoWish (eventId) {
    const wish = {
      wishes_list: eventId
    }
    const response = await API.post('/me/events/wishes', wish, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },
  async changePassword (newPassword) {
    console.log(newPassword)
    const response = await API.put('/me/password', newPassword, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  }
}
