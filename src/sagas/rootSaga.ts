import { all } from 'redux-saga/effects'

import { mapSaga } from './mapSaga'

export function* rootSaga() {
  yield all([mapSaga()])
}