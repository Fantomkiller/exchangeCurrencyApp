import React from 'react'
import { useSelector, connect } from 'react-redux'
import actions from "../../duck/actions";
import TransactionView from "../TransactionView";
// import './TransactionListContainer.scss'

const TransactionListContainer = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);


	return <div className={'TransactionListContainer'}>
		<div className={'section-header'}>
			<h2>Transaction List</h2>
		</div>
			{transactions.map(transaction =>
				<TransactionView
					key={transaction.id}
				id={transaction.id}
				name={transaction.name}
				valueEuro={transaction.valueEuro}
				exchangeRate={exchangeRate}
				/>
			)}
		</div>

};

const mapDispatchToProps = dispatch => ({
	remove: transaction => dispatch(actions.remove(transaction))
});


export default connect(null, mapDispatchToProps)(TransactionListContainer)
