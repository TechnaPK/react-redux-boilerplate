const initialState = {}

export default (state = initialState, action) => {

    switch (action.type) {

        case 'SET_OPTIONS':
            return Object.assign({}, state, action.payload)

        case 'RESET_OPTIONS':
            return Object.assign({}, state, initialState)

        default:
            return state;

    }

}
