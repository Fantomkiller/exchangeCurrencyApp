import types from './types'

const add = item => ({
	type: types.ADD_TRANSACTION, item
});

const remove = item => ({
	type: types.REMOVE_TRANSACTION, item
});

const changeRates = item => ({
	type: types.CHANGE_EXCHANGE_RATE, item
});

export default {
	add,
	remove,
	changeRates
}
