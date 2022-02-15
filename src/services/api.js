import axios from 'axios';

export const key ="39432882f9199eb3e7f2ea511d1df16b311ae134"

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;