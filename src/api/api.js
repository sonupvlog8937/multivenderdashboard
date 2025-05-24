import axios from 'axios'
const api = axios.create({
    baseURL: 'https://multibackend-acp8.onrender.com/api'
})
export default api