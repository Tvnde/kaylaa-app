import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/types"
import * as api from '../api'

export const register = (values, navigate) => async (dispatch) => {
    try {
        const { data } = await api.register(values)
        console.log(data)
        await dispatch({type: LOGIN_SUCCESS, payload: data})
        if(data.user.role === "creator"){ navigate('/dashboard')}
        else {navigate('/admin')}
    } catch (error) {
        console.log(error.message)
    }
}