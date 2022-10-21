import { INFLUENCER_FETCH, INFLUENCER_SAVE } from "../constants/types"
import * as api from '../api'

export const fetchInfluencers  = () => async(dispatch) => {
    try {
        let {data} = await api.fetchInfluencers()
        console.log(data)
        dispatch({type: INFLUENCER_FETCH, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const connectSDKAction = (user_id) => async(dispatch) => {
    try {
        console.log(user_id)
        let response = await api.connectSDKAction(user_id)
        console.log(response)
    } catch (error) {
        console.log(error.body)
    }
}