
const initialState = {
    data: [],
    error: null,
    isLoading: false,

}

const crudReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_TODOS_LOADING':
            return Object.assign({}, state, { isLoading: true, error: null })

        case 'FETCH_DATA':
            return Object.assign(
                {},
                state,
                { data: action.payload.data },
                { isLoading: false }
            )

        case 'INSERT_DATA':
            return Object.assign(
                {},
                state,
                { data: [...state.data, action.payload.data] }
            )

        case 'DELETE_DATA_BY_ID':
            let newList = state.data.filter(d => {
                return d._id !== action.payload._id
            })

            return Object.assign({}, state, { data: newList })

        case 'DELETE_ALL_DATA':
            return Object.assign(
                {},
                state,
                { data: [] }
            )

        case 'UPDATE_DATA':
            return Object.assign({}, state, {
                data: state.data.map(d => {
                    if (d._id === action.payload._id)
                        d = action.payload.updateData
                    return d
                })
            })

        default:
            return state;
    }
}

export default crudReducer;