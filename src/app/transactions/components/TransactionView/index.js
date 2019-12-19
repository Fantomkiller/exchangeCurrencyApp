import React from 'react'
import connect from "react-redux/es/connect/connect";
import actions from "../../duck/actions";
import ShowCurrency from "../_reusable/ShowCurrency";

const TransactionView = (props) => {
	const removeTransaction = (id) => {
		props.remove(id)
	};

	return <div className={'TransactionView'}>
		{props.name}
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
		</button>
	</div>
};


const mapDispatchToProps = dispatch => ({
	remove: transaction => dispatch(actions.remove(transaction))
});


export default connect(null, mapDispatchToProps)(TransactionView)

