import React from 'react';
import {useSelector , connect} from "react-redux";
import actions from "../../duck/actions";
import "../_css/CurrencyRatioExchangeContainer.scss";


const CurrencyRatioExchangeContainer = (props) => {
	const exchangeValueInput = React.createRef();
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const changeExchangeRate = (event) => {
		event.preventDefault();
		props.changeRates(exchangeValueInput.current.value);
	};

	return <div className={'CurrencyRatioExchangeContainer'}>
		<div className={'section-header'}>
			<h2>Exchange rate</h2>
		</div>
		<div className={'form-wrapper'}>
			<div>{`1 € = `}</div>
			<form onSubmit={changeExchangeRate}>
				<input
					type="number"
					pattern="[0-9]+([,\.][0-9]+)?"
					step="0.01"
					min="0"
					title="The number input must start with a number and use either comma or a dot as a decimal character."
					ref={exchangeValueInput}
					className={'exchangeValueInput'}
					defaultValue={exchangeRate}
				/>
				<div>{`zł`}</div>
				<button
					type={"submit"}
					className="button changeButton"
				> Change
				</button>
			</form>
		</div>

	</div>;
};


const mapDispatchToProps = dispatch => ({
	changeRates: exchangeRate => dispatch(actions.changeRates(exchangeRate)),
});


export default connect(null, mapDispatchToProps)(CurrencyRatioExchangeContainer);

