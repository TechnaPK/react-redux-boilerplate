import axios from 'axios'

export const setLoggedIn = (user) => {

    return {
        type: 'SET_LOGGED_IN',
        payload: { user: user }
    }

}

export const setLoggedOut = () => {

    return {
        type: 'SET_LOGGED_OUT',
        payload: 1
    }

}
