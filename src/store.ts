import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from '@redux-saga/core'

import { rootReducer } from './reducers/rootReducer'
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga)