import axios from 'axios'
import {
    insertData, fetchData, setError, setLoading, fetchDataById,
    deleteAllData, deleteDataById, updateData
} from '../actions-crud'

//** FETCH ALL DATA **//
export const fetchDataFN = (params) => {
    params = params || {}
    return (dispatch, getState) => {
        dispatch(setLoading())

        axios.get(window.baseURL + `/api/crud/`, { params: params })
            .then(response => response.data)
            .then(data => {
                dispatch(fetchData(data))
            })
            .catch(error => dispatch(setError(error)))
    }
}

//** FETCH DATA BY ID **//
export const fetchByIdFN = (_id) => {
    return (dispatch, getState) => {
        dispatch(setLoading());

        axios.get(window.baseURL + `/api/crud/${_id}/`)
            .then(response => response.data)
            .then(data => {
                dispatch(fetchDataById(data))
            })
            .catch(error => {
                dispatch(setError(error))

            })
    }
}

//** INSERT DATA **//
export const insertDataFN = (formData, onSuccess, onFailure) => {
    return (dispatch, getState) => {
        dispatch(setLoading());

        axios.post(window.baseURL + `/api/crud/`, formData, config)
            .then(response => response.data)
            .then(data => {
                dispatch(insertData(data));
                window.notify("Todo Data Has Been Saved", "success")
            })
            .catch(error => { onFailure(error) })
    }
}

//** DELETE DATA BY ID **//
export const deleteDataByIdFN = (_id) => {
    return (dispatch, getState) => {
        dispatch(setLoading());

        axios.delete(window.baseURL + `/api/todos/${_id}`, )
            .then(response => response.data)
            .then(data => {
                dispatch(deleteDataById(_id));
                window.notify("Data Has Been Deleted", "error")
            })
            .catch(error => { onFailure(error) })
    }
}

//** DELETE ALL DATA **//
export const deleteAllDataFN = () => {
    return (dispatch, getState) => {
        dispatch(setLoading());

        axios.delete(window.baseURL + `/api/crud`, )
            .then(response => response.data)
            .then(data => {
                dispatch(deleteAllData());
                window.notify("All Data Has Been Deleted", "error")
            })
            .catch(error => { onFailure(error) })
    }
}

//** UPDATE DATA **//
export const updateDataFN = (id, updates) => {
    return (dispatch, getState) => {
        dispatch(setLoading());

        axios.put(window.baseURL + `/api/crud/${id}`, updates)
            .then(response => response.data)
            .then(data => {
                dispatch(updateData(id, updates));
                window.notify("Data Has Been Update", "error")
            })
            .catch(error => { onFailure(error) })
    }
}