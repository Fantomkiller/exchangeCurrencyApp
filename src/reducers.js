import { combineReducers } from 'redux'
import { transactionReducer } from './app/transactions/duck/index'

const rootReducer = combineReducers({
	transactions: transactionReducer
});

export default rootReducer
