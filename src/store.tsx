import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'


import reducer from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()


const createStoreWithMiddleware
  = composeWithDevTools(applyMiddleware(
    sagaMiddleware,
  ))(createStore)


const store = createStoreWithMiddleware(
  reducer
)

sagaMiddleware.run(sagas)


export default store