export default (user = null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem('profile', JSON.stringify({...action?.payload.user}))
            return action.payload.user
        case 'LOGOUT_SUCCESS':
            localStorage.removeItem('profile')
            return null 
        default:
            return user
    }
}