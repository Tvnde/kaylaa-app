export default (message = null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem('profile', JSON.stringify({...action?.payload.user}))
            return null
        case 'LOGOUT_SUCCESS':
            localStorage.removeItem('profile')
            return null
        case 'LOGIN_FAIL':
            return action.payload.message
        case 'LOGIN_LOADING':
            return null
        default:
            return message
    }
}