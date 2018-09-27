

export const setLoading = () => {
    return {
        type: 'SET_TODOS_LOADING',
        payload: 1
    }
}

export const setError = error => {
    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { error }
    }
}
export const unsetError = () => {
    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { error: null }
    }
}

//**  FETCH ALL DATA  **//
export const fetchData = data => {
    return {
        type: 'FETCH_DATA',
        payload: { data }
    }
}

//**  FETCH BY ID DATA  **//
export const fetchDataById = data => {
    return {
        type: 'FETCH_DATA_BY_ID',
        payload: { data }
    }
}

//**  SAVE DATA  **//
export const insertData = data => {
    return {
        type: 'INSERT_DATA',
        payload: { data }
    }
}

//** DELETE DATA **/
export const deleteDataById = _id => {
    return {
        type: 'DELETE_DATA_BY_ID',
        payload: { _id }
    }
}

//** DELETE ALL DATA **/
export const deleteAllData = () => {
    return {
        type: 'DELETE_ALL_DATA',
        payload: {}
    }
}

//**  UPDATE DATA **//
export const updateData = (_id, updates) => {
    return {
        type: 'UPDATE_DATA',
        payload: { _id, updates }
    }
}

