import React from 'react'
import {connect, useSelector} from 'react-redux';
import actions from "../../duck/actions";

const TransactionForm = (props) => {
	const transactionNameInput = React.createRef();
	const transactionValueInput = React.createRef();
	const transactions = useSelector(state => state.transactions.list);

	const addTransaction = (event) => {
		event.preventDefault();
		props.add({
			id: transactions.length,
			name: transactionNameInput.current.value,
			valueEuro: parseInt(transactionValueInput.current.value)});
		transactionNameInput.current.value = '';
		transactionValueInput.current.value = 1;
	};

	return <form onSubmit={addTransaction} className={'TransactionForm'}>
		<input ref={transactionNameInput} name={'transactionNameInput'}/>
		<input  type="number"
				pattern="[0-9]+([,\.][0-9]+)?"
				step="any"
				title="The number input must start with a number and use either comma or a dot as a decimal character."
				name="transactionValueInput"
				ref={transactionValueInput}
				defaultValue={1}
		/>
		<button type='submit'>Add Transaction</button>
	</form>
};

const mapDispatchToProps = dispatch => ({
	add: transaction => dispatch(actions.add(transaction))
})

export default connect(null, mapDispatchToProps)(TransactionForm)
