import axios from 'axios'

const base = axios.create({baseURL: 'https://kaylaa-api.herokuapp.com/'})

base.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`
    return req
})

export const fetchCampaigns = (credentials) => base.post('/campaigns', credentials, {withCredentials: true})

export const saveCampaign = (credentials) => base.post('/campaigns/save', credentials, {withCredentials: true})