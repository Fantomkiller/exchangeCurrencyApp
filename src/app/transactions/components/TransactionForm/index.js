import React, {useState} from 'react';
import {connect, useSelector} from 'react-redux';
import actions from "../../duck/actions";
import '../_css/TransactionForm.scss'

const TransactionForm = (props) => {
	const transactionNameInput = React.createRef();
	const transactionValueInput = React.createRef();
	const transactions = useSelector(state => state.transactions.list);
	let [inputValue, setInputValue] = useState('');
	const addTransaction = (event) => {
		event.preventDefault();
		props.add({
			id: transactions.length,
			name: transactionNameInput.current.value,
			valueEuro: parseInt(transactionValueInput.current.value),
		});
		setInputValue('')
		transactionNameInput.current.value = '';
		transactionValueInput.current.value = 1;
	};

	const setInputValueFn = () => {
		setInputValue(transactionNameInput.current.value)
	}

	const disabledClass = !!inputValue ? '' : ' is-disabled';

	return <div className={'TransactionForm'}>
		<div className={'section-title'}>
			<h2>Add new transaction</h2>
		</div>
		<form onSubmit={addTransaction}>
			<input ref={transactionNameInput}
				   name={'transactionNameInput'}
				   className={'transactionNameInput'}
				   placeholder={"Transaction name"}
				   onChange={setInputValueFn}
				   required
			/>
			<input type="number"
				   pattern="[0-9]+([,\.][0-9]+)?"
				   step="any"
				   min="0.01"
				   title="The number input must start with a number and use either comma or a dot as a decimal character."
				   name="transactionValueInput"
				   ref={transactionValueInput}
				   defaultValue={1}
				   className={'transactionValueInput'}
			/>
			<span>€</span>
			<button className={'button addButton' + disabledClass} type='submit'>+</button>
		</form>
	</div>;
};

const mapDispatchToProps = dispatch => ({
	add: transaction => dispatch(actions.add(transaction)),
});

export default connect(null, mapDispatchToProps)(TransactionForm);
