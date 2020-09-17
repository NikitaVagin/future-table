import {ActionsConstants} from '../constants/constants'

type ActionType = {
    type: ActionsConstants,
    payload: any

}

export interface StateInterface {
    data: [] | [
        {   
            adress: {},
            id: number,
            description: string,
            email:string,
            firstName: string,
            lastName: string,
            phone:string


        }
    ]
    search: string | null,
    selectRowInfo : null | {},
    loading: boolean,
    error: null | Error
}

export const initialState:StateInterface = {
    data: [],
    search: null,
    selectRowInfo: null,
    loading: false,
    error: null
}

const reducer = (state: StateInterface, action:ActionType) => {
    if(typeof state === 'undefined'){
        return initialState
    }
    switch(action.type){
        case(ActionsConstants.FETCH_DATA_START):
            return {
                ...state,
                data: [],
                search: null,
                selectRowInfo: null,
                loading: true
            }
        case(ActionsConstants.FETCH_DATA_SUCCESS):
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case(ActionsConstants.FETCH_DATA_ERROR):
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case(ActionsConstants.ON_ROW_SELECT):
            return {
                ...state,
                selectRowInfo: action.payload
            }
        case(ActionsConstants.ON_SEARCH):
            return{
                ...state,
                search: action.payload
            }
    }
}

export default reducer;