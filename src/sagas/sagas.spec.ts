import {} from 'redux-saga';
import {ActionsConstants} from '../constants/constants'
import mockData from '../__mocks__/mock-api'
import {fetchDataStart, fetchDataSuccess} from '../actions/actions';
import {fetchData, waitGetData} from './sagas';
import {expectSaga, testSaga} from 'redux-saga-test-plan';

describe('Test Redux Saga', () => {
    it('just works!', () => {
        
        let sagaWait = testSaga(waitGetData);
        // let sagaFetcg = testSaga(fetchData)
        sagaWait.next().takeEvery(ActionsConstants.FETCH_DATA_START, fetchData)
        .finish()
        .isDone()

        // const testApi = (url:string) => {
        //     if(url === 'http://github.com/'){
        //         return mockData
        //     }
        // }

        // const testAction = () => {
        //     return {
        //         type: ActionsConstants.FETCH_DATA_START,
        //         payload: 'http://github.com/'
        //     }
        // }

        // let sagaFetch = testSaga(fetchData, testAction)
        //     sagaFetch.next(testAction).call(testApi)
        //     sagaFetch.next(mockData).put(fetchDataSuccess(mockData))

    })
})
