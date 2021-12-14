import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import BooksReducer from '../reducers/BooksReducer'
import mySaga from '../sagas/sagas'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  books: BooksReducer
})

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(mySaga)
