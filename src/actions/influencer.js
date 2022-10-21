import { INFLUENCER_FETCH, INFLUENCER_SAVE } from "../constants/types"
import * as api from '../api'
import "../phyllo/initialize-phyllo"
import { Phyllo } from "react-phyllo-connect"
import "../phyllo/initialize-phyllo"

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
        console.log(response)
        let config = {env: 'sandbox', userId: response.data.id, token: response.data.token, appName: "Kaylaa", redirectURL: window.location.href }
        const phyllo = PhylloConnectSDK.initialize(config)
        phyllo.open()
    } catch (error) {
        console.log(error.body)
    }
}