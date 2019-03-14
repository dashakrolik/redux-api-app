import {combineReducers} from 'redux'
import eventsReducer from './eventsreducer'
import eventCreateSuccessReducer from './successReducer'
import eventFetchedReducer from './eventFetchedReducer'

export default combineReducers({
  eventsReducer, eventCreateSuccessReducer, eventFetchedReducer
})
