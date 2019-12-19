import React, {useState , useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import TransactionView from "../TransactionView";
// import './TopTransactionList.scss'

const TopTransactionList = (props) => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);
	let [transactionsToSort] = useState(transactions);
	console.log(transactionsToSort);

	const sortedTransactions = transactionsToSort.sort((a, b) => (a.valueEuro < b.valueEuro) ? 1 : -1);
	const topTransactions = sortedTransactions.slice(0,3);

	this.state = {
		transactionsToSort: props.transactions.list
	};
	return <div className={'TopTransactionList'}>
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
