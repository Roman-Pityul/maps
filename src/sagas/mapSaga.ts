import { call, put, takeLatest } from 'redux-saga/effects'

import { addLinePositionToState, GetLinePositionActionType, mapActionTypes } from '../actions/mapActions'
import { routeApi } from '../api/routeApi'

function* getLinePositionRequest(payload: GetLinePositionActionType) {
  try {
    //@ts-ignore
    const res = yield call(routeApi.getRoute, payload)
    yield put(addLinePositionToState(res.routes[0].geometry.coordinates))
  } catch (e) {
    console.log('ERROR', e)
  }
}

export function* mapSaga() {
  yield takeLatest(mapActionTypes.GET_LINE_POSITION, getLinePositionRequest)
}