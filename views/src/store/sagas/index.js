import {takeLatest, put, call} from 'redux-saga/effects';
import {getchErrorReportData, getchErrorReportDataSuccess, getchErrorReportDataError} from '@/store/action/index';
import fetch from '@/utils/fetch';

function* fetchData(action) {
    try {
        const data = yield call(fetch, {
            url: '/api/query',
            params: action.params
        });
        yield put(getchErrorReportDataSuccess(data));
    } catch (error) {
        yield put(getchErrorReportDataError(error));
    }
}

function* watchFetch() {
    yield takeLatest(getchErrorReportData().type, fetchData);
}

export default function* rootSaga() {
    yield watchFetch();
}
