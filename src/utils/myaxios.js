import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = 'http://192.168.123.223:3000'
localStorage.setItem('music_baseURL', axios.defaults.baseURL)

export default axios