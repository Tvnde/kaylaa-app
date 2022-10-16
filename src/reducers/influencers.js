export default (influencers = [], action) => {
    switch (action.type) {
        case 'INFLUENCER_SAVE':
            return influencers
        case 'INFLUENCER_FETCH':
            return action.payload.influencers
        case 'INFLUENCER_GET':
            return action.payload.influencers
        case 'INFLUENCER_DELETE':
            return action.payload.influencers
        default:
            return influencers
    }
}