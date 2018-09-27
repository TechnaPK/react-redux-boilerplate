import { generateErrorMessage } from '../../../functions/static'
import { setLoggedIn, setLoggedOut } from '../actions-auth'

//** CHECK AUTHENTICATION **//
export const checkAuth = () => {
    return (dispatch, getState) => {

        axios.post(window.baseURL + '/api/auth/check')
            .then(response => response.data)
            .then(data => {
                if (data.auth) {
                    // console.log( data.user )
                    dispatch(setLoggedIn(data.user))
                }
            })
            .catch(error => console.log(error))
    }
}

//** LOGOUT USER **//
export const logOut = () => {

    return (dispatch, getState) => {

        window.showLoading()

        axios.get(window.baseURL + '/api/auth/logout')
            .then(response => response.data)
            .then(data => {
                window.hideLoading()
                window.notify("Successfully Logged Out")
                dispatch(setLoggedOut())
            })
            .catch(error => window.hideLoading())

    }

}

//** LOGIN WITH FACEBOOK **//
export const facebookLogin = (fbResponse, successCB, failureCB) => {

    return (dispatch, getState) => {

        axios.post(window.baseURL + '/api/auth/facebookAuthToken', { access_token: fbResponse.accessToken })
            .then(response => response.data)
            .then(data => processAuthData(data, dispatch, successCB, failureCB))
            .catch(error => processAuthError(error, failureCB))

    }

}

//** LOGIN USER **//
export const login = (creds, successCB, failureCB) => {
    return (dispatch, getState) => {
        axios.post(window.baseURL + '/api/auth/login', creds)
            .then(response => response.data)
            .then(response => response.data)
            .then(data => processAuthData(data, dispatch, successCB, failureCB))
            .catch(error => processAuthError(error, failureCB))
    }
}

//** AUTHENTICATE USER **//
const processAuthData = (data, dispatch, successCB, failureCB) => {
    if (!data.auth)
        return failureCB(data.message)

    successCB(data.message)
    return dispatch(setLoggedIn(data.user))
}

const processAuthError = (error, failureCB) => {
    let errorMessage = generateErrorMessage(error)
    return failureCB(errorMessage);

}
