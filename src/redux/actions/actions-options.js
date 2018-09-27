export const setOptions = ( data ) => {

    return {
        type: 'SET_OPTIONS',
        payload: data
    }

}

export const resetOptions = () => {

    return {
        type: 'RESET_OPTIONS',
        payload: 1
    }

}