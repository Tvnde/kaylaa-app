import { CAMPAIGN_FETCH, CAMPAIGN_SAVE } from "../constants/types"
import * as api from '../api'

export const saveCampaign = (values) => async(dispatch) => {
    try {
        const {data} = await api.saveCampaign(values)
        console.log(data)
        dispatch({type: CAMPAIGN_SAVE, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchCampaigns = () => async(dispatch) => {
    try {
        const {data} = await api.fetchCampaigns()
        console.log(data)
        dispatch({type: CAMPAIGN_FETCH, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}