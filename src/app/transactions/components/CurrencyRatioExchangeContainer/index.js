import React from 'react'
import {useSelector} from "react-redux";
import connect from "react-redux/es/connect/connect";
import actions from "../../duck/actions";

const CurrencyRatioExchangeContainer = (props) => {
	const exchangeValueInput = React.createRef();
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const changeExchangeRate = (event) => {
		event.preventDefault();
		props.changeRates(parseInt(exchangeValueInput.current.value))
	};

	return <div className={'CurrencyRatioExchangeContainer'}>
		<div>{`1 Eur = `}</div>
		<form onSubmit={changeExchangeRate}>
			<input
				type="number"
				pattern="[0-9]+([,\.][0-9]+)?"
				step="0.01"
				title="The number input must start with a number and use either comma or a dot as a decimal character."
				ref={exchangeValueInput}
				className={'exchangeValueInput'}
				defaultValue={exchangeRate}
			/>
			<button
				type={"submit"}
				className="Button changeButton"
			> Change </button>
		</form>
	</div>
};


const mapDispatchToProps = dispatch => ({
	changeRates: exchangeRate => dispatch(actions.changeRates(exchangeRate))
});


export default connect(null, mapDispatchToProps)(CurrencyRatioExchangeContainer)

