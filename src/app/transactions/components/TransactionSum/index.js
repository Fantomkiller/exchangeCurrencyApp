import React from 'react';
import {useSelector} from 'react-redux';
import '../_css/TransactionSum.scss'
import ShowCurrency from "../_reusable/ShowCurrency";

const TransactionSum = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);
	const sumValues = obj => obj.reduce((a, b) => a + b.valueEuro, 0);

	return <div className={'TransactionSum'}>
		<div className={'section-header'}>
			<h2>Sum of transactions</h2>
		</div>
		<div className={'information-wrapper'}>
			<ShowCurrency
			value={sumValues(transactions.slice())}
			/>
			<ShowCurrency
				value={sumValues(transactions.slice())}
				exchangeRate={exchangeRate}
			/>
		</div>

	</div>;
};

export default TransactionSum;
