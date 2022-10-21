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

export const connectSDKAction = (id) => async(dispatch) => {
    try {
        console.log(id)
        let response = await api.connectSDKAction({id})
        return response
    } catch (error) {
        console.log(error.body)
    }
}