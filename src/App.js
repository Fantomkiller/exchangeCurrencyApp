import React from 'react';
import './App.scss';
import {useSelector} from "react-redux";
import CurrencyRatioExchangeContainer from "./app/transactions/components/CurrencyRatioExchangeContainer";
import TopTransactionList from "./app/transactions/components/TopTransactionList";
import TransactionForm from "./app/transactions/components/TransactionForm/index";
import TransactionListContainer from "./app/transactions/components/TransactionListContainer";

function App() {
	const transactions = useSelector(state => state.transactions.list);
	return (
		<div className="App">
			<div className={'left-column'}>
				<TransactionForm/>
				<TransactionListContainer/>
			</div>
			<div className={'right-column'}>
				<TopTransactionList
					transactions={transactions}
				/>
				<CurrencyRatioExchangeContainer/>
			</div>


		</div>
	);
}

export default App;
