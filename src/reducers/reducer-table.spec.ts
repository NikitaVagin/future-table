import mockApi from '../__mocks__/mock-api'
import reducer, {initialState, StateInterface} from './table'
import {ActionsConstants, UrlData} from '../constants/constants'


describe('Test reducer table', () => {
    it('Fetch Data Start', () => {
        const action = {
            type: ActionsConstants.FETCH_DATA_START,
            payload: UrlData.SMALL_DATA
        }
        expect(reducer(initialState, action)).toEqual({
            data: [],
            search: null,
            selectRowInfo: null,
            loading: true,
            error: null
        })
    })
    it('Fetch data success', () => {
        const stateBefore:StateInterface = {
            data: [],
            search: null,
            selectRowInfo: null,
            loading: true,
            error: null
        }
        const action = {
            type: ActionsConstants.FETCH_DATA_SUCCESS,
            payload: mockApi
        }
        expect(reducer(stateBefore, action)).toEqual({
                ...stateBefore,
                loading: false,
                data: action.payload
        })
    })
    it('Fetch data error', () => {
        const stateBefore:StateInterface = {
            data: [],
            search: null,
            selectRowInfo: null,
            loading: true,
            error: null
        }
        const action = {
            type: ActionsConstants.FETCH_DATA_ERROR,
            payload: new Error('Error!')
        }
        expect(reducer(stateBefore, action)).toEqual({
                ...stateBefore,
                loading: false,
                error: action.payload
        })
    })
    it('On Row Select', () => { 
        const action = {
            type: ActionsConstants.ON_ROW_SELECT,
            payload: mockApi[0]
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            selectRowInfo: action.payload
        })
    })
    it('On Search', () => { 
        const action = {
            type: ActionsConstants.ON_SEARCH,
            payload: 'testing string'
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            search: action.payload
        })
    })
})

