import types from './types'
import produce from 'immer'


const INITIAL_STATE = {
	exchangeRate: 4.27,
	list: [
		{
			id: 0,
			name: 'PC parts',
			valueEuro: 112.6
		},
		{
			id: 1,
			name: 'Truck Fuel',
			valueEuro: 125.4
		},
		{
			id: 2,
			name: 'Internet Bills',
			valueEuro: 20.22
		},
		{
			id: 3,
			name: 'Christmas Presents',
			valueEuro: 85.32
		},
	]
};



const transactionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_TRANSACTION:
			return produce(state, draftState => {
				draftState.list.push(action.item)
			});
		case types.REMOVE_TRANSACTION:
			return produce(state, draftState=> {
				draftState.list = draftState.list.filter(item => item.id !== action.item)
			});
		case types.CHANGE_EXCHANGE_RATE:
			return produce(state, draftState => {
				draftState.exchangeRate = action.item
			});
		default:
			return state
	}
};

export default transactionReducer
