export default (campaigns = [], action) => {
    switch (action.type) {
        case 'CAMPAIGN_SAVE':
            return campaigns
        case 'CAMPAIGN_FETCH':
            return action.payload.campaigns
        case 'CAMPAIGN_GET':
            return action.payload.campaigns
        case 'CAMPAIGN_DELETE':
            return action.payload.campaigns
        default:
            return campaigns
    }
}