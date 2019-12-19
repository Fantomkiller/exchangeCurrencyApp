import React from 'react';
import './App.scss';
import CurrencyRatioExchangeContainer from "./app/transactions/components/CurrencyRatioExchangeContainer";
import TopTransactionList from "./app/transactions/components/TopTransactionList";
import TransactionForm from "./app/transactions/components/TransactionForm/index";
import TransactionListContainer from "./app/transactions/components/TransactionListContainer";
import TransactionSum from "./app/transactions/components/TransactionSum";

function App() {
	return (
		<div className="App">
			<div className={'left-column'}>
				<TransactionForm/>
				<TransactionListContainer/>
			</div>
			<div className={'right-column'}>
				<CurrencyRatioExchangeContainer/>
				<TopTransactionList/>
				<TransactionSum/>
			</div>


		</div>
	);
}

export default App;
