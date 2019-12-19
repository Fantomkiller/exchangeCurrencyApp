import React from 'react'
import connect from "react-redux/es/connect/connect";
import actions from "../../duck/actions";
import ShowCurrency from "../_reusable/ShowCurrency";
import '../_css/TransactionView.scss'

const TransactionView = (props) => {
	const removeTransaction = (id) => {
		props.remove(id)
	};

	return <div className={'TransactionView'}>
		<span className={'transactionName-container'}>{props.name}</span>
		<ShowCurrency
			value={props.valueEuro}
		/>
		<ShowCurrency
			value={props.valueEuro}
			exchangeRate={props.exchangeRate}
		/>
		<button
			className="Button removeButton"
			onClick={()=>removeTransaction(props.id)}>
			X
		</button>
	</div>
};


const mapDispatchToProps = dispatch => ({
	remove: transaction => dispatch(actions.remove(transaction))
});


export default connect(null, mapDispatchToProps)(TransactionView)

