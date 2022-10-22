import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/types"
import * as api from '../api'

export const register = (values, navigate) => async (dispatch) => {
    try {
        const { data } = await api.register(values)
        console.log(data)
        await dispatch({type: LOGIN_SUCCESS, payload: data})
        if(data.user.role === "creator"){ navigate('/')}
        else {navigate('/admin')}
    } catch (error) {
        console.log(error.message)
    }
}

export const login = (values, navigate) => async (dispatch) => {
    try {
        const {data} = await api.login(values)
        await dispatch({type: LOGIN_SUCCESS, payload: data})
        if(data.user.role === "creator"){ navigate('/')}
        else {navigate('/admin')}
    } catch (error) {
        console.log(error.response.data.message)
        await dispatch({type: LOGIN_FAIL, payload: {message: error.response.data.message}})
    }
}