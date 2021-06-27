import { combineReducers } from 'redux'
import cryptosReducer from './cryptosReducer'
import portfolioReducer from './portfolioReducer'

const rootReducer = combineReducers({
    cryptos: cryptosReducer,
    portfolio: portfolioReducer
})

export default rootReducer;