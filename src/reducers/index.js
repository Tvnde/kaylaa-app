import { combineReducers } from "redux"

import auth from "./auth"
import campaigns from './campaigns'

export default combineReducers({
    auth, campaigns
})