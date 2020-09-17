import {ActionsConstants} from '../constants/constants'
import {StateInterface} from '../reducers/table'

export const fetchDataStart = (url:string) => {
    return {
        type: ActionsConstants.FETCH_DATA_START,
        payload: url
    }
}

export const fetchDataSuccess = (data:StateInterface) => {
    return {
        type: ActionsConstants.FETCH_DATA_SUCCESS,
        payload:data
    }
}

export const fetchDataError = (error:object) => {
    return {
        type: ActionsConstants.FETCH_DATA_ERROR,
        payload: error
    }
}

export const onRowSelect = (data:StateInterface) => {
    return {
        type: ActionsConstants.ON_ROW_SELECT,
        payload: data
    }
};

export const onSearch = (data:string) => {
    return {
        type: ActionsConstants.ON_SEARCH,
        payload: data
    }
}