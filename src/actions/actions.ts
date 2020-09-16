import {ActionsConstants} from '../constants/constants'

export const fetchDataStart = (url:string) => {
    return {
        type: ActionsConstants.FETCH_DATA_START,
        payload: url
    }
}
//TODO добавить типы array??
export const fetchDataSuccess = (data:any) => {
    return {
        type: ActionsConstants.FETCH_DATA_SUCCESS,
        payload:data
    }
}
//TODO добавить типы
export const fetchDataError = (error:any) => {
    return {
        type: ActionsConstants.FETCH_DATA_ERROR,
        payload: error
    }
}
//TODO Add type
export const onRowSelect = (data:any) => {
    return {
        type: ActionsConstants.ON_ROW_SELECT,
        payload: data
    }
};