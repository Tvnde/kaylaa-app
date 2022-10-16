import { combineReducers } from "redux"

import auth from "./auth"
import campaigns from './campaigns'
import influencers from './influencers'

export default combineReducers({
    auth, campaigns, influencers
})