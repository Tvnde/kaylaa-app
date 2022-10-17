import axios from 'axios'

const base = axios.create({baseURL: 'https://kaylaa-api.herokuapp.com'})

base.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`
    return req
})

export const register = (credentials) => base.post('/auth/register', credentials, {withCredentials: true})

export const login = (credentials) => base.post('/auth/login', credentials, {withCredentials: true})

export const fetchCampaigns = (credentials) => base.post('/campaigns', credentials, {withCredentials: true})

export const saveCampaign = (credentials) => base.post('/campaigns/save', credentials, {withCredentials: true})

export const fetchInfluencers = (credentials) => base.post('/creators', credentials, {withCredentials: true})