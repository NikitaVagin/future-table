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
    selectRowInfo : null | {},
    loading: boolean,
    error: null | Object
}

const initialState:StateInterface = {
    data: [],
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
                loading: true
            }
        case(ActionsConstants.FETCH_DATA_SUCCESS):
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case(ActionsConstants.ON_ROW_SELECT):
            return {
                ...state,
                selectRowInfo: action.payload
            }
    }
}

export default reducer;