
const initialState = { loggedIn: false, user: {} }

export default (state = initialState, action) => {

    switch (action.type) {

        case 'SET_LOGGED_IN':
            return Object.assign({}, state, { loggedIn: true, user: action.payload.user } )

        case 'SET_LOGGED_OUT':
            return Object.assign({}, state, initialState )

        default:
            return state;

    }

}
