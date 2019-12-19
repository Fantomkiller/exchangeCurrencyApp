import React from "react";

const ShowCurrency = (props) => {
	let exchangeRate = !!props.exchangeRate ? props.exchangeRate : 1;
	let roundedValue = Math.round((props.value * exchangeRate) * 100) / 100;
	let currencyValue = !!props.exchangeRate ? roundedValue + ` zł`  : roundedValue + ` €`;
	return <div className={'CurrencyContainer'}>
		<span className={'currencyValue'}>{currencyValue}</span>
	</div>
};

export default ShowCurrency
