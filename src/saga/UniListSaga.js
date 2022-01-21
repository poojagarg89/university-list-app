import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../action/actionTypes';
import api from '../api/api';

function* UniListSaga(action) {
  try {
    const uniDetails = yield call(api.getUniversityDetails);
    yield put({
      type: types.UNIVERSITY_LIST_SUCCESS,
      universityDetails: uniDetails.data,
    });
  } catch (e) {
    yield put({ type: types.UNIVERSITY_LIST_ERROR, message: e.message });
  }
}

function* getUniListSaga() {
  yield takeLatest(types.UNIVERSITY_LIST_REQUEST, UniListSaga);
}

export default getUniListSaga;
