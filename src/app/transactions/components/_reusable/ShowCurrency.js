import React from "react";

const ShowCurrency = (props) => {
	let exchangeRate = !!props.exchangeRate ? props.exchangeRate : 1;
	let currencyValue = Math.round((props.value * exchangeRate) * 100) / 100;
	return <div className={'currencyContainer'}>
		<span className={'currencyValue'}>{currencyValue}</span>
	</div>
};

export default ShowCurrency
