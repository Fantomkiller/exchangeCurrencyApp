import React from 'react'
import { useSelector } from 'react-redux'
import TransactionView from "../TransactionView";
import '../_css/TopTransactionList.scss'

const TopTransactionList = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const sortedTransactions = transactions.slice().sort((a, b) => (a.valueEuro < b.valueEuro) ? 1 : -1);
	const topTransactions = sortedTransactions.slice(0,3);

	return <div className={'TopTransactionList'}>
		<div className={'section-header'}>
			<h2>Top transactions</h2>
		</div>
		{topTransactions.map(transaction =>
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

export default TopTransactionList;
