import {put, takeEvery, all, call} from 'redux-saga/effects';
import FutureApi from './services/future-api';
import {fetchDataSuccess, fetchDataError} from './actions/actions';
import { ActionsConstants } from './constants/constants';

const futureService = new FutureApi();


function* waitGetData (){
    yield takeEvery(ActionsConstants.FETCH_DATA_START, fetchData)
}

function* fetchData (arg:any) {
    try{
        const data = yield call(() => futureService.getDataApi(arg.payload));
        yield put(fetchDataSuccess(data));

    }   
    catch(e){
        yield put(fetchDataError(e))
    }
}

export default function* rootSaga(){
    yield all([
        waitGetData()
    ])
};